---
title: Rapport sur le niveau de stock
description: 
published: true
date: 2021-05-27T09:25:16.487Z
tags: 
editor: markdown
dateCreated: 2021-05-27T09:25:16.487Z
---

# Projections de stocks
Le rapport sur le niveau de stock répertorie la quantité d'articles en stock disponibles dans un entrepôt particulier.

Il existe plusieurs rapports disponibles, vous pouvez vérifier le niveau de stock de l'article.

---

Pour accéder au rapport sur le niveau de stock, allez sur :

> Accueil > Stock > Rapports de stock > **Projections de stocks**

## 1. Rapport de quantité projetée en stock 
Vous pouvez accéder à ce rapport à partir de Stock > Main Report > Stock Projected Quantity

Ce rapport répertorie les articles - niveau de stock par entrepôt d'un article en tenant compte de toutes les transactions de stock. Avec la quantité réelle d'un article, il fournit également d'autres détails tels que:

- **Quantité réelle** : quantité disponible dans l'entrepôt.
- **Quantité planifiée** : Quantité pour laquelle un bon de commande a été généré, mais est en attente de fabrication.
- **Quantité demandée** : Quantité demandée à l'achat, mais non commandée.
- **Quantité commandée** : Quantité commandée à l'achat, mais non reçue.
- **Quantité réservée** : Quantité commandée pour la vente, mais non livrée.
- **Quantité du projet** : la quantité du projet est calculée comme suit :
Quantité projetée = quantité réelle + quantité prévue + quantité demandée + quantité commandée - quantité réservée

Le stock projeté est utilisé par le système de planification pour surveiller le point de commande et pour déterminer la quantité de commande. La quantité projetée est utilisée par le moteur de planification pour surveiller les niveaux de stock de sécurité. Ces niveaux sont maintenus pour répondre aux demandes inattendues.

Avoir un contrôle serré de l'inventaire projeté est crucial pour déterminer les pénuries et calculer la bonne quantité de commande.