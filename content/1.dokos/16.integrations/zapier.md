---
title: Zapier
---

Zapier est une plateforme permettant à des personnes sans connaissances techniques de connecter différentes applications entre elles.


> Cette application est en version beta sur invitation en cliquant sur ce [lien](https://zapier.com/developer/public-invite/33806/e3b8aad5383366dcaf236904c056c227/).
> Pour les utilisateurs d'ERPNext, cette application est également compatible avec la version 12.x.x.
{.is-warning}


## Installer l'application Zapier

### Récupérer l'URI de redirection

> Allez sur zapier.com et connectez-vous ou créez-vous un compte

1. Dans la section `My Apps` cliquez dans `Connect a new account` et cherchez `dokos`  
![zapier_new_connection.png](/integrations/zapier/zapier_new_connection.png)

1. Dans la fenêtre qui s'ouvre, copiez l'adresse de redirection (Redirect URI) affichée au dessus des champs Client ID et Client Secret.
   Il s'agit de la même adresse, donc vous pouvez n'en copier qu'une seule.  
![zapier_auth.png](/integrations/zapier/zapier_auth.png)

1. Gardez cette fenête ouverte pour terminer la connexion après l'étape 1.2.

### Enregistrer une nouvelle connection sur dokos

> Ouvrez dokos et allez dans le module `Intégrations`

1. Créez un nouveau document `Client OAuth`, donnez un nom à l'application cliente (Ex. Zapier) et collez l'URI de redirection copiée plus haut dans les champs `URIs de redirection` et `URI de redirection par défaut`.  

![dokos_oauth.png](/integrations/zapier/dokos_oauth.png)

1. Enregistrez et dokos va générer automatiquement les deux informations manquantes pour terminer notre connexion à Zapier: L'ID client et le secret client.  
Copiez ces deux clés.  

![dokos_client_keys.png](/integrations/zapier/dokos_client_keys.png)

### Configurer les connexions sociales

> Pour permettre les intégrations de type OAuth2, il faut avoir au moins une clé de connexion sociale Dodock.

1. Allez dans `Intégrations > Clé de connexion sociale`
1. Créez une nouvelle clé de connexion de sociale
1. Dans le champ **Fournisseur de connexion sociale** sélectionnez `Dodock`
1. Dans le champ **URL de base** entrez l'URL de base de votre site sans les éventuels sous-domaines.
   Ex: Si votre URL est `https://demo.dokos.io`, entrez `https://dokos.io`  

![frappe_social_login.png](/integrations/zapier/frappe_social_login.png)

1. Enregistrez

### Terminer l'authentification de Zapier

> Retournez sur Zapier et ouvrez à nouveau la fenêtre de la section 1.1.  

- **Base URL**: Entrez l'URL de base de votre site dokos. Ex. `https://demo.dokos.io`
- **Client ID**: Collez la clé générée à l'étape 1.2. correspondante
- **Client Secret**: Collez la clé générée à l'étape 1.2. correspondante

1. Cliquez sur `Yes, Continue`
1. Vous allez être redirigé sur votre site dokos pour valider l'authentification. Cliquez sur `Autoriser`

:tada: Votre application Zapier est désormais connectée à votre site dokos.  
Vous pouvez créer votre premier Zap. 

### Créer un Zap

L'application Zapier **dokos** permet de créer deux types d'interactions:

- La génération d'un Zap en fonction d'un événement affectant un document
- La recherche ou la création d'un document


### Génération d'un Zap

Pour générer un nouveau Zap, séléctionnez l'application **dokos** dans l'éditeur de Zap.

1. Dans le champ **Choose Trigger Event** sélectionnez **Document events**.
1. Sélectionnez le compte à utiliser. Il s'agit probablement du compte créé à l'étape 1.
1. Dans la section **Customize Document**, sélectionnez:
    - Le **DocType** (Type de document) utilisé pour déclencher un Zap
    - L'événement (**Trigger Event**) qui déclenchera ce Zap.
    Cet évément peut être l'un des suivants:
        - **After insert**: Après la création d'un document
        - **On change**: Après la modification du document (peut être déclenché en même temps que `On update` ou `On submit`)
        - **On update**: Après l'enregistrement du document
        - **On submit**: Après la validation du document
        - **On update after submit**: Après enregistrement d'un document déjà soumis. Possible seulement si certains champs sont éditables après validation.
        - **On cancel**: Après l'annulation du document
        - **On trash**: Après suppression du document
    - Les champs à envoyer à Zapier (**Webhook Data**)
      Cliquez sur le bouton + pour ajouter un champ supplémentaire

> L'intégration avec Zapier crée des nouveaux Webhooks dans dokos.  
> Vous pouvez les retrouver en allant dans `Intégrations > Webhooks`.
{.is-info}


Vous pouvez ensuite enregistrer et créer votre action avec une autre application Zapier ou avec l'application dokos si vous le souhaitez.

### Déclenchement d'une action sur dokos

Il existe deux types d'actions disponibles sur dokos: **Créer un document** (Create Document) ou **Rechercher un document** (Find Document)

#### Création de document

Un fois que vous avez sélectionné le type de document à créer, choisissez des valeurs pour les champs obligatoires et testez votre Zap.
Un nouveau document devrait être créé sur votre site dokos.

#### Recherche de document

Si vous sélectionnez la recherche de documents, vous pouvez définir 3 paramètres:
    1. Le nombre de document maximum à récupérer
    2. Le nom des champs à récupérer
    3. Un filtre pour trouver votre/vos documents
       Si vous cherchez un document en particulier, pensez à filtrer par identifiant (Nom dans dokos).


En cochant la case `Create dokos Document if it doesn't exist yet?` vous autorisez Zapier à créer un nouveau document s'il ne trouve pas de document correspondant à vos filtres.

Une fois votre document trouvé ou créé, vous pouvez passer à l'étape suivante et le réutiliser dans un autre Zap.

### Formats des données

#### Dates
Lorsque vous envoyez un champ de type **Date** ou **Date/Heure**(Datetime), vous devez utiliser les formats suivants:

- **Date**: `YYYY-MM-DD`
  Ex: 2019-11-30
- **Date/Heure**: `YYYY-MM-DD HH:mm:ss`
  Ex: 2019-11-30 08:30:00

Vous pouvez utiliser les outils [Zapier Formatter](https://zapier.com/help/create/format/modify-date-formats-in-zaps) pour cela si besoin.
Pour le format **Date/Heure**, vous pouvez sélectionner l'option "Use a Custom Value":  

![zapier_datetime.png](/integrations/zapier/zapier_datetime.png)  

#### Listes

L'application n'autorise pas encore l'envoi de listes dans les objects composant les documents.
Veuillez envoyer un mail à [help@dokos.io](mailto=help@dokos.io) si cette limitation vous pose des problèmes d'intégrations.

