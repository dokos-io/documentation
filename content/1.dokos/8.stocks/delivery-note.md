---
title: Bon de livraison
description: 
published: true
date: 2022-11-01T11:53:19.455Z
tags: 
editor: markdown
dateCreated: 2021-05-23T08:15:58.635Z
---

# Bon de livraison
Un bon de livraison est établi lorsqu'un envoi est expédié de l'entrepôt de l'entreprise au client.

Une copie du bon de livraison est généralement envoyée avec le transporteur. Le bon de livraison contient la liste des articles envoyés dans l'envoi et met à jour l'inventaire. Le bon de livraison est une étape facultative et une facture client peut être créée directement à partir d'une commande client.

<mermaid>
flowchart LR
	id4-->id9(BON DE LIVRAISON)
  id2(Commande client)-->id4(Facture de vente)
  id4-->id5(Ecriture de paiement)
  id2-->id6("Ecriture de paiement (Acompte)")
  id1(Piste)-->id7(Opportunité)
  id7-->id8[Devis Client]
  id8-->id2
</mermaid>

---

Pour accéder à la **liste des bons de livraison**, allez sur :

> Accueil > Stock > Opérations sur actions > **Bon de livraison**

## 1. Prérequis avant utilisation

Avant de créer et d'utiliser un bon de livraison, il est conseillé de créer d'abord l'élément suivant :

- **Commande client**

## 2. Comment créer un bon de livraison

L'entrée du bon de livraison est très similaire à un reçu d'achat. Il est généralement créé à partir d'une commande client «soumise» (qui n'est pas expédiée) en cliquant sur Créer> Livraison.

Pour créer un bon de livraison manuellement (non recommandé), procédez comme suit:

1. Accédez à la liste des bons de livraison, cliquez sur Nouveau.
2. Les détails du client et de l'article peuvent être récupérés en cliquant sur «Obtenir les articles de> Commande client».
3. L'unité de mesure (UDM) et les tarifs seront récupérés automatiquement.
4. **Enregistrer** et **envoyer**.

Pour récupérer les articles d'une commande client, cliquez sur Obtenir les articles de> Commande client. Cela ouvrira une fenêtre contextuelle à partir de laquelle vous pourrez rechercher des commandes client et en sélectionner une.

Vous remarquerez que toutes les informations sur les articles non expédiés et d'autres détails sont repris de votre commande client si vous créez le bon de livraison à partir de là.

Vous pouvez également modifier la date et l'heure de comptabilisation, la date et l'heure actuelles sont définies lors de la création du bon de livraison.

### 2.1 Statuts

Voici les statuts d'un bon de livraison:

- **Brouillon** : un brouillon est enregistré mais n'a pas encore été soumis au système.
- **À facturer**: à facturer à l'aide d'une facture de vente .
- **Terminé** : soumis et envoyé tous les éléments.
- **Retour émis** : tous les articles ont été retournés.
- **Annulé** : annulé le bon de livraison.
- **Fermé** : Le but de la clôture est de gérer la fermeture à découvert.

Par exemple, votre client a commandé pour 20 qté mais a fermé à 15 qté. Les 5 autres ne doivent pas être envoyés ni facturés.

### 2.2 Livraisons partielles

Lorsque vous créez un bon de livraison à partir d'une commande client, les quantités peuvent être modifiées. Ainsi, si la commande client contient 10 articles à livrer et que vous n'en livrez que 5 cette semaine et la semaine suivante, vous pouvez créer 2 bons de livraison en deux semaines.

## 3. Actions associées

### 3.1 Détails de la commande client

Vous pouvez saisir ici le numéro de bon de commande du client pour référence.

### 3.2 Adresse et contact

**Adresse de livraison** : l'adresse du client à laquelle les articles seront expédiés.
**Personne de contact** : si le client est une organisation, ajoutez la personne de contact dans ce champ.

- Lieu de fourniture
- Adresse de facturation
- Société
- Nom de l'adresse de l'entreprise

Les contacts et les adresses sont stockés séparément afin que vous puissiez attacher plusieurs contacts ou adresses au client.

### 3.3 Devise et liste de prix

Vous pouvez définir la devise dans laquelle le bon de livraison doit être envoyé. Ceci est généralement récupéré s'il est défini dans la commande client. Si vous définissez une liste de prix, les prix des articles seront extraits de cette liste. Cochez la case Ignorer la règle de tarification ignorera les règles de tarification définies dans Comptes> Règle de tarification.

En savoir plus sur les **listes de prix** et les **transactions** multidevises.

### 3.4 Entrepôts

