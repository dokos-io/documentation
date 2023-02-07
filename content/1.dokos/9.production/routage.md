---
title: Routage
description: 
published: true
date: 2022-11-14T10:43:44.478Z
tags: 
editor: markdown
dateCreated: 2021-05-31T11:32:24.196Z
---

# Routage
Le routage est un modèle d'opérations de nomenclature.

Un routage stocke toutes les opérations avec la description, le taux horaire, la durée de l'opération, la taille du lot, etc. La création d'un routage pour vos opérations de nomenclature est utile lorsque des opérations similaires sont utilisées pour fabriquer différents articles.

---

Pour accéder à la **liste de routage**, allez sur :

> Accueil > Production > Liste de matériaux > **Routage**

## 1. Prérequis avant utilisation

- **[Opération](/manufacturing/operation)**
- **[Station de travail](/manufacturing/workstation)**

## 2. Comment créer un routage

1. Allez dans la liste de routage, cliquez sur Nouveau.
2. Entrez un nom pour le routage.
3. Saisissez les opérations dans la table des opérations de nomenclature:
	- Sélectionnez l'opération.
	- La station de travail par défaut sera récupéré.
	- Entrez le taux horaire pour exécuter cette opération.
	- Entrez la durée de fonctionnement en minutes.
	- Entrez la taille du lot, c'est-à-dire le nombre d'unités traitées dans cette opération.
	- Le coût de fonctionnement sera calculé en fonction du taux horaire et de la durée de fonctionnement.
4. Enregistrer.

Une fois créée, un routage peut être sélectionnée dans une nomenclature pour récupérer les opérations stockées dans le routage.

## 3. ID de séquence dans le routage

L'ID de séquence oblige les utilisateurs à effectuer les opérations de manière séquentielle via la carte de travail. Dans le cas où un utilisateur essaie de terminer une opération avant de terminer l'une de ses opérations précédentes selon l'ID de séquence, le système renvoie une erreur de validation.

