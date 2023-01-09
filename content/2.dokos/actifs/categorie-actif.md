---
title: Catégorie d'actif
description: 
published: true
date: 2021-06-23T12:53:45.861Z
tags: 
editor: markdown
dateCreated: 2021-06-23T10:01:59.849Z
---

# Catégorie d'actif

Une catégorie d'actifs classe les différents actifs d'une entreprise.

La première étape vers la gestion d'actifs consiste à créer une catégorie d'actifs basée sur le type d'actifs. Par exemple, tous vos ordinateurs de bureau et portables peuvent faire partie d'une catégorie d'actifs nommée « Equipements électroniques ».

Dans **Catégorie d'actif**, vous pouvez définir par défaut une méthode d'amortissement, une périodicité et des comptes liés à l'amortissement, qui s'appliqueront à tous les actifs de la catégorie.

::alert{type=warning}
**Remarque** : Vous pouvez également définir des comptes et des centres de coûts liés à l'amortissement par défaut dans la fiche de la société.
::

---

Pour accéder à **la liste des catégories d'actifs**, allez sur :

> Accueil > Actif > Actifs > **Catégorie d'actif**

![liste_catégorie_actif.png](/asset/asset-category/liste_catégorie_actif.png)

## 1. Comment créer une catégorie d'actifs

1. Saisissez un **nom** pour la catégorie d'actif.
2. Cochez **Autoriser la comptabilisation des immobilisations en cours** si vous souhaitez conserver des enregistrements d'actifs sous un compte de bilan temporaire au lieu du compte d'actifs correspondant.
3. **Enregistrer**.

![détails_catégorie_actif.png](/asset/asset-category/détails_catégorie_actif.png)

### 1.1 Options supplémentaires lors de la création d'une catégorie d'actifs 

- **Activer la comptabilisation des immobilisations en cours** : En activant cette option, les écritures comptables des actifs de cette catégorie qui ne sont pas utilisés sont enregistrées dans les comptes des travaux d'investissement en cours. Cela se produit lorsque vous possédez l'actif mais qu'il n'est pas encore utilisé, c'est-à-dire que la **date de disponibilité** est définie à une date ultérieure. Si vous utilisez tous vos actifs immédiatement, désactivez cette fonctionnalité. En le désactivant, la comptabilité CWIP sera ignorée.

## 2. Caractéristiques

### 2.1 Détails du livre comptable 

Vous pouvez lier un livre financier si vous déclarez l'amortissement de différentes manières. Vous pouvez saisir les champs suivants :

- **Mode d'amortissement** : Choisissez un mode d'amortissement sur lequel vous enregistrerez l'amortissement des actifs de cette catégorie. Pour en savoir plus, visitez cette page .
- **Fréquence d'amortissement (mois)** : Le nombre de mois au cours desquels l'amortissement sera comptabilisé. L'actif peut être mis au rebut après cette période.
- **Nombre total d'amortissements** : nombre d'amortissements à réserver dans la période sélectionnée.
- **Taux d'amortissement** : Le taux d'amortissement appliqué sur la période sélectionnée. Celui-ci sera calculé en fonction de la méthode d'amortissement choisie.

![livre_comptable.png](/asset/asset-category/livre_comptable.png)

### 2.2 Comptes

Les détails de compte suivants peuvent être définis pour enregistrer les valeurs des actifs dans le grand livre :

- **Société**
- **Compte d'immobilisation**
- **Compte d'amortissement cumulé**
- **Compte de dotation aux amortissements**
- **Compte d'immobilisations en cours**

![comptes.png](/asset/asset-category/comptes.png)