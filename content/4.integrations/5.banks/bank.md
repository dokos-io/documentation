---
title: Bank
description: Application permettant de connecter un site Dokos à sa/ses banque(s).
icon: i-fluent-building-bank-toolbox-24-regular
---

# Bank

Cette application est un connecteur bancaire, permettant d'intégrer vos transactions bancaires en accédant à votre banque via un fournisseur d'Open-banking.  
Actuellement 


## Configuration

Pour utiliser cette API en mode développement depuis un site Dokos, pensez à configurer correctement le nom de votre site, notamment pour la réception des webhooks nécessaires à la connexion initiale avec la banque.

Pour cela vous pouvez utiliser un outil comme [localtunnel](https://github.com/localtunnel/localtunnel)

- Définissez la variable d'environnement `host_name` dans le fichier `sites/{test_site}/site_config.json`

::callout
Avec localtunnel, ce sera l'URL fournie par localtunnel
::

- Définissez la variable `restart_supervisor_on_update: 1` dans le fichier `sites/common_site_config.json`

::callout
Cela évitera que Dodock renvoie le numéro du port utilisé à la fin de l'URL hôte (ex. *https://monsite.com:8000*)
::


## Connexion

Pour vous connecter, il faut ajouter les variables d'environnement suivantes dans votre fichier `site_config.json`:

- `bank_connector_url`: L'URL du site sur lequel est installé l'application **Bank API**
- `bank_connector_key`: Clé publique de connexion au site sur lequel est installée l'application **Bank API**
- `bank_connector_secret`: Clé privée de connexion au site sur lequel est installée l'application **Bank API**

::callout
Les clés publiques et privées peuvent être obtenues en créant un utilisateur sur le site sur lequel est installée l'application **Bank API**
::