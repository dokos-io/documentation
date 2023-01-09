---
title: Schéma promotionnel
description: 
published: true
date: 2022-10-27T14:23:56.997Z
tags: 
editor: markdown
dateCreated: 2021-05-05T10:22:33.372Z
---

# Schéma promotionnel

Un programme promotionnel est une remise temporaire sur un ou plusieurs produits.

Les schémas promotionnels aident les entreprises à réussir en réduisant les prix pendant une période limitée pour attirer plus de clients. Ils peuvent être facilement configurés dans DOKOS. Un schéma promotionnel est lié à une règle de prix.

Lors de la création d'un schéma promotionnel, le système crée une règle de prix. Un schéma promotionnel peut être associé à plusieurs règles de prix. Dans DOKOS, un schéma promotionnel est un moyen plus simple de gérer les prix sur plusieurs articles/groupes en fonction de différentes parties et conditions.

---

Pour accéder à l**a liste des schémas promotionnels**, allez sur :

> Accueil > Vente > Articles et prix > **Schéma promotionnel**

## 1. Prérequis avant utilisation

Avant de créer et d'utiliser un système promotionnel, il est conseillé de créer d'abord les éléments suivants :

- **[Article](/fr/stocks/item)**
- **[Groupe d'article](/fr/stocks/item-group)**
- **[Client](/fr/crm/customer)**
- **[Fournisseur](/fr/buying/supplier)**

## 2. Comment créer un programme promotionnel

1. Accédez à la liste des programmes promotionnels et cliquez sur :heavy_plus_sign: Ajouter Schéma promotionnel.
2. Saisissez un **nom** pour la règle.
3. Sélectionnez sur **quoi appliquer**, comme le code d'article, le groupe d'articles, la marque ou la transaction. La sélection de Transaction appliquera le schéma sur le montant total de la transaction.
4. Sur la base du système **Appliquer sur** », vous aurez la possibilité de sélectionner le code d'article / le groupe d'articles / la marque dans le tableau.
5. Sélectionnez si le **schéma est destiné à la vent**e, à l'**achat** ou aux **deux** et définissez les informations sur la pièce.
6. Dans le tableau **Remise sur le prix du schéma promotionnel**, définissez la remise sur le prix, la remise sur le produit.
7. Les utilisateurs peuvent également appliquer la remise sur l'autre code d'article/groupe d'articles/marque en sélectionnant la valeur du champ Appliquer la règle sur l'autre.
8. **Enregistrer**.

::alert{type=warning}
**Remarque** : lors de l'enregistrement d'un programme promotionnel, une nouvelle règle de tarification est créée.
::


### 2.1 Champs supplémentaires lors de la création d'un programme promotionnel

**Conditions mixtes** 
Si vous sélectionnez deux articles ou plus et définissez la quantité minimale et maximale. Le programme promotionnel ne sera appliqué que si la somme totale des articles correspond aux quantités définies. Par exemple, vous créez un programme promotionnel sur l'article 1 et l'article 2 et définissez la quantité minimale et maximale sur 30, le programme promotionnel ne s'appliquera que si la quantité totale est de 30.

**est cumulatif** 
L'activation de cette option permet au programme promotionnel d'être appliqué de manière cumulative. Vous devez définir le « Min Amt » et le « Max Amt » pour cela.

Considérons un scénario dans lequel le Min Amt est de 1 500 et le Max Amt est de 2 000. Désormais, si une transaction est créée pour 1 400, le programme promotionnel ne sera pas appliqué. Cependant, lors de la création d'une deuxième facture d'un montant de 600, le système promotionnel sera appliqué. Cela s'est produit puisque le montant total (cumulé) des factures s'élevait à 2 000. Notez que la remise ne sera appliquée qu'à la dernière transaction qui dépasse la limite cumulée.

Cela peut être utile pour offrir des remises si un client achète plusieurs fois un article et que vous souhaitez le récompenser avec des remises/prix spéciaux.

## 3. Caractéristiques

### 3.1 Remise sur un autre élément

Cette fonction vérifie l'état du premier article mais applique un régime/une remise/un taux sur un autre article.

Par exemple, définissez Item1 et Item2 dans le tableau "Appliquer la règle sur" et définissez "Appliquer la règle sur les autres" sur Item3. Désormais, si la transaction a Item1, Item2 et Item3, la règle de tarification s'appliquera à Item3 puisque les deux premiers Items étaient présents dans la transaction.

### 3.2 Informations additionnelles

Définissez si le programme promotionnel est destiné à la vente ou à l'achat de l'article.

En fonction de votre sélection, vous pouvez définir l'applicabilité à l'un des documents (Client, Groupe de clients, Région, Campagne, Fourniosseur, Groupe de fournisseurs)

### 3.3 Paramètres de la période

Vous pouvez également définir un intervalle de dates pour lequel le programme promotionnel sera valide. Ceci est utile pour une promotion des ventes. En laissant les dates vides, le programme promotionnel n'aura aucune limite de temps.

**Devise** : La définition d'une devise ici entraînera l'application du programme promotionnel uniquement lorsque la devise est la même dans la transaction.

### 3.4 Règles de remise sur le prix

**Description de la règle** : Entrez une description pour ne pas comprendre ce que ce programme promotionnel implique.

**Quantité et montant**
Spécifiez la quantité minimale, la quantité maximale, le montant minimum ou le montant maximum d'un article lorsque ce programme promotionnel devrait être applicable.

Notez que si la quantité ou le montant est inférieur ou dépasse les limites définies ici, le programme promotionnel ne sera pas du tout appliqué. Cependant, il sera appliqué si vous avez activé les options Conditions Mixtes ou Cumulatives.

**Définition de la remise/du taux**
- **Tarif** : Ce sera le nouveau tarif pour un Article. Par exemple, si vous vendez un article pour 100 et que vous souhaitez le vendre pour 112 pour une partie spécifique, sélectionnez Tarif et définissez le Tarif sur 112.
- **Pourcentage de remise** : Un pourcentage de remise spécifique peut être défini. Par exemple, une remise de 10 % sur un article d'une valeur de 500 se traduirait par un prix de 450.
- **Montant de la remise** : Un montant de remise fixe sera appliqué. Par exemple, si vous vendez un article pour 100 et que vous souhaitez le vendre avec une remise de 7, cette condition peut être définie à l'aide de l'option Montant de la remise.

**Filtres pour définir la remise**

- **Entrepôt** : La définition d'un entrepôt ici entraînera l'application du programme promotionnel uniquement si l'article est sélectionné dans l'entrepôt spécifié ici.
- **Priorité** : Considérez un groupe d'éléments, vous souhaitez définir des règles spécifiques sur un élément du groupe. Cela peut être fait en créant un nouveau programme promotionnel et en définissant une priorité plus élevée.
- **Seuil de suggestion** : Il s'agit du seuil en fonction duquel le système vous notifiera d'ajuster la quantité d'articles pour la remise. Par exemple, si la quantité minimale est de 10 et le seuil est de 9, le système vous demandera d'ajouter 1 article supplémentaire pour que la remise soit applicable. Ceci s'applique également au montant fixé.
- **Valider la règle appliquée** : Si le prix saisi n'est pas valide pour l'article, le système ne vous permettra pas d'appliquer un taux/remise différent.

### 3.5 Règles de remise sur les produits

Une remise sur les produits est applicable lorsqu'un ou plusieurs articles sont gratuits sur l'achat d'autres articles. La plupart des champs de ce tableau sont les mêmes que ceux de la section précédente.

- **Les options supplémentaires sont** : * Même Article : Si vous souhaitez offrir le même Article gratuitement (remise produit) à l'achat d'un Article, cochez cette case. Si vous souhaitez offrir un autre article, décochez et sélectionnez l'article à offrir gratuitement.

- **Appliquer plusieurs règles de tarification** : Pour comprendre cela, considérons un article au tarif 500. Il comporte deux règles de tarification P1 et P2. P1 applique 10% de réduction et P2 applique 5%. L'activation de cette option appliquera un total de 15 % sur le tarif de l'article, ce qui donne 425.

- **UDM (Unité de mesure)** : Le système promotionnel ne s'appliquera que si l'UoM définie ici correspond à la transaction.

- **Tarif** : Un Article peut être offert gratuitement par le Fournisseur mais il peut y avoir des taxes applicables. La saisie d'un Tarif ici signifie que le Client devra payer les taxes applicables.

## 4. Types de schémas promotionnels

### 4.1 Remise sur les prix

Dans ce type de programme promotionnel, l'utilisateur a la possibilité de définir la remise en termes de pourcentage ou de montant en fonction de la quantité minimale, de la quantité maximale, du montant minimal et du montant maximal des produits. Les utilisateurs peuvent également configurer le schéma où ils peuvent définir le taux forfaitaire du produit en fonction de la quantité ou du montant du produit.

### 4.2 Remise sur les produits

Dans ce type de programme promotionnel, l'utilisateur a la possibilité d'offrir un produit gratuit à l'achat du même produit ou d'un produit différent avec des conditions telles que la quantité minimale, la quantité maximale, le montant minimal, le montant maximal.

## 5. Comment configurer un schéma promotionnel (exemples)

Comprenons comment configurer un schéma promotionnel dans DOKOS à l'aide de quelques exemples.

### 5.1 Régimes de conditions mixtes

Le client A a acheté 10 quantités de paquet Britannia Cake 5 Rs et 5 quantités de paquet Britannia Cake 10 Rs. Maintenant, le fournisseur souhaite accorder une remise de 10 % au client A. Ce fournisseur souhaite également accorder une remise de 10 % au client B qui a acheté 15 quantités de paquet Britannia Cake 5 Rs.

Ainsi, le Fournisseur souhaite appliquer la remise sur les produits Britannia Cake 5 Rs, Britannia Cake 10 Rs uniquement si ses Clients ont acheté 15 quantités d'un produit quelconque ou la somme des deux produits.

Pour configurer cela dans DOKOS, les étapes sont les suivantes :

- Définissez Appliquer le comme code d'article.
- Définissez le code d'article Britannia Cake 5 Rs, Britannia Cake 10 Rs dans le tableau des codes d'article de la règle de tarification.
- Activez le champ « Conditions mixtes ».
- Dans le tableau des remises de prix, définissez la quantité minimale et la quantité maximale sur 15.
- Définissez le type de remise sur Pourcentage de remise et le taux sur 10.

### 5.2 Pour appliquer une remise sur d'autres articles

Le client A a acheté 30 quantités de paquet Britannia Cake 5 Rs et 2 quantités de Britannia Cake 15 Rs. Le Fournisseur souhaite vendre le produit Britannia Cake 15 Rs au forfait 12. Ici, le prix d'origine du produit Britannia Cake 15 Rs est de 15.

Le fournisseur souhaite appliquer la règle uniquement si le client a acheté au moins 30 quantités du produit Britannia Cake 5 Rs ou Britannia Cake 10 Rs.

Pour configurer cela dans DOKOS, les étapes sont les suivantes :

- Définissez Appliquer le comme code d'article.
- Définissez le code d'article Britannia Cake 5 Rs, Britannia Cake 10 Rs dans le tableau des codes d'article de la règle de tarification.
- Appliquez la règle sur les autres comme code d'article et définissez le code d'article comme Britannia Cake 15 Rs.
- Dans le tableau des remises de prix, définissez la quantité minimale sur 30.
- Définissez le type de remise sur Taux et le taux sur 12.