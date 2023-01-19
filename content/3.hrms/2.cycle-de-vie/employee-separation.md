---
title: Départ des employés
description: 
published: true
date: 2021-06-04T10:04:16.466Z
tags: 
editor: markdown
dateCreated: 2021-06-04T09:01:41.915Z
---

# Départ des employés

Le départ d'un employé est une situation où l'accord de service d'un employé avec son organisation prend fin et l'employé quitte l'organisation.

La séparation des employés est créée pour un employé qui a démissionné ou qui a quitté l'organisation.

**Cas d'utilisation** : supposons que les activités suivantes doivent être effectuées dès qu'un employé quiite l'organisation.

- Récupérer l'ordinateur portable
- Effacer les cotisations
- Supprimer le compte de messagerie de l'employé
- Récupérer la carte d'identité

---

Dans Dokos, ces activités standard peuvent être suivies dans le modèle de séparation des employés. 

Pour accéder à la **liste de départ des employés**, allez à :

> Ressources humaines > Cycle de vie des employés > **Départ des employés**

![départ_des_employés.png](/content/rh/employee-seperation/départ_des_employés.png)

## 1. Prérequis avant utilisation

Avant de créer une séparation d'employé, il est conseillé de créer les documents suivants :

- **[Employé](/rh/employee)**
- **[Département](/rh/department)**
- **[Désignation](/rh/designation)**
- **[Échelon de l'employé](/rh/employee-grade)**

## 2. Comment créer une séparation d'employés

1. Accédez à la liste de Départ des employés, cliquez sur **:heavy_plus_sign: Ajouter Départ des employés**.
2. Sélectionnez l'employé. Une fois l'employé sélectionné, les informations correspondantes sur l'employé, telles que le service, la désignation et le grade de l'employé, seront automatiquement récupérées.

![nouveau_départ_des_employés.png](/content/rh/employee-seperation/nouveau_départ_des_employés.png)

3. Sélectionnez le modèle de départ des employés . En fonction du modèle sélectionné, des informations telles que le service, la désignation et le grade de l'employé seront automatiquement récupérées (si déjà mentionnées dans le modèle de séparation).
4. Saisissez la date de la lettre de démission.
5. De plus, vous pouvez également saisir le résumé de l'entretien de sortie.
6. Enregistrer et envoyer.

![modèle_départ.png](/content/rh/employee-seperation/modèle_départ.png)

::alert{type=warning}
**Remarque 1** : Si un modèle de départ d'employés n'est pas créé, vous pouvez directement remplir les informations de séparation dans le doctype de séparation d'employés lui-même.
::

::alert{type=warning}
**Remarque 2** : Le **Statut** de la cessation d'emploi de l'employé deviendra Terminé une fois que toutes les activités associées seront terminées.
::

## 3. Caractéristiques

### 3.1 Modèle de séparation des employés

Le modèle de départ des employés est un modèle qui contient une liste prédéfinie d'activités pour la séparation des employés. Un modèle de séparation d'employés peut être créé pour un service, une désignation et un grade d'employé particuliers.

**Pour créer un nouveau modèle de départ des employés** :

Pour accéder au nouveau modèle de départ des employés, allez sur :
> Liste Ressources humaines > Cycle de vie des employés > Modèle de départ des employés > **Ajouter Nouveau modèle**.

1. Entrez le département, la désignation et le grade de l'employé (facultatif).
2. Mentionnez les activités pour la séparation. Pour chaque Activité, vous pouvez également mentionner l'Utilisateur ou le Rôle, ou l'un d'entre eux, auquel cette Activité sera attribuée.

### 3.2 Tâches et affectations

Lors de la soumission de la séparation des employés, un projet sera créé. Dans le projet, des tâches seront également créées pour chaque activité.

Vous pouvez afficher les projets et tâches créés via Affichage > Projet/Tâches.

De plus, chaque activité peut se voir attribuer des poids en fonction de son importance.

En fonction de la progression des tâches, la progression peut être mise à jour dans le processus de séparation des employés.

### 3.3 Statut d'employé

Vous pouvez afficher directement l'employé séparé via le doctype Vue de départ des employés > **Employé** ; une fois le formulaire soumis.


