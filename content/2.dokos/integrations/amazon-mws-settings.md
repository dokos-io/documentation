---
title: Paramètres Amazon MWS
description: 
published: true
date: 2021-11-29T11:02:15.237Z
tags: 
editor: markdown
dateCreated: 2021-11-29T10:49:01.645Z
---

# Paramètres Amazon MWS

Le connecteur Amazon extrait les produits et les commandes client de la market place Amazon. La synchronisation des produits et des commandes clients est séquentielle. Vous devez synchroniser les produits avant de synchroniser les commandes client.

## 1. Comment configurer le connecteur Amazon MWS ? 

### 1.1 Configuration des informations d'identification dans DOKOS

Vous pouvez demander les informations d'identification du développeur à Amazon MWS une fois que vous êtes un vendeur enregistré sur leur site Web.

### 1.2 Configurer les informations d'identification MWS

Saisissez l'ID du vendeur, l'ID de la clé d'accès AWS, le jeton d'authentification MWS, la clé secrète, l'ID de la place de marché, la région et le domaine.

![paramètres_amazon.png](/settings/amazon/paramètres_amazon.png)

### 1.3 Configurer les détails de la commande 
Configurez la société, l'entrepôt, le groupe d'articles, la liste de prix, le groupe de clients, le territoire, le type de client et le groupe de comptes. Le groupe de comptes est utilisé pour détenir les commissions, les taxes, etc. facturées par Amazon. 

![détails_société_amazon.png](/settings/amazon/détails_société_amazon.png)

### 1.4 Configurer les configurations de synchronisation 
À l'aide de la date d'après, vous pouvez synchroniser les produits et les commandes créés après une date particulière. Si vous importez beaucoup de données historiques, il est suggéré de commencer dans l'ordre chronologique inverse de la date d'après et d'importer les données par petits morceaux.

Après avoir configuré toutes les configurations, cliquez sur Activer Amazon et enregistrez les paramètres. Vous êtes maintenant prêt à utiliser l'intégration.

![synchronis.png](/settings/amazon/synchronis.png)

### 1.5 Synchroniser les produits 
Cliquez sur ce bouton pour synchroniser les produits. Une fois cela réussi, vous devriez voir vos produits Amazon en tant qu'articles dans ERPNext.

### 1.6 Synchroniser les commandes

Cliquez sur ce bouton pour synchroniser les commandes client. Une fois cela réussi, vous devriez voir vos commandes Amazon en tant que commandes client dans DOKOS. Vous pouvez également configurer le planificateur pour synchroniser automatiquement les commandes.

**Noter**

Le connecteur ne gérera pas l'annulation de la commande. Si vous avez annulé une commande sur Amazon, vous devez annuler manuellement la commande client respective et les autres documents dans DOKOS.