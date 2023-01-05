---
title: Paramètres de stock
description: 
published: true
date: 2022-11-01T11:54:45.653Z
tags: 
editor: markdown
dateCreated: 2021-05-21T15:12:01.013Z
---

# Paramètres de stock
Vous pouvez définir les paramètres par défaut pour vos transactions liées aux actions à partir de la page **Paramètres des actions**.

Pour accéder aux paramètres des stocks, allez sur : 

> Accueil > Stock > **Paramètres des stocks**

## 1. Nomages des articles selon

Par défaut, le nom de l'article est défini selon le code d'article entré. Si vous voulez que les éléments soient nommés par une série de noms définie, choisissez l'option **Série de noms**.

## 2. Valeurs par défaut

### 2.1 Groupe d'articles par défaut

Ce sera le groupe d'articles par défaut alloué à un article nouvellement créé. Les groupes d'éléments sont utiles pour la classification et la définition des propriétés de l'ensemble du groupe. Pour en savoir plus, visitez la page **[Groupe d'articles](/fr/stocks/item-group)**.

### 2.2 Unité de mesure par Défaut des Articles

L'unité de mesure par défaut pour le stock est définie sous forme de nombres (kg, mètres, Unité, etc..), elle peut être modifiée à partir d'ici.

### 2.3 Entrepôt par défaut

Définissez l'entrepôt par défaut à partir duquel les transactions de stock sont effectuées. Il sera récupéré dans l'entrepôt par défaut dans la base d'articles.

#### 2.4 Entrepôt de stockage des échantillons

Il s'agit de l'entrepôt où les retentions d'échantillons sont stockées. Pour en savoir plus, visitez cette page.

### 2.5 Méthode de Valorisation par Défaut

FIFO - premier entré, premier sorti ou évaluation moyenne mobile de vos articles. La méthode par défaut est FIFO. Si vous sélectionnez Moyenne mobile, les nouveaux éléments seront évalués sur la moyenne mobile. Vous pouvez modifier cela lors de la création de nouveaux éléments dans le formulaire d'élément. Une fois l'article enregistré, la méthode d'évaluation ne peut pas être modifiée. En savoir plus ici.

### 2.6 Tolérance à la livraison/réception (%)

Il s'agit du pourcentage que vous êtes autorisé à recevoir ou à livrer plus par rapport à la quantité commandée. Par exemple: si vous avez commandé 100 unités, le fournisseur envoie 120 unités et le pourcentage est fixé à 10%, vous êtes alors autorisé à recevoir 110 unités. Par défaut, il est défini sur 0.

### 2.7 Rôle autorisé à livrer / recevoir en excès

Les utilisateurs avec ce rôle sont autorisés à livrer / recevoir des commandes supérieures au pourcentage d'allocation

### 2.8 Action si l'inspection de qualité n'est pas validée

Déclenchement d'une action si l'inspection de qualité n'est pas validée. Soit l'action s'arrête alors il faut mettre sur **Stop** ou soit cela envoi un avertissement alors il faut mettre sur **Avertir**.

### 2.9 Afficher le champ de code barre

Un champ pour saisir les détails du code-barres d'un article. Si décoché, le champ ne sera pas visible dans le formulaire d'élément.

### 2.10 Convertir la description de l'élément pour nettoyer le code HTML

Habituellement, les descriptions sont copiées à partir d'un site Web ou d'un fichier Word / PDF et contiennent de nombreux styles intégrés. Cela gâche la vue d'impression de vos factures ou devis.

Pour résoudre ce problème, vous pouvez cocher "Convertir la description de l'article en HTML propre" dans les paramètres de stock. Cela garantira que lorsque vous enregistrez les éléments, leurs descriptions seront nettoyées.

Si vous souhaitez contrôler votre description, vos vues et autoriser l'intégration de tout HTML, vous pouvez décocher cette propriété.

### 2.11 Désactiver la sélection de numéro de série et de lot

