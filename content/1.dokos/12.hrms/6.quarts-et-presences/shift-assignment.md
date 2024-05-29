---
title: Affectation de quart
description: 
published: true
date: 2021-06-14T09:15:57.748Z
tags: 
editor: markdown
dateCreated: 2021-06-14T09:02:40.452Z
---

# Affectation de quart

La section Gestion des quarts de travail des ressources humaines aide votre organisation à gérer les quarts de travail de vos employés.

Pour utiliser un type de quart dans Dokos,

- Configurer un type d'équipe.
- Entrez la demande de décalage.
- Afficher et gérer les affectations de quarts.

---

Pour accéder à **la liste de Affectation de quart**, allez sur :

> Accueil > Ressources humaines > Gestion des quarts > **Affectation de quart**

![liste_affectation_de_quart.png](/content/rh/shift-assignment/liste_affectation_de_quart.png)

## 1. Prérequis avant utilisation

- **[Employé](/dokos/hrms/cycle-de-vie/employee)**
- **[Type de quart](/dokos/hrms/quarts-et-presences/shift-type)**

## 2. Comment créer une affectation de quart

::callout{icon="i-heroicons-exclamation-triangle" color="amber"}
**Remarque** : Une fois la sélection de quart approuvée et soumise, elle crée automatiquement les affectations de quart pour un employé.
::

1. Accédez à la liste des demandes de décalage, cliquez sur **:heavy_plus_sign: Ajouter Affectation de quart**.
2. Sélectionnez Type de quart.
3. Définissez la durée de l'équipe à l'aide de la **date de début** et de **date de fin**.
4. Enregistrer.

![détails_affectation.png](/content/rh/shift-assignment/détails_affectation.png)

## 3. Configuration de l'approbateur de demande de quart

Un approbateur de demande d'équipe est un utilisateur qui peut approuver une demande d'équipe d'un employé. Dans Dokos, l'approbation de sélection de quart peut être paramétré à deux niveaux :

### 3.1 Niveau du département

Les approbateurs de demande de quart pour chaque département peuvent être configurés dans le maître du département . L'approbateur de demandes de quarts multiples peut être défini dans un service.

Lorsqu'un employé appartenant à un service particulier demande un type d'équipe, l'approbateur de demande d'équipe défini dans la fiche de service de cet employé sera considéré comme ses approbateurs de type d'équipe.

### 3.2 Niveau de l'employé

L' approbateur des demandes de quart peut également être défini par employé dans le fichier des employés.

Si l'approbateur des demandes de changement est défini à la fois au niveau de l'employé et au niveau du service, l'approbateur des demandes de changement au niveau de l'employé sera considéré comme l'approbateur des congés par défaut dans ce cas.



