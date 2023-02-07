---
title: Sous-traitant
description: 
published: true
date: 2021-06-01T11:43:03.773Z
tags: 
editor: markdown
dateCreated: 2021-06-01T11:38:00.343Z
---

# Sous-traitant

En sous-traitance, vous faites appel à une partie externe pour effectuer des tâches pour votre organisation, notamment la fabrication.

La sous-traitance est un type de contrat de travail qui vise à sous-traiter certains types de travaux à d'autres entreprises. Cela permet de travailler sur plus d'une phase du projet à la fois, ce qui conduit souvent à une exécution plus rapide.

La sous-traitance est pratiquée par diverses industries. Par exemple, les fabricants qui fabriquent un certain nombre de produits à partir de composants complexes sous-traitent certains composants et les emballent dans leurs installations.

Si votre entreprise implique l'externalisation de certains processus à un fournisseur tiers où vous fournissez les matières premières et que le tiers s'occupe du travail / de la production, vous pouvez suivre cela en utilisant la fonction de sous-traitance de Dokos.

## 1. Comment mettre en place la sous-traitance

1. Créez des articles séparés pour le produit non transformé et le produit transformé. Par exemple, si vous fournissez X non peint à votre fournisseur et que le fournisseur vous renvoie X, vous pouvez créer deux éléments: «X-non peint» et «X».
2. Créez un entrepôt pour votre fournisseur afin que vous puissiez suivre les articles fournis. (vous pouvez fournir un mois d'articles en une seule fois).
3. Pour l'article traité, dans la base de données des articles, activez **Est un article sous-traité**.

### 1.1 Créer une nomenclature

Créez une **nomenclature** pour l'article traité, avec les articles non traités comme sous-articles. Prenons un exemple simple, où vous fabriquez un stylo. Le stylo traité sera nommé sous la nomenclature, tandis que la plume, le plastique, l'encre, etc. seront classés comme sous-articles.

Cette nomenclature sera sans opérations si tout le travail de production est effectué par un tiers. Voyons avec un exemple simple de canne en plastique:

### 1.2 Créer un bon de commande

Passez un bon de commande pour l'article traité, celui pour lequel vous avez créé une nomenclature. Lorsque vous **Enregistrer**, dans **Matières premières fournies**, tous vos articles non traités seront mis à jour en fonction de votre nomenclature. Vous pouvez également sélectionner l'entrepôt dans lequel les matières premières seraient réservées pour la sous-traitance sous Réserver l'entrepôt.

1. Les coûts impliqués dans le processus de sous-traitance doivent être enregistrés dans le champ **Taux du tableau Articles** de la commande fournisseur comme suit :

2. Dans l'image précédente, nous fournissons au sous-traitant 2 boîtes de chacun des 3 matériaux pour fabriquer 240 stylos. Le coût d'un stylo est de 27 et le coût total de tous les stylos est donc de 6480

3. Vous devez définir «Fournir des matières premières» sur Oui, car ce bon de commande est destiné à la sous-traitance.

4. A partir d'un bon de commande, sélectionnez les matières premières à transférer au sous-traitant:

5. Une fois la commande d'achat soumise, vous pouvez également afficher la quantité réservée de l'article à partir du tableau de bord de l'article.

### 1.3 Créer une entrée de stock pour transférer des matières premières

Maintenant que les matières premières sont réservées, effectuez une entrée de stock pour livrer les articles de matière première à votre fournisseur.

Dans le bon de commande, cliquez sur Transférer> Article au fournisseur. Définissez les entrepôts source et cible. L'entrée de stock sera de type «Envoyer au sous-traitant» où vous transférez d'un entrepôt à un autre. Cochez «À partir de la nomenclature» et sélectionnez la nomenclature, entrez la quantité et cliquez sur le bouton Obtenir les articles.

### 1.4 Créer un reçu d'achat pour recevoir les articles finis

Recevez les articles de votre fournisseur à l'aide d'un reçu d'achat . Vous devez entrer dans l'entrepôt du fournisseur d'où les matières premières seront prélevées et les produits finis seront reçus dans l'entrepôt accepté. Considérez cela comme une rétro-consommation pour la sous-traitance.

Cliquez sur Créer > **Reçu d'achat à partir de la commande fournisseur**. Définissez les entrepôts acceptés et fournisseurs. Assurez-vous de cocher la «Quantité consommée» dans le tableau «Matières premières» afin que le stock correct soit maintenu chez le fournisseur. Vous devez sélectionner l'entrepôt du fournisseur où vous recevrez les produits finis.

### 1.5 Matière première provenant du fournisseur

Lors de la création d'une nomenclature pour la sous-traitance, il peut y avoir peu de matières premières comme les écrous et les boulons que les fournisseurs devront se procurer eux-mêmes.

Lors de la création d'une entrée de stock pour **Transfert à partir d'une commande fournisseur**, ces articles peuvent être exclus un par un, mais il est impossible de le faire si vous avez plus de 100 articles.

Si certaines matières premières proviennent directement du fournisseur, ces matières premières doivent être incluses dans la nomenclature.

Il aura une valeur nulle dans la nomenclature
Dans le bon de commande, cette matière première n'apparaîtra pas dans les articles fournis car elle n'est pas fournie
De plus, lors de la création d'un "Transfert", ces articles seront exclus de l'Entrée de Stock

Cependant, le fournisseur peut choisir d'inclure les articles fournis par le fournisseur dans sa commande client qui vous a été envoyée.

## 2. Remarques

Assurez-vous que le **taux** de l'article traité est le taux de traitement (à l'exclusion du taux de matière première).

Dokos ajoutera automatiquement le taux de matière première à des fins d'évaluation lorsque vous recevrez l'article fini dans votre stock.

Dokos définira automatiquement par défaut «l'entrepôt de réserve» dans le bon de commande à partir de la nomenclature. S'il ne se trouve pas dans la nomenclature, il le ferait par défaut à partir de l'entrepôt par défaut défini dans l'article. Vous pouvez définir l'entrepôt de réserve par défaut pour tous les articles du bon de commande à partir du champ «Entrepôt de réserve» de la section Matières premières fournies.

