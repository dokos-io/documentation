---
title: Achat d'un actif
description: 
published: true
date: 2021-06-24T12:15:21.857Z
tags: 
editor: markdown
dateCreated: 2021-06-24T12:01:13.021Z
---

# Achat d'un actif

Dans DOKOS vous pouvez acheter un ou plusieurs actifs pour votre activité et les renseigner.

## 1. Prérequis avant utilisation

- **[Catégorie d'actif](/fr/assets/asset-category)**

## 1. Comment créer un achat d'un actif ?

1. Allez sur la liste d'article, créer un nouvel article
2. Créez un élément avec **Est une immobilisation** d'actif pour créer l'actif.
3. Vous pouvez également activer « **Créer automatiquement des actifs à l'achat** pour créer automatiquement des actifs. (Optionnel)
4. Ensuite, le cycle d'achat doit être suivi pour l'achat d'un actif.

5. Saisissez l'emplacement de l'actif dans le tableau Articles du reçu d' achat ou de la facture d'achat par lequel vous recevez l'article.
6. Lors de la soumission d'un reçu d'achat, basé sur la case à cocher de création automatique, les enregistrements d'actifs seront créés automatiquement. Vous pouvez ensuite saisir manuellement d'autres détails de l'actif à partir du formulaire d'actif.

Les écritures comptables suivantes seront enregistrées lors de la soumission de l'entrée de réception si la comptabilité des travaux d'investissement en cours est activée dans la catégorie d'actif de l'actif acheté.

On remarque ici qu'au lieu du compte d'actif correspondant, les immobilisations en cours ont été débités. C'est parce que l'actif a seulement été acheté et qu'il n'est toujours pas disponible pour utilisation. Jusqu'à ce que l'actif soit prêt à être utilisé, la valeur de l'actif est maintenue sur ce compte. Le jour où il est disponible, le compte CWIP est crédité et le compte d'actif correspondant est débité.

En cas de 'Comptabilité des travaux d'immobilisations en cours' désactivée dans la catégorie d'actif, l'entrée de reçu sera effectuée sur les comptes d'actif correspondants définis dans la catégorie d'actif.

DOKOS utilise également un compte temporaire **Actifs reçus mais non facturés** (un compte de passif) qui est crédité sur présentation de l'entrée du reçu d'achat. Plus tard, sur présentation de la facture d'achat, ce compte est débité/extourné.

