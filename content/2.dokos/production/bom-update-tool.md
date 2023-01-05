---
title: Outil de mise à jour de la nomenclature
description: 
published: true
date: 2022-11-02T09:01:42.397Z
tags: 
editor: markdown
dateCreated: 2021-06-01T12:01:03.015Z
---

# Outil de mise à jour de la nomenclature

Pour accéder à l'**outil de mise à jour de nomenclature**, allez sur :

> Accueil > Production > Outils > **Outil de mise à jour de nomenclature**

## 1. Comment utiliser l'outil de mise à jour de la nomenclature

Considérons un scénario pour mieux comprendre cela.

Supposons qu'une entreprise **produit des ordinateurs**, la nomenclature de l'ordinateur ressemblera à ceci :

1. Écran
2. Clavier
3. Souris
4. Processeur central (CPU)

Parmi tous les éléments ci-dessus, le processeur est assemblé séparément. Par conséquent, une nomenclature distincte sera créée pour la CPU. Voici les éléments de la nomenclature de la CPU.

1. Disque dur de 250 Go
2. Carte mère
3. Processeur
4. SMTP
5. Cecteur de DVD

Si d'autres articles doivent être ajoutés ou des articles existants doivent être modifiés dans la nomenclature de la CPU, créez une nouvelle nomenclature pour celle-ci.

1. Disque dur de 950 Go (Remplacement du disque dure de 250 go)
2. Carte mère
3. Processeur
4. SMTP
5. Lecteur de DVD

Sélectionnez la nomenclature actuelle et la nouvelle nomenclature de l'article de sous-assemblage :

Pour mettre à jour la nouvelle nomenclature dans toutes les nomenclatures parent, où l'UC est sélectionnée comme sous-assemblage, vous pouvez utiliser le bouton Remplacer .

En cliquant sur le bouton Remplacer, l'ancienne nomenclature du processeur sera remplacée par la nouvelle nomenclature dans la nomenclature de l'article fini (ordinateur).

L'outil de remplacement de nomenclature fonctionnera-t-il pour remplacer les articles éclatés dans la nomenclature parent?

Non, les articles éclatés qui n'ont pas de nomenclature propre ne peuvent pas être remplacés dans la nomenclature parent. Par exemple, considérez si le moniteur d'élément n'a pas de sous-assemblage et qu'il ne peut pas être mis à jour à l'aide de cet outil. Pour mettre à jour les articles éclatés, vous devez annuler et modifier la nomenclature actuelle ou créer une nouvelle nomenclature pour l'article fini.

## 2. Mettre à jour le coût de la nomenclature

En utilisant le bouton Mettre à jour le dernier prix dans toutes les nomenclatures , vous pouvez mettre à jour le coût de toutes les nomenclatures , en fonction du dernier prix d'achat / tarif tarifaire / taux de valorisation des matières premières. Ceci est utile si votre nomenclature mise à jour contient des articles avec des taux différents.

En cliquant sur ce bouton, le système créera un processus d'arrière-plan pour mettre à jour tous les coûts de la nomenclature. Il est traité via des travaux en arrière-plan car ce processus peut prendre quelques minutes (selon le nombre de nomenclatures) pour mettre à jour toutes les nomenclatures.

Cette fonctionnalité peut également être exécutée automatiquement quotidiennement. Pour cela, vous devez activer «Mettre à jour automatiquement le coût de la nomenclature» dans les paramètres de fabrication.