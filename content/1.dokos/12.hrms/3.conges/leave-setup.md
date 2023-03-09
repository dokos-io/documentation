---
title: Premiers pas avec les congés
---

Cet exemple est basé sur la configuration de démonstration de Dokos disponible à l'adresse https://demo.dokos.cloud

# Cas d'usage

Notre société Dokompany souhaite suivre les congés de ses employés.  
Ceux-ci ont le droit à deux types de congés: les congés payés et les RTT.  

Les congés payés correspondent à 25 jours annuels, crédités à raison de 2.08 jours par mois travaillés environ. La période d'allocation dure du 1er Juin au 31 Mai pour une consommation jusqu'au 31 Mai de l'année suivante.
Les RTT correspondent à 10 jours annuels (en 2020, 11 en 2021, ...), alloués le 1er Janvier et consommable entre le 1er Janvier et le 31 Décembre.


# Configuration

Afin de permettre à Dokos d'allouer correctement les congés aux employés, il faut configurer les éléments suivants:

### 1. La liste de congés

Les listes de congés se créent par année civile. Il faudra donc créer la liste de congés de cette année et celle de l'année prochaine pour permettre à nos congés payés d'être calculés jusqu'au 31 Mai.

Ensuite il faut bien penser à attribuer la liste de congés à nos employés.

### 2. Type de congés

Nous allons créer 2 types de congés:
- **Congés payés**
	Pour ce type de congés, le nombre de congés maximum autorisés et de jours consécutifs maximum applicables sera de 25.
	Ce type de congés sera également reportable pour permettre un report l'année suivante.
  On pourra également autoriser un solde négatif.
  
  S'agissant d'un congé acquis en fonction des jours travaillés, on cochera la case "Est un congé acquis" et la fréquence d'acquisition des congés se fera sur la base de la formule personnalisée "Congés payés sur jours ouvrés".

- **RTT**
	Pour ce type de congés, le nombre de congés maximum autorisés et de jours consécutifs maximum applicables sera de 10.
  Ce type de congés n'est pas reportable.
  
### 3. Période de congés (Optionnel)

Nous pouvons ensuite créer les périodes applicables pour chaque type de congés:
|Date de début|Date de fin|Types de congés|
|-------------|-----------|---------------|
|01/06/2020|31/05/2021|Congés|
|01/01/2020|31/12/2020|RTT|

### 4. Politiques de congés
 
Etant donné que nous allons avoir des périodes de congés différentes pour nos RTT et nos congés payés, nous allons créer deux politiques de congés différentes:

|Type de congés|Allocation annuelle|
|--------------|-------------------|
|Congés payés|25|


|Type de congés|Allocation annuelle|
|--------------|-------------------|
|RTT|10|


# Allocation de congés

Nous pouvons ensuite allouer nos politiques de congés à nos employés grâce à l'outil d'allocation de politique de congés.

Cet outil permet d'allouer des congés à un employé ou à plusieurs employés en même temps.

Créez une nouvelle allocation de politique congés, sélectionnez un employé et la politique de congés à lui associer.
Ensuite entrez les dates d'allocation des congés ou bien sélectionnez l'un des périodes de congés créées plus haut.

Validez et cliquez sur **Allouer des congés**.

# Calcul des congés acquis

L'allocation des congés acquis se fait en début de période et le nombre de congés alloués est initialement de 0.
Au cours de la période, l'allocation est modifiée et le total des congés attribué est incrémenté du nombre de congés calculés par le système en fonction des règles définies dans le [type de congés](/dokos/hrms/conges/leave-type).

Par exemple, pour les congés payés, il faudra créer des feuilles de présence pour chaque employé afin que le système puisse calculer correctement le nombre de congés à allouer.


---
**Suivant : [1. Liste de congés](/dokos/hrms/conges/holiday-list) :arrow_right:**
