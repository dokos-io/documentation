---
title: Retour d'achat
description: 
published: true
date: 2021-05-27T07:32:56.154Z
tags: 
editor: markdown
dateCreated: 2021-05-26T13:25:57.807Z
---

# Retour d'achat
Un article acheté retourné est appelé retour d'achat.

Avec la fonction de retour d'achat, vous pouvez retourner les produits au fournisseur. Cela peut être dû à un certain nombre de raisons telles que des défauts de produits, une qualité non conforme, l'acheteur n'a pas besoin du stock, etc.

## 1. Prérequis 
Avant de créer et d'utiliser un retour d'achat, il est conseillé de créer d'abord les éléments suivants:

- **[1. Article](/dokos/parametrage/articles)**
- **[2. Facture d'achat](/dokos/achats/factures-achats)**

Ou alors

- **[Reçu d'achat](/dokos/stocks/recus-achats)**

## 2. Comment créer un retour d'achat 
1. Ouvrez d'abord le reçu d'achat d'origine, avec lequel le fournisseur a livré les articles.
2. Cliquez sur **Créer > Retour**, cela ouvrira un nouveau reçu d'achat avec la case **Est retour** cochée. Les articles, les tarifs et les taxes seront des nombres négatifs.
3. Lors de la soumission du retour d'achat, le système diminuera la quantité d'articles de l'entrepôt mentionné. Pour maintenir une évaluation correcte des stocks, le solde des stocks augmentera également en fonction du taux d'achat initial des articles retournés.
4. Dans le grand livre comptable, le compte Stock en main sera crédité et le compte Stock reçu mais non facturé sera débité.

Si l'inventaire perpétuel est activé, le système enregistre également l'écriture comptable sur le compte d'entrepôt pour synchroniser le solde du compte d'entrepôt avec le solde du stock selon le grand livre des stocks.

## 3. Impact sur le retour des stocks via le reçu d'achat 

Lors de la création d'un retour d'achat par rapport à un reçu d'achat:

La quantité retournée dans le reçu d'achat d'origine, ainsi que tout bon de commande qui y est lié, est mise à jour.

Le statut du reçu d'achat d'origine est changé en Retour émis si 100% sont retournés.





