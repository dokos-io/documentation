---
title: Inspection de la qualité
description: 
published: true
date: 2022-11-02T08:56:54.691Z
tags: 
editor: markdown
dateCreated: 2021-05-27T09:59:37.150Z
---

# Inspection de la qualité
Dans Dokos, vous pouvez marquer vos produits entrants ou sortants pour un contrôle qualité.

Pour accéder à cette fonctionnalité, allez sur :

> Accueil > Stock > Outils > **Inspection de qualité**

## 1. Prérequis avant utilisation 
Avant de créer et d'utiliser un contrôle qualité, il est conseillé de procéder comme suit au préalable:

- Créez un élément.
- Activez les critères de contrôle qualité dans la base de données articles . En activant l'une ou l'autre des cases à cocher, la soumission d'un document de livraison / réception de stock ne sera autorisée qu'après une inspection de qualité effectuée par rapport à celui-ci :
- (Facultatif) Créez un modèle d'inspection de la qualité . Vous pouvez ajouter des paramètres d'inspection et des critères d'acceptation dans le modèle, qui peuvent être facilement récupérés dans n'importe quel contrôle qualité. Après avoir enregistré le modèle, vous pouvez définir ce modèle dans la fiche article (comme indiqué ci-dessus)

## 2. Comment créer un nouveau contrôle de qualité

1. À partir d'un brouillon de reçu d'achat / bon de livraison, allez dans le champ Contrôle qualité de la table Article et cliquez sur Créer un nouveau contrôle qualité. Vous pouvez également créer un contrôle qualité pour Job Card afin de contrôler la qualité des articles en cours de fabrication. Dans ce cas, vous pouvez créer un contrôle qualité pour l'article de production dans la fiche de travail.
2. Sélectionnez le type de contrôle: Entrant (Achat), Sortant (Ventes) ou En cours (Fabrication).
3. Sélectionnez le type de document de référence, que ce soit le reçu d'achat, la facture d'achat, le bon de livraison, la facture de vente, la saisie de stock ou la fiche de travail.
4. Sélectionnez l'article et définissez la taille de l'échantillon qui sera inspecté. Notez que seuls les articles pour lesquels les critères d'inspection sont activés dans la base de données d'articles seront récupérés.
5. Le modèle de contrôle de la qualité défini dans la fiche article sera extrait.
6. Vous pouvez modifier les personnes inspectées et ajouter les personnes par lesquelles elles sont vérifiées.
7. Toute remarque supplémentaire sur l'inspection peut être ajoutée.
8. Enregistrer.

## 3. Caractéristiques 
Une seule inspection de la qualité comprend de nombreux contrôles de qualité (paramètres). Chacun de ces contrôles peut être numérique , non numérique ou basé sur une formule.

### 3.1 Vérifications numériques de la qualité 
Les contrôles de qualité numériques comprennent tous les contrôles qui nécessitent des lectures basées sur des nombres et des critères d'acceptation.

Par exemple, vérifier si une lecture se situe dans une certaine plage.

Par défaut, les contrôles sont numériques. Il existe deux champs: Valeur minimale et Valeur maximale , pour définir une plage dans laquelle chaque lecture doit se trouver. Ces champs peuvent être définis une fois dans le modèle de contrôle qualité et être simplement extraits dans le contrôle qualité.

Si l'une des lectures saisies ne se trouve pas dans cette plage, l'état de la ligne sera automatiquement défini sur «Rejeté» lors de l'enregistrement.

### 3.2 Contrôles de qualité non numériques (basés sur la valeur) 
Les contrôles de qualité non numériques comprennent les contrôles qui nécessitent des valeurs alphabétiques ou ceux qui ne nécessitent aucun calcul mathématique.

Par exemple, vérifier si la couleur est blanche dans un contrôle de qualité de couleur, valeurs Oui / Non pour certains paramètres, etc.

Pour les contrôles non numériques, cochez la case «Non numérique». Vous remarquerez que le champ Valeur des critères d'acceptation et la section Inspection basée sur la valeur sont visibles.

Entrez le champ Valeur de lecture. La valeur des critères d'acceptation peut être définie une fois dans le modèle de contrôle qualité, puis extraite dans le contrôle qualité.

Si la valeur de lecture ne correspond pas à la valeur des critères d'acceptation, l'état de la ligne sera automatiquement défini sur «Rejeté» lors de l'enregistrement.

### 3.3 Contrôles de qualité basés sur des formules 

Les contrôles de qualité basés sur des formules sont utiles pour les scénarios plus complexes où la simple spécification d'une plage ou d'une valeur d'acceptation ne suffit pas.

Par exemple, vérifier si la qualité d'un matériau est A / B / C, vérifier si la moyenne de certaines lectures se situe dans une certaine plage, etc.

Les contrôles de qualité basés sur des formules s'appliquent aux contrôles de qualité numériques et non numériques.

Cochez la case "Critères basés sur une formule" pour effectuer un contrôle de qualité basé sur une formule. Vous remarquerez alors un champ appelé Formule des critères d'acceptation dans lequel vous pouvez spécifier une formule qui détermine si une certaine vérification est acceptée ou rejetée. Cette formule peut être définie une fois dans le modèle de contrôle qualité, puis être extraite dans le contrôle qualité.

Cette formule dépend des nombreux champs de lecture du tableau des lectures.

Pour les lectures numériques, reading_1, reading_2etc. sont acceptés dans la formule.

Pour les lectures non numériques, seule reading_valueest acceptée dans la formule.

Voici quelques exemples de formules :

````
# Numeric
(reading_1 + reading_2) < 10 # sum of both readings is less than 10
(reading_1 + reading_2) <= 10 # sum of both readings is less than or equal to 10
mean < 15  # mean of non empty numeric readings is less than 15
(reading_1 * 2) < 20 # Reading 1 multiplied by 2 is less than 20
(reading_1) / 2 < 20 # Reading 1 divided by 2 is less than 20

# Non-numeric
reading_value in ("A", "B", "C") # Reading Value is either A / B / C
reading_value != "Red" # Reading Value is not equal to Red
````

Mettez à jour les lectures et enregistrez. Le champ Statut dans les lignes de la table Lectures est défini automatiquement en fonction de la formule d'acceptation.

### 3.3 Inspection manuelle 

Jusqu'à présent, tous les contrôles de qualité ont une acceptation / rejet automatique lors de l'enregistrement. Dans le monde réel, il peut y avoir des cas où un chèque est rejeté mais sera pourtant accepté parce qu'il y a une certaine tolérance.

De tels cas obligeront l'utilisateur à déterminer l'état au niveau de la ligne. Pour éviter toute interférence du système lors de ces contrôles, cochez la case «Inspection manuelle». Vous pouvez maintenant définir le statut manuellement et il ne sera pas touché lors de l'enregistrement.

Ici, la lecture 1 est en dehors de la plage définie, ce contrôle serait rejeté. Mais comme il n'est pas très loin de 0,153, nous l'acceptons manuellement.

Le statut de l'intégralité du contrôle qualité peut alors être décidé par l'utilisateur.

