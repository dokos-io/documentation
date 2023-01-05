---
title: Paramètres Linkedin
description: 
published: true
date: 2021-11-02T10:05:34.253Z
tags: 
editor: markdown
dateCreated: 2021-11-01T11:23:23.043Z
---

# Paramètres Linkedin

Les paramètres liés à LinkedIn comme OAuth peuvent être configurés ici. Dokos a besoin d'accéder à l'API via laquelle la publication est partagée et réalisée à l'aide du protocole d'authentification OAuth 2.0.

## 1. Comment configurer l'application développeur Linkedin

Vous devez avoir l'application développeur LinkedIn pour votre entreprise. DOKOS interagit avec cette application pour partager la publication.

### 1.1 Créer une application de développeur LinkedIn 

1. Pour accéder à l'application de développeur, allez sur ce lien https://developer.linkedin.com/ puis faites **Créer une application**. 

![app_linkedin.png](/crm/settings-linkedin/app_linkedin.png)

2. Remplissez tous les détails et vérifiez l'application.

![configurer_ap_linkedin.png](/crm/settings-linkedin/configurer_ap_linkedin.png)

### 1.2 Configurer les URL de redirection : 

1. Accédez à votre **application LinkedIn Developers**, puis sur l'onglet **Authentification**.
2. Dans la section des paramètres **OAuth 2.0**, ajoutez les URL de redirection. Utilisez le format ci-dessous :
**https://{nomdevotresite}/api/method/erpnext.crm.doctype.linkedin_settings.linkedin_settings.callback**

3. Cliquez sur Mettre à jour pour apporter des modifications.

![url_redirection_.png](/crm/settings-linkedin/url_redirection_.png)


## 2. Comment configurer les paramètres LinkedIn 


Pour accéder **aux paramètres LinkedIn**, allez sur :

> Accueil > CRM > Paramètres > **Paramètres LinkedIn**

![linkedin_dokos.png](/crm/settings-linkedin/linkedin_dokos.png)


### 2.1 Identifiant de l'entreprise

Vous obtenez l'ID de l'entreprise à partir de l'URL de votre entreprise LinkedIn.

![numéro_identification.png](/crm/settings-linkedin/numéro_identification.png)

### 2.2 Identifiants OAuth

Vous obtenez la **clé du consommateur** et **le secret du consommateur** à partir de votre compte de développeur LinkedIn, accédez à :

> https://www.linkedin.com/developers/ > Mes applications > Votre App > Authentification > **Clés d'authentification**

![clés_d'authentification.png](/crm/settings-linkedin/clés_d'authentification.png)

### 2.3 Configurer les paramètres Linkedin dans Dokos

Une fois que vous avez enregistré le document en **remplissant l' ID de l'entreprise**, **la clé du consommateur et le secret du consommateur**, vous serez redirigé vers la page de connexion de LinkedIn.

Vous devrez fournir des informations d'identification LinkedIn valides et cliquez sur **Autoriser**. 

Le membre doit approvuer la demande de l'application pour accéder à ses données et interagir avec LinkedIn.
