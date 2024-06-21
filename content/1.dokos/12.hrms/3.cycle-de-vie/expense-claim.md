---
title: Note de frais
description: Les notes de frais dans Dokos sont conçues pour faciliter la gestion et le remboursement des dépenses professionnelles engagées par les employés. Elles permettent une gestion organisée et efficace des dépenses, facilitant la soumission, l'approbation, le traitement comptable et l'analyse des coûts.
---

Une **note de frais** est un document utilisé pour enregistrer et suivre les dépenses engagées par les employés au nom de l'entreprise. Ces dépenses peuvent inclure les frais de déplacement, les repas, les fournitures de bureau, le carburant, etc. La note de frais permet aux employés de soumettre les dépenses qu'ils ont payées de leur propre poche pour être remboursées par l'entreprise.

> Ressources humaines > Notes de frais > **Demandes**

Prérequis :

1. [Employé](/dokos/hrms/cycle-de-vie/employee)
2. [Département](/dokos/hrms/parametrage/departement)
3. [Modèle de taxes et frais d'achat](/dokos/achats/taxes)

Avant de créer des notes de frais ou des dépenses, vous devez définir vos modèles de types de notes de frais ainsi que les modèles de taxes associés.

### 1. Type de note de frais

::tour{demo="Mappemonde" doctype="expense-claim-type"}
Créer un type de note de frais dans la démo
::


Les types de notes de frais permettent de catégoriser et de gérer les différentes dépenses engagées par les employés. Cela aide à standardiser les processus de soumission, d'approbation, et de remboursement des frais.

Les administrateurs ou responsables de la comptabilité peuvent définir différents types de notes de frais pour catégoriser les dépenses.

**1.1. Ajouter un nouveau type de note de frais :**

- Remplir les champs requis :

1) **Nom du type de note de frais :** 
Par exemple, "Carburant", "Hébergement", "Repas", "Fournitures de Bureau", etc.

2) **Compte de dépense associé :** Sélectionner le compte de dépense approprié dans le plan comptable de votre entreprise.

3) **Taux de TVA applicable :** Spécifier le modèle de taxes, si nécessaire.

![Cette image permet de visualiser le formulaire : type de note de frais.](/typedenotedefrais10.png)

#### 1.2. Modèle de taxes
::tour{demo="Mappemonde" doctype="purchase-taxes-and-charges-template"}
Créer un modèle de taxe dans la démo 
::


Créer un modèle de taxes sur un montant TTC car les employés vont saisir leurs montants en net TTC.

![Image permettant de visualiser la liste des modèles de taxes par défaut.](/Modeledetaxesetfraisdachat.png)

Vous pouvez dupliquer les modèles par défaut, en modifiant le nom et la règle pour définir la taxe sur le montant TTC ou alors vous pouvez créer des modèles selon vos besoins.

