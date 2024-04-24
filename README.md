# Site web pour la documentation de Dokos

[Live website](https://doc.dokos.io/)


## Installation locale
<details>
<summary>Commandes</summary>

## Paramétrage

Installez les dépendances:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Serveur de développement

Démarrez un serveur de développement à l'adresse `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Publier l'application pour la production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Prévisualisez le site de production localement:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Plus d'information sur la [documentation de déploiement à cette adresse](https://nuxt.com/docs/getting-started/deployment).
</details>

## Composants

### Documentation Nuxt UI / Nuxt UI Pro

Ce site est basé sur les composants de Nuxt UI et Nuxt UI Pro.  

Tous les composants sont documentés à l'adresse suivante: https://ui.nuxt.com/


### Graphiques de flux

Il est possible d'utiliser [Mermaid](https://mermaid.js.org/) pour créer des graphiques de flux dans la documentation.  

La syntaxe a utiliser est la suivante:  
```markdown
<mermaid>
flowchart LR
  id1(Client)-->id2(Groupe de clients)
  id2-->id3(Paramètres des ventes)
</mermaid>
```

### Tour

La documentation dispose d'un composant `Tour` permettant de renvoyer les utilisateurs vers une des démo et d'ouvrir automatiquement un **tour**.
La syntaxe a utiliser est la suivante:  

```markdown
::tour{doctype=Item demo="Mappemonde"}
Découvrir les **Articles** sur la démo
::
```

> **Propriétés:**  
**doctype**: N'importe que DocType de Dokos présent dans la démo  
**demo** (Optionnel): *Mappemonde* ou *Dokompany*. Si cette propriété n'est pas définie, la valeur par défaut est *Dokompany*   


### Lien vers la démo

La documentation dispose d'un composant `DemoLink` permettant de renvoyer les utilisateurs vers une des démo.
La syntaxe a utiliser est la suivante:  

```markdown
::DemoLink{path="/app/web-form/event-registration-form" demo="Mappemonde"}
Cet exemple utilise le formulaire web _event-registration-form_
::
```

> **Propriétés:**  
**doctype** (Optionnel): N'importe que DocType de Dokos présent dans la démo  
**path** (Optionnel): Lien vers une page de la démo  
**demo**: *Mappemonde* ou *Dokompany*. Si cette propriété n'est pas définie, la valeur par défaut est *Dokompany*  
**showTour** (Optionnel): Déclenche l'ouverture automatique du **Tour** sur la démo  
**icon** (Optionnel): Une icône 


## Icônes

Il est possible d'utiliser les icônes référencées sur https://icones.js.org  
Actuellement, les librairies d'icônes installées sont les suivantes:  
- heroicons
- simple-icons
- mdi
- vaadin
- uil
- carbon
- material-symbols
- fluent
- eos-icons
- ri
- icon-park-outline
- ep
- clarity
- fontisto
- ic
- codicon
- octicon
- feather
- logos
- healthicons

Si possible, essayez d'utiliser ces librairies en priorité.  
Pour l'installation de librairies additionnelles, merci de créer un ticket Github et de l'affecter à [Charles-Henri](https://github.com/chdecultot).


## Bugs / Améliorations / Suggestion

Pour toute demande ou suivi des travaux en cours, merci de créer un [ticket](https://github.com/dokos-io/documentation/issues)
