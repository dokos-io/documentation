---
title: Bank API
description: Middleware pour connecter l'application Bank au fournisseur d'open-banking
icon: fluent:building-bank-link-16-filled
---

# Bank API

::alert
Cette application permet de faire le lien entre l'application Bank et les fournisseurs de solutions d'open-banking.  
Elle doit être un installée sur un site Dodock/Dokos distant et sert de passerelle pour les sites Dokos *clients*.  
::

**Cette documentation est principalement à destination des développeurs souhaitant créer des services autour de cette application**


## Connexion

Pour vous connecter, il faut utiliser une combinaison clé privé/clé secrète qui doit être passée dans la requête: [Documentation de l'API](/dodock/ressources/api/rest_api#authentification-par-jeton)

- `api_key`: Clé publique de connexion au site
- `api_secret`: Clé privée de connexion au site

::alert
Les clés publiques et privées peuvent être obtenues en créant un utilisateur sur le site sur lequel est installée l'application **Bank API**
::


## Flux de Connexion

Ici *Bank* représente l'application [Bank](/integrations/banks/bank) utilisée avec Dokos, mais peut être remplacée par une application tierce.

<mermaid>
sequenceDiagram
    Bank->>Bank API: Demande de lien de connexion (get_bridge_connect_link)
    Bank API->>Bridge: Demande de lien de connexion
    Bank API->>Bank: Envoi du lien de connexion
    Bank->>Bridge: Connexion à la banque
    Bridge-->>Bank API: Redirection après la connexion
    Bank API-->>Bank: Redirection vers la page de déclenchement du flux
    Bank API-->>Bank: Envoi d'un webhook de confirmation de validation du flux
    Bank->>Bank API: Récupération de l'identifiant d'Item envoyé par Bridge pour stockage local
</mermaid>


## Démarrer avec Bank API

Pour récupérer des transactions bancaires associées à un compte bancaire, il faut mettre en place, a minima, le flux suivant:

1. Récupérer un lien de connexion/authentification. L'authentification se passe sur le site du fournisseur Open-Banking.  
:point_right: *get_bridge_connect_link*

  Dans certains cas, il faudra aussi obtenir des liens d'authentification [SCA](https://docs.bridgeapi.io/docs/strong-customer-authentication) ou [Pro](https://docs.bridgeapi.io/docs/business-accounts)

2. A la fin du flux d'authentification, enregistrer l'identifiant d'Item (terme Bridge pour désigner la banque)
3. Récupérer tous les comptes bancaires associés avec cet item  
:point_right: *get_bank_accounts*
4. Récupérer les transactions associées à cet item  
:point_right: *get_bank_transactions*


## Méthodes d'API

L'ensemble des méthodes d'API ci-dessous peuvent être appelées à l'adresse:  
`https://{URL_DU_SITE_BANK_API}/api/method/bank_api.bridge.{NOM_DE_LA_METHODE}`


#### get_bridge_connect_link
Cette méthode permet d'obtenir un lien d'authentification Bridge Connect.  
*/api/method/bank_api.bridge.get_bridge_connect_link*

- `base_url`: URL de base du site demandeur
- `bank`: Nom de la banque concernée
- `redirect_url`: URL de redirection après la connexion avec la banque
- `item_id`: Identitiant de l'Item, si connu
- `site`: Identifiant du site - Il s'agit d'une clé permettant d'identifier le site/client demandeur
- `user`: ID d'utilisateur
- `webhook_url`: URL à laquelle envoyer des webhooks

#### get_bridge_edit_link
Cette méthode permet d'obtenir un lien d'authentification Bridge Connect en mode **Edition**.  
*/api/method/bank_api.bridge.get_bridge_edit_link*

- `base_url`: URL de base du site demandeur
- `bank`: Nom de la banque concernée
- `redirect_url`: URL de redirection après la connexion avec la banque
- `item_id`: Identitiant de l'Item
- `site`: Identifiant du site
- `user`: ID d'utilisateur
- `webhook_url`: URL à laquelle envoyer des webhooks

#### get_sca_authentication_link
Cette méthode permet d'obtenir un lien de rafraîchissement Strong Customer Authentication.  
*/api/method/bank_api.bridge.get_sca_authentication_link*

- `base_url`: URL de base du site demandeur
- `bank`: Nom de la banque concernée
- `redirect_url`: URL de redirection après la connexion avec la banque
- `item_id`: Identitiant de l'Item
- `site`: Identifiant du site
- `user`: ID d'utilisateur
- `webhook_url`: URL à laquelle envoyer des webhooks

#### get_pro_confirmation_link
Cette méthode permet d'obtenir un lien de rafraîchissement Business accounts.  
*/api/method/bank_api.bridge.get_pro_confirmation_link*

- `base_url`: URL de base du site demandeur
- `bank`: Nom de la banque concernée
- `redirect_url`: URL de redirection après la connexion avec la banque
- `item_id`: Identitiant de l'Item, si connu
- `site`: Identifiant du site
- `webhook_url`: URL à laquelle envoyer des webhooks

#### get_bridge_item_id
Cette méthode permet d'obtenir l'identifiant de l'Item Bridge et le nom de la banque associés à une requête d'authentification.  
*/api/method/bank_api.bridge.get_bridge_item_id*

- `request`: Identifiant de la requête de connexion

#### get_bridge_item_details
Cette méthode permet d'obtenir le document Bridge Item correspondant à un identifiant.  
*/api/method/bank_api.bridge.get_bridge_item_details*

- `item_id`: Identitiant de l'Item

#### delete_bridge_item_id
Cette méthode permet de supprimer un Item.  
*/api/method/bank_api.bridge.delete_bridge_item_id*

- `item_id`: Identitiant de l'Item
- `user`: ID d'utilisateur

#### post_item_refresh
Cette méthode permet de demander le rafraîchissement d'un Item.  
*/api/method/bank_api.bridge.post_item_refresh*

- `item_id`: Identitiant de l'Item
- `user`: ID d'utilisateur

#### get_bank_accounts
Cette méthode permet de récupérer les comptes bancaires associés à un Item.  
*/api/method/bank_api.bridge.get_bank_accounts*

- `item_id`: Identitiant de l'Item
- `user`: ID d'utilisateur

#### get_single_bank
Cette méthode permet de récupérer le détail d'une banque.  
*/api/method/bank_api.bridge.get_single_bank*

- `bank_id`: Identitiant de l'Item

#### get_bank_transactions_by_account
Cette méthode permet de récupérer les transactions associées à un compte bancaire.  
*/api/method/bank_api.bridge.get_bank_transactions_by_account*

- `account_id`: Identitiant du compte bancaire.
- `user`: ID d'utilisateur

#### get_bank_transactions
Cette méthode permet de récupérer les transactions bancaires associées à un Item.  
*/api/method/bank_api.bridge.get_bank_transactions*

- `since`: Date (`format: yyyy-mm-dd`) de modifications des transactions la plus ancienne.
- `lang`: Langue de la demande. Les catégories seront renvoyées dans cette langue
- `user`: ID d'utilisateur

#### get_category
Cette méthode permet de récupérer le détail d'une catégorie Bridge.  
*/api/method/bank_api.bridge.get_category*

- `lang`: Langue de la demande. Les catégories seront renvoyées dans cette langue
- `category_id`: Identitiant de la catégorie, si connu  