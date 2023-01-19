---
title: N° de Lot
description: 
published: true
date: 2022-11-02T08:57:48.544Z
tags: 
editor: markdown
dateCreated: 2021-05-25T20:39:11.880Z
---

# N°de lot
La fonction de lot de Dokos vous permet de regrouper plusieurs unités d'un article et de leur attribuer une valeur / un numéro / une étiquette unique appelée N° de lot.

Ceci est fait en fonction de l'article. Si l'article est groupé, un numéro de lot doit être mentionné dans chaque transaction de stock. Les numéros de lot peuvent être gérés manuellement ou automatiquement. Cette fonction est utile pour définir la date d'expiration de plusieurs articles ou les déplacer ensemble vers différents entrepôts.

---

Pour accéder à la **liste N°de lot**, allez sur :

> Accueil > Stock > N°de série et lot > **Lot**

## 1. Prérequis 
Avant de créer et d'utiliser un lot, il est conseillé de créer d'abord les éléments suivants:

- Article
- Activez **A un N° de Lot** dans le masque d'articles

## 2. Comment créer un nouveau lot

Pour définir l'article en tant qu'élément de lot, le champ "A un numéro de lot" doit être coché dans la base d'articles. Si vous n'avez pas sélectionné "Créer automatiquement un nouveau lot" lors de la création d'un article, vous devrez créer des lots manuellement au fur et à mesure.

Pour créer une nouvelle base de n ° de lot pour un article, accédez à:

1. Allez dans la **liste des lots**, cliquez sur **:heavy_plus_sign: Ajouter Lot**.
2. Définissez l'**ID de lot**.
3. Sélectionnez l'**élément**.
4. Si une transaction est effectuée avec un article, le lot ne peut pas être défini ou annulé.
5. **Enregistrer**.

![créer_lot.png](/content/stocks/batch/créer_lot.png)

Lorsque les lots sont activés pour un article, l'option permettant de conserver le stock d'échantillons devient également disponible.

## 2.1 Création automatique par lots

Si vous souhaitez créer automatiquement un lot au moment de la réception de l'achat, vous devez cocher «Créer automatiquement un nouveau lot» dans la base d'articles :

## 3. Caractéristiques

### 3.1 Fractionnement et déplacement de lots

Lorsque vous ouvrez un lot, vous verrez toutes les quantités qui appartiennent à ce lot sur la page.

- Pour déplacer le lot d'un entrepôt à un autre, vous pouvez cliquer sur le bouton Déplacer .

- Vous pouvez également diviser le lot en un plus petit en cliquant sur le bouton Fractionner . Cela créera un nouveau lot basé sur ce lot et les quantités seront réparties entre les lots.

- Si vous définissez la date d'expiration, le lot affichera **Non expiré** jusqu'à la date d'expiration, après quoi il affichera **Expiré**. Si aucune date n'est définie, le lot affichera **Non défini**.

### 3.2 Transaction d'articles avec des lots 

Une base de lots doit être créée avant la création du reçu d'achat. Par conséquent, chaque fois qu'un reçu d'achat ou un bon de travail est effectué pour un article de lot, vous créerez d'abord son numéro de lot, puis vous le sélectionnerez dans la commande d'achat ou la saisie de stock.

Sur chaque transaction de stock (reçu d'achat, bon de livraison, facture) avec un article de lot, vous devez indiquer le numéro de lot de l'article.

::alert{type=warning}
**Remarque** : Dans les transactions de stock, les ID de lot seront filtrés en fonction du code article, de l'entrepôt, de la date d'expiration du lot (par rapport à la date comptable d'une transaction) et de la quantité réelle dans l'entrepôt. Lors de la recherche d'un ID de lot sans valeur dans le champ Entrepôt, le filtre Quantité réelle ne sera pas appliqué.
::