### 2.12 Insertion automatique

#### 2.12.1 Insertion automatique du taux de la Liste de prix si manquante

L'activation de cette option insérera automatiquement un prix d'article dans la liste de prix d'un article lors de l'utilisation de l'article dans sa première transaction. Ce prix est extrait du "Tarif" défini lors de la première transaction avec l'article. La liste de prix varie selon que vous utilisez une transaction d'achat ou de vente.

Notez que le prix de l'article sera automatiquement inséré uniquement dans la première transaction s'il n'est pas déjà présent.

Si cette option n'est pas cochée, le «taux de vente standard» défini dans l'article lors de la création de l'article sera ajouté en tant que prix de l'article.

#### 2.12.2 Autoriser un stock négatif

Cela permettra aux articles en stock d'être affichés avec des valeurs négatives. L'utilisation de cette option dépend de votre cas d'utilisation. Par exemple, les écritures d'opérations sur actions sont saisies le week-end ou en fin de mois. Dans ce cas, le stock négatif doit être activé afin que vous puissiez continuer avec vos écritures de transaction d'achat / vente.


#### 2.12.3 Définir les numéros de série automatiquement suivant la règle PEPS

Les numéros de série du stock seront définis automatiquement en fonction des articles saisis en fonction du premier entré, premier sorti. Les numéros de série seront définis automatiquement dans les transactions telles que les factures d'achat / vente, les bons de livraison, etc.


#### 2.12.4 Définir la quantité dans les transactions sur la base du numéro de série

La quantité d'articles sera définie en fonction des numéros de série. Par exemple, si l'utilisateur a ajouté des numéros de série tels que A001, A002 et A003, le système définira la quantité sur 3 dans la transaction.

### 3. Demande de matériel Automatique

#### 3.1 Augmenter la demande de matériel
Cette option est utile si vous souhaitez assurer un approvisionnement constant en matières premières / produits et éviter les pénuries. Une demande de matériel sera lancée automatiquement lorsque le stock atteindra le niveau de commande défini dans le formulaire Article.

#### 3.2 Notifier par e-mail lors de la création d'une demande de matériel automatique

Un e-mail sera envoyé pour informer l'Utilisateur avec le rôle «Responsable des achats» lorsqu'une demande de matériel automatique est créée.

### 4. Paramètres de transfert inter-entrepôts

#### 4.1 Activer l'entrepôt client pour le transfert d'articles à partir du bon de livraison et de la facture de vente

Cette option est utile lorsque le transfert de matériel doit être présenté sous forme de bon de livraison. Par exemple, s'il existe des exigences légales où des taxes doivent être appliquées à chaque transfert de matériel. Il est plus facile à gérer dans une transaction comme le bon de livraison que dans la saisie de stock

#### 4.2 Activer l'entrepôt fournisseur pour le transfert d'articles à partir du reçu d'achat et de la facture d'achat

Similaire à l'option ci-dessus, cette option est utile lorsque le transfert de matériel doit être présenté comme un reçu d'achat.

Pour en savoir plus sur le transfert de matériel entre entrepôts via le bon de livraison et la facture d'achat, veuillez consulter cet article Transfert de matériel à partir du bon de livraison.

### 5. Contrôle de l'historique des transactions de stock

L'Utilisateur ne sera pas autorisé à effectuer des enregistrements de stock au-delà de cette date.

Stock gelé jusqu'à: date limite jusqu'à laquelle les stocks seront gelés.
Gel des stocks de plus de [jours] : les stocks de plus de x jours seront gelés. Celui-ci est calculé en fonction de la date de création de l'article.
Rôle Autorisé à modifier le stock gelé : le rôle que vous choisissez ici sera autorisé à modifier le stock gelé.

### 6. Identification par lots

Paramètre global pour les lots de stocks à identifier par une série de dénomination . Vous pouvez remplacer cela dans le DocType d'article.