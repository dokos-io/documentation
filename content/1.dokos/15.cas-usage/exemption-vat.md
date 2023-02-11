---
title: Exonération de TVA
description: 
published: true
date: 2022-02-28T10:08:37.862Z
tags: 
editor: markdown
dateCreated: 2022-02-28T09:44:44.112Z
---

# Exonération de TVA

Le statut d'auto-entrepreneur en France entraîne directement une franchise de TVA : vous ne facturez pas la TVA à vos clients et vous ne récupérez pas la TVA lors de vos achats. 

Il n'y a donc ni TVA collectée, ni TVA déductible et ni déclaration de TVA en auto-entreprise. 

Lorsque vous facturez, vous devez inscrire sur la facture la mention : **« TVA non applicable, article 293B du CGI »**.

---

Dans ce cas d'usage, nous allons voir comment vous pouvez assimiler un client, un fournisseur ou groupes à une exonération de TVA soit une TVA de 0%.

## 1. Configuration des modèles de TVA

1. Allez dans **Modèle de taxes et frais d'achat ou vente**, cliquez sur Nouveau.
2. Entrez un nom de titre pour la taxe (Exonération de TVA ou TVA 0%)
3. Dans **catégorie de Taxe**, ajoutez ou sélectionnez une catégorie de Taxe. 
	- Créez une catégorie de taxe en la nommant : **Exonération de TVA**
4. Vous n'avez pas besoin de renseigner la table taxe et frais.
5. Faites **Enregistrer**.

## 2. Attribution du modèle de TVA (Méthode 1)

### 2.1 Création d'une règle de taxation

Une fois que vous avez enregistré votre modèle, dans documents liés puis faites ajoutez une règle de taxation.

1. Indiquez le type de Taxe : Si cela concerne les ventes ou les achats.
2. Sélectionnez le modèle de TVA (ici on sélectionne notre modèle de TVA à 0%).

### 2.2 Sélectionnez les documents qui seront concernés par cette règle

Vous pouvez maintenant choisir les documents qui seront concernés par cette exonération de TVA. Vous pouvez mettre un client en particulier, un groupe de client, un fournisseur etc...

Puis faites **enregistrer**.

## 3. Attribution du modèle de TVA (Méthode 2)

Une fois que vous avez enregistré votre modèle. En allant sur un document client par exemple, vous pouvez lui appliquer ce modèle de TVA. 

Dans la section **Nom et Type**, allez dans sur le champs **Catégorie de taxe** puis sélectionnez la **catégorie TVA à 0%**.

Puis faites enregistrer.

::alert{type=warning}
Il est important de bien lier votre **catégorie de TVA** à **votre modèle de taxes et frais**.
::

Maintenant, si vous créez un devis, une commande etc.. aucune TVA ne sera appliqué. Le montant de la TVA sera de 0€.

::alert{type=warning}
Si vous êtes un auto-entrepreneur ou une société qui n'est pas assujeti à la TVA, pensez bien à faire figurer la mention **TVA non applicable, article 293B du CGI** sur vos documents.
::






