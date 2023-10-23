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


## Méthodes d'API

L'ensemble des méthodes d'API ci-dessous peuvent être appelées à l'adresse:  
`https://{URL_DU_SITE_BANK_API}/api/method/bank_api.bridge.{NOM_DE_LA_METHODE}`


#### get_bridge_connect_link
*/api/method/bank_api.bridge.get_bridge_connect_link*

- `base_url`: URL de base du site demandeur
- `bank`: Nom de la banque concernée
- `redirect_url`: URL de redirection après la connexion avec la banque
- `item_id`: Identitiant de l'Item, si connu
- `site`: Identifiant du site

#### get_bridge_edit_link
*/api/method/bank_api.bridge.get_bridge_edit_link*

- `base_url`: URL de base du site demandeur
- `bank`: Nom de la banque concernée
- `redirect_url`: URL de redirection après la connexion avec la banque
- `item_id`: Identitiant de l'Item
- `site`: Identifiant du site

#### get_sca_authentication_link
*/api/method/bank_api.bridge.get_sca_authentication_link*

- `base_url`: URL de base du site demandeur
- `bank`: Nom de la banque concernée
- `redirect_url`: URL de redirection après la connexion avec la banque
- `item_id`: Identitiant de l'Item
- `site`: Identifiant du site

#### get_pro_confirmation_link
*/api/method/bank_api.bridge.get_pro_confirmation_link*

- `base_url`: URL de base du site demandeur
- `bank`: Nom de la banque concernée
- `redirect_url`: URL de redirection après la connexion avec la banque
- `item_id`: Identitiant de l'Item, si connu
- `site`: Identifiant du site

#### get_bridge_item_id
*/api/method/bank_api.bridge.get_bridge_item_id*

- `request`: Identifiant de la requête de connexion

#### get_bridge_item_details
*/api/method/bank_api.bridge.get_bridge_item_details*

- `item_id`: Identitiant de l'Item

#### delete_bridge_item_id
*/api/method/bank_api.bridge.delete_bridge_item_id*

- `item_id`: Identitiant de l'Item
- `site`: Identifiant du site

#### get_bank_accounts
*/api/method/bank_api.bridge.get_bank_accounts*

- `item_id`: Identitiant de l'Item
- `site`: Identifiant du site

#### get_bank_transactions
*/api/method/bank_api.bridge.get_bank_transactions*

- `since`: Datetime
- `lang`: Langue de la demande. Les catégories seront renvoyées dans cette langue
- `site`: Identifiant du site

#### get_category
*/api/method/bank_api.bridge.get_category*

- `lang`: Langue de la demande. Les catégories seront renvoyées dans cette langue
- `category_id`: Identitiant de la catégorie, si connu  