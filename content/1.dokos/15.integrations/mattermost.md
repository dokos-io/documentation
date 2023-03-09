---
title: Mattermost
---

# Connexion avec Mattermost

## 1. Accès à Mattermost et configuration

1. Accédez à l'application de Mattermost en allant sur : **<a href="https://mattermost.com/" target="_blank">https://mattermost.com/</a>**. 
Créez vous un compte sur la plateforme ou connectez-vous si vous en avez déjà un.

2. Allez sur les canaux de chat

![liste_canaux.png](/content/integrations/mattermost/liste_canaux.png)

3. Ajoutez un **nouveau canal**, en cliquant en haut sur le **+** et faites **Créer un nouveau canal**  

![ajouter_un_espace.png](/content/integrations/mattermost/ajouter_un_espace.png)

4. Indiquez le **nom du canal**

![gestion_des_tickets.png](/integration/mattermost/gestion_des_tickets.png)

5. Allez sur gestion des intégrations en cliquant sur le **menu en haut à gauche** et sélectionnez **Intégrations**

![retour_aux_intégrations.png](/content/integrations/mattermost/retour_aux_intégrations.png)

6. Cliquez sur **Webhooks entrant**

![webhook_entrant.png](/integration/mattermost/webhook_entrant.png)

7. Ajoutez un **nouveau Webhook entrant**

![ajouter_url.png](/content/integrations/mattermost/ajouter_url.png)

8. Donnez un **nom** à votre nouveau Webhook entrant et **sélectionnez le canal** qui recevra le webhook.

![validation_url.png](/content/integrations/mattermost/validation_url.png)

9. Copiez le lien créé, revenez sur la plateforme Dokos et utilisez-le pour créer une nouvelle URL Mattermost Webhook.

![copier_url.png](/content/integrations/mattermost/copier_url.png)

## 2. Configuration du Webhook entrant depuis Dokos

Il faut maintenant créer le Webhook entrant permettant de dire au logiciel de lier Dokos avec Mattermost. 

1. Accédez au document **URL Webhook entrant** en allant sur :

> Accueil > Intégration > Paramètres > URL de webhook entrant

![liste_webhook.png](/content/integrations/google-chat/liste_webhook.png)

2. Cliquez sur Ajouter **URL Webhook entrant**
3. Indiquez le **nom** du Webhook entrant
4. Sélectionnez le service **Mattermost**
5. Dans la section URL du webhook, il suffit d'insérer l'URL que vous avez copié dans Mattermost (Étape 9 - Accès à Slack et configuration)
6. Faites **Enregistrer**

![création_url_entrant.png](/content/integrations/mattermost/création_url_entrant.png)

## 3. Configuration des notifications

Il faut créer une notification permettant de dire au logiciel à quelle action une information sera envoyée sur Mattermost.

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

Depuis cette section, gérez vos messages qui seront envoyés sur **Mattermost** :

Vous pouvez saisir votre message qui sera envoyé sur Mattermost. Utilsez les champs des documents pour les personnaliser.

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

2. Vérifiez maintenant sur Mattermost que vous avez bien reçu la notification.

![vérification_mattermost.png](/content/integrations/mattermost/vérification_mattermost.png)