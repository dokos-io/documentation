---
title: Règle de livraison
description: 
published: true
date: 2021-08-24T10:21:19.036Z
tags: 
editor: markdown
dateCreated: 2020-11-26T17:55:42.182Z
---

# Règle de livraison
En utilisant la règle de livraison, vous pouvez définir le coût de livraison d'un produit au client ou depuis le fournisseur.

Avec les règles de livraison, vous pouvez :

- définir un montant de livraison fixe
- définir un montant de livraison pour différentes plages de poids ou de montants
- définir différentes règles pour différents pays
- proposer des modes de livraison E-Commerce
- proposer des points de retrait E-Commerce

---

Pour accéder à la **règle de livraison**, allez sur :

> Accueil > Vente > Articles et prix > **Règle de livraison**

![règle_de_livraison_.png](/content/ventes/shipping-rule/règle_de_livraison_.png)

## Comment créer une règle de livraison

1. Accédez à la liste des **règles de livraison**, cliquez sur :heavy_plus_sign: Nouveau.
2. Saisissez le libellé de la règle de livraison, par exemple «Expédition prioritaire» ou «Expédition le jour suivant».
3. Poursuivez avec les détails comptables tels que le compte de livraison, le centre de coûts auquel le montant sera facturé et le montant de livraison.
4. Sous Calculer en fonction de, vous pouvez également modifier le calcul sur lequel la règle de livraison sera appliquée comme la quantité totale nette ou le poids total net, par défaut, il est "Fixe".
5. **Enregistrer**.

![créer_règle_de_livraison.png](/content/ventes/shipping-rule/créer_règle_de_livraison.png)

## Caractéristiques

### Comptabilité
La section comptabilité vous permet de définir la société qui sera affecté par les transactions et de défnir le compte de livraison pour la création de cette règle de livraison. 

![comptabilité_règle_de_livraison.png](/content/ventes/shipping-rule/comptabilité_règle_de_livraison.png)

### Dimensions comptables
Les dimensions comptables vous permettent d'étiqueter les transactions en fonction d'un territoire, d'une succursale, d'un client, etc. spécifiques. Cela permet d'afficher les états comptables séparément en fonction de la ou des dimensions sélectionnées.

### Conditions des règles de livraison

En sélectionnant Total net ou Poids net, un tableau apparaîtra dans lequel vous pouvez définir les valeurs de départ et d'arrivée pour le montant ou le poids. Saisissez le montant de livraison à calculer pour la plage saisie. Ajoutez plus de conditions si nécessaire. Vous ne pouvez sélectionner qu'une des trois méthodes de calcul dans une règle de livraison.

![mode_de_calcul_règle_de_livraison.png](/content/ventes/shipping-rule/mode_de_calcul_règle_de_livraison.png)

### Restreindre aux pays

Vous pouvez limiter la règle de livraison à certains pays, ajoutez les pays dans le tableau. Par défaut, la règle de livraison sera applicable dans le monde entier.

![restreindre_au_pays_règle_de_livraison.png](/content/ventes/shipping-rule/restreindre_au_pays_règle_de_livraison.png)


## Proposer des modes de livraison E-Commerce

Pour proposer des modes de livraison sur le site web, lors du passage d'une commande, rendez-vous dans l'onglet **Site web** de la règle de livraison et cochez la case **Afficher sur le site web**.

Vous pouvez optionnellement définir une **Description** et modifiez le **Libellé** (onglet _Détails_) qui seront présentés aux clients.


## Proposer des points de retrait E-Commerce

Pour toute règle de livraison disponible sur le site web, vous pouvez proposer des points de retrait. Sinon, n'importe quelle adresse de livraison sera acceptée dans la commande.

Dans l'onglet **Site web**, ajouter des lignes dans le tableau **Points de retrait**. Chaque ligne n'est composée que d'une seule case : le Lien vers le document **Adresse**. Il faut donc au préalable créer un document Adresse pour chaque point de retrait, puis le lier à la règle de livraison. Vous pouvez utiliser [l'outil d'import de données](/dokos/parametrage/demarrage/import-de-donnees) pour créer rapidement ces adresses depuis un fichier Excel par exemple.
