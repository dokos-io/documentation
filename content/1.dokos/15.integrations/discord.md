---
title: Discord
---

# Connexion avec Slack

Si vous souhaitez que vos notifications soient envoyées à un canal Discord dédié, il faut d'abord créer un <q>webhook</q> sur Discord.

## Créer un webhook Discord

> Vous pouvez suivre [le guide officiel](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) pour plus d'informations.

Tout d'abord, rendez-vous dans l'application de bureau ou l'application web Discord sur ordinateur.
Ensuite, dans les paramètres du serveur Discord sur lequel vous souhaitez recevoir des notifications,
cliquez sur <q>Intégrations</q> puis sur le bouton <q>Créer un webhook</q>.
Définissez un nom, une image de profil, et un canal sur lequel le webhook enverra les notifications.
Ensuite, cliquez sur <q>Copier l'URL du webhook</q>.

## Configurer le webhook entrant dans Dokos

Dans Dokos, rendez-vous dans la liste des <q>URL de webhook entrant</q> et créez un nouveau document.

> Administration > Paramètres > Emails & Notifications > URL de webhook entrant

Sélectionnez le Service <q>Discord</q> et collez l'URL du webhook que vous avez copié précédemment, puis enregistrez.

## Utiliser le webhook dans une notification

Dans Dokos, rendez-vous dans la liste des <q>Notifications</q> et créez un nouveau document.

> Administration > Paramètres > Emails & Notifications > Notification

![Le champ "Canal" contient la valeur "Outil de collaboration externe", et le champ "URL de webhook entrant de l'outil de collaboration" contient la valeur "Discord"](/content/integrations/discord/notification-discord-1.png)

::alert{type="info"}
Astuce : Un lien vers le document sur Dokos est automatiquement ajouté à la fin du message.
::

Une fois cela fait, vous pouvez configurer les autres champs de la notification comme vous le souhaitez, par exemple :

![Le champ "Type de document" contient la valeur "Commande client", le champ "Envoyer une alerte lors de l'événement" contient la valeur "Nouveau", et le champ "Condition" contient la valeur `doc.order_type == "Shopping Cart"`](/content/integrations/discord/notification-exemple-1.png)

![Le champ "Sujet" contient la valeur "Nouvelle Commande", et le champ "Message" contient la valeur "Nouvelle commande {{ doc.name }}"](/content/integrations/discord/notification-exemple-2.png)


<!--
```json
{
    "doctype": "Notification",
    "enabled": 1,
    "is_standard": 0,
    "channel": "External Collaboration Tool",
    "send_system_notification": 0,
    "event": "New",
    "message_editor_type": "HTML Editor",
    "message": "Nouvelle commande **{{ doc.name }}** :\n- Client : {{ doc.customer }}\n- Montant : {{ doc.grand_total }}",
    "incoming_webhook_url": "Discord",
    "document_type": "Sales Order",
    "condition": "doc.order_type == 'Shopping Cart'",
    "subject": "Nouvelle Commande"
}
```
-->