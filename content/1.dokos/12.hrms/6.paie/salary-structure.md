---
title: Grille des salaires
description: 
published: true
date: 2021-06-17T09:38:54.265Z
tags: 
editor: markdown
dateCreated: 2021-06-17T09:05:35.232Z
---

# Grille des salaires

La structure salariale est le détail du salaire offert à un employé, en termes de répartition des différentes composantes constituant la rémunération.

Toute modification de la structure salariale, c'est-à-dire parmi les composants, peut avoir un impact majeur sur ce que fait l'employé, comme le type d'exonération fiscale réclamée.

Dokos vous permet de définir les gains et les déductions d'une structure salariale, la fréquence de paie et le mode de paiement, entre autres fonctionnalités.

---

Pour accéder à **la liste de grilles des salaires**, allez sur :

> Accueil > Paie > **Grilles des salaires**

![liste.png](/content/payroll/salary-structure/liste.png)

## 1. Prérequis avant utilisation

Avant de créer une structure salariale, il est conseillé de créer les éléments suivants :

- **[Composante salariale](/dokos/hrms/paie/salary-component)**

## 2. Comment créer une structure salariale

1. Accédez à la liste Structure salariale, cliquez sur **:heavy_plus_sign: Ajouter Grille des salaires**.
2. Saisissez le **nom de la structure salariale**.
3. Sélectionnez le **nom de l'entreprise** et la **fréquence de paie**.
4. **Enregistrer** et envoyer.

![détails_grille_salaires.png](/content/payroll/salary-structure/détails_grille_salaires.png)


## 3. Caractéristiques

### 3.1 Structure salariale pour le salaire basé sur les feuilles de temps

![fiche_de_temps.png](/content/payroll/salary-structure/fiche_de_temps.png)

Dans Dokos, vous pouvez également définir la structure salariale pour le bordereau de salaire basée sur la feuille de temps, ce qui permet à l'entreprise de payer l'employé selon les heures de travail.

Étapes pour créer une structure salariale basée sur les feuilles de temps :

1. Cochez la case Bulletin de salaire basé sur la feuille de temps .
2. Sélectionnez la composante salariale.
3. Entrez le taux horaire. Sur la base du taux entré, le montant des heures de travail pour la composante salariale sélectionnée sera calculé en conséquence.

#### Montant d'encaissement des congés par jour

S'il existe des congés encaissables pour un employé, vous pouvez définir le montant d'encaissement des congés par jour dans ce champ pour cette structure salariale particulière. Sur la base de la « composante de revenu » définie dans le type de congé encaissé et du montant par jour, la valeur de la composante de salaire sera calculée en conséquence dans le bordereau de salaire.

#### Prestations maximales (montant)

Dans ce champ, le montant maximum des avantages pour la structure salariale peut être spécifié. Si ce champ est rempli, assurez-vous que la structure salariale a une composante salariale avec la case « Est-ce que les avantages sont flexibles » coché, contre laquelle ce montant sera payé.

Une fois que toutes les informations sont enregistrées et soumises, vous pouvez attribuer la structure salariale à un employé via le bouton Attribuer une structure salariale ou en créant une nouvelle affectation de structure salariale via le tableau de bord.

Vous pouvez également affecter la structure salariale créée à plusieurs employés en fonction du grade de l' employé , du service , de la désignation , etc. via le bouton « Attribuer aux employés ». De plus, le bulletin de salaire peut également être créé directement via le tableau de bord.

### 3.2 Bénéfices et déductions

Les gains spécifient les éléments de salaire gagnés par un employé. Ces composants comprennent généralement les indemnités de base, les indemnités, les primes et les incitations qui sont ajoutées au salaire total de l'employé. D'autre part, les déductions spécifient les éléments de salaire qui sont déduits du salaire total de l'employé. Ceux-ci incluent généralement les taxes.

::alert{type=warning}
**Remarque** : Seuls les éléments de salaire définis comme « gains » seront affichés dans le tableau des gains et les éléments définis comme « retenues » seront affichés dans le tableau des déductions.
::

Pour créer des Revenus et des Déductions, sélectionnez la Composante Salaire dans la colonne Composant. Saisissez la formule/condition si elle n'a pas été spécifiée précédemment lors de la création de la composante salariale. De plus, vous pouvez également saisir un montant prédéfini dans la colonne Montant.

::alert{type=warning}
**Remarque** : Assurez-vous de cliquer sur la flèche vers le bas et d'activer la case à cocher « Montant basé sur la formule » au cas où la composante salariale est calculée à l'aide d'une formule.
::

![bénéfices_déductions.png](/content/payroll/salary-structure/bénéfices_déductions.png)

### 3.3 Compte

Dans cette section, le mode de paiement et le compte de paiement utilisé pour payer le salaire peuvent être spécifiés.

![compte.png](/content/payroll/salary-structure/compte.png)
