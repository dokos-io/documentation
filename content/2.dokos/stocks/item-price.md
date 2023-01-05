---
title: Prix de l'article
description: 
published: true
date: 2022-11-10T16:04:00.160Z
tags: 
editor: markdown
dateCreated: 2020-11-26T17:55:29.963Z
---

# Prix de l'article

Le prix de l'article est l'enregistrement dans lequel vous pouvez enregistrer le taux de vente et d'achat d'un article.

De plus, ces prix peuvent n'être applicables qu'en fonction de certains critères, comme par exemple, pour une unité de mesure donnée.  

> Nous vendons des chaises à l'unité et en lots de 4 à des particuliers et à des magasins.
>
> Nous aurons donc 4 prix:
>
> - 2 pour la liste de prix **Client particulier**
> - 2 pour la liste de prix **Revendeurs**

Et pour chacune de ces listes de prix, nous aurons un prix pour l'unité de mesure **Unité** et un prix pour l'unité de mesure **Lot de 4**

Pour accéder au **Liste de prix**, allez sur :
> Accueil > Vente/Achat > Prix d'Article

## 1. Comment créer un Prix d'article

### 1.1 Ajout rapide du prix d'article
- Accéder a la page de **Prix de l'article**
- Cliquer sur en haut à droite sur le bouton **:heavy_plus_sign: Ajouter Prix de l'article**
- Selectionner la **Code d'article** pour indiquer quel article vous voulez définir son prix.
- Selectionner la **liste de prix** pour indiquer un catalogue permettant de recenser tous les prix s'appliquant à une transaction donnée.
- **Prix unitaire** : Entrez le prix par un article

### 1.2 Ajout complet du prix d'article
- **Code de l'artitlce** : Selectionner la **Code de l'article** et le **Nom de l'article**
- **Unité de mesure** : Selectionner la **Unité de mesure** Ex.Unité/Mètre/boîte
- **Unité d'emballage**: Il s'agit de la quantité qui doit être achetée ou vendue par unité de mesure. Par exemple, si l'unité d'emballage est deux et l'UdM est un, deux articles en quantité seront traités. La valeur par défaut est 0, vous pouvez utiliser une UoM non entière comme 1,5 kg d'avoine pour 1 unité d'emballage. Si vous laissez la valeur 0, cela n'affectera aucune transaction.

## 2. Caractéristiques

### 2.1 Liste de prix

- Selectionner la **liste de prix** pour indiquer un catalogue permettant de recenser tous les prix s'appliquant à une transaction donnée.
- Option **Achat** et **Vente** pour  déterminer le champ d'application
- Entrez le **N° du lot**: le numéro de lot est la désignation, sous forme de nombres et/ou de lettres, permettant d’identifier et de suivre un ensemble de produits identiques qui partagent certaines caractéristiques de production (heure et date de production, code d’identification, etc.) Possibilité de creer le nouveau N° du lot dans ce champ

Si vous sélectionnez une liste de prix de vente, un champ client apparaîtra dans lequel vous pouvez attribuer ce prix d'article à un client spécifique. De même, si vous sélectionnez une liste de prix d'achat, un champ Fournisseur apparaîtra dans lequel vous pouvez sélectionner un fournisseur spécifique


### 2.2 Devise

- **Devise** : Sélectionner la devise par défaut de cet article.
- **Prix unitaire** : Indiquez le prix unitaire de cet article. Si vous avez indiqué la liste de prix Achat, alors le prix unitaire sera le prix d'achat. Si vous avez indiqué la liste de prix Vente, alors le prix unitaire sera la prix de vente.

### 2.3 Validité

- **Valide à partir du** : Choisir la date dans le champs **Valide à partir du** et **Valide jusqu'au** pour confirmer la période de validité
- Dans le champ **Délai en Jours**： vous pouvez entrer un nombre pour indiquer le nombre de jours pour prolonger la période de validité

### 2.4 Note

- **Note**: Possibilité d'ajouter les commentaires pour cette création

## 3. Options supplémentaires

Un prix peut donc être déterminé pour un article et une liste de prix, sans spécificités additionnelles si celui-ci s'applique dans toutes les circonstances.  
Mais il est également possible de réduire le périmètre d'application de ce prix en définissant spécifiquement:

- Une unité de mesure
- Une unité d'emballage
- Un client ou un fournisseur

Si ces champs sont remplis, le prix ne s'appliquera que si la condition est remplie.

## 4. Gestion des évolutions de prix

Vous pouvez définir des dates de validité pour vos prix.  
Celles-ci permettent de conserver la trace des différents prix applicables dans le temps, mais également de passer à une nouvelle tarification sans impact sur les factures encore à émettre avec l'ancien prix.