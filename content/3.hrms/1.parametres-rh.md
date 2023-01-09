---
title: Paramètres Ressources Humaines
description: 
published: true
date: 2022-11-03T11:18:29.299Z
tags: 
editor: markdown
dateCreated: 2021-06-15T09:16:46.500Z
---

# Paramètres Ressources Humaines

Les paramètres des Ressources Humaines permettent des paramètres globaux pour les documents liés aux RH.

---

Pour accéder à **la liste des paramètres RH**, allez sur :

> Accueil > Ressources humaines > Paramètres > **Paramètres RH**

Différents paramètres sont disponibles dans les paramètres HR.

## 1. Paramètres des employés

### 1.1. L'âge de la retraite

Vous pouvez saisir l'âge de départ à la retraite (en années) de vos salariés.

### 1.2 Dossiers des employés à créer par

La dénomination des documents des employés est basée sur la valeur sélectionnée dans ce champ.

- **Série de nommage** : Les documents d'employé créés seront nommés en utilisant la série de nommage sélectionnée dans le champ 'Série'.
- **Numéro d'employé** : Le champ Numéro d'employé devient visible en sélectionnant ce champ, et la dénomination du document d'employé se fait en fonction de ce champ.
- **Nom complet** : Le document de l'employé est nommé en utilisant le nom complet de l'employé.

### 1.3 Arrêter les rappels d'anniversaire

Un e-mail est envoyé à tous les employés de l'entreprise lorsqu'un employé a un anniversaire. Pour empêcher l'envoi de cet e-mail, vous pouvez cocher cette option.

### 1.4 Approbateur des dépenses obligatoire dans la demande de remboursement

Dans le document de demande de remboursement, le champ « Approbateur de dépenses » est défini sur obligatoire lorsque vous cochez cette option.

Les paramètres de paie feront partie des paramètres de RH jusqu'à la version 1.4.0 Dans la version 2.0.0, les paramètres de paie feront partie du nouveau module, Paie.

## 2. Paramètres de paie 

### 2.1 Calculer les jours de travail payés sur la base de

Les jours ouvrables dans le bulletin de salaire peuvent être calculés sur la base des congés ou de présence. Vous pouvez sélectionner l'option en fonction de ce que vous souhaitez calculer.

### 2.2 Heures de travail max par rapport à la feuille de temps

Pour les fiches de salaire basées sur la feuille de temps, vous pouvez définir le nombre maximum d'heures autorisées par rapport à une seule feuille de temps. Définissez cette valeur sur zéro pour désactiver cette validation.

### 2.3 Inclure les vacances dans le nombre total de jours ouvrés

Si coché, le nombre total de jours ouvrables inclura les jours fériés, ce qui réduira la valeur du salaire par jour.

### 2.4 Désactiver le total arrondi

Vous pouvez l'activer pour désactiver l'arrondi du montant total dans les bulletins de salaire.

### 2.5 Fraction du salaire quotidien pour une demi-journée

Sur la base de cette fraction, le salaire pour la demi-journée sera calculé. Par exemple, si la valeur est définie sur 0,5, la moitié du salaire sera attribuée pour une demi-journée de présence.

### 2.6 Envoyer la fiche de paie à l'employé par Mail

Un e-mail avec le bulletin de salaire est envoyé à l'adresse e-mail préférée de l'employé respectif lors de la soumission du bulletin de salaire.

### 2.7 Crypter les fiches de salaire dans les e-mails

Le bulletin de salaire PDF envoyé à l'employé est crypté à l'aide de la politique de mot de passe mentionnée.

### 2.8 Politique de mot de passe

Ce champ devient visible et obligatoire en cochant l'option ci-dessus pour crypter le bulletin de salaire dans l'email.

Voici un exemple de la façon de définir une politique de mot de passe pour le bulletin de salaire PDF.

Exemple:

````
SAL-{first_name}-{date_of_birth.yea)
`````
Cela générera un mot de passe comme SAL-Jane-1972

### 2.9 Afficher le solde de congés dans la fiche de paie

Si coché, alors la fiche de paie indiquera le solde des congés de l'employé.

## 3. Paramètres des congés

![paramètres_des_congés.png](/humains-ressources/hr-settings/paramètres_des_congés.png)

### 3.1 Modèle de notification d'approbation de congé

Lors de la création ou de la mise à jour d'une demande de congé avec un approbateur de congé, un e-mail est envoyé à cet approbateur de congé pour l'informer de la nouvelle demande de congé. Le modèle d'e-mail utilisé à cet effet peut être sélectionné ici.

### 3.2 Modèle de notification de statut de congé

Lors de la soumission/annulation d'une demande de congé, l'employé reçoit un e-mail avec le statut mis à jour de sa demande de congé. Le modèle d'e-mail utilisé à cet effet peut être sélectionné ici.

### 3.3 Approbateur de congé obligatoire dans la demande de congé

Dans le document de demande de congé, le champ « Approbateur de congé » est défini sur obligatoire lorsque vous cochez cette option.

### 3.4 Afficher les congés de tous les membres du département dans le calendrier 
Les congés approuvés de tous les employés du même service sont affichés dans la vue du calendrier en cochant cette option.

### 3.5 Encaissement automatique des congés 
Si cette case est cochée, le système génère un projet d'enregistrement d'encaissement des congés à l'expiration de l'allocation de congés pour tous les types de congés encaissables.

### 3.6 Restreindre la demande de congé antidatée

Si coché, le système ne permettra pas de faire une demande de congé antidatée.

### 3.7 Attribution automatique des congés en fonction de la politique de congé

Si coché, les congés seront accordés aux employés automatiquement en fonction de la date d'entrée en vigueur conformément à la présente affectation de la politique de congé.

### 4. Paramètres de recrutement

#### 4.1 Vérifier les postes vacants lors de la création d'une offre d'emploi

Lors de la création d'une offre d'emploi pour un poste particulier, les postes vacants présents dans le plan de dotation pour ce poste sont vérifiés pour avertir l'utilisateur de la surembauche pour un poste particulier.
