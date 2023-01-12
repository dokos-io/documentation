---
title: Ensemble de produit
description: 
published: true
date: 2022-10-27T14:20:26.431Z
tags: 
editor: markdown
dateCreated: 2021-05-22T08:25:18.817Z
---

# Ensemble de produits
Le terme **Ensemble de produits** est synonyme de nomenclature de vente. C'est un modèle que vous pouvez utiliser pour assembler des articles qui seront emballés ensemble et vendus comme un seul article. 

Par exemple, si un ordinateur portable est expédié, vous devez vous assurer que le câble de chargement, la souris et l'étui de transport sont inclus et que l'inventaire de ces articles est géré en conséquence. Pour illustrer ce scénario, vous pouvez utiliser pour l'article principal, par exemple B. Définissez l'ordinateur portable, l'option «ensemble de produits» et répertoriez les éléments à livrer tels que l'ordinateur portable + le câble de chargement + les autres accessoires en tant que sous-éléments.

Ce qui suit montre les étapes de configuration du modèle pour le groupe de produits et comment il est utilisé dans les campagnes de vente.

---

Pour accéder à la **liste Ensemble de produits**, allez sur :

> Accueil > Stocks / Ventes > Paramètres > **Ensemble de produits**

## 1. Comment créer un ensemble de produits

### 1.1 Sélectionner l'article principal

Le modèle d'ensemble de produit comprend deux sections. Articles groupés de produits (articles principaux) et articles d'emballage.

Pour l'article de l'offre groupée de produits, sélectionnez un article parent. L'article parent ne doit pas être un article en stock, car il n'est pas géré via l'entrepôt, uniquement les articles du colis. Si vous souhaitez gérer l'article de niveau supérieur dans l'entrepôt, vous devez créer une liste de pièces standard et la faire emballer via une transaction d'entrepôt.

## 2. Articles

### 2.1 Sélectionner les sous-articles

Dans la section Articles, vous répertoriez tous les sous-articles qui sont gérés via l'entrepôt et livrés au client.

### 2.2 Offre groupée de produits dans les transactions de vente

Lors de la création de transactions de vente telles que B. Facture sortante, commande client et bon de livraison, puis l'article supérieur est sélectionné dans la liste d'articles principale

Lors de la sélection de l'article supérieur dans la liste d'articles principale, les sous-articles de la table "Liste de colisage" de la transaction sont dessinés. Si le sous-article est un article sérialisé, vous pouvez saisir son numéro de série directement dans le tableau des listes de colisage. Lorsque la transaction est envoyée, le système réduit le stock des sous-articles dans l'entrepôt spécifié dans le tableau des listes de colisage.

## 3. Utilisez des offres groupées pour afficher les offres 

Cette utilisation possible de lots de produits a été découverte lorsqu'un client qui vendait de la nourriture a demandé une fonction pour afficher des offres telles que «Achetez-en un et obtenez-en un gratuitement». Pour ce faire, il a créé un article hors stock qui a été utilisé comme article parent. Dans la description de l'article, il a donné les détails de cette offre et une photo. L'article de vente a ensuite été sélectionné comme article d'emballage, la quantité étant de 2. Ainsi, chaque fois qu'un article était vendu via cette offre, le système en déduisait une quantité de 2 dans l'entrepôt.
