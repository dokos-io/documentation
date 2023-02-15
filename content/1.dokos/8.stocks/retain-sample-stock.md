---
title: Conservation du stock d'échantillons
description: Conserver un stock d'échantillon
---

# Conservation du stock d'échantillons
Le stock d'échantillon est un lot de tous les articles stockés pour analyse en cas de besoin plus tard.

L'article pour lequel le stock d'échantillons est stocké peut être une matière première, un matériau d'emballage ou un produit fini.

## 1. Prérequis 
Avant d'utiliser la rétention d'échantillons, il est conseillé de créer d'abord les éléments suivants:

- **[Article](/dokos/parametrage/articles)**
- **[N°de Lot](/dokos/stocks/batch)**
- **[Entrepôt](/dokos/stocks/warehouse)**

## 2. Comment définir l'entrepôt de conservation des échantillons dans les paramètres de stock

Il est conseillé de créer un nouvel entrepôt séparément pour la conservation des échantillons et de ne pas l'utiliser en production.

### 2.1 Activer la conservation de l'échantillon dans le maître des articles

**Conserver un échantillon** est basé sur **A un numéro de Lot**, donc ce champ doit être activé en premier.
Cochez **Conserver l'échantillon et** définissez le nombre maximal d'échantillons autorisés pour un lot.

### 2.2 Effectuer une entrée de stock

- Chaque fois qu'une entrée de stock est créée dans le but de recevoir un article, pour les articles pour lesquels la conservation de l'échantillon est activée, la quantité d'échantillon peut être définie pendant cette entrée de stock. Vous devez sélectionner le numéro de lot de l'article / des articles. La quantité d'échantillon ne peut pas être supérieure à la quantité d'échantillon maximale définie dans la base d'articles.

- Lors de la soumission de cette entrée de stock, le bouton Effectuer une entrée de stock de rétention sera disponible pour effectuer une autre entrée de stock pour le transfert d'échantillons d'articles du lot mentionné vers l'entrepôt de rétention défini dans les paramètres de stock.

- En cliquant sur ce bouton, vous serez dirigé vers une nouvelle entrée de stock de type **Transfert de matériel**. Cette entrée transfère votre rétention d'échantillons de votre entrepôt cible (magasins) à l'entrepôt de rétention d'échantillons. Il contiendra toutes les informations, vérifiez et cliquez sur Soumettre.