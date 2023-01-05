---
title: Paramètres Twitter
description: 
published: true
date: 2021-11-02T10:02:20.749Z
tags: 
editor: markdown
dateCreated: 2021-11-01T17:02:00.051Z
---

# Paramètres Twitter

Les paramètres liés à Twitter comme OAuth peuvent être configurés ici. DOKOS a besoin d'accéder à l'API via laquelle la publication est partagée et réalisée à l'aide du protocole d'authentification OAuth 2.0.

## 1. Comment configurer l'application Twitter

Vous devez avoir l'application Twitter pour votre entreprise. DOKOS interagit avec cette application pour partager Tweet.

![twitter_app.png](/crm/settings-twitter/twitter_app.png)

### 1.1 Créer une application de développeur Twitter

Créez une application par lien https://developer.twitter.com/ et vérifiez que l'application dispose d'une autorisation d'accès en lecture et en écriture . Autorisation de l'application Twitter

### 1.2. Configurer l'URL de rappel

1. Sélectionnez votre **application** et accédez **aux détails de l'application**.
2. Ensuite, allez dans **Modifier** et cliquez sur **Modifier les détails**.
3. **Ajoutez l'URL de votre site Web** dans les URL de rappel. En suivant le format suivant : 
https://{nomdevotresite}/api/method/erpnext.crm.doctype.twitter_settings.twitter_settings.callback
4. Cliquez sur Enregistrer pour apporter des modifications.

![url_call.png](/crm/settings-twitter/url_call.png)

## 2. Comment configurer les paramètres Twitter 
Pour accéder **aux paramètres Twitter**, allez sur :

> Accueil > CRM > Paramètres > **Paramètres Twitter**

![dokos_twitter.png](/crm/settings-twitter/dokos_twitter.png)


### 2.1 Clé API et clé secrète API

Vous obtenez la clé API et le secret de la clé API à partir de votre compte de développeur Twitter, allez sur :

https://developer.twitter.com/> Mes applications > Votre app > Clés et jetons

![clés_api.png](/crm/settings-twitter/clés_api.png)

Une fois que vous avez enregistré le document en remplissant **la clé API** et **le secret de la clé API**, vous serez redirigé vers la page de connexion de Twitter.

Vous devrez fournir des informations d'identification Twitter valides et cliquez sur **Autoriser l'application**. 

Le membre doit approuver la demande de l'application pour accéder à ses données. et interagir avec Twitter.