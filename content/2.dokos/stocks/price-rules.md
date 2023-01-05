---
title: Règles de prix
description: 
published: true
date: 2022-10-27T15:37:47.465Z
tags: 
editor: markdown
dateCreated: 2021-05-05T10:23:40.954Z
---

# Règles de prix

Une règle de prix définit les règles de remise/tarification qui s'appliquent en fonction de conditions définies.

Une règle de tarification comporte de nombreuses options à l'aide desquelles vous pouvez contrôler la tarification d'un article. Des filtres tels que la quantité, la date, les groupes et d'autres conditions peuvent être définis.

**Voici les quelques cas qui peuvent être traités à l'aide de la règle de tarification** :

- Conformément à une politique de vente promotionnelle, si le client achète plus de 10 unités d'un article, il bénéficie d'une remise de 20 %.
- Pour le client "XYZ", le prix de vente de l'article spécifique doit être mis à jour sous la forme ###.
- Les articles classés dans un groupe d'articles spécifique ont le même prix de vente ou d'achat.
- Les clients appartenant à un groupe de clients spécifique devraient obtenir ### prix de vente, ou % de remise sur les articles.
- Le fournisseur classé dans un groupe de fournisseurs spécifique doit appliquer un taux d'achat de ###.

---

Pour que la remise et le tarif de la liste de prix s'appliquent automatiquement à un article, créez des règles de tarification pour celui-ci.

Pour accéder à la liste des règles de prix, allez sur:

> Accueil > Stock > Articles et prix > **Règle de prix**

## 1. Pré-requis avant utilisation

Avant de créer et d'utiliser une règle de tarification, il est conseillé de créer d'abord les éléments suivants :

- Article
- Groupe d'articles
- Client
- Le fournisseur

## 2. Comment créer une règle de tarification 

1. Accédez à la liste des règles de tarification et cliquez sur Nouveau.
2. Définissez un titre pour la règle.
3. Sélectionnez les éléments à appliquer à partir du code d'article, du groupe d'articles, de la marque ou de la transaction.
4. Sélectionnez si vous souhaitez appliquer une remise sur le prix ou une remise sur le produit. Si vous souhaitez offrir des produits gratuits, sélectionnez la remise sur le produit.
5. Pour un article unique, sélectionnez Code article et sélectionnez les articles.
6. Si vous souhaitez que la règle de tarification soit appliquée à tous les articles, sélectionnez "Groupe d'articles" et sélectionnez Tous les groupes d'articles (groupe d'articles parent).
7. Définissez la remise/le prix à appliquer. Pour en savoir plus, rendez- vous dans cette rubrique .
8. Enregistrer.

### 2.1 Options supplémentaires lors de la création d'une règle de tarification 

#### Entrepôt 

La définition d'un entrepôt ici entraînera l'application de la règle de tarification uniquement si l'article est sélectionné dans l'entrepôt spécifié ici.

#### Appliquer la règle sur 
En fonction de l'attribut sélectionné dans le champ "Appliquer sur", vous pouvez définir la règle de tarification en fonction de l'une des options suivantes :

- Article
- Groupe d'articles
- Marque
- Transaction (sur le montant total de la transaction)

Dans ce tableau, vous pouvez sélectionner l'article/le groupe d'articles/la marque spécifique. Par exemple, si vous sélectionnez Appliquer sur 'Groupe d'articles' et sélectionnez 'Matières premières' dans le tableau, cette règle de tarification sera appliquée uniquement aux articles appartenant au groupe 'Matières premières'.

**UDM** : la règle de tarification ne s'appliquera que si l'UoM définie ici correspond à la transaction.

#### Condition

Dans ce champ, vous pouvez ajouter une condition en python pour vérifier les valeurs de champ dans le doctype de transaction, comme indiqué ci-dessous pour Sales Invoice :

customer=='Customer Name' and status!='Overdue'
Veuillez noter que seules les conditions python à une seule ligne fonctionneront, en utilisant les noms de champ du doctype cible.

#### Conditions mixtes

Si vous sélectionnez deux articles ou plus et définissez la quantité minimale et maximale. La règle de tarification ne sera appliquée que si la somme totale des articles correspond aux quantités définies. Par exemple, si vous créez une règle de tarification sur l'article 1 et l'article 2 et définissez la quantité minimale et maximale sur 30, la règle de tarification s'appliquera uniquement si la quantité totale est de 30.

#### Est cumulatif

L'activation de cette option permet d'appliquer la règle de tarification de manière cumulative. Vous devez définir le 'Min Amt' et le 'Max Amt' pour cela.

Considérez un scénario où le Min Amt est de 1 500 et le Max Amt est de 2 000. Désormais, si une transaction est créée pour 1 400, la règle de tarification ne sera pas appliquée. Cependant, lors de la création d'une deuxième facture d'un montant de 600, la règle de tarification sera appliquée. Cela s'est produit puisque le montant total (cumulatif) des factures s'est élevé à 2 000. Notez que la remise ne sera appliquée qu'à la dernière transaction qui dépasse la limite cumulée.

Cela peut être utile pour accorder des remises si un client achète un article plusieurs fois et que vous souhaitez le récompenser avec des remises/prix spéciaux.

## 3. Caractéristiques

### 3.1 Appliquer la règle sur les autres

Cette fonctionnalité vérifie la condition sur le premier élément mais applique la règle sur un autre élément.