- **Définir l'entrepôt source** : c'est là que les articles seront originaires pour être envoyés au client.
- **Vers l'entrepôt** : dans un scénario de vente normal, l'article quitte votre entrepôt et atteint le client. Cependant, si vous souhaitez conserver un échantillon de stock, saisissez ici un entrepôt.

### 3.5 Tableau des articles

- **Code - barres** : vous pouvez suivre les articles à l'aide de codes-barres .

Le code de l'article, le nom, la description, l'image et le fabricant seront récupérés à partir de la fiche article .

- **Scanner le code - barres** : vous pouvez ajouter des éléments dans le tableau des éléments en scannant leurs codes-barres si vous possédez un lecteur de codes-barres. Lisez la documentation pour le suivi des articles à l'aide du code-barres pour en savoir plus.

- **Remise et marge** : vous pouvez appliquer une remise sur des articles individuels en pourcentage ou sur le montant total de l'article. Lisez Appliquer une réduction pour plus de détails.

- **Tarif** : Le tarif est récupéré s'il est défini dans la liste de prix et le montant total est calculé.

- **Modèle de taxe d'article** : vous pouvez définir un modèle de taxe d'article pour appliquer un montant de taxe spécifique à cet article particulier. Pour en savoir plus, visitez cette page.

Les détails du poids de l'article par unité et l'UdM de poids sont extraits s'ils sont définis dans la base de données des articles.

- Entrepôt et référence : L'entrepôt à partir duquel les articles sont envoyés au client est affiché. De plus, une commande client sera affichée si ce bon de livraison était le flux de création: «Commande client> Livrer note».

- **Numéro de lot et numéro de série** : Si votre article est sérialisé ou mis en lots, vous devrez entrer le numéro de série et le lot dans le tableau Articles. Vous êtes autorisé à saisir plusieurs numéros de série sur une même ligne (chacun sur une ligne distincte) et vous devez saisir le même nombre de numéros de série que la quantité.

- La **Qté disponible à partir de l'entrepôt**, la **Quantité de lot disponible à partir de l'entrepôt** et la **Qté installée** seront affichées. Pour en savoir plus sur l'installation, visitez la page Note d'installation .

- **Remarque** : l'article doit être sérialisé ou groupé pour que ces fonctionnalités fonctionnent. Si l'article est sérialisé, une fenêtre contextuelle apparaîtra dans laquelle vous pourrez saisir les numéros de série.

- **Le compte de dépenses** : Est le compte sur lequel le montant sera débité. Le fait de cocher «Autoriser le taux de valorisation nul» permettra de soumettre le bon de livraison même si le taux de valorisation de l'article est égal à 0. Il peut s'agir d'un exemple d'article ou en raison d'une entente mutuelle avec votre fournisseur.

- **Les dimensions comptables** : Elles aident à étiqueter chaque transaction avec des dimensions différentes sans qu'il soit nécessaire de créer de nouveaux centres de coûts. Vous devez d'abord créer des dimensions comptables, pour en savoir plus, visitez cette page .

- **Saut de page** : Crée un saut de page juste avant cet élément lors de l'impression.

### 3.6 Suivi de l'inspection de la qualité

Si, pour certains articles, il est obligatoire d'enregistrer les contrôles qualité (si vous l'avez défini dans votre fiche Articles), vous devrez mettre à jour le champ "Contrôle qualité". Le système ne vous autorisera à "Soumettre" le bon de livraison que si vous mettez à jour le «Contrôle qualité».

Après avoir activé les critères d'inspection dans le formulaire Article pour les ventes et y avoir joint un modèle d'inspection qualité, les inspections qualité peuvent être enregistrées dans les bons de livraison.

### 3.7 Taxes et frais

Les taxes et frais seront récupérés à partir de la commande client .

Consultez la page Modèle de taxes de vente et frais pour en savoir plus sur les taxes.

Le total des taxes et frais sera affiché sous le tableau.

Pour ajouter automatiquement des taxes via une catégorie de taxe, visitez cette page .

Assurez-vous de marquer correctement toutes vos taxes dans le tableau des taxes et frais pour une évaluation précise.

#### **Règle d'expédition** 

Une règle d'expédition permet de définir le coût d'expédition d'un article. Le coût augmentera généralement avec la distance d'expédition. Pour en savoir plus, visitez la page des règles d'expédition.

### 3.8 Remise supplémentaire

Toute remise supplémentaire sur l'ensemble de la commande peut être définie dans cette section. Cette remise pourrait être basée sur le total général, c'est-à-dire après impôts / charges ou total net, c'est-à-dire avant taxes / charges. La remise supplémentaire peut être appliquée sous forme de pourcentage ou de montant. Lisez Appliquer une réduction pour plus de détails.

