---
title: Notification
description: 
published: true
date: 2022-02-11T10:54:52.256Z
tags: 
editor: markdown
dateCreated: 2022-02-11T09:36:47.685Z
---

# Notification

Vous pouvez configurer diverses notifications dans votre système pour vous rappeler des activités importantes.

- La date d'achèvement d'une tâche.
- Date de livraison prévue d'une commande client.
- Date de paiement prévue.
- Un rappel de suivi.
- Si une commande supérieure à une valeur particulière est reçue ou envoyée.
- Avis d'expiration d'un contrat.
- Achèvement/changement de statut d'une tâche.
- Inscription à un événement

Pour accéder à la configuration des notifications, allez sur :

> Accueil > Paramètres > Notification

## 1. Configurer une Notification

Pour configurer une notification :

1. Indiquez le nom du document
2. Sélectionnez le type de canal : Email, Outils collaboratifs (Slack, RocketChat..., notification système ou SMS)

![nouvelle_notification.png](/settings/notifications/nouvelle_notification.png)

#### Filtres

- Sélectionnez le type de document sur lequel vous souhaitez observer les modifications.
- Envoyer une alerte lors de l'événement
 
**Les événements sont** :
	- **Nouveau** : lorsqu'un nouveau document du type sélectionné est créé.
	- **Enregistrer/Soumettre/Annuler** : lorsqu'un document du type sélectionné est enregistré, soumis ou annulé.
	- **Jours avant/jours après** : déclenchez cette alerte quelques jours avant ou après la date de référence. Pour définir les jours, définissez Jours avant ou Après . Cela peut être utile pour vous rappeler les dates d'échéance à venir ou vous rappeler de suivre certaines pistes de devis.
	- **Changement de valeur** : Lorsqu'une valeur particulière dans le type sélectionné change.
	- **Méthode** : Envoie une notification lorsqu'une méthode spécifique est déclenchée. Par exemple : avant_insertion.
	- **Personnalisé** : envoyer une notification à un compte de messagerie sélectionné.

![fitres_notifications.png](/settings/notifications/fitres_notifications.png)

#### Conditions

- Définissez des conditions supplémentaires si nécessaire.
- Définissez les destinataires de cette alerte. Le destinataire peut être soit un champ du document, soit une liste d'adresses e-mail fixes.

![conditions.png](/settings/notifications/conditions.png)

#### Message

- Composez le message. Le message doit être écrit en HTML.

![messages.png](/settings/notifications/messages.png)

Et enfin faites **Enregistrer**.

### 1.1 Définition d'un sujet

Vous pouvez récupérer les données d'un champ particulier en utilisant doc.[field_name]. 

Pour l'utiliser dans votre sujet/message, vous devez l'entourer de {% raw %}{{ }}{% endraw %}. 

Celles-ci sont appelées balises Jinja . Par exemple, pour obtenir le nom d'un document, vous utilisez {% raw %}{{ doc.name }}{% endraw %}. L'exemple suivant envoie un e-mail lors de l'enregistrement d'une tâche avec le sujet "TASK#### has been created"


### 1.2 Conditions de réglage

Les notifications vous permettent de définir des conditions en fonction des données de champ de vos documents. Par exemple, si vous souhaitez recevoir un e-mail si un prospect a été enregistré comme "Intéressé" comme statut, vous mettez `doc.status == "Interested"` dans la zone de texte des conditions. Vous pouvez également définir des conditions plus complexes en les combinant avec l'opérateur et ou ou .

L'exemple ci-dessus enverra une notification lorsqu'une tâche est enregistrée avec le statut "Ouvert" et la "Date de fin prévue" pour la tâche est la date ou avant la date à laquelle elle a été enregistrée.

### 1.3 Définir un message

Vous pouvez utiliser à la fois les balises Jinja ( {% raw %}{{ doc.[field_name] }}{% endraw %}) et les balises HTML dans la zone de texte du message.

{% raw %}<h3>Order Overdue</h3>

<p>Transaction {{ doc.name }} has exceeded Due Date. Please take necessary action.</p>

<!-- show last comment -->
{% if comments %}
Last comment: {{ comments[-1].comment }} by {{ comments[-1].by }}
{% endif %}

<h4>Details</h4>

<ul>
<li>Customer: {{ doc.customer }}
</li><li>Amount: {{ doc.total_amount }}
</li></ul>{% endraw %}


## 2. Notifications des outils collaboratifs

Si vous préférez que vos notifications soient envoyées à un canal Slack dédié, vous pouvez également choisir l'option "Slack" dans les options du canal et sélectionner l'URL Webhook Slack appropriée.

### 2.1 URL Webhook Slack

Une URL de webhook Slack est une URL pointant directement vers un canal Slack.

Pour générer des URL de webhook, vous devez créer une nouvelle application Slack :

Accédez à https://api.slack.com/slack-apps.
Cliquez sur "Créer une application Slack". Définir le message

Donnez un nom à votre application et choisissez le bon espace de travail. Une fois votre application créée, rendez-vous dans la section "Webhooks entrants" et ajoutez un nouveau Webhook à Workspace. Définir le message

Copiez le lien créé, revenez à ERPNext et utilisez-le pour créer une nouvelle URL Slack Webhook dans Intégrations > URL Slack Webhook. Définir le message

Sélectionnez Slack et votre canal Slack dans les champs canal et canal Slack de votre notification

### 2.2 Format des messages

Contrairement aux messages électroniques, Slack n'autorise pas le formatage HTML.

Au lieu de cela, vous pouvez utiliser le formatage Markdown : Slack Documentation

Exemple : {% raw %} Commande en retard

```Transaction {{ doc.name }} has exceeded Due Date. Please take the necessary action.

{% if comments %}
Last comment: {{ comments[-1].comment }} by {{ comments[-1].by }}
{% endif %}

*Details*

• Customer: {{ doc.customer }}
• Amount: {{ doc.grand_total }}
{% endraw %}
````

## 3. Notifications système

Les notifications système sont utiles pour les tâches à faires, les mentions, les documents partagés et les points d'énergie. Ces notifications s'affichent dans la liste déroulante des notifications dans le coin supérieur droit de la barre de navigation.


Le choix de ce canal enverra une notification système lorsqu'une notification est déclenchée, au lieu d'un e-mail ou d'une notification Slack.

Cliquer sur les routes de notification vers le document du journal des notifications qui contient l'objet configuré, le message ainsi que le fichier joint, si Attacher l'impression est défini :

Si des alertes par e-mail/Slack et des notifications système sont requises, le canal principal peut être défini sur E-mail ou Slack et cette option peut être cochée.

## 4. SMS

Un dernier canal permet d'envoyer des notifications : Canal SMS

Pour utiliser ce canal, vous devez terminer la configuration des paramètres SMS.