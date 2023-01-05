---
title: Abonnement
description: 
---

# Abonnement

Dokos permet la création et la gestion des abonnements client. Créez des abonnements mensuels, annuels etc. 

---

Pour accéder à la liste des abonnements, allez sur : 
> Accueil > Ventes > **Abonnement**

## 1. Comment créer un abonnement

1. Cliquer sur en haut à droite sur le bouton **:heavy_plus_sign: Ajouter Abonnement** pour créer un nouveau
2. Sélectionnez un **client**
3. Indiquez la **société** et choisissez la **devise** de transaction
4. **Enregistrez**

## 2. Caractéristiques

### 2.1 Période d'abonnement
La période d'abonnement vous permet de définir la date de début de l'abonnement ou de définir une date pour commencer une période d'essai. 

- Sélectionnez une **date de début d'abonnement** ou une **date de début de période d'essai**

### 2.2 Paramètre d'abonnement

Dans la section **Paramètre**, vous allez choisir les différentes options possibles pour cet abonnement : 

   - **Génération d'une commande client** au démarrage de la période
   - **Génération de la facture** au début de la période: par défaut la facture est générée à la fin de la période
   - **Validation automatique de la facture après sa création** : Si cette option n'est pas cochée, la facture reste en brouillon pour validation manuelle
   - **Choisir l'intervalle de facturation** de l'abonnement : Jour, Semaine, Mois ou Année
   - **Définir la fréquence de facturation** : Nombre de fois que votre abonné va recevoir la facture de l'abonement. Par exemple, si vous avez choisi un intervalle par **mois** et une fréquence sur **1**, il recevra une facture par mois.
   - **Le nombre de jours avant échéance** : Nombre de jours maximum pendant lesquels l'abonné peut payer les factures générées par cet abonnement avant d'être considéré en retard.
   - **Générer une demande de paiement automatiquement**: Option permettant de créer une demande de paiement pour chaque facture générée. Cette option s'accompagne de la possibilité de choisir quelles passerelles de paiement seront proposées au client pour son réglement, quel modèle d'email sera utilisé pour envoyer un email automatiquement au client, ainsi que le format d'impression à utiliser pour générer le PDF de la facture accompagnant l'email.

### 2.3 Plans d'abonnement

La notion de plan de d'abonnement consiste à lier un article avec une devise, une règle de détermination du prix et un intervale de facturation.
Vous pouvez créer autant de plans d'abonnement que nécessaire.

Dans une même facture vous ne pouvez ajouter que des plans d'abonnements ayant la même devise, la même règle de détermination du prix et le même intervale de facturation.

Si votre plan d'abonnement est lié à un plan de facturation Stripe, vous pouvez l'ajouter dans la section **plans de passerelles de paiement**.

#### 2.3.1 Dates de début et de fin

Chaque plan d'abonnement peut avoir une date de début et une date de fin d'abonnement.
Lors de la génération des factures, le plan doit être encore valide pour être pris en compte.
Il n'est pas possible de facturer des plans d'abonnement au pro-rata.

### 2.4 Taxes

Pour ajouter des taxes à votre abonnement, vous devez sélectionner un **Modèle de frais et taxes de vente** ou ajouter des taxes manuellement dans le tableau des taxes et frais de vente.

Le total des taxes et frais est affiché sous le tableau. En cliquant sur __Répartition des taxes__ vous afficherez toutes les composantes de taxes et leurs montants.

Vous pouvez également ajouter une **Règle de livraison** pour les articles dans votre abonnement.

### 2.5 Réductions

En plus d'offrir des remises par article, vous pouvez ajouter une remise à la totalité de l'abonnement dans cette section.  
Cette remise peut être basée sur le total TTC ou sur le total HT.  
La remise additionnelle peut être définie en pourcentage ou en montant.

### 2.6 Termes et conditions

Vous pouvez sélectionner un modèle de termes et conditions et le modifier en fonction des spécificités de la transaction.


### 2.7 Passerelles de paiement

