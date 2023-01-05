---
title: Numéro de série
description: 
published: true
date: 2022-11-02T08:56:27.872Z
tags: 
editor: markdown
dateCreated: 2021-05-23T09:14:01.837Z
---

# Numéro de série
Comme indiqué dans la page Article, si un article est paramètré en Série alors un enregistrement de numéro de série ( numéro de série) est conservé pour chaque quantité de cet article. Ces informations permettent de suivre l'emplacement du numéro de série, sa garantie et les informations de fin de vie (expiration).

Les numéros de série sont également utiles pour maintenir les immobilisations. Les programmes de maintenance peuvent également être créés par rapport aux numéros de série pour la planification et la planification des activités de maintenance pour ces actifs (s'ils nécessitent une maintenance).

Vous pouvez également savoir à quel fournisseur vous avez acheté le numéro de série et à quel client vous l'avez vendu. Le statut No de série vous indiquera son état actuel de l'inventaire.

Si votre article est en série, vous devrez entrer les numéros de série dans la colonne correspondante avec chaque numéro de série dans une nouvelle ligne. Vous pouvez gérer des unités uniques d'articles sérialisés à l'aide du numéro de série.

---

Pour accéder à la liste des numéros de série, allez sur :

> Accueil > Stock > N° de série et lot > **N° de série**

## 1. Prérequis avant utilisation

Avant de créer et d'utiliser un numéro de série, il est conseillé de créer d'abord les éléments suivants:

- **[Articles](/fr/stocks/item)**
- Activez "A un numéro de série" dans la base d'articles

## 2. Comment créer un numéro de série 

Habituellement, les numéros de série sont créés automatiquement lorsque des transactions sont effectuées sur un article sérialisé. Cela ne fonctionne que lorsque «A un numéro de série» est activé et qu'une série est définie dans le masque d'articles.

Par exemple, une série a été définie pour l'élément suivant comme «PB2L. #####». Ensuite, une entrée de stock a été soumise pour recevoir l'article. Les numéros de série ont été créés en conséquence.

Toutefois, si vous souhaitez créer un numéro de série manuellement, procédez comme suit:

1. Accédez à la liste des numéros de série, cliquez sur **:heavy_plus_sign: Ajouter N°de série**.
2. Entrez un **numéro de série**.
3. Entrez le **code de l'article** et les détails seront récupérés.
4. Si une transaction est effectuée avec un article, le numéro de série ne peut pas être défini ou annulé.
5. **Enregistrer**.

L'inventaire d'un article ne peut être affecté que si le numéro de série est traité via une transaction de stock (entrée de stock, reçu d'achat, bon de livraison, facture de vente). Lorsqu'un nouveau numéro de série est créé directement, son entrepôt ne peut pas être défini.

### 2.1 Remarques sur le numéro de série 

- Le statut est défini en fonction de l'entrée de stock.
Seuls les numéros de série avec le statut «Disponible» peuvent être fournis.
- Les numéros de série peuvent être créés automatiquement à partir d'une entrée de stock ou d'un reçu d'achat. Si vous mentionnez le numéro de série dans la colonne Numéros de série, il créera automatiquement ces numéros de série.
- Si dans la base de données articles, la série No de série est mentionnée, vous pouvez laisser la colonne No de série vide dans une entrée de stock / un reçu d'achat. Les numéros de série seront automatiquement définis à partir de cette série.

## 3. Caractéristiques 
### 3.1 Détails d'Achat / Production

Le document à partir duquel le numéro de série a été créé sera affiché. Si vous l'avez acheté auprès d'un fournisseur, il sera lié ici.

### 3.2 Détails de livraison

Si le numéro de série a été généré à partir d'une commande client, le client sera lié ici.

### 3.3 Détails de la garantie / AMC

Si l'article est sous garantie ou AMC (contrat de maintenance annuel), les dates d'expiration de celles-ci peuvent être définies.

### 3.4 Plus d'informations

Toute information supplémentaire sur cette unité d'article spécifique peut être définie sous **Numéro de série**.
