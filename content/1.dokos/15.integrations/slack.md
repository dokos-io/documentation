---
title: Slack
---

# Connexion avec Slack

Si vous souhaitez que vos notifications soient envoyées à un canal Slack dédié, vous pouvez également choisir l'option "**Slack**" dans les options du canal et sélectionner l'URL du Webhook Slack appropriée.

## 1. Accès à Slack et configuration

Pour générer des URL de webhook, vous devez créer une nouvelle application Slack :

1. Accédez à **<a href="https://api.slack.com/" target="_blank">https://api.slack.com/</a>**
2. Cliquez sur **Créer une application Slack**

![slack_api.png](/content/integrations/slack/slack_api.png)

3. Sélectionnez la rubrique **De zéro** pour créer votre application

![de_zéro.png](/content/integrations/slack/de_zéro.png)

4. Donnez un nom à votre application et choisissez le bon espace de travail. 

![nom_application.png](/content/integrations/slack/nom_application.png)

5. Une fois votre application créée, accédez à la section « **Webhooks entrants**

![webhook_entrant.png](/content/integrations/slack/webhook_entrant.png)

6. Une fois dans la section des webhooks entrant, cliquez sur **Activer les Webhooks entrants**

![activer_webhook.png](/content/integrations/slack/activer_webhook.png)

7. Allez à la section en bas de page **URL de webhook pour votre espace de travail**, puis cliquez sur **Ajouter un nouveau webhook à l'espace de travail**.

8. Indiquez l'endroit où la notification doit être publié. Il s'agit d'un canal que vous aurez crée dans votre compte Slack.

![choix_du_canal.png](/content/integrations/slack/choix_du_canal.png)

9. Copiez le lien créé, revenez sur la plateforme Dokos et utilisez-le pour créer une nouvelle URL Slack Webhook.

![copier_url_webhook.png](/content/integrations/slack/copier_url_webhook.png)

## 2. Configuration du Webhook entrant depuis Dokos

Il faut maintenant créer le Webhook entrant permettant de dire au logiciel de lier Dokos avec Slack. 

1. Accédez au document **URL Webhook entrant** en allant sur :

> Accueil > Intégration > Paramètres > URL de webhook entrant

![liste_webhook.png](/content/integrations/google-chat/liste_webhook.png)

2. Cliquez sur Ajouter **URL Webhook entrant**
3. Indiquez le **nom** du Webhook entrant
4. Sélectionnez le service **Slack**
5. Dans la section URL du webhook, il suffit d'insérer l'URL que vous avez copié dans Slack (Étape 9 - Accès à Slack et configuration)
6. Faites **Enregistrer**

![slack_intégration.png](/content/integrations/slack/slack_intégration.png)

## 3. Configuration des notifications

Il faut créer une notification permettant de dire au logiciel à quelle action une information sera envoyée sur Slack.

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

*Par exemple dans ce cas, dès que le statut du document est égal à **ouvert**, que la date du document est égale à **ajourd'hui** et que le Montant du document est **supérieur à 4000** alors il faut réaliser l'action.*

![filtres_notification.png](/content/integrations/google-chat/filtres_notification.png)

### 4.2 Modifier une propriété après la notification

Depuis cette section, gérez vos paramètres de **modification de propriété après la notification** :

Vous pouvez choisir de modifier une propriété après la notification puis il faut définir une valeur qui sera concerné par cette modification.

![modifier_une_propriété.png](/content/integrations/google-chat/modifier_une_propriété.png)

### 4.3 Message

Depuis cette section, gérez vos messages qui seront envoyés sur **Slack** :

Vous pouvez saisir votre message qui sera envoyé sur Slack. Utilsez les champs des documents pour les personnaliser.

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

2. Vérifiez maintenant sur Slack que vous avez bien reçu la notification.

![slack.png](/content/integrations/slack/slack.png)
