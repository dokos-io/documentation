---
title: Entrée de la paie
description: 
published: true
date: 2021-06-17T12:12:41.873Z
tags: 
editor: markdown
dateCreated: 2021-06-17T11:33:14.631Z
---

# Entrée de la paie

La masse salariale est la somme totale de toutes les rémunérations qu'une entreprise doit verser à ses employés pendant une période donnée ou à une date donnée.

Dans DOKOS, l'entrée de la paie permet le traitement en masse de la paie des employés. En d'autres termes, traiter les bulletins de salaire de tous les employés en une seule fois. Le traitement en bloc peut être à l'échelle de l'entreprise ou basé sur les catégories suivantes : succursale, service ou désignation.

---

Pour accéder à **la liste entrée de la paie**, allez sur :

> Accueil > Paie > **Entrée de la paie**

![liste_.png](/payroll/payroll-entry/liste_.png)

## 1. Comment créer une entrée de paie

1. Accédez à la liste Saisie de la paie, cliquez sur **:heavy_plus_sign: Ajouter Entrée de la paie**.
2. Sélectionnez la **fréquence de paie**.
3. Sélectionnez **Branche**, **Désignation** et **Département** pour filtrer les employés (facultatif).
4. Sélectionnez Projet (facultatif) si vous souhaitez exécuter la paie pour un projet.
5. Cochez les cases **Valider la présence** et **Fiche de salaire basée sur la feuille de temps** si vous souhaitez déduire le salaire en fonction de la présence et si vous souhaitez également prendre en compte les feuilles de temps des employés respectivement.
6. Sélectionnez le compte de paiement pour effectuer l'opération bancaire.
7. Enregistrer.

![détails_employés.png](/payroll/payroll-entry/détails_employés.png)

Une fois les informations enregistrées, cliquez sur le bouton Obtenir des employés pour obtenir une liste des employés pour lesquels les fiches de salaire seront créées en fonction des critères sélectionnés.

Une fois la liste des Employés récupérée, cliquez sur le bouton Créer des fiches de salaire pour générer des fiches de salaire.

> **Remarque** : Si les fiches de salaire sont déjà créées, le système ne créera plus de fiches de salaire. Vous pouvez également simplement enregistrer le formulaire en tant que brouillon et créer les fiches de salaire plus tard.
{.is-warning}

## 2. Caractéristiques

### 2.1 Employés

Dans cette section, sélectionnez la branche, le département et la désignation pour pouvoir filtrer les employés.

![employés.png](/payroll/payroll-entry/employés.png)

### 2.2 Sélectionner la période Paie

Indiquez ici la période de paie en mettant la date de début et la date de fin. Vous pouvez également, déduire la taxte pour les avantages soxiaux des employés non réclamés et déduire la taxe pour toute preuve d'exemption de taxe non soumise.

![période_de_paie.png](/payroll/payroll-entry/période_de_paie.png)

### 2.3 Dimensiosn comptables

Après avoir vérifié les bordereaux de salaire, vous pouvez les soumettre tous ensemble en cliquant sur le bouton Soumettre le bordereau de salaire.

Cela enregistrera également le compte Écriture de paiement de la paie par défaut par rapport aux chefs de dépenses respectifs (tels que configurés dans les composants de salaire) pour enregistrer l'accumulation de salaire pour les employés.

- **Centre de coûts** : Vous pouvez sélectionner Centre de coûts dans l'entrée de paie sur laquelle les dépenses seront imputées.

Si vous souhaitez comptabiliser des dépenses sur plusieurs centres de coûts en fonction de l'employé/du département, vous pouvez le faire en définissant le centre de coûts de la paie dans la fiche Employé/département. Le centre de coûts affecté dans le maître Employé/Département aura la priorité sur le centre de coûts sélectionné dans la saisie de la paie.

![dimensions_comptables.png](/payroll/payroll-entry/dimensions_comptables.png)

> **Remarque** : La soumission manuelle des bulletins de salaire un par un ne créera pas l'écriture de journal pour enregistrer l'accumulation de salaire.
{.is-warning}

### 2.4 Écriture de paiement

La dernière étape consiste à réserver le paiement du salaire.

Les salaires dans les entreprises sont généralement traités avec une extrême confidentialité. Dans la plupart des cas, les entreprises effectuent un paiement unique à la banque combinant tous les salaires et la banque distribue les salaires sur le compte de salaire de chaque employé.

De cette façon, il n'y a qu'une seule écriture de paiement dans les livres de comptes de l'entreprise et toute personne ayant accès aux comptes de l'entreprise n'aura pas accès aux salaires individuels.

L'écriture de paiement de salaire est une écriture de journal qui débite le total de la composante salariale de type Revenus et crédite le total de la composante salaire de type Retenues de tous les Employés au compte par défaut défini au niveau de la composante Salaire pour chaque composante.

Pour générer votre bon de paiement de salaire à partir de la **Saisie de la paie**, cliquez sur le bouton **Faire une saisie bancaire**.

L'entrée de la paie vous dirigera vers l'entrée de journal avec des filtres pertinents pour afficher les brouillons de pièces de journal créés. Vous devrez définir le numéro de référence et la date des transactions et soumettre l'écriture au journal.

![écriture_de_paiement.png](/payroll/payroll-entry/écriture_de_paiement.png)

> **Remarque** : Pour les éléments de salaire qui sont des avantages flexibles et pour lesquels la case Créer une écriture de paiement distincte contre demande d'avantages est cochée, ERPNext enregistrera des écritures de journal provisoires distinctes.
{.is-warning}



