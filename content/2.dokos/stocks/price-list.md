---
title: Liste de prix
description: 
published: true
date: 2021-05-22T08:15:16.049Z
tags: 
editor: markdown
dateCreated: 2020-11-26T17:55:36.031Z
---

# Liste de prix
DOKOS vous permet de gérer plusieurs prix de vente et d'achat d'articles à l'aide de listes de prix.

Les listes de prix peuvent être utilisées dans des scénarios où vous avez des prix différents pour différentes zones (en fonction des frais d'expédition), pour différentes devises, etc. Un article peut avoir plusieurs prix en fonction du client, de la devise, de la région, des frais d'expédition, etc., être stockés sous forme de plans tarifaires différents.

Dans DOKOS, tous les prix des articles sont stockés séparément. Le prix d'achat d'un article est différent du prix de vente et ils sont donc stockés séparément.

---

Pour accéder à une **liste de prix**, allez sur :

> Accueil > Vente / Achat / Stock > Articles et prix > **Liste de prix**

![liste_de_prix.png](/content/stocks/price-list/liste_de_prix.png)

**Exemple:**

Imaginons que vous vendez des meubles.  

Ces meubles vont peut-être avoir un prix de vente différent en fonction des types de clients auxquels vous les vendez.

Par exemple, vous allez peut-être vendre une table 100€ HT à un particulier qui passe dans votre boutique, alors que vous allez la vendre 60€ HT à un revendeur.

Dans ce cas vous aurez deux listes de prix et deux prix pour votre article **Table**:

- Liste de prix **Clients particuliers**
- Liste de prix **Revendeurs**

|Clients particuliers|Revendeurs|
|-|-|
|100€|60€|

Pour accéder au **Liste de prix**, allez sur :
> Accueil > Vente/Achat > Liste de prix (sous Article et prix)

## 1. Comment utiliser une liste de prix

- Les **listes de prix** seront utilisées lors de la création d'un [prix d'article](/stocks/item-price) pour suivre le prix de vente ou d'achat d'un article.

- Des **pays spécifiques** peuvent être attribués dans la liste de prix.

- Pour **désactiver une liste de prix** spécifique, décochez la case "Activé". La liste de prix désactivée ne sera pas disponible pour la sélection dans les transactions de vente et d'achat.

- **Prix non dépendant de l'Unité de mesure (UDM)** : Considérez un article, des tomates que vous achetez dans des boîtes et que vous vendez en kilos. 1 boîte = 10 kilos et 1 kilo le prix d'achat est de 10rs. Si cette case n'est pas cochée et que vous sélectionnez 1 case dans votre transaction, le prix n'apparaîtra que pour un kilo puisque c'est le seul prix d'article enregistré.

	- Maintenant, si vous cochez cette case et effectuez une transaction avec une boîte de tomates, le prix sera automatiquement fixé à 100 puisque le prix de 1 boîte (10 kilos) est de 100.

- Les listes de prix d'achat et de vente standard sont créées par défaut.

**Remarque** : Si vous disposez de plusieurs listes de prix, vous pouvez sélectionner une liste de prix ou l'attribuer à un client (afin qu'elle soit sélectionnée automatiquement). Les prix de vos articles seront automatiquement mis à jour à partir de la liste de prix.

![créer_liste_de_prix.png](/content/stocks/price-list/créer_liste_de_prix.png)


## 2. Créer une liste de prix de vente

Pour définir une liste de prix de vente, créez une nouvelle liste de prix et cochez la case _Vente_

L'intérêt des listes de prix réside dans leur capacité à déterminer les prix automatiquement dans vos transactions.  
Par exemple, lorsque vous établissez un devis, vous voulez que le bon prix soit déterminé pour votre client en fonction de la liste de prix qui lui correspond.  

Une fois votre liste de prix créée, vous pouvez donc l'associer avec vos clients ou vos groupes de client.  

![vente_liste_de_prix.png](/content/stocks/price-list/vente_liste_de_prix.png)

### 2.1 Règles de détermination des prix de vente

Lors de la recherche d'une liste de prix correspond à votre client dans une transaction, le logiciel procède de la manière suivante:

1. Il cherche une liste de prix dans la fiche client
2. S'il n'en trouve pas, il cherche une liste de prix dans la fiche du groupe de clients associé à ce client
3. S'il n'a toujours pas trouvé de liste de prix, il prend celle définie dans les paramètres des ventes


## 3. Créer une liste de prix d'achat

Pour définir une liste de prix d'achats, créez une nouvelle liste de prix et cochez la case _Achats_

### 3.1 Règles de détermination des prix d'achat

Le mode de fonctionnement est similaire aux liste de prix de vente.

1. Le logiciel cherche une liste de prix dans la fiche fournisseur
2. S'il n'en trouve pas il cherche une liste de prix dans la fiche du groupe de fournisseurs associé à ce fournisseur
3. S'il n'a toujours pas trouvé de liste de prix, il prend celle définie dans les paramètres des achats

![achat_liste_de_prix.png](/content/stocks/price-list/achat_liste_de_prix.png)