### 3.9 Termes et conditions

Dans les transactions de vente / achat, il peut y avoir certaines conditions générales sur la base desquelles le fournisseur fournit des biens ou des services au client. Vous pouvez appliquer les conditions générales aux transactions aux transactions et elles apparaîtront lors de l'impression du document. Pour connaître les termes et conditions, cliquez ici.

### 3.10 Informations sur le transporteur

Si vous sous-traitez le transport des Articles à leur lieu de livraison, les détails du transporteur peuvent être ajoutés. Ce n'est pas la même chose que la livraison directe .

**Transporteur** : Le fournisseur qui transportera l'article à votre client. La fonction de transport doit être activée dans la fiche fournisseur pour sélectionner le fournisseur ici.
**Chauffeur** : Vous pouvez ajouter ici un chauffeur qui conduira le mode de transport.

Les détails suivants peuvent être enregistrés :

- Distance en km
- Mode de transport : routier, aérien, ferroviaire ou maritime.

### 3.11 Plus d'informations

Le bon de livraison peut être lié aux éléments suivants à des fins de suivi :

- **Projet**
- **Campagne**
- **La source**

### 3.12 Paramètres d'impression

**En-tête de lettre** 
Vous pouvez imprimer votre bon de livraison sur le papier à en-tête de votre entreprise. En savoir plus ici .

«Regrouper les mêmes éléments» regroupera les mêmes éléments ajoutés plusieurs fois dans le tableau des éléments. Cela peut être vu lorsque votre impression.

**Imprimer les titres** 
Les en-têtes des reçus d'achat peuvent également être modifiés lors de l'impression du document. Vous pouvez le faire en sélectionnant un en- tête d'impression . Pour créer de nouveaux en-têtes d'impression, accédez à: Accueil > Paramètres > Impression > **En-têtes d'impression**. En savoir plus ici .

Il existe des cases à cocher supplémentaires pour imprimer le bon de livraison sans le montant, cela peut être utile lorsque l'article est de grande valeur. Vous pouvez également regrouper les mêmes éléments sur une seule ligne lors de l'impression.

### 3.13 Statuts

L'état du document et le pourcentage d'installation sont affichés ici. Toutes les instructions supplémentaires pour la livraison peuvent être saisies ici.

### 3.14 Commission

Si la vente a eu lieu via l'un de vos partenaires commerciaux, vous pouvez ajouter les détails de leur commission ici. Ceci est généralement extrait de la commande client.

### 3.15 Équipe des ventes

**Vendeurs** : Dokos vous permet d'ajouter plusieurs vendeurs qui peuvent avoir travaillé sur cette transaction.

### 3.16 Expédition de paquets ou d'articles avec le lot de produits 

Si vous expédiez des articles qui ont un lot de produits , ERPNext créera automatiquement un tableau «Liste de colisage» pour vous en fonction des sous-articles de cet article.

Si vos articles sont sérialisés, vous devrez mettre à jour le numéro de série dans le tableau «Liste de colisage» pour les articles de type Bundle de produits.

### 3.17 Emballage des articles dans des caisses, pour l'expédition de conteneurs 

Si vous effectuez la livraison par conteneur ou par poids, vous pouvez utiliser le bon de livraison pour diviser votre bon de livraison en unités plus petites. Pour en savoir plus sur un bon de livraison, visitez cette page . aller à:

Vous pouvez créer plusieurs bons de livraison pour votre bon de livraison et Dokos s'assurera que les quantités du bon de livraison ne dépassent pas les quantités indiquées dans le bon de livraison. Notez que vous ne pouvez créer un bon de livraison à partir d'un bon de livraison que lorsque le bon de livraison est au stade de l'ébauche.

### 3.18 Après la soumission 

Lorsque le bon de livraison est soumis, une écriture comptable est effectuée pour chaque article et le stock est mis à jour. La quantité en attente dans la commande client est mise à jour (le cas échéant).

Le tableau de bord affichera les options suivantes:

- Note d'installation
- Retour des ventes
- Voyage de livraison
- Facture de vente

### 3.19 Retourner une commande client

Une fois que vous avez livré une commande client à l' aide d'un bon de livraison, vous pouvez créer une entrée de retour au cas où le client renvoie l'article. Pour en savoir plus, visitez la page Retour des ventes .

### 3.20 Ignorer le bon de livraison

Si vous ne souhaitez pas créer de bon de livraison après une commande client et que vous souhaitez directement créer une facture client, activez la fonction correspondante dans les paramètres de vente .