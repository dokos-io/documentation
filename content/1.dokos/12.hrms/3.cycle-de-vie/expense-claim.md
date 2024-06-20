---
title: Note de frais
description: null
published: true
date: 2021-06-10T07:13:47.657Z
tags: null
editor: markdown
dateCreated: 2021-06-09T14:35:57.890Z
---

# Note de frais

Prérequis :

1. Employé
2. Département
3. Modèle de taxes et frais d'achat

Avant de créer des notes de frais ou des dépenses, vous devez définir vos modèles de types de notes de frais ainsi que les modèles de taxes associés.

### Type de note de frais

Les types de notes de frais permettent de catégoriser et de gérer les différentes dépenses engagées par les employés. Cela aide à standardiser les processus de soumission, d'approbation, et de remboursement des frais.

Les administrateurs ou responsables de la comptabilité peuvent définir différents types de notes de frais pour catégoriser les dépenses.

**Ajouter un nouveau type de note de frais :**

- Remplir les champs requis :1) **Nom du type de note de frais :** Par exemple, "Carburant", "Hébergement", "Repas", "Fournitures de Bureau", etc.
  2) **Compte de dépense associé :** Sélectionner le compte de dépense approprié dans le plan comptable de votre entreprise.
  3) **Taux de TVA applicable :** Spécifier le modèle de taxes, si nécessaire.

![Cette image permet de visualiser le formulaire : type de note de frais.](/typedenotedefrais10.png)

#### Modèle de taxes

Créer un modèle de taxes sur un montant TTC car les employés vont saisir leurs montants en TTC.

![Image permettant de visualiser la liste des modèles de taxes par défaut.](/Modeledetaxesetfraisdachat.png)

Vous pouvez dupliquer les modèles par défaut, en modifiant le nom et la règle pour définir la taxe sur le montant TTC ou alors vous pouvez créer des modèles selon vos besoins.

![Image permettant de visualiser l'onglet permettant de dupliquer un formulaire.](/dupliquerunmodeledetaxe.png)![Image permettant de visualiser la zone indiquant : Cette taxe est-elle incluse dans le total net.](/modeledetaxesurttc.png)

### Dépense

![Image permettant de visualiser le formulaire d'une nouvelle dépense.](/Nouvelledepense.png)![Image permettant de visualiser les dépenses d'un employés lors d'une formation.](/plusieursd%C3%A9penses.png)

Créer une note de frais à partir des dépenses

![Image permettant de visualiser la création d'une note de frais à partir des dépenses.](/cr%C3%A9erunenotedefraisapartirdesd%C3%A9penses.png)![Image permettant de visualiser une note de frais, en attente.](/Notedefrais.png)

> Ressources humaines > Notes de frais > **Notes de frais**

## 2. Comment créer une note de frais

1. Allez dans la liste de Note de frais, cliquez sur **➕ Ajouter Note de frais**.
2. Sélectionnez le nom de l'employé dans le champ **De l'employé**.
3. Sélectionnez l'approbateur de la note de frais.

![charges\_notes\_de\_frais.png](/content/rh/expense-claim/charges_notes_de_frais.png)

### 3. Caractéristiques

### 3.1 Charges

Saisissez la date de la dépense, le type de demande de remboursement et le montant de la note de frais.

![charges.png](/content/rh/expense-claim/charges.png)

### 3.2 Frais et charges de la note de frais

De plus, vous pouvez également saisir les taxes et les frais de dépenses.

![frais\_et\_charges\_de\_la\_note\_de\_frais.png](/content/rh/expense-claim/frais_et_charges_de_la_note_de_frais.png)

### 3.3. Détails comptables

Dans Détails comptables, sélectionnez le compte créditeurs par défaut de la société.

![détails\_comptables.png](/content/rh/expense-claim/de%CC%81tails_comptables.png)

### 3.4 Dimensions comptables

Les dimensions comptables vous permettent d'étiqueter les transactions en fonction d'un territoire, d'une succursale, d'un client, etc. Cela facilite la visualisation des états comptables séparément en fonction des critères sélectionnés.

![dimensions\_comptables.png](/content/rh/expense-claim/dimensions_comptables.png)

### 3.4 Plus de détails

Visualisez le statut de la note de frais. Le statut peut être Brouillon, Approvué ou Rejeté.

![plus\_de\_détails.png](/content/rh/expense-claim/plus_de_de%CC%81tails.png)

### 3.5 Acomptes et avances

Pour les notes de frais de grande valeur, il est possible de créer un acompte avant de traiter la note de frais complètement.
Ajouter une ligne avec les informations de l'acompte et de l'avance.

![acomptes\_et\_avances.png](/content/rh/expense-claim/acomptes_et_avances.png)

## 3. Flux de travail

### 3.1 Approbation des dépenses

L'approbateur de la note de frais est choisi par un employé lui-même. L'employé peut choisir dans la liste des utilisateurs configurés en tant qu'approbateurs des dépenses pour leur service .

Lorsqu'une nouvelle note de frais est créée, si l'approbateur de dépenses sélectionné n'y a pas accès, le document est partagé avec l'approbateur avec l'autorisation « soumettre ».

Après avoir enregistré la note de frais, l'employé doit affecter le document à l'approbateur . Lors de l'affectation, l'utilisateur approbateur recevra également une notification par e-mail. Pour automatiser la notification par e-mail, vous pouvez également configurer l'alerte par e-mail

L'approbateur des notes de frais peut mettre à jour les « montants sanctionnés » par rapport au montant réclamé d'un employé. En cas de soumission, le statut d'approbation doit être soumis à Approuvé ou Rejeté. Si elle est approuvée, alors la demande de remboursement est soumise. En cas de rejet, les commentaires de l'approbateur des dépenses peuvent être ajoutés dans la section Commentaires expliquant pourquoi la demande a été approuvée ou rejetée.

### 3.2 Réservation de la dépense

Lors de la soumission d'une note de frais, le système comptabilise une dépense sur le compte de dépenses et le compte de l'employé

L'utilisateur peut afficher les notes de frais impayées à l'aide du rapport « Notes de dépenses non réclamées »

### 3.3 Paiement de la note de frais

Pour effectuer le paiement contre la note de frais, l'utilisateur doit cliquer sur Créer > Paiement.

#### Demande de remboursement

#### Saisie de paiement

::callout{color="amber" icon="i-heroicons-exclamation-triangle"}
**Remarque** : Ce montant ne doit pas être associé au Salaire car le montant sera alors imposable pour l'Employé.
::

Alternativement, une entrée de paiement peut être effectuée pour un employé et toutes les notes de frais en suspens seront extraites.

Comptabilité > Saisie de paiement > Nouvelle saisie de paiement

Définissez le type de paiement sur « Payer », le type de partie sur l'employé, la partie à l'employé payé et le compte à partir duquel le paiement est effectué. Toutes les demandes de remboursement en suspens seront extraites et les montants des paiements pourront être attribués à chaque dépense.

### 3.4 Lien avec la tâche et le projet

Pour lier une note de frais à une tâche ou un projet, spécifiez la tâche ou le projet lors de la création d'une note de frais.

Cela mettra à jour le coût du projet avec les montants des notes de frais
