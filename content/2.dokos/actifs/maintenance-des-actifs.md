---
title: Maintenance des actifs
description: 
published: true
date: 2021-06-24T11:49:45.920Z
tags: 
editor: markdown
dateCreated: 2021-06-24T10:06:29.345Z
---

# Maintenance des actifs

La maintenance des actifs fait référence à toute activité effectuée sur les actifs pour maintenir leurs performances ou leur état.

DOKOS fournit des fonctionnalités permettant de suivre les détails des tâches de maintenance/étalonnage individuelles pour un actif par date, la personne responsable de la maintenance et la date d'échéance de la maintenance future.

**Pour effectuer la maintenance des actifs dans DOKOS** :

1. Activez **Maintenance requise » à partir du document Actif**.
2. Créez une **équipe** de maintenance des actifs.
3. Créez la **gestion des actifs**.
4. Un journal de maintenance des actifs est créé.
5. Créer un journal de réparation d'actifs.

---

Pour accéder à la liste Maintenance des actifs, accédez à :

> Accueil > Actifs > Maintenance > **Maintenance des actifs**

![liste_maintenance.png](/asset/asset-maintenance/liste_maintenance.png)

## 1. Prérequis avant utilisation

Avant de créer et d'utiliser Asset Maintenance, il est conseillé de créer d'abord les éléments suivants :

- **[Actif](/fr/assets/asset)** avec la case « Maintenance requise » cochée.
- **[Équipe de maintenance des actifs](/fr/assets/asset-maintenance-team)**

## 2. Comment créer la maintenance des actifs

Pour chaque actif, créez un enregistrement de maintenance des actifs répertoriant toutes les tâches de maintenance associées, le type de maintenance (maintenance préventive ou étalonnage), la périodicité, l'affectation et les dates de début et de fin de maintenance. En fonction de la date de début et de la périodicité, la prochaine date d'échéance est automatiquement calculée et une tâche est créée pour le cessionnaire.

1. Accédez à la liste Maintenance des actifs, **:heavy_plus_sign: Ajouter Maintenance des actifs**.
2. Sélectionnez l'**actif** et la **catégorie d'actif**.
3. Sélectionnez l'**équipe de maintenance des actifs**.
4. Ajoutez des **tâches de maintenance** dans le tableau.
5. Définissez le statut de maintenance, qu'il soit « Planifié », « En retard » ou « Annulé ».
5. Sélectionnez une périodicité pour laquelle la tâche doit être effectuée. La prochaine date d'échéance sera calculée.
6. **Enregistrer**.

![détails_maintenance_des_actifs.png](/asset/asset-maintenance/détails_maintenance_des_actifs.png)

Après l'enregistrement, vous pouvez attribuer la tâche à un utilisateur.

## 3. Caractéristiques

### 3.1 Tâches d'entretien

- **Tâche de maintenance** : Qu'il s'agisse d'une activité de maintenance **préventive** ou d'un **étalonnage** pour restaurer un fonctionnement précis.
- **Statut d'entretien** : Prévu, En retard ou annulé
- **Périodicité** : Définissez la périodicité de la maintenance.
- **Attribuer à** : Indiquez à qui est attribuer la maintenance
- **Prochaine date d'échéance** : Si l'entretien n'a pas été effectué à la date prévue ou avant, la date réelle de l'entretien peut être enregistrée ici.

![tâches_maintenance.png](/asset/asset-maintenance/tâches_maintenance.png)

### 3.2 Maintenance des actifs dans ToDo

Lors de l'attribution de la maintenance à un utilisateur, elle apparaîtra dans la liste des tâches de l'utilisateur.