![Image permettant de visualiser l'onglet permettant de dupliquer un formulaire.](/dupliquerunmodeledetaxe.png)![Image permettant de visualiser la zone indiquant : Cette taxe est-elle incluse dans le total net.](/modeledetaxesurttc.png)

### 2. Créer une dépense

::tour{demo="Mappemonde" doctype="expense"}
Créer une dépense dans la démo 
::
![Image permettant de visualiser le formulaire d'une nouvelle dépense.](/Nouvelledepense.png)![Image permettant de visualiser les dépenses d'un employés lors d'une formation.](/plusieursd%C3%A9penses.png)

2.1. Créer une dépense :


Renseignez les éléments suivants :

1. Date de la note de frais
2. Indiquez le détail des charges en sélectionnant le type de dépense approprié. Si votre dépense inclut plusieurs taux de TVA, veuillez créer une ligne distincte pour chaque taux de TVA différent.
3. Vous pouvez saisir de centre de coûts et le projet associé à la dépense, si nécessaire.

##### 2.2. TVA différente sur la même dépense :

Lorsqu'un ticket de caisse contient deux taux de TVA différents, par exemple dans le cas d'un repas au restaurant avec une boisson alcoolisée ou lorsqu'une note correspond à une dépense de carburant, il faut procéder de la manière suivante :

La gestion de la TVA sur les tickets peut être effectuée en enregistrant deux lignes distinctes dans la dépense ou note de frais. Cela permet de séparer les éléments soumis à des TVA distincte.

> Exemple pour le carburant :
>
> La gestion de la TVA pour les tickets de carburant peut se faire en utilisant deux lignes distinctes. Pour une dépense ou note de frais, ajoutez une ligne représentant 80% du montant pour le type de frais « Carburant avec TVA (20%) » et une autre ligne représentant 20% du montant pour le type de frais « Carburant sans TVA ».
>
> 1. **Carburant avec TVA déductible (80%) :** Montant 120\*0.8 = 96 EUR (80% de 120 EUR)
> 2. **Carburant sans TVA déductible (20%) :** Montant 120\*0.20 = 24 EUR (20% de 120 EUR)
>
> ![Cette image permet de visualiser la dépense de carburant avec deux lignes de TVA.](/d%C3%A9pensecarburant.png)

2.3. Créer une note de frais à partir des dépenses :

![Image permettant de visualiser la création d'une note de frais à partir des dépenses.](/cr%C3%A9erunenotedefraisapartirdesd%C3%A9penses.png)

Le tableau des charges est saisi automatiquement en reprenant les informations des dépenses.

![Image permettant de visualiser une note de frais, en attente.](/Notedefrais.png)

En vous rendant sur le détail de chaque ligne, vous pourrez retrouver la dépense associée.

![Image permettant de visualiser la partie détail de la dépense.](/notedefraisdetaildepense.png)

### 3. Note de frais

::tour{demo="Mappemonde" doctype="expense-claim"}
Créer une note de frais dans la démo 
::
![Cette image permet de visualiser une note de frais.](/notedefraisdirect.png)

#### 3.1. Créer une note de frais

1. Renseignez l'employé à l'origine de la dépense.
2. Ajoutez l'approbateur de la note de frais. (Elément à renseigner dans le département des postes)
3. Saisissez la date de la dépense, le type de demande de remboursement et le montant de la note de frais.
4. Calcul automatique ou ajouter les taxes manuellement. Si le montant des frais engagés est en net TTC et que vous choisissiez d'ajouter manuellement les taxes, cochez la case : **Taxe incluse dans le montant de la dépense** ![Image permettant de visualiser le calcul manuel de le TVA.](/notedefraisdirectcalculmanuel.png)
5. Insérer un justificatif : Vous pouvez joindre vos justificatifs de paiement en pièce jointe à gauche du formulaire.![Image permettant de visualiser la partie pièces jointes.](/ticketdecaissebureaunotedefrais.png)

#### 3.2. Comptabilité

Dans Détails comptables, sélectionnez le compte créditeurs par défaut de la société.

![Image permettant de visualiser la partie comptabilité de la note de frais.](/notedefraiscompta.png)

1. **Date de comptabilisation** et **Date de rapprochement** : Ces dates sont essentielles pour suivre la période fiscale à laquelle la dépense est liée et pour les opérations de rapprochement bancaire.
2. **Mode de paiement** : Important pour la gestion de trésorerie et la traçabilité des paiements.
3. **Montant non rapproché** : Affiche le montant de la note de frais qui n'a pas encore été rapproché. Un montant de 0,00 € indique que tous les montants ont été rapprochés. Cela aide à identifier les écarts potentiels ou les montants non encore justifiés.
4. **Comptes créditeurs** : Indispensable pour la génération d'écritures comptables précises.
5. **Projet et Centre de coûts** : Facilitent l'analyse financière par projet ou par unité de coût, assurant une meilleure répartition et gestion des dépenses.

#### 3.3. Plus d'informations

Visualisez le statut de la note de frais. Le statut peut être Brouillon, Approuvé ou Rejeté.

![Image permettant de visualiser la zone plus d'informations du formulaire note de frais.](/notedefraisplusdinformation.png)

#### 3.4. Tableau de bord

![Image permettant de visualiser la zone tableau de bord dans les notes de frais.](/notedefraistableaudebord.png)

Pour les notes de frais de grande valeur, il est possible de créer un acompte avant de traiter la note de frais complètement.
Ajouter une ligne avec les informations de l'acompte et de l'avance.

## 4. Flux de travail

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
