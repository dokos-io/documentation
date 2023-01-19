---
title: Terme de paiement
description: 
published: true
date: 2021-08-27T09:34:26.082Z
tags: 
editor: markdown
dateCreated: 2021-08-27T09:26:54.457Z
---

# Terme de paiement

Une condition de paiement permet de définir un calendrier selon lequel les paiements seront effectués.

Une condition de paiement définit une tranche de paiement spécifique. Par exemple, 50 % de paiement à la commande et 50 % à la livraison de l'article. Vous pouvez enregistrer les conditions de paiement de votre entreprise sur Dokos et les inclure dans tous les documents du cycle de vente/achat. Dokos fera toutes les écritures du grand livre en conséquence.

Dans Dokos, le formulaire Conditions de paiement ne définit que des pourcentages de portion. Le calendrier de paiement réel peut facilement être appliqué à l'aide du modèle de conditions de paiement.

Vous pouvez utiliser les conditions de paiement dans les documents suivants :

- Facture de vente
- Facture d'achat
- Commande client
- Commande fournisseur
- Devis

---

Pour accéder à **la liste Terme de paiement**, allez sur :

Accueil > Comptabilité > Données de base > **Terme de Paiement**

## 1. Comment créer une condition de paiement ? 

1. Accédez à la liste Conditions de paiement et cliquez sur **Nouveau**.
2. Saisissez un **nom** pour les conditions de paiement (par exemple : 50 % après l'expédition).
3. Saisissez la **partie Facture**. Si vous entrez 50, la partie sera de 50 pour cent du montant de la facture.
4. Sélectionnez un **type de date d'échéance**.
5. Sous **Jours de crédit**, entrez le nombre de jours après lesquels le montant restant doit être payé.
6. **Enregistrer**.

Les champs sont expliqués comme suit :

- **Nom de la condition de paiement** : nom de cette condition de paiement.
- **Date d'échéance basée sur** : la base sur laquelle la date d'échéance pour la condition de paiement doit être calculée. Ceci est calculé X nombre de jours à compter de la date de comptabilisation de la facture/commande. Il y a trois options :
- **Jour(s) après la date de facturation** : La date d'échéance doit être calculée en jours concernant la date de comptabilisation de la facture. Par exemple, si 7 est saisi à la date du 20, la date d'échéance sera le 27.
- **Jour(s) après la fin du mois de facturation** : La date d'échéance doit être calculée en jours concernant le dernier jour du mois au cours duquel la facture a été créée. Par exemple, si 7 est entré dans le mois en cours et que le dernier jour du mois est le 30, la date d'échéance sera le 7 du mois suivant.
- **Mois après la fin du mois de facturation** : La date d'échéance doit être calculée en mois concernant le dernier jour du mois au cours duquel la facture a été créée. Par exemple, si 3 est saisi le 20 janvier, la date d'échéance sera le 20 mars.
- **Partie de la facture** : la partie du montant total de la facture pour laquelle cette condition de paiement doit être appliquée. La valeur donnée sera considérée comme un pourcentage c'est à dire 50 = 50% de la facture/commandes Grand Total
- **Jours de crédit (facultatif)** : le nombre de jours ou de mois de crédit est autorisé en fonction de l'option choisie dans le champ Date d'échéance basée sur. 0 signifie qu'aucun crédit n'est autorisé.
- **Description** : (facultatif) Une brève description des conditions de paiement.

### 1.1 Mise en place d'une remise sur les paiements anticipés

Vous pouvez configurer des conditions de paiement avec escompte de sorte que si le paiement est effectué dans le délai spécifié, un certain montant/pourcentage de la valeur de la facture sera actualisé. Les champs suivants définissent la configuration de la remise :

- **Type de remise** : La valeur par défaut est Pourcentage. Vous pouvez également le changer en Montant.
- **Remise** : En termes de pourcentage ou de montant (par exemple, 10 % ou 5 000 ).
- **Validité de la remise basée sur** : ce champ agit de la même manière que la date d'échéance basée sur le champ de la section précédente.
- **Validité de la remise** : Le nombre de jours ou de mois pendant lesquels la remise est valable par rapport à la date de la facture (par exemple 10 jours après la date de la facture).

Vous pouvez maintenant lier les conditions de paiement à une facture et lors de la création du paiement sur cette facture, la remise sera appliquée automatiquement.

### 1.2 Conditions de paiement dans les documents convertis

Lors de la conversion ou de la copie de documents dans le cycle de vente/d'achat, les conditions de paiement ci-jointes seront copiées. Lors de la création d'une commande client à partir d'un devis, la date d'échéance dans les conditions de paiement sera conforme au devis, elle doit être mise à jour.

Pour faciliter l'utilisation, vous pouvez également définir un modèle de conditions de paiement et le resélectionner simplement.

### 1.3 Ajouter des conditions de paiement aux documents

Une fois que vous avez composé le modèle de conditions de paiement, vous pouvez les utiliser dans les transactions de vente et d'achat. Sur la base de la valeur définie pour les conditions de paiement et la valeur de la transaction, le calendrier de paiement sera défini, avec une date d'échéance pour chaque tranche de paiement.