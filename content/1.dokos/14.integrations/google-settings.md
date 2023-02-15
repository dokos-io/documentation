---
title: Intégration Google
---

## Paramètres Google

_Dokos_ peut être connecté avec plusieurs outils de la suite d'applications Google : Google Agenda, Google Drive, Google Contacts et Google Maps

---

Pour accéder au **paramétrage de Google**, allez sur :

> Accueil > Intégrations > **Paramètres Google**

Afin de connecter les outils Google avec _Dokos_, vous devez activer et paramétrer une intégration Oauth avec la plateforme Google Cloud.
Cela permet d'obtenir un jeton d'accès (autorisation d'accéder au service) de la part de Google pour le service que vous souhaitez utiliser.

## 1. Paramétrage pour Agenda, Drive and Contacts

1. Allez sur [https://console.cloud.google.com/](https://console.cloud.google.com/)
1. Utilisez un projet existant ou créez un nouveau projet
1. Dans **API and Services** sélectionnez **Credentials**
1. Cliquez sur **Create credentials** et sélectionnez **OAuth Client ID**
![oauth_client_creation.png](/content/integrations/google/oauth_client_creation.png)
1. Sélectionnez **Web Application**
1. Dans **Authorized Javascript origins** ajoutez l'URL de votre site: `https://{votresite}` (Ex. __https://dokos.io__)
1. Dans **Authorized redirect URIs** ajoutez les URLs suivantes en fonction de vos besoins d'intégration:
    - Google Agenda: `https://{votresite}?cmd=frappe.integrations.doctype.google_calendar.google_calendar.google_callback`
    - Google Contacts: `https://{votresite}?cmd=frappe.integrations.doctype.google_contacts.google_contacts.google_callback`
    - Google Drive: `https://{votresite}?cmd=frappe.integrations.doctype.google_drive.google_drive.google_callback`
    
1. Enregistrez et copiez/collez le **Client ID** et **Client Secret** générés dans les champs correspondants du document **Google Settings** de _Dokos_
2. Allez dans **OAuth consent screen** et ajoutez votre domaine aux **Authorized domains**
![oauth_consent_setup.png](/content/integrations/google/oauth_consent_setup.png)
3. . Allez dans **Library** et activez les APIs nécessaires: **Contacts API**, **Google Calendar API** et/ou **Google Drive API**

## 2. Paramétrage pour Maps

L'accès à Google Maps ne nécessite pas de connexion OAuth, seulement une clé API spécifique.

1. Allez sur [https://console.cloud.google.com/](https://console.cloud.google.com/)
2. Utilisez un projet existant ou créez un nouveau projet
3. Dans **API and Services** sélectionnez **Credentials**
4. Cliquez sur **Create credentials** et sélectionnez **API key**
5. Allez dans **Bibliothèque** et activez la librairie **Geocoding API**
6. Copiez et collez cette clé dans le champs **API key** du document **Google Settings** de _Dokos_