---
title: Créer une réservation d'article via l'API
description: 
published: true
date: 2022-03-01T17:27:36.894Z
tags: 
editor: markdown
dateCreated: 2022-03-01T17:27:36.894Z
---

# Créer une réservation d'article via l'API avec Postman

::alert
Postman est une plateforme permettant d'utiliser une API. Nous l'utilisons ici pour simplifier les appels à l'API de Dokos.
https://www.postman.com/
::



1. Créez un nouvel onglet
2. Sélectionnez le type d'appel `POST`
3. Entrez l'URL de votre site suivi de la ressource que vous souhaitez créer: Item Booking (Réservation d'articles)

Exemple: `http://localhost:8000/api/resource/Item Booking`

4. Dans la section _Headers_ ajoutez les deux clés/valeurs suivantes:

|KEY|VALUE|
|---|---|
|Authorization|token [clé publique]:[clé privée]|
|Content-Type|application/json|

::alert
Vous pouvez récupérer une clé publique et une clé privée associée à un utilisateur en allant dans ses paramètres utilisateur; section Accès API.
::

5. Dans la section _Body_, cochez _raw_ et ajoutez un objet contenant les valeurs qu'on souhaite associer à notre réservation:

Exemple:
```
{
    "item": "Salle de coworking",
    "starts_on": "2022-04-01 08:00:00",
    "ends_on": "2022-04-01 18:00:00",
    "user": "roslynlepicier@armyspy.com"
}
```

::alert
Seuls les champs `item`, `starts_on` et `ends_on` sont obligatoires, mais il est possible d'ajouter une valeur pour n'importe quel autre champ disponible dans le document.
Pour connaître les champs disponible et leur caractère obligatoire ou non, il suffit d'aller dans la liste de Réservations d'article et de sélectionner Menu (...) > Personnaliser.
::
