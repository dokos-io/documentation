---
title: Authentification à double facteur
description: 
published: true
date: 2022-08-24T09:43:38.188Z
tags: 
editor: markdown
dateCreated: 2022-08-24T09:38:48.867Z
---

# Configurer l'authentification à double facteur

L'authentification à double facteur permet vérifier l'identité de celui qui essaye de se connecter en lui envoyant un email de vérification, en demandant un code généré par une application d"authentification ou en envoyant un SMS au numéro de téléphone du demandeur.

Il est recommandé d'activer l'authentification à double facteur pour améliorer la sécurité de son site Dokos.


## Activer l'authentification à double facteur

1. Dans les **Paramètres Système**, ouvrez la section **Authentification à Double Facteur** et cochez l'option **Autoriser l'authentification à double facteur**

2. Sélectionnez les options qui s'appliquent à votre site.

3. Selectionnez la méthode d'authentification

4. Mettez un nom d'émetteur que vos utilisateurs pourront reconnaître facilement


## Méthode d'authentification

### Email

A chaque connexion, un email est envoyé à l'utilisateur avec un code temporaire de connexion.
L'utilisateur doit copier ce code et le coller dans la fenêtre qui s'est ouverte sur le site Dokos.

### Application OTP

Les applications pouvant être utilisées sont (liste non exhaustive): FreeOTP, Google Authenticator, Lastpass Authenticator, Authy, Duo Mobile ou Bitwarden Authenticator.

#### Première connexion

Lors de la première connexion, l'utilisateur reçoit un email avec un lien le renvoyant vers le site Dokos.
Sur la page, il doit scanner le QRCode généré par Dokos avec son application OTP.

![otp_qrcode.png](/otp_qrcode.png)

### Connexion à Dokos

Lors de chaque connexion à Dokos, l'utilisateur doit ouvrir son application OTP et entrer le code correspondant au site Dokos dans la fenêtre qui s'ouvre.
Il n'y a pas d'envoi d'email.

### SMS

Pour recevoir un SMS de vérification, configurez l'accès à une passerelle d'envoi de SMS dans les **Paramètres des SMS**.
L'utilisateur reçoit un SMS à chaque connexion, qu'il peut saisir dans la fenêtre qui s'ouvre aprsè avoir entré ses identifiants.
