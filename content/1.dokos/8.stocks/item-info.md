---
title: Informations sur les articles
description: 
published: true
date: 2021-05-20T12:59:48.727Z
tags: 
editor: markdown
dateCreated: 2020-12-02T14:08:57.858Z
---

Un article est un produit ou service pouvant être vendu, acheté, immobilisé ou être utilisé dans le processus de production.

# Produits ou services

Bien que non obligatoire, la gestion de stock est souvent ce qui permet de différencier un produit d'un service.
Dans Dokos, la gestion des stocks peut être activée en cochant la case "Maintenir le stock".


# Site web

Afin de mettre en évidence vos articles et/ou de les vendre sur votre site web, vous pouvez cocher la case **Afficher sur le site web**.

Vous avez la possibilité d'ajouter une image ou un diaporama, de définir les spécifications de votre article et de lui ajouter une description courte et une description longue qui apparaîtront sur la page de présentation de l'article.

## La route

La route sera ajoutée à l'URL de votre site pour permettre de naviguer jusqu'à la fiche de l'article.
> **Exemple**
> Si votre site est à l'adresse **https://demo.dokos.cloud** et que la route de votre article est **boards/dokoboard-tkkif**, alors l'URL pointant vers la fiche de votre article sera **https://demo.dokos.cloud/boards/dokoboard-tkkif**.

La première partie de votre route est la route du groupe d'articles lié à votre article.
> **Exemple**
> Si la route de notre article est **boards/dokoboard-tkkif**, **https://demo.dokos.cloud/boards** nous amènera sur la liste de tous les articles associés au groupe d'articles **Boards**.
> Il est possible d'afficher ou de cacher cette liste dans les paramètres du groupe d'articles.


# Réservations d'articles

## Activer les réservations d'articles

Certains articles peuvent êtres associés à des réservations de créneaux horaires. C'est le cas des salles de réunion, des bureaux, des espaces de coworking ou bien de machines mises à disposition d'utilisateurs.

Pour activer les réservations d'articles pour un article, il suffit de cocher la case **Autoriser les réservations d'article** (Voir section ci-dessus).

::callout{icon="i-heroicons-exclamation-triangle" color="amber"}
Les articles associés à des réservations de créneaux horaires seront généralement des services. No cochez donc pas la case **Maintenir le stock**.
::

## Activer les réservations sur le site web

Il est également possible de laisser vos utilisateurs effectuer leurs réservations de créneaux directement sur votre site web.

Pour mettre en place cette fonctionnalité, dans la section **Site Web**, cochez la case **Afficher sur le site web**. 

Une fois activée, vos utilisateurs de site web auront le choix entre acheter des unités ou sélectionner un créneau:  
![item_website_options.png](/content/lieu/item-booking/item_website_options.png)

* Vous pouvez cocher la case __Désactiver l'achat d'unités__ pour ne permettre que la réservation de créneaux.

> L'achat d'unités permet à votre utilisateur d'acheter X unités de votre service, sans spécifier les horaires auxquelles auront lieu ce service. Pour un fonctionnement similaire avec gestion de crédits, voir les [crédits de réservation](/dokos/lieu/credit-reservation).

* __Réservations simultanées autorisées__: Définissez le nombre de réservations simultanées autorisées > Pour que cette option apparaisse, il faut l'activer dans les [Paramètres du lieu](/dokos/lieu/parametres-lieu)

Si vous souhaitez autoriser la réservation avec différentes unités de mesure (jour, heure,...) ajoutez les dans le tableau des unités de mesure.

::callout{icon="i-heroicons-exclamation-triangle" color="amber"}
Les facteurs de conversion utilisés par le système de réservation sont ceux définis dans les [Facteurs de conversion](/dokos/lieu/reservations/reservations-articles#les-facteurs-de-conversion).
Les facteurs de conversion définis dans la fiche article servent uniquement à la conversion des [prix de l'article](/dokos/parametrage/prix) pour la facturation.
::
