---
title: Mettre en place un abonnement sur le portail utilisateur
description: 
published: true
date: 2022-01-28T12:59:49.100Z
tags: 
editor: markdown
dateCreated: 2022-01-28T08:49:24.378Z
---

# Mettre en place un abonnement sur le portail utilisateur

Dans Dokos, vous allez pouvoir créer des articles "Abonnement" qui pourront être choisi par vos adhérents / clients depuis le portail utilisateur.

L'adhérent pourra acheter un abonnement en l'ajoutant au panier puis en validant sa commande. Le processus d'achat sera identique à celui pour l'achat d'un article / réservation d'un article.

---

Pour accéder aux abonnements, allez sur : 
> Accueil > Lieu > **Section abonnement**

## Pré-requis

Pour mettre en place le système d'abonnement sur votre portail web, il est nécessaire de configurer certains documents :

- **Créez un article** : Il sera par la suite configuré en Abonnement
- **Créez un Groupe d'article Abonnement** (facultatif) : Pouvoir ajouter vos **Articles - Abonnement** dans ce nouveau groupe d'article.
- **Ajoutez le groupe d'article dans la barre de navigation du portail**

## 1. Créez les documents Abonnements

### 1.1 Le plan d'abonnement

**Rappel** : La notion de plan de d'abonnement consiste à créer un plan avec la table des articles, des quantités, des prix et la période.

- Allez dans la section abonnement, cliquez sur **Ajoutez un plan abonnement**

![nouveau_plan.png](/venue/portal-subscription-plan/nouveau_plan.png)

- **Indiquez un nom de plan** : Pour l'exmemple, "Abonnement Pass Tiers-Lieux"
- **Ajoutez un article** : Sélectionnez un article ou créez un article qui sera utilisé pour l'abonnement. Pour l'exemple, on a créé l'article "Abonnement Pass Tiers-Lieux
- **Indiquez la quantité** : Ici on indique 1, car dans notre cas il s'agit d'un seul Pass Tiers-Lieux.
- **Le prix** : Le prix sera repris selon le prix de votre article. **Point de vigilance** : Actuellement, même si vous avez bien configurer un prix pour l'article, si vous faites enregistrer, le prix indiquera 0. Mais le système prendra bien en compte le prix de l'article.
- Faites **Enregistrer**

### 1.2 Le modèle d'abonnement

1. Allez dans la section abonnement, cliquez sur **Ajouter un modèle d'abonnement**

![nouveau_modèle.png](/venue/portal-subscription-plan/nouveau_modèle.png)

2. Indiquez les **différents paramètres**
	- **Générer une commande client** : Utile si la facture est générer en fin de mois. Cela vous permettra d'avoir un "Prévisionnel" des abonnements en cours.
 	 - **Générer une facture au début de la période**
 	 - **Valider la facture automatiquement**
   - **Générer une demande de paiement automatiquement** : Dès qu'un abonnement sera choisi par un adhérent. Il sera notifié par Email pour payer son abonnement et recevoir la facture.
   
> **Fonctionnement des demandes de paiement** : Si vous avez activé la passerelle Carte bancaire, alors chaque mois l'adhérent recevra une demande de paiement et dès son premier paiement par CB alors les mois suivants le débit sera fait automatiquement sur sa carte.
{.is-warning}
  
![paramètres.png](/venue/portal-subscription-plan/paramètres.png)

- Activez le modèle sur le portail : Cochez **Disponible sur le portail**
![portail_activable.png](/venue/portal-subscription-plan/portail_activable.png)

### 1.3 Configurez votre article en Abonnement

- Allez sur l'article qui a été ajouté dans le plan d'abonnement
- Allez dans la section, **Détails des ventes**
- Cochez la case : **Est un article à vendre**
- Créer un abonnement basé sur :** Sélectionnez le modèle** que vous venez de créer (Cf Partie 1.2).

![article.png](/venue/portal-subscription-plan/article.png)

- Dans la section Site Web : Cochez la case **Afficher sur le site Web**

![capture_d’écran_2022-01-28_à_13.40.07.png](/venue/portal-subscription-plan/capture_d’écran_2022-01-28_à_13.40.07.png)

- Faites **Enregistrer**

## 2. Configuration du portail utilisateur

Dans notre cas, j'ai ajouté **un nouveau Groupe d'article** que j'ai nommé **Abonnement**. L'article Abonnement Pass Tiers-Lieux a été ajouté à ce groupe d'article. Modifiez ce groupe dans la configuration de l'article.

Dans ce groupe d'article, j'ai coché la case Activé sur le site web dans la section **Paramètres du site web**. Et le nom de Route (URL), j'ai indiqué "**Abonnement**"

### 1. Ajoutez le groupe d'article dans la barre de navigation

1. Allez dans les Paramètres du site web, puis dans la section Menu de Navigation.

2. Ajoutez une nouvelle ligne
3. Indiquez le nom du Libellé : Nom qui sera affiché sur la barre
4. Ajoutez le lien, qui est la route du groupe d'article > **/abonnement**

![capture_d’écran_2022-01-28_à_13.48.07.png](/venue/portal-subscription-plan/capture_d’écran_2022-01-28_à_13.48.07.png)

5. Faites **Enregistrer**

### Allez sur le portail client

Maintenant tout est bien configuré.
Si vous allez sur le portail client, vous avez bien une nouvelle section dans la barre de navigation.

En allant sur ce lien, vous allez bien retrouver votre article.
Vous allez pouvoir Ajouter l'Article (Abonnement) dans le panier puis de l'acheter.

En confirmant l'achat, l'abonnement sera oppérationnel.

![capture_d’écran_2022-01-28_à_13.52.43.png](/venue/portal-subscription-plan/capture_d’écran_2022-01-28_à_13.52.43.png)