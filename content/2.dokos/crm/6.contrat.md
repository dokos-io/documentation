---
title: Contrat
description: 
published: true
date: 2022-10-28T14:52:44.709Z
tags: 
editor: markdown
dateCreated: 2021-05-19T09:26:49.099Z
---

# Contrat
Un contrat est un accord juridiquement contraignant entre un fournisseur et un client sur la vente ou les produits ou services.

Un contrat est juridiquement exécutoire car il répond aux exigences et à l'approbation de la loi. Un accord implique généralement l'échange de biens, de services, d'argent ou de promesses de l'un de ceux-ci.

---

Pour accéder à la **liste des contrats**, allez sur :

> Accueil > Pipeline de vente > **Contrat**

## 1. Comment créer un contrat

1. Allez dans la liste des contrats et cliquez sur Nouveau.
2. Choisissez le client.
3. Indiquez la période du contrat
4. Saisissez les conditions du contrat. Un modèle peut également être créé pour récupérer facilement les termes.
5. Enregistrer.

**Utilisateur de partie** : l'employé de votre entreprise qui est en contact avec le client.

### 1.1 Statuts

- **Non signé** : le contrat n'a pas encore été signé par le client.
- **Actif** : Le contrat a été signé et est actif pendant la période du contrat.
- **Inactif** : Le contrat est hors de la période du contrat et n'est plus valide.

## 2. Caractéristiques

### 2.1 Période du contrat

La date de début et de fin au cours de laquelle le contrat est valide.

### 2.2 Détails du signataire

Cette section apparaîtra lorsque la case **Signé** (dans la première section) est cochée pour indiquer que le Client a signé et accepté le Contrat.

**Signataire** : entrez le nom de la personne qui a signé le contrat.
**Signé le** : date à laquelle le contrat a été signé.

![période_contrat.png](/crm/contract/période_contrat.png)

### 2.3 Détails du contrat

Saisissez les termes du contrat dans le champ Conditions du contrat. Vous pouvez créer un modèle de contrat et le modèle peut être sélectionné pour récupérer les conditions du contrat.

![détails_contrat.png](/crm/contract/détails_contrat.png)

### 2.4 Détails d'exécution

Si le contrat nécessite une exécution de la part du fournisseur (votre), ses détails peuvent être enregistrés dans le tableau des conditions d'exécution.

**Exigence** : saisissez une exigence qui doit être remplie. Par exemple, **installation**.
**Remarques** : Toutes les remarques concernant l'exigence peuvent être saisies ici.

### 2.5 Modèle de contrat

Un modèle de contrat est un aperçu standardisé d'un contrat sans les détails impliqués. Vous pouvez créer un nouveau modèle en allant sur:

> Accueil > CRM > Modèle de contrat

Vous pouvez créer des modèles à l'aide de Jinja. Par exemple:

````
The parties enter into this contract on {{ start_date }}.
````

Lorsque vous créez un nouveau contrat à l'aide de ce modèle, le {{ start_date }}est remplacé par la date saisie dans le champ du même nom.

![modèles_contrat.png](/crm/contract/modèles_contrat.png)

### 2.6 Références

Si le contrat peut être lié à une transaction dans DOKOS. Sélectionnez le type de transaction et la transaction spécifique. Les documents pouvant être liés sont:

- Devis
- Projet
- Commande client
- Commande fournisseur
- Facture de vente
- Facture d'achat

![référence_contrat.png](/crm/contract/référence_contrat.png)









