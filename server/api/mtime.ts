import fs from 'node:fs'
import path from 'node:path'
import { glob } from 'glob'

import { spawnSync } from 'node:child_process'

const CACHE_PATH = path.join(process.cwd(), 'server/api/mtime.json')

function getCachedValues(): [string, Date][] {
  if (!fs.existsSync(CACHE_PATH)) return []

  try {
    const data = fs.readFileSync(CACHE_PATH, 'utf8')
    const entries = JSON.parse(data) as [string, string][]
    return entries.map(([file, mtime]) => [file, new Date(mtime)])
  } catch (error) {
    console.error('Error reading cache:', error)
    return []
  }
}

function setCachedValues(entries: [string, Date][]) {
  const data = JSON.stringify(entries)
  fs.writeFileSync(CACHE_PATH, data)
  console.log('Cache for last modified pages updated with', entries.length, 'entries')
}

function updateCachedValues() {
  const lastModified: [string, Date][] = []

  const contentDir = path.resolve(process.cwd(), 'content')
  const ignore = ['**/*index.md']
  for (const file of glob.sync('**/*.md', { cwd: contentDir, ignore })) {
    const filePath = path.join(contentDir, file)

    // Grab the modification time of the file
    // const mtime = fs.statSync(filePath).mtime
    // Grab the last update using `git`
    const command = ['git', 'log', '-1', '--pretty="format:%ci"', '--', filePath]
    const { stdout } = spawnSync(command[0], command.slice(1), { cwd: contentDir })
    const mtime = new Date(stdout.toString().trim())

    // Push the filename and modification time
    lastModified.push([file, mtime])
  }

  // Sort the files by modification time
  lastModified.sort((a, b) => b[1].getTime() - a[1].getTime())

  // Store in cache
  setCachedValues(lastModified)

  return lastModified
}

async function doFetch(limit: number) {
  // Iterate all files in the content/** directory
  let lastModified: [string, Date][] = getCachedValues()
  if (!lastModified.length) {
    lastModified = updateCachedValues()
  }

  // Grab the most recently modified N files
  const filePaths = lastModified.slice(0, limit || 50)

  // node_modules/@nuxt/content/dist/runtime/composables/query.js
  const recentFiles = await Promise.all(filePaths.map(async ([file, mtime]) => {
    // Get Nuxt page from the file path
    const data = await $fetch('/api/_content/query', {
      method: 'GET',
      responseType: 'json',
      params: {
        _params: JSON.stringify({
          where: [
            {
              _file: file,
              _locale: 'fr',
            }
          ],
          only: ['title', 'description', '_type', '_path']
        }),
      },
    })

    const page = data?.[0]
    if (!page) return

    page.updatedAt = mtime
    page.to = page._path
    delete page._path

    return page
  }))

  return { recentFiles: recentFiles.filter(Boolean) }
}

if (globalThis.process?.argv?.[2] === 'mtime-generate') {
  if (typeof defineEventHandler === 'undefined' && process.argv) {
    globalThis.defineEventHandler = () => {}
  }
  if (process.env.CI === 'true') {
    const script = `
      git remote set-url origin $(git remote get-url origin | sed 's~:~/~ ; s~git@~https://~');
      git fetch --deepen 50;
    `
    const { status, stdout, stderr } = spawnSync('sh', ['-c', script], { encoding: 'utf8' })
    if (status) {
      stdout && console.log(stdout)
      stderr && console.error(stderr)
      process.exit(status)
    } else {
      // Show some commits
      const { stdout, stderr } = spawnSync('git', ['log', '-10', '--pretty=oneline'], { encoding: 'utf8' })
      stdout && console.log(stdout)
      stderr && console.error(stderr)
    }
  }
  updateCachedValues()
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  return await doFetch(Number(query?.limit || 0))
})
