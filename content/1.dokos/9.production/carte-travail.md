---
title: Carte de travail
description: 
published: true
date: 2021-05-31T14:09:52.749Z
tags: 
editor: markdown
dateCreated: 2021-05-31T13:57:01.565Z
---

# Carte de travail

Une carte de travail stocke des informations de production réelles sur une opération particulière effectuée sur un poste de travail particulier.

Une fiche de travail est créée à partir de l'ordre de travail et remise à chacun des postes de travail de l'atelier de fabrication pour démarrer la production d'un article avec une certaine quantité dans chacune des opérations définies dans l'ordre de travail.

La carte de travail permet au poste de travail de chaque opération d'émettre une **demande de matériel** et un **transfert de stock à la production** pour la matière première requise par rapport à une «carte de travail».

L'achèvement de la carte de travail changera le statut de production dans l'ordre de travail, nous pouvons suivre l'achèvement de la progression de la production pour chacune des opérations définies dans l'ordre de travail.

---

Pour accéder à la **liste des cartes de travail**, allez sur :

> Accueil > Production > Production > **Carte de travail**

![liste_carte_de_travail.png](/content/manufacturing/job-card/liste_carte_de_travail.png)

## 1. Prérequis avant utilisation

Avant de créer et d'utiliser une carte de travail, il est conseillé de créer d'abord les éléments suivants:

- **[Nomenclature](/manufacturing/bill-of-materials)**
- **[Opération](/dokos/production/operation)**
- **[Sation de travail](/manufacturing/workstation)**
- **Demande de service**

## 2. Comment créer une carte de travail

La fiche de travail pour les opérations est créée automatiquement lors de l'enregistrement d'un bon de travail.

Voici à quoi ressemble une carte de travail :

**Pour utiliser une carte de travail, procédez comme suit** :

1. Cliquez sur le bouton **Démarrer le travail**, puis sur **Terminer le travail** lorsque vous avez terminé.
2. Vous pouvez également renseigner l'heure de début et l'heure de fin dans le tableau Journaux horaires.
3. Sélectionnez l'employé à qui la carte de travail a été attribuée.
4. Entrez la quantité terminée. Il s'agit du nombre d'éléments sur lesquels l'opération a été effectuée pendant l'intervalle de temps sélectionné.
5. Ajoutez plus de lignes dans le tableau Journaux horaires et enregistrez l'heure à l'aide des boutons Démarrer / Terminé.
6. Cliquez sur **Enregistrer**.

![détails_carte_de_travail.png](/content/manufacturing/job-card/détails_carte_de_travail.png)

Dans un ordre de travail, les opérations et les postes de travail sont extraits de la nomenclature d'un article. Pour faciliter l'utilisation, vous devez vous assurer que la gamme est configurée dans la nomenclature.

Chaque carte de travail créée aura un poste de travail et des opérations assignés. La matière première requise de chaque entrepôt source sera calculée en fonction de la quantité requise pour la production.

Lors de la soumission d'un ordre de travail, les fiches de travail seront créées automatiquement en fonction des valeurs du tableau des opérations.

### 2.1 Sélectionner un bon de travail avec l'article à produire

Vous pouvez sélectionner **Transférer le matériel contre** comme **Fiche de travail** sur la nomenclature pour transférer les matières premières pour la production contre des fiches de travail.

Dans l'ordre de travail, vous pouvez sélectionner l'option :

### 2.2 Utilisation d'une carte de travail

L'affectation des employés et les détails du moment seront également définis dans la fiche d'emploi. Le temps nécessaire pour effectuer un travail peut être enregistré. Si plusieurs employés travaillent sur la même opération, ajoutez de nouvelles cartes de travail en cliquant sur le bouton **Créer une carte de travail**.

### 2.3 Demande de matériel contre Carte de travail

Une demande de matériel sera générée à partir de la carte de travail comme base / commande pour préparer la matière première nécessaire au processus de fabrication. La demande de matériel soulevée aura sa référence au numéro original de la carte de travail.

Suivez la progression de la fabrication dans l'ordre de travail par l'achèvement de chaque opération définie dans l'ordre de travail.

L'achèvement de la carte de travail vous permet de suivre la progression de la fabrication dans l'ordre de travail en examinant l'achèvement de chaque opération liée à l'ordre de travail.

## 3. Caractéristiques 
### 3.1 Suivi de l'inspection de la qualité 

Pour les ordres de production, la qualité des produits en cours de fabrication (semi-finis) doit également être suivie. 

Il est défini par le processus (opération) effectué sur celui-ci qui est à son tour défini dans la carte de travail. 

Les tests en cours de fabrication sont différents des tests de matériaux entrants et sortants. Le contrôle de la qualité lors de la fabrication permet de s'assurer que le produit fini fabriqué est de la qualité souhaitée. Vous pouvez créer un contrôle qualité pour l'article de production par rapport à la fiche de travail.