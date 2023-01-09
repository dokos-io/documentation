---
title: Synchronisation bancaire
description: 
published: true
date: 2022-10-28T13:57:23.816Z
tags: 
editor: markdown
dateCreated: 2022-04-28T13:38:48.113Z
---

# Synchronisation Bancaire

Dans la nouvelle version 2.17 de Dokos, la synchronisation bancaire devient possible grâce à l'intégration Bridge powered by Bankin' qui vous permet de vous connecter à votre banque en toute sécurité.

- **Agréé par l'ACPR**
Bridge est encadré par la Directive Européenne sur les services de paiement n°2 (DSP2) et respecte les règles préconisées par la CNIL.

- **Sécurisé**
Bridge applique les mêmes standards de sécurité que les plus grandes banques internationales.

- **Privé**
L’ensemble de vos données sont chiffrées et vos identifiants de connexion ne seront jamais partagées.

La synchronisation bancaire va permettre de récupérer quotidiennement et automatiquement sur le site de votre banque toutes les opérations passées sur votre compte.

Après avoir renseigné votre identifiant et mot de passe, le site se connectera à votre compte pour récupérer toute l’antériorité disponible. L’antériorité varie selon les banques de quelques semaines à quelques mois.

## 1. Comment configurer la synchronisation bancaire ?

1. Allez sur la liste **Banque**, ajoutez une nouvelle banque ou modifiez une banque déjà existante.

2. Cliquez sur le bouton **Connecter votre banque**

3. Vous allez être envoyé sur la page de connexion **/connect.bridgeap** pour sélectionner votre banque.

4. Une fois que vous avez sélectionné votre banque, vous allez devoir saisir vos identifiants de connexion.

5. Après avoir confirmé votre connexion, vous allez devoir mettre à jour les comptes bancaires pour récupérer toutes vos transactions.

- Cliquez sur **Synchronisation** et faites **Mettre à jour les comptes bancaires**.


6. Une fenêtre va s'ouvrir avec :
- Le **compte bancaire** qui sera affecté par les transcations.
- La **date de synchronisation** à indiquer
- Et faire **confirmer**. 

Les transactions bancaires vont être importés sur votre compte. 

::alert{type=warning}
Si vous avez de nombreuses transactions qui doivent être importés, il faudra patienter quelques minutes. Pensez à rechargez Dokos en cliquant sur votre profil et sur Recharger.
::

## 2. Retrouvez toutes vos transactions bancaires

Une fois que vous avez mis à jour vos comptes, allez sur :

> Accueil > Comptabilité > Relevé bancaire > **Transaction bancaire**

Toutes les transactions sont maintenant importés automatiquement sur la liste des Transactions bancaires.

## 3. Catégories des transacations

Les catégories sont importés automatiquement depuis la base de données de Bridge.

Vous pouvez accéder à toutes ces catégories, en allant sur **Catégorie de transaction bancaire**.

Vous pouvez ajouter, modifier et supprimer des catégories.

::alert{type=warning}
Si vous ajoutez manuellement des nouvelles catégories. Elles ne seront pas affectées automatiquement.
::




