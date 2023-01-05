---
title: Paramètres Dropbox
description: 
published: true
date: 2021-10-27T09:21:00.295Z
tags: 
editor: markdown
dateCreated: 2021-10-07T10:08:47.519Z
---

# Paramètres Dropbox

Nous recommandons toujours aux clients de maintenir une sauvegarde de leurs données dans Dokos. La sauvegarde de la base de données est téléchargée sous la forme d'un fichier SQL. Si nécessaire, ce fichier SQL de sauvegarde peut également être restauré dans un autre compte Dokos.

Vous pouvez automatiser le téléchargement de la sauvegarde de la base de données de votre compte Dokos dans votre compte Dropbox.

---

Pour configurer une sauvegarde Dropbox, allez sur : 

> Accueil > Intégrations > Paramètres Dropbox

## Comment paramétrer Dropobox ?

### 1. Configuration de base

1. Allez sur les **paramètres Dropbox**.
2. Cochez la case **Activé**
3. **Envoyé des notifications à** : Indiquez une adresse email qui sera notifiée.
4. **Envoyer un courrier électronique pour une sauvegarde réussie** : Si la case est cochée alors un email sera envoyé lors d'une sauvergarde réussie. Remarque: un e-mail est envoyé par défaut si la sauvegarde échoue.
5. **Fréquence de sauvegarde** : Indiquez la fréquence de sauvergarde, soit quotidien ou soit hebdomadaire.
6. **Nombre limite de sauvegardes de base de données** : Si la case est cochée, alors vous pourrez indiquer un Nombre limite de sauvegardes de la base de données.
7. S**auvegarde de fichier **: Cochez la case pour que la sauvegarde de fichier soit active.

### 2. Autorisation de l'accès à l'application

1. Indiquez la Clé d'Accès de l'App.
2. Indiquez Clé Secrète de l'App.
3. Puis faites, autoriser l'accès à l'application.

En cliquant sur ce bouton, la page de connexion Dropbox s'ouvrira dans le nouvel onglet. Cela peut vous obliger à autoriser les fenêtres contextuelles pour votre compte Dokos.

- Connectez-vous à votre compte Dropbox en saisissant vos identifiants de connexion.


Une fois la connexion réussie, vous trouverez un message de confirmation comme suit. Cliquez sur "**Autoriser**" pour permettre à votre compte ERPNext d'accéder à votre compte Dropbox.

Avec cela, un dossier appelé "**Dokos**" sera créé dans votre compte Dropbox et la sauvegarde de la base de données commencera à se télécharger automatiquement.