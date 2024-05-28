import fs from 'node:fs'
import path from 'node:path'
import { glob } from 'glob'

async function doFetch() {
  const contentDir = path.resolve(process.cwd(), 'content')

  // Iterate all files in the content/** directory
  const lastModified: [string, Date][] = []
  for (const file of glob.sync('**/*', { cwd: contentDir })) {
    // Grab the modification time of the file
    const mtime = fs.statSync(path.join(contentDir, file)).mtime

    // Push the filename and modification time
    lastModified.push([file, mtime])
  }

  // Sort the files by modification time
  lastModified.sort((a, b) => a[1].getTime() - b[1].getTime())

  // Grab the most recently modified 5 files
  const filePaths = lastModified.slice(-5)

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

    console.log(data)
    const page = data[0]
    if (!page) return
    page.updatedAt = mtime
    return page
  }))

  return { recentFiles: recentFiles.filter(Boolean) }
}

export default defineEventHandler(async () => {
  return await doFetch()
})
