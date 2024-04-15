---
title: GoCardless
---

# Configuration

Afin de configurer une intégration avec GoCardless, vous devez ajouter les éléments suivants:

- Créez un nouveau document `Paramètres GoCardless` pour chacune de vos sociétés
  Allez dans `Intégrations > Paramètres GoCardless`
- Ajoutez le jeton d'accès
  Ce jeton peut être généré dans la section `Développeurs > Créer > Jeton d'accès` du tableau de bord GoCardless.
- Cochez `Utiliser la sandbox` s'il s'agit d'un compte de test GoCardless

# Webhooks

Pour intégrer les webhooks GoCardless dans dokos, créez un nouveau `endpoint` en cliquant sur `Développeurs > Créer > Endpoint de webhook`.
Donnez lui un nom logique et ajoutez l'URL suivante:

`https://{votre_site}/api/method/erpnext.erpnext_integrations.doctype.gocardless_settings.webhooks?account={nom_de_votre_compte_stripe}`

Remplacez {votre_site} et {nom_de_votre_compte_stripe} par l'URL de votre site (exemple: `myerp.dokos.io`) et le nom de votre compte GoCardless dans dokos (exemple: `ABC`)

Vous pouvez laisser le champ `Secret` libre, car il sera automatiquement généré par GoCardless.

Enregistrez, puis copiez-collez le `Secret` généré dans vos paramètres GoCardless dans dokos.
