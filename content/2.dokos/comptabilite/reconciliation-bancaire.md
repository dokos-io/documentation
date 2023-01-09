---
title: Rapprochement bancaire
description: 
published: true
date: 2022-10-28T13:57:55.026Z
tags: 
editor: markdown
dateCreated: 2020-11-26T13:08:14.620Z
---

# Rapprochement bancaire

Le rapprochement bancaire sert à pointer les opérations enregitrées sur votre relevé bancaire avec les transactions enregistrées dans votre logiciel de gestion.

## 1. Comment importer ses relevés bancaires ?

### 1.1 Format OFX

1. Téléchargez votre relevé bancaire au format OFX.
2. Allez dans **Transaction Bancaire**, cliquez sur _Menu_ et sélectionnez **Télécharger un relevé en OFX**
3. Téléchargez vos transactions

Avec le format OFX, _Dokos_ ne créera pas de doublons, car chaque transaction est identifiée de manière unique.
Vous pouvez donc importer un fichier contenant des données déjà téléchargées.

### 1.2 Format CSV/XLSX

1. Sélectionnez la banque concernée par cet import dans la liste **Banque**
2. Dans la section _Configuration pour l'import de données_, créez un mapping entre les données d'en-tête de votre fichier CSV/XLSX et celles du type de document **Transaction Bancaire** de _Dokos_.
3. Téléchargez votre relevé bancaire au format CSV ou XLSX. Vérifiez que la ligne d'en-tête soit la première ligne du fichier.
4. Allez dans **Transaction Bancaire**, cliquez sur _Menu_ et sélectionnez **Télécharger un relevé en csv/xlsx**
5. Téléchargez vos transactions

Avec le format XLSX/CSV, si le champ `reference_number` n'est pas renseigné, le logiciel ne pourra pas identifier distinctement les transactions et importera les doublons.

### 1.3 Importer manuellement les transactions bancaire

#### Détails de la transaction

1. Allez dans la **liste Transaction bancaire**, puis cliquer sur **Ajouter une Transaction bancaire**
2. Indiquez la date de la transaction qui apparaît sur votre compte bancaire
3. Renseignez le numéro de référence de la transaction
4. Choisissez la société concerné par cette transaction
5. Indiquez le compte bancaire

#### Montant de la transaction

Indiquez le montant de la transaction, soit au débit s'il s'agit d'une sortie, soit au crédit s'il s'agit d'une entrée.

Vous pouvez ajouter une description si besoin.

## 2. Rapprocher les lignes de relevé bancaire

> Ouvrez la page **Rapprochement bancaire**

1. Sélectionnez le compte bancaire et la période concernés
2. Sélectionnez une ou plusieurs transactions bancaires
3. Sélectionnez le type de transaction à rapprocher
4. Vérifiez que le montant des transactions bancaires correspond au montant des transactions du système
5. Cliquez sur **Rapprocher**

### 2.1 Spécificités

#### Rapprochement 1 <-> n / n <-> n

L'outil de rapprochement permet de rapprocher une ou plusieurs lignes du relevé bancaire avec une transaction dans _Dokos_ (Ecriture de paiement, écriture de journal, ...)
Il permet également de rapprocher une ligne du relevé bancaire avec plusieurs transactions dans _Dokos_.
Par contre il ne permet pas de rapprocher plusieurs lignes du relevé bancaire avec plusieurs transactions en même temps.

::alert{type=info}
Si les options proposées par l'outil ne permettent pas de gérer certains cas de figures, vous pouvez toujours ouvrir la transaction et ajouter des lignes de rapprochement en allouant les montant rapprochés manuellement.
::

#### Création automatique de paiement

Si vous rapprochez une facture, _Dokos_ va automatiquement créer le paiement correspondant.
Par contre si la devise de la facture n'est pas celle du compte bancaire, il faudra créer le paiement manuellement.

### 2.2 Rapprochement automatique

#### Stripe

Si vous utilisez la passerelle de paiement Stripe, _Dokos_ peut rapprocher vos paiements avec les versements effectués par Stripe sur votre compte bancaire.
Il suffit pour cela de renseigner l'identifiant de "Charge" Stripe dans le champ "Chèque/N° de référence" de l'écriture de paiement.


#### Nom du document

Si vous demandez à vos clients de mettre le numéro de facture dans les références de virement, _Dokos_ peut alors faire le rapprochement automatiquement lorsque vous cliquez sur "Rapprochement automatique"

#### Options locales

La méthode **regional_reconciliation** permet de configurer des méthodes de rapprochement spécifiques à certaines régions.

##### Suisse

Vous pouvez ajouter un champ **esr_reference** dans vos factures pour que _Dokos_ les rapproche automatiquement sur la base du numéro ESR.

#### Hook

Le hook **auto_reconciliation_methods** permet de créer vos propres méthodes de rapprochement automatique dans une application personnalisée.
