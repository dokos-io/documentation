---
title: Paramètres de vente
description: 
---

# Paramètres de vente
Paramètres de vente est l'endroit où vous pouvez définir les propriétés et les validations qui seront appliquées aux maîtres et aux transactions impliquées dans le cycle de vente.

---

Pour accéder aux **Paramètres de vente**, allez sur :

> Accueil > Vente > Paramètres > **Paramètres de vente**

## 1. Informations générales

### 1.1 Dénomination du client par

Lorsqu'un client est enregistré, un identifiant unique est généré pour ce client.

Par défaut, l'ID client est généré en fonction du nom du client. Si vous souhaitez enregistrer le client en utilisant une série de dénomination, dans le champ Série de dénomination du client, définissez la valeur sur **Série de dénomination**. Exemple d'identifiant client enregistré dans la série de dénomination - "CUST00001, CUST00002, CUST00003 ..." et ainsi de suite.

Vous pouvez définir des séries de noms pour les clients à partir de:

> Configuration > Données > **Attribution de noms aux séries**

### 1.2 Dénomination de la campagne par

Tout comme pour le client, vous pouvez également configurer la méthodologie de dénomination pour le maître de campagne. Par défaut, une campagne sera enregistrée avec le nom de la campagne.

### 1.3 Groupe de clients et territoire par défaut

Sélectionnez un groupe de clients par défaut qui sera mis à jour automatiquement lors de la création d'un nouveau client.

Des devis peuvent être créés pour les clients ainsi que pour les prospects. Lors de la conversion d'un devis en commande client, qui est créée pour un prospect, le système tente de convertir ce prospect en client. Lors de la création du client dans le backend, les valeurs du groupe de clients et du territoire sont sélectionnées dans les paramètres de vente. Si aucune valeur par défaut n'est trouvée pour le groupe de clients ou le territoire, vous recevrez un message de validation demandant le groupe de clients ou le territoire. Vous pouvez également convertir manuellement un prospect en client.

### 1.4 Liste de prix par défaut

La liste de prix définie dans ce champ sera mise à jour automatiquement dans le champ **Liste de prix** des transactions de vente telles que l'offre, la commande client, le bon de livraison et la facture de vente.

### 1.5 Fermer l'opportunité après des jours

S'il existe de nombreuses opportunités ayant un statut autre que **Ouvert**, elles seront automatiquement fermées après le nombre de jours mentionnés dans ce domaine.

### 1.6 Jours de validité du devis par défaut

Les devis au client ne sont valables que pour certains jours. Dans le devis, vous pouvez mettre à jour manuellement la date limite de validité. Par défaut, la date limite de validité est définie automatiquement sur 30 jours à compter de la date de publication du devis. Vous pouvez changer le nombre de jours dans ce domaine selon votre analyse de rentabilisation.

### 1.7 Commande client requise 

Si vous souhaitez rendre la création de commande client obligatoire avant la création d'une facture client, vous devez définir le champ **Commande client requise** sur **Oui**. Par défaut, ce sera **Non**.

Cette configuration peut être remplacée pour un client particulier en cochant la case **Autoriser la création de facture client sans commande client** dans la fiche client.

### 1.8 Bon de livraison requis

Pour rendre la création du bon de livraison obligatoire avant la création de la facture de vente, vous devez définir ce champ sur **Oui**. Par défaut, ce sera **Non**.

Cette configuration peut être remplacée pour un client particulier en cochant la case **Autoriser la création de factures de vente sans bon de livraison** dans la fiche client.

### 1.9 Fréquence de mise à jour des ventes

La fréquence à laquelle l'avancement du projet et les détails des transactions de l'entreprise seront mis à jour. Par défaut, c'est pour chaque transaction, vous pouvez également le définir sur **Quotidien** ou **Mensuel** si vous avez beaucoup de transactions chaque jour.

### 1.10 Maintenir le même taux tout au long du cycle de vente

Si cette option est activée, DOKOS validera si le prix d'un article évolue dans un bon de livraison ou une facture client créée à partir d'une commande client, c'est-à-dire qu'il vous aidera à maintenir le même taux tout au long du cycle de vente.

Vous pouvez configurer l'action que le système doit entreprendre si le même taux n'est pas maintenu dans le champ "Action si le même taux n'est pas maintenu":

- **Stop** : DOKOS vous empêchera de changer le prix en lançant une erreur de validation.
- **Avertir** : le système vous permettra de sauvegarder la transaction mais vous avertira par un message si le taux est modifié.

### 1.11 Autoriser l'utilisateur à modifier le tarif tarifaire dans la transaction

Le teableau des articles dans les transactions de vente comporte un champ appelé **Tarif tarifaire**. Ce champ n'est pas modifiable par défaut dans toutes les transactions de vente. Cela permet de garantir que le prix d'un article est extrait de l'enregistrement **Prix de l'article** et que l'utilisateur n'est pas en mesure de le modifier.

Si vous avez besoin que le prix de l'article extrait de la liste de prix d'un article soit modifiable, **vous devez décocher ce champ**.

### 1.12 Autoriser l'ajout d'un article plusieurs fois dans une transaction

Il s'agit d'un contrôle de validation qui empêche qu'un élément soit ajouté plusieurs fois dans la même transaction lorsqu'il n'est pas coché. Dans certains cas, cela peut être un besoin explicite si c'est le cas, cochez cette case.

### 1.13 Autoriser plusieurs commandes client par rapport à la commande d'achat d'un client

Lors de la création d'une commande client, vous pouvez mettre à jour l'ID de commande d'achat et la date de réception du client. Vous ne pouvez créer qu'une seule commande client par rapport au numéro et à la date du bon de commande du client. Cependant, si vous souhaitez autoriser la création de plusieurs bons de commande pour le même numéro de bon de commande du client, cochez la case **Autoriser plusieurs commandes de vente par rapport au bon de commande d'un client**.

### 1.14 Valider le prix de vente de l'article par rapport au taux d'achat ou au taux de valorisation

Lorsque vous effectuez des ventes, il est important de savoir que vous ne faites pas de pertes. L'activation de cette validation validera le prix de vente de l'article avec sa valorisation / prix d'achat. Si le prix de vente d'un article est inférieur à son prix d'achat, vous recevrez une invite lorsque cette case est cochée.

### 1.15 Masquer le numéro d'identification fiscale du client dans les transactions de vente

Conformément à l'exigence légale, la plupart des clients se voient attribuer un numéro d'identification fiscale unique. Ils doivent également avoir cet identifiant fiscal récupéré dans les transactions de vente. Cependant, si vous ne souhaitez pas utiliser cette fonctionnalité, vous pouvez la désactiver en cochant cette propriété.