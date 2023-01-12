---
title: Paramètres de comptabilité
description: 
published: true
date: 2022-10-28T13:47:20.950Z
tags: 
editor: markdown
dateCreated: 2021-08-10T12:06:59.017Z
---

# Paramètres de comptabilité

Il existe différents paramètres de compte dans DOKOS pour restreindre et configurer les actions dans le module Comptabilité.

## 1. Comptes gelés jusqu'à

Geler les transactions comptables jusqu'à la date spécifiée, personne ne peut effectuer/modifier une entrée à l'exception du rôle spécifié.

## 2. Rôle autorisé à définir des comptes gelés et à modifier les entrées gelées

Les utilisateurs avec ce rôle sont autorisés à définir des comptes gelés et à créer/modifier des écritures comptables par rapport aux comptes gelés.

## 3. Déterminer la catégorie de taxe d'adresse à partir de

La catégorie de taxe peut être définie sur les adresses. Une adresse peut être une adresse de livraison ou de facturation. Définissez les adresses à sélectionner lors de l'application de la catégorie de taxe.

## 4. Pourcentage d'indemnité de surfacturation

Le pourcentage par lequel vous pouvez surfacturer des transactions. Par exemple, si la valeur de la commande est de 100 $ pour un article et que le pourcentage ici est défini sur 10 %, vous êtes autorisé à facturer 110 $.

## 5. Rôle autorisé à surfacturer

Les utilisateurs avec ce rôle sont autorisés à surfacturer au-dessus du pourcentage d'allocation.

## 6. Contrôleur de crédit

Sélectionnez le rôle autorisé à soumettre des transactions dépassant les limites de crédit définies. La limite de crédit peut être définie dans le formulaire Client.

## 7. Vérifier l'unicité du numéro de facture du fournisseur

Lorsque cette case est cochée, les factures d'achat avec le même « N° de facture fournisseur » ne seront pas autorisées. Ceci est utile pour éviter les entrées en double.

## 8. Effectuer le paiement via une écriture au journal

Lorsque cette case est cochée, si l'utilisateur procède au paiement à partir d'une facture, le système ouvrira une écriture de journal au lieu d'une écriture de paiement.

## 9. Dissocier le paiement lors de l'annulation de la facture

Si coché, le système dissociera le paiement de la facture respective. Par défaut, si une écriture de paiement est soumise, la facture liée ne peut pas être annulée tant que l'écriture de paiement n'est pas également annulée. Lors de la dissociation, vous pouvez désormais annuler et modifier les factures. Mais les paiements ne seront pas liés et considérés comme des acomptes.

## 10. Dissocier le paiement anticipé lors de l'annulation de la commande

Semblable à l'option précédente, cela dissocie tous les paiements anticipés effectués sur les commandes d'achat/vente.

## 11. Saisie automatique de l'amortissement des immobilisations

Lorsqu'elle est cochée, une saisie automatique pour une dépréciation d'actif sera créée en fonction de la première date définie. Par exemple, l'amortissement annuel d'un article sera planifié pour les 3/4 années suivantes en fonction du nombre d'amortissements enregistrés défini dans la fiche d'immobilisation. Pour plus de détails, visitez la page Amortissement des actifs .

## 12. Autoriser le centre de coûts dans la saisie du compte de bilan

Si coché, le système permettra à l'utilisateur d'étiqueter les entrées dans les comptes de bilan par rapport à un centre de coûts. Par défaut, le centre de coûts n'est disponible que pour le compte Profit/Perte.

## 13. Ajouter automatiquement des taxes et des frais à partir du modèle de taxe d'article

L'activation de cette option remplira la table Taxes dans les transactions si un modèle de taxe d'article est défini pour un article et que cet article est sélectionné dans la transaction.

## 14. Récupérer automatiquement les conditions de paiement

L'activation de cette option récupérera automatiquement les conditions de paiement en fonction du fournisseur.

## 15. Paramètres d'impression

**Afficher les taxes incluses dans l'impression** : Les taxes appliquées seront affichées dans la vue d'impression.
Afficher l'échéancier de paiement sous forme imprimée : Le tableau Échéancier de paiement est visible lors de l'utilisation des Conditions de paiement . L'activation de cette option affichera ce tableau en vue d'impression.

## 16. Autoriser le taux de change périmé

Cette option doit être décochée si vous souhaitez qu'DOKOS vérifie l'âge des enregistrements extraits de Currency Exchange dans les transactions en devises étrangères. Si elle n'est pas cochée, le champ du taux de change sera en lecture seule dans les documents.

Jours périmés est le nombre de jours à utiliser pour décider si un enregistrement de change est périmé. Ceci est valide lorsque « Autoriser les tarifs périmés » est désactivé . Ainsi, si le nombre de jours périmés est défini sur 10, les taux périmés de 10 jours seront autorisés. Si Autoriser les taux périmés est activé, il n'y a pas de limite de temps pour l'âge des taux périmés.

Si les taux périmés sont activés, l'ordre de récupération est :

Dernier taux du formulaire de change
Si aucun bureau de change n'est trouvé, le dernier taux selon le marché est récupéré automatiquement
Si les taux périmés sont désactivés, l'ordre de récupération est :

Dernier taux du formulaire de change jusqu'au nombre de jours défini dans « jours périmés »
Si aucun bureau de change n'est trouvé Le dernier taux selon le marché est récupéré automatiquement

## 17. Utiliser un format de flux de trésorerie personnalisé

Vous pouvez choisir d'utiliser des formats de flux de trésorerie personnalisés pour personnaliser l'apparence du rapport de flux de trésorerie