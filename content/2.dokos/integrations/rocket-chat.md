---
title: Rocket Chat
description: 
published: true
date: 2021-10-13T10:49:36.749Z
tags: 
editor: markdown
dateCreated: 2021-10-13T10:44:35.205Z
---

# Connexion avec Rocket Chat

Si vous souhaitez que vos notifications soient envoyées à un canal Rocket Chat dédié, vous pouvez également choisir l'option **Rocket Chat** dans les options du canal et sélectionner l'URL du Webhook Rocket Chat appropriée.

## 1. Accès et connexion à Rocket Chat

1. Allez sur **<a href="https://rocket.chat/get-started" target="_blank">https://rocket.chat/get-started</a>**

2. Accédez à votre **panneau d'administratio**n
3. Allez dans **Intégrations**
4. Créez une **nouvelle intégration** et sélectionnez nouveau Webhook entrant.
5. Sélectionnez le **canal** dans lequel vous voulez recevoir les alertes ; il est possible de le modifier dans les messages.
6. Définissez le scritp activé sur Vrai 
7. Collez votre script dans le champ Script
8. Sauvegardez l'intégration
9. Copiez le lien créé, revenez sur la plateforme DOKOS et utilisez-le pour créer une nouvelle URL Rocket Chat Webhook.

## 2. Configuration du Webhook entrant depuis Dokos

Il faut maintenant créer le Webhook entrant permettant de dire au logiciel de lier Dokos avec Rocket Chat. 

1. Accédez au document **URL Webhook entrant** en allant sur :

> Accueil > Intégration > Paramètres > URL de webhook entrant

![liste_webhook.png](/integration/google-chat/liste_webhook.png)

2. Cliquez sur Ajouter **URL Webhook entrant**
3. Indiquez le **nom** du Webhook entrant
4. Sélectionnez le service **Rocket Chat**
5. Dans la section URL du webhook, il suffit d'insérer l'URL que vous avez copié dans Rocket Chat (Étape 9 - Accès à Rocket Chat et configuration)
6. Faites **Enregistrer**

![slack_intégration.png](/integration/slack/slack_intégration.png)

## 3. Configuration des notifications

Il faut créer une notification permettant de dire au logiciel à quelle action une information sera envoyée sur Rocket Chat.

1. Accéder au document **Notification** en allant sur :

> Accueil > Paramètres > Email / Notifications > **Notification**

![liste_notification.png](/integration/google-chat/liste_notification.png)

2. Cliquez sur **Ajouter une notification**
3. Ajoutez les informations suivantes :
	- Indiquez un **nom** de notification
	- **Activé** : Si cochée, alors la notificatio sera active
	- Sélectionnez un **canal** : Choisissez **Outil de collaboration externe**
	- URL de Webhook entrant de l'outil de collaboration : Sélectionnez le Webhhook entrant que vous avez créé à l'**étape 2.2**.

![détails_notification.png](/integration/google-chat/détails_notification.png)

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

*Par exemple dans ce cas, dès que le statut du document est égal à **ouvert**, que la date du document est égale à **ajourd'hui** et que le Montant du document est **supérieur à 4000** alors il faut réaliser l'action.*

![filtres_notification.png](/integration/google-chat/filtres_notification.png)

### 4.2 Modifier une propriété après la notification

Depuis cette section, gérez vos paramètres de **modification de propriété après la notification** :

Vous pouvez choisir de modifier une propriété après la notification puis il faut définir une valeur qui sera concerné par cette modification.

![modifier_une_propriété.png](/integration/google-chat/modifier_une_propriété.png)

### 4.3 Message

Depuis cette section, gérez vos messages qui seront envoyés sur **Rocket Chat** :

Vous pouvez saisir votre message qui sera envoyé sur Rocket Chat. Utilsez les champs des documents pour les personnaliser.

Voici un exemple de message :

`*Nouveau ticket*`

`Nouvelle demande n° {{ doc.name }}.`

`*Détails*`

`• Client : {{ doc.customer }}`
`• Sujet : {{ doc.subject }}`
`• Message : {{ doc.description }}`

![message_notification.png](/integration/google-chat/message_notification.png)

#### 5. Tester la notification

1. Vous pouvez simplement tester votre notification en cliquant sur le bouton en haut à droite **Tester cette notification**.

![tester_notification.png](/integration/google-chat/tester_notification.png)

2. Vérifiez maintenant sur Rocket Chat que vous avez bien reçu la notification.
