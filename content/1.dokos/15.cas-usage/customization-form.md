---
title: Ajouter / Masquer un champ dans un formulaire
description: 
published: true
date: 2022-02-07T16:48:26.933Z
tags: 
editor: markdown
dateCreated: 2022-02-04T15:09:47.681Z
---

# Ajouter / Masquer un champ dans un formulaire

Dans Dokos, tous les documents présents peuvent être modifiés. Tous les documents présents dans Dokos sont considérés comme un Type de document Standard. Ils sont pré-configurés et ne pourront pas être modifié depuis Type de document. 

Il faudra alors faire Personnaliser le forumlaire pour ajouter, masquer des champs. Certains champs qui sont obligatoire ne pourront pas être supprimés mais ils pourront être cachés.

---

Pour accéder à la personnalisation des formulaires, allez sur :
> Accueil > Personnalisations > Personnalisation de formulaire > Personnaliser un formulaire


## 1. Comment accéder à la personnalisation du formulaire depuis le document ?

Vous pouvez également accéder à la personnalisation du formulaire en allant sur le document que vous voulez modifier.

**Dans ce Cas d'usage nous allons choisir de modifier le formulaire du client**

1. Allez sur la liste Client
2. En haut à droite : Cliquez sur les 3 points ...
3. Cliquez sur **Personnaliser**

Vous allez être rédirigé sur le **document Personnaliser un formulaire**.

Le nom du type de document sera automatiquement mis sur **Customer** (Client)

### Rappel : Les différents champs disponibles pour structurer le formulaire

- **Libelle** : Nom du champ créé.
Le Type permet de définir le type de ces données, il existe plusieurs choix possible. Les plus utilisés sont :
- **Type Donnée** : Vous pouvez renseigner du texte personnalisé.
- **Type Lien** : Vous pouvez choisir les données d'un autre document et il vous permet de rediriger et lier le document à un autre.
- **Type Date** : le champ est mis sous le format d'une date.
- **Type Saut de colonne** : Il permet de créer un saut de ligne entre les champs.
- **Type Saut de section** : Vous permet de segmenter votre document en plusieurs parties. Par exemple, Détails généraux, Table des articles, Termes et conditions etc..
- **Type Sélectionner** : Vous pouve donner des choix en Options
…
- **Obligation** : Si la case est coché, ce champ sera obligatoire pour pouvoir le valider.
- **Options** : Quand le Type de donnée est Sélectionner ou Lien, vous devez saisir les choix ou le nom de type de document pour rediriger la page...

## 2. Masquer des champs

1. Pour masquer des champs, il suffit d'aller sur la section Champs puis sur le champs que vous souhaitez masquer et cliquez à droite sur **Modifier**.

2. Dans le fomulaire client, nous souhaitons cacher la **section Comptabilité**.

![masquer-section-comptabilite.png](/content/use-cases/masquer-section-comptabilite.png)

3. Il faut repérer le Libellé **Accounting** (les noms des champs sont en anglais) = Comptabilité.

::alert
Les noms des sections sont en **Gras**
::

Ici, on voit que le type de champ est une section **Saut de section**.

4. Cliquez sur **Modifier** tout à droite du champ.
5. Descendez jusqu'à la case **Masqué**, puis cochez la case pour que la section soit Masqué sur le formulaire.

![cachez-un-champ.png](/content/use-cases/cachez-un-champ.png)

::alert{type=warning}
Si vous cachez le champ avec le type **Saut de section**, alors toute les champs présents à l'intérieur de cette section seront masqués.
::

6. Quittez le Pop Up / Fenêtre surgissante et faites **Enregistrer**

**La section a bien été retirée sur le fomulaire client.**

## 3. Ajouter des champs

**Dans ce Cas d'usage nous allons choisir de modifier le formulaire du Devis**

Nous allons ajouter un champ **Information** sur le devis. Ce champ permettra d'ajouter des informations personnalisées sur l'article qui sera envoyé dans le devis.

::alert{type=warning}
Ce champ **Information** fait partie de la table article. Cette table d'article est modifié depuis le formulaire Personnalisé : **Item quotation** (Article du devis)
::

![ajouter-champ-informations.png](/content/use-cases/ajouter-champ-informations.png)

1. Allez sur : > Accueil > Personnalisation > **Personnaliser Formulaire**
2. Sélectionnez le formulaire **Article du Devis** (Item quotation).
3. Pour ajouter des champs, il suffit d'aller sur la section Champs puis allez tout en bas de la liste des champs et cliquez sur **Ajouter une ligne**.
3. Remplir la ligne avec les informations suivantes : 
	- **Libellé** : Nom du champ "Information"
 	 -	**Type** : Éditeur de texte 
   -	**Obligatoire** : Laissez la case décochée
4. Faites **Modifier** tout à droite.

Voici différents otpions que vous pouvez appliquer :
- **Obligatoire** : Ce champ sera obligatoire pour valide le formulaire
- **Unique**
- **Ajouter une colonne pour ce champ dans la vue en liste**
- **Ajouter un filtre standard pour ce champ**
- **Ajouter à la recherche globale**
- **Prévisualisation**
- **Mettre en évidence**
- **Ajouter dans les entrées rapides**
- **Traduisible**

Dans notre cas, nous allons cochez les champs :
- **Ajouter une colonne pour ce champ dans la vue en liste**
- **Traduisible**

5. Dans le Pop-up, cliquez sur  Déplacer en haut à droite et indiquez la position 5.
6. Puis faites **Enregistrer** le formulaire

Maintenant, si vous retournez sur le formulaire du Devis, vous allez avoir ce nouveau champ qui sera dans la table d'article. 

::alert{type=warning}
Si vous voulez que ce champ soit repris sur la commande et la facture, il faut faire la même manipulation mais pour les Formulaires **Article de la commande** et **Article de la facture**. 
Il faut garder le même nom de libellé pour que ce champ reprenne bien l'information une fois que vous avez validé le devis et que vous le passez en commande.
::







