---
title: Trombinoscope
description: 
published: true
date: 2022-03-02T08:21:01.965Z
tags: 
editor: markdown
dateCreated: 2022-03-01T15:41:07.227Z
---

# Trombinoscope

Dokos vous permet de créer un trombinoscope sur votre site web, accessible publiquement ou disponible uniquement derrière le portail utilisateur.

## Créer un trombinoscope

Pour créer un trombinoscope il faut commencer par créer une nouvelle page web.

1. Donnez lui un nom et une route facilement identifiable.

> Si la route est __trombi__, la page correspondante sera, par exemple, accessible à l'adresse __https://monsite.dokos.cloud/trombi__
{.is-info}

2. Sélectionnez le type de contenu __Constructeur de page__

3. Dans le tableau de _Blocs de construction de page_ ajoutez une nouvelle ligne et sélectionnez le bloc __Trombinoscope__

4. Cliquez sur le bouton _Modifier les valeurs_ et sélectionnez le rôle permettant de filtrer les utilisateurs affichés dans le trombinoscope

> Le trombinoscope affichera les utilisateurs de votre site ayant le rôle sélectionné au dessus.
> Par exemple, si vous sélectionnez le rôle __Client__, tous les utilisateurs ayant le rôle __Client__ apparaîtront dans le trombinoscope.
> Par contre les utilisateurs désactivés n'apparaîtront pas.
{.is-info}


Vous pouvez également choisir les informations qui seront affichées sur le trombinoscope.
Ces informations sont disponibles dans la fiche _Utilisateur_ et peuvent être modifiées par chaque utilisateur depuis son portail.

5. Vous pouvez ajouter d'autres blocs au dessus ou en dessous pour créer une page selon vos goûts

## Restreindre le trombinoscope au portail utilisateurs

Si vous ne souhaitez pas que le trombinoscope soit public, vous pouvez choisir de restreindre son accès à certains utilisateurs connectés au portail.

Pour cela il faut configurer les éléments suivants:

_Dans la page web_

1. Cocher la case __Afficher la barre latérale__ si vous souhaitez que la page soit intégrée aux autres pages du portail.

2. Ajouter le code suivant dans la section _Contexte_ afin de bloquer l'accès à la page par des utilisateurs non connectés:
```
if frappe.session.user == "Guest":
	frappe.throw(_("Login to access this page."), frappe.PermissionError)
```

_Dans les paramètres du portail_

1. Ajouter une ligne dans votre menu personnalisé.

Exemple:
|Titre|Activé|Route|Type de document de référence|Rôle|
|---|---|---|---|---|
|Trombinoscope|1|/trombinoscope||Client|

Vous pouvez bien sûr modifier le titre et le rôle associé à cette page.


> Vous pouvez retrouver une page d'exemple sur la [démo de Dokos](https://tierslieux.dokos.io)