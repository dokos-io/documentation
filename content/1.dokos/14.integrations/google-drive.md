---
title: Google Drive
description: 
published: true
date: 2021-10-26T10:40:55.404Z
tags: 
editor: markdown
dateCreated: 2021-10-18T14:17:58.955Z
---

# Google Drive

Google Drive est un service de stockage et de synchronisation de fichiers développé par Google. Il permet aux utilisateurs de stocker, synchroniser et partager des fichiers. Google Drive est un élément clé de Google Workspace, l'offre d'abonnement mensuel de Google pour les entreprises.

Vous pouvez utiliser le sélecteur de fichiers de Frappe Framework pour sélectionner n'importe quel fichier dans Google Drive et le joindre au DocType actuel. Par exemple, vous pouvez joindre la facture PDF stockée dans Google Drive à un enregistrement de facture de vente dans votre application Frappe.

## Installer 

1. Allez sur [https://console.cloud.google.com/](https://console.cloud.google.com/)
1. Utilisez un projet existant ou créez un nouveau projet
1. Dans **API and Services** sélectionnez **Credentials**
1. Cliquez sur **Create credentials** et sélectionnez **OAuth Client ID**
![oauth_client_creation.png](/content/integrations/google/oauth_client_creation.png)
1. Sélectionnez **Web Application**
1. Dans **Authorized Javascript origins** ajoutez l'URL de votre site: `https://{votresite}` (Ex. __https://dokos.io__)
1. Dans **Authorized redirect URIs** ajoutez les URLs suivantes en fonction de vos besoins d'intégration:
    - Google Drive: `https://{votresite}?cmd=frappe.integrations.doctype.google_drive.google_drive.google_callback`
1. Enregistrez et copiez/collez le **Client ID** et **Client Secret** générés dans les champs correspondants du document **Google Settings** de _Dokos_
1. Allez dans **OAuth consent screen** et ajoutez votre domaine aux **Authorized domains**
![oauth_consent_setup.png](/content/integrations/google/oauth_consent_setup.png)
1. Allez dans **Library** et activez les APIs nécessaires: **Contacts API**, **Google Calendar API** et/ou **Google Drive API**

### Instance de Dokos

Maintenant que l'API Google Picker est activée et que nous avons les informations d'identification nécessaires, nous pouvons continuer et configurer les paramètres Google dans votre instance Frappe.

1. Ouvrez les paramètres Google .
2. Cochez la case "Activer".
3. Dans la section Google Drive Picker , cochez la case "Google Drive Picker Enabled".
4. Saisissez votre identifiant d'application, votre identifiant client et votre clé API.
5. Enregistrez les paramètres Google et rechargez la fenêtre de votre navigateur.

### Paramètres Google

Maintenant, lorsque vous cliquez sur "Joindre un fichier" dans la barre latérale, vous devriez voir l'icône Google Drive.

Boîte de dialogue Joindre un fichier

Si vous cliquez dessus la première fois, vous devez autoriser l'application Frappe à accéder à vos fichiers Google Drive.

Connexion Google

Ensuite, le sélecteur Google Drive s'ouvre où vous pouvez choisir un fichier.

Sélecteur de Google Drive

Cliquez sur le bouton bleu en bas à gauche pour joindre un lien vers ce fichier au DocType actuel.