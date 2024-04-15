---
title: Shopify
---

# Paramètres Shopfify

Le connecteur Shopify extrait les commandes de Shopify et crée une commande client par rapport à elles dans ERPNext.

Lors de la création de la commande client si le client ou l'article est manquant dans Dokos, le système créera un nouveau client/article en extrayant les détails respectifs de Shopify.

## 1. Comment configurer le connecteur ?

Shopify Connector est retiré de Dokos et disponible via une application Frappe sur Frappe Cloud Marketplace

### 1.1 Note aux utilisateurs de l'ancien connecteur Shopify 

Si vous n'avez pas configuré Shopify Connector sur votre site ERPNext, vous pouvez passer à l'étape suivante.

Si vous utilisez l'ancienne intégration Shopify fournie dans ERPNext, vous devrez désactiver le connecteur avant de continuer. Après avoir installé l'application, elle migrera les données existantes, par exemple l'identifiant unique du produit pour les éléments, afin de séparer le type de document. Une fois que vous avez terminé de configurer la nouvelle intégration, vous pouvez confirmer l'état de la migration en accédant au doctype « Journal d'intégration du commerce électronique ».

### 1.2 Créer une application privée dans Shopify

Cliquez sur Applications dans la barre de menu Section de menu

Cliquez sur Gérer les applications privées pour créer une application privée Gérer les applications privées

Remplissez les détails et créez l'application. Chaque application a sa propre clé API, mot de passe et secret partagé Détails de l'application

Autorisez les autorisations suivantes à l'application.

- Brouillons de commandes - Lire et écrire
- Commandes - Lire et écrire
- Emplacement - Lire
- Clients - Lire
- Ordres d'exécution affectés - Lecture et écriture
- Produits - Lire et écrire
- Listes de produits - Lire et écrire
- Inventaire - Lire et écrire

## 2. Configuration de Shopify sur ERPNext

Une fois que vous avez créé une application privée sur Shopify, configurez les informations d'identification de l'application et d'autres détails dans les paramètres Shopify dans Dokos.

Pour accéder aux paramètres Shopify, accédez à : Barre de recherche géniale > Paramètres Shopify

1. Remplissez l'URL du site Shopify, le mot de passe et le secret partagé à partir de l'application privée de Shopify. Configurer les informations d'identification de l'application privée

2. Configurer les configurations client, entreprise et inventaire.

3. Configurer les configurations de synchronisation. Le système extrait les commandes de Shopify et crée la commande client dans ERPNext. Vous pouvez configurer le système ERPNext pour capturer le paiement et les exécutions par rapport aux commandes. Configuration de synchronisation Shopify pour les commandes

4. Configurer Tax Mapper. Préparez un mappeur de taxes et de frais d'expédition pour chaque taxe et frais d'expédition que vous appliquez dans Shopify. Vous pouvez trouver le nom de vos taxes sur votre page d'administration Shopify. Cartographie fiscale Shopify Trouver les noms de taxe Shopify

Après avoir configuré toutes les configurations, activez la synchronisation Shopify et enregistrez les paramètres. Cela enregistrera les API sur Shopify et le système lancera la synchronisation des commandes entre Shopify et Dokos.

## 3. Synchroniser les anciennes commandes de Shopify

Une fois que vous avez terminé la configuration de Shopify et que vous avez activé Shopify Syncing, vous disposez également d'une disposition pour synchroniser vos anciennes commandes de Shopify dans ERPNext. Cette synchronisation se fera en arrière-plan et peut prendre quelques heures selon le nombre de commandes que vous avez.

1. Activer "Synchroniser les anciennes commandes Shopify"
2. Saisissez les dates de début et de fin entre lesquelles les commandes doivent être synchronisées shopify synchroniser les anciennes commandes

## 4. Synchronisation d'inventaire

Vous pouvez mettre à jour votre inventaire avec Shopify pour les articles synchronisés depuis Shopify. La synchronisation de l'inventaire est effectuée toutes les heures avec une tâche planifiée. Les niveaux d'inventaire des articles qui ont changé depuis la dernière synchronisation sont transférés vers Shopify. Les niveaux d'inventaire des entrepôts ERPNext sont mappés 1 à 1 avec les emplacements Shopify.

1. Pour activer la synchronisation des stocks, cliquez sur la case à cocher, cela vous montrera un tableau pour mapper l'entrepôt ERPNext avec Shopify Location.
2. Sélectionnez la fréquence de synchronisation. 30 à 60 minutes est la fréquence recommandée.
3. Cliquez sur le bouton "Récupérer les emplacements Shopify" pour remplir les emplacements Shopify dans le tableau.
4. Reliez chaque emplacement à l'entrepôt ERPNext.
5. Enregistrez les paramètres.


::callout{icon="i-heroicons-exclamation-triangle" color="amber"}
**Remarque** : ce connecteur suppose qu'ERPNext est la principale source d'informations sur les niveaux de stock, toute modification apportée aux niveaux de stock de Shopify sera écrasée par ERPNext si les niveaux de stock de Dokos changent.
::

::callout{icon="i-heroicons-exclamation-triangle" color="amber"}
**Remarque** : Shopify ne prend pas en charge la quantité fractionnaire. Si une quantité fractionnaire est trouvée dans Dokos, le niveau de stock sur Shopify sera défini en l'arrondissant au nombre entier le plus proche.
::


## 5. Synchronisation de l'article 

Vous pouvez activer la synchronisation des nouveaux éléments ERPNext vers Shopify en cochant « Télécharger les nouveaux éléments ERPNext vers Shopify ».

Vous pouvez également mettre à jour l'article Shopify lors de la mise à jour de l'article Dokos.

Le but de fournir cette fonctionnalité est de synchroniser les articles avec Shopify. Il n'est pas possible de mapper tous les champs 1 à 1. Lors de la création d'un article sur Shopify à l'aide de cette méthode, il est lié à Dokos, ce qui élimine la possibilité de duplication. Vous pouvez modifier les articles sur Shopify ultérieurement pour ajouter plus de détails.

Remarque : Cette fonctionnalité n'est pas prise en charge dans l'importation de données ou pour les éléments de variante/modèle.

## 6. Annulation de commandes

Ce connecteur gère divers scénarios d'annulation de la manière suivante :

1. Si la commande sur Shopify est annulée et qu'elle n'est pas associée à une facture ou à un bon de livraison, la commande client ERPNext est annulée.
2. Si le document Commande client de Dokos a un document lié, le statut de la commande sur Shopify est ajouté au document respectif. L'annulation et la préparation des documents appropriés doivent être effectuées par l'utilisateur sur la base de ces informations.