Par exemple, définissez Item1 et Item2 dans le tableau "Apply Rule On" et définissez "Apply Rule On Other" sur Item3. Désormais, si la transaction contient Item1, Item2 et Item3, la règle de tarification s'appliquera à Item3 puisque les deux premiers Items étaient présents dans la transaction.

### 3.2 Informations sur la partie

Définissez si la règle de tarification concerne la vente ou l'achat de l'article.

En fonction de votre sélection, vous pouvez définir l'applicabilité à l'un des maîtres suivants.

- Client
- Groupe de clients
- Territoire
- Partenaire commercial
- Campagne
- Le fournisseur
- Groupe de fournisseurs

### 3.3 Quantité et Montant

Spécifiez la quantité minimale, la quantité maximale, la quantité minimale ou la quantité maximale d'un article lorsque cette règle de tarification doit être appliquée.

Notez que si la quantité ou le montant est inférieur ou supérieur aux limites fixées ici, la règle de tarification ne sera pas appliquée du tout. Cependant, il sera appliqué si vous avez activé les options Conditions mixtes ou Cumulatif.

Quantité et montant de la règle de tarification

### 3.4 Validité

Vous pouvez également définir un intervalle de dates pour la validité de la règle de tarification. Ceci est utile pour une promotion des ventes. En laissant les dates vides, la règle de tarification n'aura aucune limite de temps.

Paramètres de période de règle de tarification

### 3.5 Marge

**Type de marge** : Lors de la vente d'un article, vous pouvez le vendre avec une certaine marge. Si vous ne souhaitez pas ajouter des prix de vente aux articles à chaque fois et que vous souhaitez définir automatiquement une marge, vous pouvez le faire avec cette fonctionnalité.

**Taux ou montant de la marge** : la marge définie peut être basée sur un pourcentage ou un montant, par exemple : une marge de 5 % ou une marge fixe de 50 $.

### 3.6 Programme de remise sur les prix

La règle réelle à appliquer est définie dans cette section.

**Tarif** : Ce sera le nouveau tarif pour un article. Par exemple, si vous vendez un article pour 100 et que vous souhaitez le vendre pour 112 pour une partie spécifique, sélectionnez Tarif et définissez le Tarif sur 112.

**Pourcentage de remise** : Un pourcentage de remise spécifique peut être défini. Le pourcentage de remise peut être défini sur une liste de prix spécifique . Si vous laissez le champ "Pour la liste de prix" vide, la règle de tarification s'appliquera à toutes les listes de prix.

**Montant de la remise** : Un montant de remise fixe sera appliqué. Par exemple, si vous vendez un article pour 100 et souhaitez le vendre avec une remise de 7, cette condition peut être définie à l'aide de l'option Montant de la remise.

### 3.7 Paramètres avancés
**
Seuil de suggestion** : il s'agit du seuil en fonction duquel le système vous avertira d'ajuster la quantité d'articles pour la remise. Par exemple, si la quantité minimale est de 10 et que le seuil est de 9, le système vous avertira d'ajouter 1 article supplémentaire pour que la remise soit applicable. Ceci s'applique également au montant fixé.

**Priorité** : considérez un groupe d'éléments, vous souhaitez définir des règles spécifiques sur un élément du groupe. Cela peut être fait en créant une nouvelle règle de tarification et en définissant une priorité plus élevée. Cela peut également s'appliquer au groupe de clients et au groupe de fournisseurs.

**Appliquer plusieurs règles de tarification** : pour comprendre cela, considérons un article au tarif 500. Il existe deux règles de tarification P1 et P2. P1 applique 10 % de réduction et P2 applique 5 %. L'activation de cette option appliquera un total de 15 % sur le tarif de l'article, ce qui donne 425.

**Appliquer la réduction sur le tarif** : la réduction sera aggravée. Considérez le même scénario que ci-dessus. En activant cette option, 10% seront appliqués sur 500 ce qui donnera 450, puis 5% seront appliqués sur 450 ce qui donnera 427,5.

**Valider la règle appliquée** : affiche le message de validation saisi si la remise/le taux que vous avez défini manuellement dans une transaction ne correspond pas à la règle de tarification.

Ceci est utile lorsque le premier distributeur de la hiérarchie décide de la remise/du tarif à appliquer et que vous ne validez que si la règle de tarification est appliquée correctement.

## 4. Types de remise des règles de tarification

### 4.1 Réduction de prix 

1. Sous Type de marge, vous pouvez définir si la marge est calculée en pourcentage ou en montant. Ex : 10% de marge sur tarif fournisseur au moment de la vente.

2. Le tarif mentionné dans la règle de tarification aura priorité sur le tarif de la liste de prix de l'article (prix de l'article).

3. Le pourcentage de remise peut être appliqué pour une liste de prix spécifique (vente ou achat). Pour l'appliquer aux deux, laissez le champ "Pour la liste de prix" vide.

4. La remise peut également être définie en termes de montant.

### 4.2 Remise sur les produits

1. "Achetez 2 quantités obtenez 1 quantité gratuite du même article." Pour configurer ce type de règles, définissez le prix ou la remise sur le produit sur "Remise sur le produit", cochez la case Même article et définissez la quantité.

2. "Achetez 2 quantités obtenez 1 quantité gratuite de l'autre article." Pour configurer ce type de règles. Définissez le prix ou la remise sur le produit comme remise sur le produit, décochez la case "Même article" et définissez l'"article gratuit" et la quantité.