---
title: Unité de mesure (UDM)
description: Dokos rend la gestion des unités de mesure simple et efficace, vous permettant ainsi de suivre facilement toutes vos données essentielles.
published: true
date: 2021-05-26T09:58:36.011Z
tags: 
editor: markdown
dateCreated: 2021-05-26T09:57:05.007Z
---



## 1. Définition

Une unité de mesure est une référence standard utilisée pour **quantifier** et **gérer** différentes caractéristiques ou grandeurs spécifiques des produits, des stocks ou des services. 

Elle permet de définir de manière précise comment les quantités sont exprimées et gérées dans le système, facilitant ainsi la gestion des stocks, des ventes et des achats. 

## 2. La notion d’unité de mesure 

Par défaut, Dokos propose de nombreuses unités de mesure (UdM). 
Cependant, d'autres peuvent être ajoutées selon vos besoins. 

Dans chaque unité de mesure, il existe une **option "Doit être un nombre entier"**. Si cette case est cochée, vous ne pourrez pas utiliser de nombres décimaux dans cette unité de mesure. 

- Cela signifie que vous ne pourrez pas utiliser des quantités comme 1,5 ou 2,25 pour cette unité, mais seulement des nombres entiers comme 1, 2, 3, etc.



### 2.1. Unités de mesure multiples pour un même article 

Vous pouvez **définir plusieurs unités de mesure pour un même article**, ce qui est utile lorsque l'article est utilisé dans différentes unités 

- Par exemple, mètres, palettes, rouleaux, boîtes, etc ou la durée (heures, demi-journées, journées) ou la capacité (nombre de personnes). 


### 2.2. Facteur de conversion 

Permet de définir des taux de conversion entre les différentes unités de mesure. 
- Par exemple, vous pouvez spécifier combien de mètres correspondent à un rouleau ou combien de boîtes correspondent à un carton.


### 2.3. Utilisation lors d’achat ou de vente  

Lorsque vous effectuez des achats, des ventes, vous pouvez spécifier les quantités dans l'unité de mesure correspondante. Dokos se charge alors de convertir automatiquement les quantités en fonction des taux de conversion définis.


## 3. Cas concret 

1. Entreprise de fournitures de bureau

Une entreprise de vente de fournitures de bureau qui propose des cartouches d'encre pour imprimantes. Dans Dokos, l'entreprise peut définir les cartouches d'encre comme un article avec plusieurs unités de mesure, telles que unité, boîte et palette.

**Définition d'unités de mesure multiples :**

- Palette : Cette unité de mesure représente une palette entière de boîtes de cartouches d'encre, soit 50 boîtes de cartouches d'encre ou 500 unités.
- Boîte : Cette unité de mesure représente une boîte contenant plusieurs cartouches d'encre, une boîte de 10 cartouches.
- Unité : Cette unité de mesure représente une cartouche d'encre individuelle.

**Facteur de conversion :**

- 1 boîte = 10 unités de cartouches d'encre
- 1 palette = 50 boîtes de cartouches d'encre

**Utilisation lors d’achat ou de vente :**

Lorsque l'entreprise effectue des achats de cartouches d'encre, des ventes à ses clients, elle peut spécifier les quantités dans l'unité de mesure appropriée.

Lors d'une vente à un client, l'entreprise peut vendre une boîte de 10 cartouches d'encre à un prix de 50 €.
Lors d'un achat auprès d'un fournisseur, l'entreprise peut commander une palette entière de boîtes de cartouches d'encre à un prix de 2000 €.


Dokos se charge alors de convertir automatiquement les quantités en fonction des taux de conversion définis, tout en prenant en compte les prix associés à chaque unité de mesure. 

