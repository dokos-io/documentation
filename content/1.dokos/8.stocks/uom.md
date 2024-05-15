---
title: Unité de mesure (UDM)
description: Dokos rend la gestion des unités de mesure simple et efficace, vous permettant ainsi d'acheter et de vendre avec des unités de mesure différentes.
---

## Définition

Une unité de mesure est une référence standard utilisée pour **quantifier** et **gérer** différentes caractéristiques ou grandeurs spécifiques des produits, des stocks ou des services.

Elle permet de définir de manière précise comment les quantités sont exprimées et gérées dans le système, facilitant ainsi la gestion des stocks, des ventes et des achats.

## 1. Prérequis

Avant d'établir vos unités de mesure, il est important de prendre en compte plusieurs aspects.

- **Analyse des besoins métier :** Identifiez les besoins spécifiques de votre entreprise et de vos clients. Identifiez les types de produits ou services que vous proposez, ainsi que les différentes manières dont ils sont utilisés ou vendus.
- **Définition des processus :** Analysez votre manière, d'acheter, de vendre, de gérer des stocks, etc. Identifiez les étapes clés où les unités de mesure seront utilisées et les interactions entre ces étapes.
- **Considération des conversions :** Pensez aux différentes manières dont vos produits ou services peuvent être mesurés et vendus. Identifiez les taux de conversion nécessaires entre les différentes unités de mesure pour garantir une gestion cohérente des stocks, des ventes, etc.

## 2. La notion d’unité de mesure

Par défaut, Dokos propose de nombreuses unités de mesure (UdM).
Cependant, d'autres peuvent être ajoutées selon vos besoins.

Dans chaque unité de mesure, il existe une **option "Doit être un nombre entier"**. Si cette case est cochée, vous ne pourrez pas utiliser de nombres décimaux dans cette unité de mesure.

- Cela signifie que vous ne pourrez pas utiliser des quantités comme 1,5 ou 2,25 pour cette unité, mais seulement des nombres entiers comme 1, 2, 3, etc.

Pour plus de clarté, il est préférable **d'indiquer la plus petite unité de mesure** utilisée dans vos opérations.

### 2.1. Unités de mesure multiples pour un même article

Vous pouvez **définir plusieurs unités de mesure pour un même article**, ce qui est utile lorsque l'article est utilisé dans différentes unités. Lors de l'achat, avec une commande fournisseur en utilisant une unité comme la palette et ensuite lors d'une commande client en utilisant une unité comme le carton.

- Par exemple, mètres, palettes, rouleaux, boîtes, etc ou la durée (heures, demi-journées, journées) ou la capacité (nombre de personnes).

### 2.2. Facteur de conversion

Permet de définir des taux de conversion entre les différentes unités de mesure.

- Par exemple, vous pouvez spécifier combien de mètres correspondent à un rouleau ou combien de boîtes correspondent à un carton.

> En ce qui concerne les unités de mesure telles que la demi-journée ou la journée, il est important de configurer vos unités de mesure en minutes, car celles-ci sont invariables, contrairement à la demi-journée qui sera définie selon vos critères, par exemple : 4 heures pour une demi-journée, 6 heures pour une journée, etc.

![Image permettant de visualiser les paramètre du lieu afin de définir des conversion.](/conversionminute.png)

### 2.3. Utilisation lors d’achat ou de vente

Lorsque vous effectuez des achats, des ventes, vous pouvez spécifier les quantités dans l'unité de mesure correspondante. Dokos se charge alors de convertir automatiquement les quantités en fonction des taux de conversion définis.

Dans le contexte des réservations de salles, lorsque votre article est disponible sur le portail, Dokos va automatiquement récupérer l'unité de mesure appropriée et configurer les calendriers en conséquence. De plus, il affichera les prix corrects associés à cette unité de mesure pour faciliter la réservation et la tarification des salles.

### 2.4. Les prix

Dans Dokos, le prix est souvent associé à des unités de mesure pour faciliter la gestion des produits et services.

- **Prix par unité de mesure :** Vous pouvez définir un prix pour chaque unité de mesure de vos produits ou services. De cette façon, lorsque vous vendez un produit, le prix sera automatiquement calculé en fonction de la quantité vendue.
- **Tarifs multiples :** Vous pouvez également configurer des tarifs multiples pour un même produit ou service, en fonction de différentes unités de mesure. Par exemple, vous pouvez avoir un prix à la pièce pour un produit, ainsi qu'un prix par sachet pour le même produit. Cela vous permet de proposer des tarifs différents en fonction des besoins de vos clients.
- **Conversion des prix :** Dokos gère automatiquement la conversion des prix entre différentes unités de mesure. Par exemple, si un produit est vendu à la fois à la pièce et par sachet, le système calcule automatiquement le prix en fonction de l'unité de mesure sélectionnée par le client lors de la vente.
- **Gestion des listes de prix/ règle de prix :** Vous pouvez gérer plusieurs listes de prix, ce qui vous permet d'offrir des tarifs spéciaux ou des remises pour certains clients ou pour certaines périodes. Chaque liste de prix peut avoir des prix définis pour différentes unités de mesure.

::callout
Rendez-vous sur la page prix de la documentation.
::

## 3. Site Web 

Dans le **contexte des abonnements**, pour configurer plusieurs "unités de mesure" (mois, annuel) de l'abonnement sur le site web, accédez à la section "Article du Site web" que vous souhaitez modifier, puis modifiez le champ "Périodes de récurrence autorisées". Assurez-vous que les unités que vous utilisez existent dans votre table "Unité de mesure", et qu'il existe une conversion vers votre unité de base.

Lorsque votre article est disponible sur le site web, Dokos va automatiquement récupérer l'unité de mesure appropriée et configurer les calendriers en conséquence. De plus, il affichera les prix corrects associés à cette unité de mesure pour faciliter l'achat de l'abonnements.

::callout
Rendez-vous sur la page personnalisation du site web de la documentation.
::


## 4. Cas concret

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
