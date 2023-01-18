---
title: Tranche d'impôt sur le revenu
description: 
published: true
date: 2021-06-18T13:24:49.284Z
tags: 
editor: markdown
dateCreated: 2021-06-17T13:12:47.934Z
---

# Tranche d'impôt sur le revenu

La tranche d'impôt sur le revenu est un document permettant de définir les taux d'imposition sur le revenu en fonction de différentes dalles de revenu imposable.

Dans de nombreux pays, l'impôt sur le revenu est prélevé sur les contribuables individuels sur la base d'un système de dalle où différents taux d'imposition ont été prescrits pour différentes dalles et ces taux d'imposition continuent d'augmenter avec une augmentation de la dalle de revenu. Dans ERPNext, vous pouvez définir plusieurs tranches d'impôt sur le revenu et les lier à la structure salariale de chaque employé via l'affectation de la structure salariale.

---

Pour accéder à **la liste tranche d'impôt sur le revenu**, allez sur : 

> Accueil > Paie > **Tranche d'impôt sur le revenu**

![liste_tranche_d'impôt.png](/content/payroll/income-tax-slab/liste_tranche_d'impôt.png)

## 1. Comment créer une tranche d'impôt sur le revenu

1. Entrez un nom pour **la tranche d'impôt** sur le revenu, l'**entreprise** et la **date** à partir de laquelle il entrera en vigueur.
2. Cochez la case **Autoriser l'exonération fiscale**  le cas échéant.
3. Enregistrer et envoyer.

![détails_tranche_d'impôt.png](/content/payroll/income-tax-slab/détails_tranche_d'impôt.png)

## 2. Caractéristiques

### 2.1 Tranches de salaire imposables

Dans la table de tranches de salaires imposables, vous pouvez définir le taux pour différentes tranches de revenu. Pour définir la tranche, les champs **Du montant** et **Au montant** doivent être saisis. Pour la première tranche, **Du montant** est facultatif et pour la dernière tranche, **Au montant" est facultatif. Le montant est inclus tout en évaluant l'impôt sur la base du revenu imposable.

La tranche fiscale peut être applicable selon des conditions particulières. Les conditions peuvent être écrites en utilisant tous les noms de champ des documents Employé, Structure salariale, Affectation de la structure salariale et Fiche de salaire.

![tranches_de_salaire_imposables.png](/payroll/income-tax-slab/tranches_de_salaire_imposables.png)


Exemples:

````
// Apply tax if employee born between 31-12-1937 and 01-01-1958 (Employees aged 60 to 80)
date_of_birth > date(1937, 12, 31) and date_of_birth < date(1958, 01, 01)

// Apply tax by employee gender
gender == "Male"

// Apply tax by Salary Component
base > 10000

// Annual Taxable income is greater than 5 lakhs
annual_taxable_earning > 500000
````

### 2.2 Autres impôts et charges sur l'impôt sur le revenu

Si d'autres taxes sont applicables sur l'impôt sur le revenu calculé, vous pouvez les saisir à l'aide de ce tableau. Vous pouvez également définir le montant imposable min et max pour lequel cette taxe sera applicable. Par exemple, la taxe sur la santé et l'éducation est appliquée en plus à l'impôt sur le revenu pour tout le monde en France.

![taxes_et_frais_sur_l'impôt_sur_le_revenu.png](/content/payroll/income-tax-slab/taxes_et_frais_sur_l'impôt_sur_le_revenu.png)


### 2.3 Autres propriétés

Autoriser les exonérations fiscales : des exonérations fiscales peuvent être autorisées pour une tranche d'impôt sur le revenu spécifique. Si cette option est activée, lors du calcul des taxes sur la base de cette tranche d'impôt, la déclaration d'exonération fiscale des employés et la soumission de preuves sont prises en compte pour le calcul du revenu imposable.
Montant d'exonération fiscale standard : si l'exonération est autorisée, le montant d'exonération fiscale standard défini par le gouvernement peut être ajouté ici. Cette exonération ne nécessite généralement aucun justificatif et s'applique à tous les salariés liés à cette dalle d'impôt sur le revenu.

