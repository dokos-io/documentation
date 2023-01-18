---
title: Google Chat
description: 
published: true
date: 2022-03-25T09:50:29.321Z
tags: 
editor: markdown
dateCreated: 2021-10-07T11:53:13.900Z
---

# Connexion avec Google Chat

**Google Chat** est une plateforme de communication crée par Google. Ce logiciel a été conçu pour les équipes qui fournit des messages directs et des salles de chat d'équipe, similaires aux concurrents Slack et Microsoft Teams, ainsi qu'une fonction de messagerie de groupe qui permet le partage de contenu sur Google Drive.

## 1. Accès à Google Chat et configuration

Pour ce faire, il faut avoir un compte Google Workspace.

1. Rendez-vous à l'adresse suivante : **<a href="https://mail.google.com/chat" target="_blank">https://mail.google.com/chat</a>**
2. Cliquez en bas à gauche, dans **Salles**. Cliquez sur **+** et ajoutez un **Espace de travail**

![ajouter_salle.png](/content/integrations/google-chat/ajouter_salle.png)

3. Indiquez le nom de votre **Espace de travail**

![détails.png](/content/integrations/google-chat/détails.png)

4. Puis cliquez en haut, sur la section **Nom de l'espace de travail**
5. Faites **Gérer les Webhooks**

![webhook_création.png](/content/integrations/google-chat/webhook_création.png)

6. Sur la fenêtre qui s'ouvre, vous avez l'URL de votre Webhook entrant, copiez-le. Il sera à insérer sur la plateforme Dokos.

![url.png](/content/integrations/google-chat/url.png)


## 2. Configuration du Webhook depuis Dokos

Il faut maintenant créer le Webhook permettant de dire au logiciel de lier Dokos avec Google Chat. 

1. Accédez au document **URL Webhook entrant** en allant sur :

> Accueil > Intégration > Paramètres > URL de webhook entrant

![liste_webhook.png](/content/integrations/google-chat/liste_webhook.png)

2. Cliquez sur Ajouter **URL Webhook entrant**
3. Indiquez le **nom** du Webhook entrant
4. Sélectionnez le service **Google Chat**
5. Dans la section URL du webhook, il suffit d'insérer l'URL que vous avez copié dans Google Chat (Étape 6 - Accès à Google Chat et configuration)
6. Faites **Enregistrer**

![google_chat.png](/content/integrations/google-chat/google_chat.png)

## 3. Configuration des notifications

Il faut créer une notification permettant de dire au logiciel à quelle action une information sera envoyée sur Google Chat.

1. Accéder au document **Notification** en allant sur :

> Accueil > Paramètres > Email / Notifications > **Notification**

![liste_notification.png](/content/integrations/google-chat/liste_notification.png)

2. Cliquez sur **Ajouter une notification**
3. Ajoutez les informations suivantes :
	- Indiquez un **nom** de notification
	- **Activé** : Si cochée, alors la notificatio sera active
	- Sélectionnez un **canal** : Choisissez **Outil de collaboration externe**
	- URL de Webhook entrant de l'outil de collaboration : Sélectionnez le Webhhook entrant que vous avez créé à l'**étape 2.2**.

![détails_notification.png](/content/integrations/google-chat/détails_notification.png)

## 4 Détails de notification

### 4.1 Filtres

Depuis cette section, gérez vos paramètres de **Filtres** :

1. **Sujet** : Ajoutez un nom de sujet pour votre notification. Vous pouvez ajouter un sujet dynamique en utilisant les tags Jinja.
2. **Type de document** : Sélectionnez le type de document pour lequel une notification sera effectué.
3. **Envoyer une alerte lors de l'événement** : Choisissez pour quelle action la notification sera exécutée (Nouveau, Enregistrer, Valider, annuler...)
4. **Envoyer une notifiaction système** : Si activé, la notification apparaîtra dans les notifications en haut à droite de la barre de navigation
5. **Conditions** : Vous pouvez définir des conditions pour l'envoi de la notification. 

	- Exemples de conditions : 

	doc.status=="Open"
	doc.due_date==nowdate()
	doc.total > 40000 

![filtres_notification.png](/content/integrations/google-chat/filtres_notification.png)

### 4.2 Modifier une propriété après la notification

Depuis cette section, gérez vos paramètres de **modification de propriété après la notification** :

Vous pouvez choisir de modifier une propriété après la notification puis il faut définir une valeur qui sera concerné par cette modification.

![modifier_une_propriété.png](/content/integrations/google-chat/modifier_une_propriété.png)

### 4.3 Message

Depuis cette section, gérez vos messages qui seront envoyés sur **Google Chat** :

Vous pouvez saisir votre message qui sera envoyé sur Google Chat. Utilsez les champs des documents pour les personnaliser.

Voici un exemple de message :

`*Nouveau ticket*`

`Nouvelle demande n° {{ doc.name }}.`

`*Détails*`

`• Client : {{ doc.customer }}`
`• Sujet : {{ doc.subject }}`
`• Message : {{ doc.description }}`

![message_notification.png](/content/integrations/google-chat/message_notification.png)

#### 5. Tester la notification

1. Vous pouvez simplement tester votre notification en cliquant sur le bouton en haut à droite **Tester cette notification**.

![tester_notification.png](/content/integrations/google-chat/tester_notification.png)

2. Vérifiez maintenant sur Google Chat que vous avez bien reçu la notification. 

![vérification_test.png](/content/integrations/google-chat/vérification_test.png)