Lorsque le client paie son premier mois d'abonnement, la passerelle de paiement liée à cet abonnement est automatiquement mise à jour.
Elle permet la génération automatique des paiements suivants ou la liaison avec un webhook reçu depuis la passerelle de paiement.

## 3. Annuler un abonnement

> Actions > **Annuler l'abonnement**

Mettez la date d'annulation de cet abonnement.
Si la dernière facture doit être générée au pro-rata des jours d'abonnements, cochez la case correspondante.


## 4. Cas d'usage

Le tiers lieu Mappemonde souhaite mettre en place une formule d'abonnement mensuel à son espace de coworking.

### 4.1. Création d'un modèle d'abonnement

Nous allons donc créer un modèle d'abonnement prévoyant les règles de génération de factures qui s'appliqueront à tous les clients souscrivant à cette offre.

Vous pouvez retrouver le détail de ce modèle sur la démo en ligne: https://tierslieux.dokos.io/app/subscription-template/Coworking%20mensuel


- Une facture sera générée une fois par mois
- Les abonnements démarreront systématiquement le 1er du mois
- Les factures seront générées en début de période
- les factures seront validées automatiquement après leur génération
- Une demande de paiement sera générée avec chaque facture
	- Seul le paiement par carte bancaire sera proposé
  - Le modèle d'email *Notification de facture* sera utilisé pour envoyer automatiquement un email au client avec un lien de paiement et sa facture. Si le paiement peut être déclenché automatiquement par Dokos, le lien de paiement ne sera pas ajouté dans l'email.
  - Le format d'impression de facture "Facture Mappemonde" sera utilisé pour générer le PDF de facture associé à l'email.
 - Nous choisissons de facturer le plan d'abonnement *Coworking mensuel*
 	- Ce plan d'abonnement est composé d'une ligne de facturation comprenant une quantité de l'article *Coworking mensuel*. Son prix sera déterminé automatiquement pour chaque client sur la base de la liste de prix qui lui est applicable.
  
  
### 4.2. Création d'un abonnement

#### 4.2.1. Premier mois

Pour créer notre premier abonnement, nous cliquons sur *Actions > Créer un abonnement*
Nous pouvons le retrouver en accédant à la liste des abonnement via les *Documents liés* du tableau de bord. 
Il n'est pas immédiatement actif afin de nous laisser le temps de faire d'éventuelles modifications avant son déclenchement.
Nous pouvons l'activer en cliquant sur *Vérifier si l'abonnement est à jour*.

Dès qu'il est actif, on peut constater qu'une facture de vente a été générée ainsi qu'une demande de paiement.
Nous pouvons vérifier la facture et s'assurer que l'article *Coworking mensuel* a bien été facturé au prix attendu pour ce client.

Dans la demande de paiement nous retrouvons l'email qui a été envoyé au client, avec l'adresse du destinataire, correspondant au contact principal du client, sélectionné dans l'abonnement.

En cliquant sur le lien de paiement (lien dans le mail et dans la barre latérale de gauche), on vérifie que le client peut bien régler par carte bancaire.

A la validation du paiement par le client, la passerelle de paiement renvoie une *Demande d'intégration* qui permet à Dokos de créer l'*écriture de paiement* associée à la facture et de solder la facture.

#### 4.2.2. Deuxième mois et mois suivants

Le deuxième mois, le processus est le même: l'abonnement déclenche la création d'une facture et d'une demande de paiement.
Cette fois-ci la passerelle de paiement a conservé les informations de paiement du client, nous sommes donc en mesure de déclencher le paiement automatiquement sans demander au client de ressaisir ses informations de carte bancaire.
L'email envoyé ne contiendra pas de lien paiement et Dokos déclenchera le paiement automatiquement.


> Dokos ne stocke aucune information de paiement.
>Celles-ci sont uniquement stockées chez un des prestataires de paiement pouvant être associés aux abonnements: Stripe ou GoCardless. 
{.is-info}