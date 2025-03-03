---
title: Contrats
description: La fonctionnalité du type de contrat de réservation de ressources permet de définir différents modèles de contrats associés à la réservation de ressources dans dokos. Ce module aide à personnaliser les conditions des contrats, comme la durée minimale, les préavis ou encore les modèles prédéfinis pour simplifier le processus de gestion des contrats.
---

## 1. Prérequis

Avant de pouvoir établir un contrat de réservation, il est nécessaire de créer un article au préalable :

> _**Accueil > Ventes > Données de vente > Article**_

::tour{demo="Mappemonde" doctype="item"}
Créer un article dans la démo
::

- Il est important de **configurer les articles comme récurrents** afin qu'ils déclenchent automatiquement la création d'un abonnement lors de la validation de la commande.

Ensuite, vous devez publier cet article sur le site web.

![Cette image permet de visualiser comment publier un article sur le site web.](/publier-un-article-sur-le-site-web.png)

Accédez à l'article publié sur le site web pour finaliser les paramètres de celui-ci.

![Cette image permet de visualiser l'article du site web.](/article-du-site-web.png)

Si vous avez activé la récurrence dans l'article, la case **Générer un abonnement** sera automatiquement cochée et non modifiable.

Indiquez la période de récurrence pour cet article.

## 2. Type de contrat

::tour{demo="Mappemonde" doctype="booking-contract-type"}
Créer un type de contrat dans la démo
::

![Cette image permet de visualiser formulaire du type de contrat.](/type-de-contrat.png)

### 2.1. **Informations générales du contrat**

- **Désactivé** : Cochez cette case si vous souhaitez désactiver ce type de contrat temporairement ou définitivement.
- **Type de contrat** : Indiquez ici le nom du type de contrat que vous créez.
- **Sélectionner un modèle de contrat** : Si vous avez des modèles de contrat prédéfinis, vous pouvez les sélectionner ici.**Modèle de contrat** : Vous pouvez rédiger ou copier-coller le contenu du contrat ici.
- **Spécifier les options de durée** Si vous gérez des contrats à durée déterminée, vous pouvez spécifier les paramètres suivants :
- **Contrat à durée déterminée** : Cochez cette option si le contrat a une durée fixe. **Durée minimum** : Spécifiez la durée minimale en mois.**Préavis** : Indiquez ici la période de préavis nécessaire avant de mettre fin au contrat.

![Cette image permet de visualiser l'onglet ressource dans le type de contat.](/type-de-contrat-ressources.png)

### 2.2. **Définir les ressources associées au contrat**

Dans l'onglet **Ressources**, vous avez la possibilité de définir quelles ressources seront accessibles avec ce type de contrat. Il peut s'agir d'espaces de travail, de salles de réunion, ou d'équipements spécifiques.

::callout
Cette fonctionnalité permet de fournir un accès illimité aux ressources que vous choisissez de rendre disponibles.
::

![Cette image permet de visualiser l'onglet facturation dans les ressources réservables.](/onglet-facturation.png)

### 2.3. Configurer les articles de facturation

Dans cette section, vous allez spécifier les différents articles qui seront facturés.

- **Article de facturation récurrente** : Sélectionnez l'article qui sera facturé de manière récurrente pour le quel vous faites ce contrat.
- **Article de facturation à la signature** : Ce champ permet de spécifier un article qui sera facturé uniquement au moment de la signature du contrat, tel que des frais d'activation ou des frais administratifs.
- **Récurrence de facturation** : Indiquez la fréquence à laquelle la facturation récurrente sera appliquée (mensuelle, trimestrielle, annuelle).
- **Montant du dépôt de garantie** : Spécifiez ici le montant du dépôt de garantie à verser à la signature du contrat, si applicable. Ce dépôt peut servir à couvrir les frais en cas de dommages aux ressources ou de non-respect des conditions du contrat.

![Cette image permet de visualiser l'onglet format d'impression.](/format-d-impression-contrat-de-reservation.png)

### 2.4. Paramètres d'impression

Rendez-vous sur la page : format d'impression pour configurer vos formats.

![Cette image permet de visualiser l'onglet Avenants.](/avenant-contrat.png)

### 2.5. Avenants

**Exemples de cas d’utilisation des avenants**

- **Modification des conditions de réservation** : Si un client souhaite ajouter ou modifier des ressources, l’avenant peut inclure ces changements, tout en conservant le contrat initial.
- **Changement des tarifs** : En cas de modification des prix après la signature du contrat, un avenant peut être ajouté pour stipuler la nouvelle tarification.
- **Extension de la durée de réservation** : Vous pouvez utiliser un avenant pour prolonger une période de réservation initiale sans devoir rédiger un nouveau contrat.

## 3. Flux

1. Génération et signature du contrat
2. Création d’une commande récurrente
3. Génération d’un abonnement
4. Génération des factures

## 4. Dépôt de garantie

::tour{demo="Mappemonde" doctype="booking-deposit"}
Créer un dépôt de garantie dans la démo
::

Le versement s'effectue lors du règlement de la première facture.

![Cette image permet de visualiser le formulaire de dépôt de garantie.](/formulaire-depot-de-garantie-rembourse.png)

Le bouton "Actions" permet d'enregistrer le paiement et de procéder ensuite au remboursement.

## 5. Contrat

::tour{demo="Mappemonde" doctype="booking-contract"}
Créer un contrat dans la démo
::

**Si vous souhaitez créer un abonnement lié à un contrat, il est nécessaire de générer le contrat, qui à son tour générera l'abonnement.**

![Cette image permet de visualiser le formulaire pour générer un contrat](/contrat.png)
![Cette image permet de visualiser comment envoyer ou valider le contrat](/signer-contrat.png)

Une fois le formulaire configuré, vous pouvez l'envoyer par mail au client pour signature ou bien le valider, ce qui vaudra comme signature.

### 5.1. Mail reçu par le client

Voici l'e-mail reçu par le client pour demander sa signature, une fois le contrat établi depuis le bureau.

![Cette image permet de visualiser l'e-mail reçu par le client.](/mail-type.png)

## 6. Abonnement

Dans la section "Termes et conditions", vous pouvez vérifier que votre abonnement est bien associé à un contrat.

![Cette image permet de visualiser le contrat lié à l'abonnement.](/abonnement.png)

Pour plus d'informations sur les abonnements, rendez-vous sur la page [**Abonnements**](/dokos/ventes/abonnements) de notre documentation.
