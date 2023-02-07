---
title: Ordre de travail
description: 
published: true
date: 2022-11-14T09:15:05.394Z
tags: 
editor: markdown
dateCreated: 2021-05-29T07:56:23.701Z
---

# Ordre de travail

Un ordre de travail est un document donné à l'atelier de production par le planificateur de production comme un signal pour fabriquer une certaine quantité d'un certain article.

L'ordre de travail permet également de générer les besoins en matières (entrée de stock) pour l'article à produire à partir de sa nomenclature.

L' ordre de travail peut être généré à partir du plan de production en fonction des commandes client.

---

Pour accéder à la liste des bons de travail, allez sur :

> Accueil > Production > Production > **Ordre de travail**

## 1. Prérequis avant utilisation

Avant de créer et d'utiliser un bon de travail, il est conseillé de créer d'abord les éléments suivants:

- **[Nomenclature](/manufacturing/bom)**
- **[Opération](/manufacturing/operation)**
- **[Station de travail](/manufacturing/workstation)**

## 2. Comment créer un ordre de travail 

## 2.1 Détails de l'ordre de travail

1. Allez dans la liste des bons de travail, cliquez sur **:heavy_plus_sign: Ajouter Ordre de travail**.
2. Sélectionnez l'**article à Produire**.
3. La **nomenclature** par défaut de cet article sera récupérée par le système. Vous pouvez également modifier la nomenclature.
4. Saisissez la **quantité à produire**. Les éléments de matière première ne seront récupérés que lorsque cela est défini.
5. Si la nomenclature sélectionnée contient des opérations, le système extraira toutes les opérations de la nomenclature, ces valeurs peuvent être modifiées.
6. **Commande client** : si vous créez une commande client à partir d'une commande client, elle sera récupérée ici. Vous pouvez également lier une commande client existante contenant l'article à fabriquer à cet ordre de travail.
7. **Projet** : liez le bon de travail à un projet pour suivre la progression dans des cas tels que l'ingénieur à la commande.

::alert{type=warning}
**Remarque** : Vous pouvez enregistrer un ordre de travail sans sélectionner les entrepôts, mais les entrepôts sont obligatoires pour soumettre un ordre de travail.
::

Un ordre de travail peut également être créé directement à partir d'une commande client.

## 2. Caractéristiques 

### 3. Paramètres

- **Autoriser un article alternatif** : Parfois, lors de la fabrication d'un produit fini, des matériaux spécifiques peuvent ne pas être disponibles. Par exemple, utiliser des perles en plastique au lieu de cristaux en plastique. Le bien fini lui-même pourrait être différent. Cochez cette case vous permettra de sélectionner un élément alternatif. Pour en savoir plus, visitez cette page .
- **Ignorer le transfert des articles vers l'entrepôt de travaux en cours** : généralement, une entrée de stock est créée lorsque les matières premières sont transférées vers un entrepôt en cours de fabrication. Dans ce cas, la matière première est considérée comme consommée, donc l'entrée de stock est ignorée. L'option suivante s'affiche si vous cochez cette case.
- **Re-consommer les matières premières de l'entrepôt en cours de production** : Cochez cette case pour créer automatiquement une entrée de stock avec le type «Fabrication». Cela signifie que les matières premières ont été consommées à partir de l'entrepôt source, utilisées pour fabriquer des produits finis et qu'une autre entrée de stock a été créée pour votre entrepôt cible.
-  **Utiliser la nomenclature à plusieurs niveaux** : cette option est activée par défaut. Si vous souhaitez planifier les matières pour les sous-assemblages de l'article que vous fabriquez, laissez cette option activée. Si vous planifiez et fabriquez les sous-ensembles séparément, vous pouvez désactiver cette case à cocher. Pour en savoir plus, visitez cette page.
-  **Utiliser la nomenclature à plusieurs niveaux** : cette option est activée par défaut. Si vous souhaitez planifier les matières pour les sous-assemblages de l'article que vous fabriquez, laissez cette option activée. Si vous planifiez et fabriquez les sous-ensembles séparément, vous pouvez désactiver cette case à cocher. Pour en savoir plus, visitez cette page.

### 2. Entrepôts

- **Entrepôts d'origine** : sélectionnez cet entrepôt dans la ligne Article. L'entrepôt où vous stockez vos matières premières. Chaque article requis peut avoir un entrepôt source distinct. L'entrepôt de groupe peut également être sélectionné comme entrepôt source. Lors de la soumission du bon de commande, les matières premières seront réservées dans ces entrepôts pour une utilisation en production.
- **Entrepôt de travail en cours** : L'entrepôt où vos articles seront transférés lorsque vous commencerez la production. L'entrepôt de groupe peut également être sélectionné en tant qu'entrepôt de travail en cours.
- **Entrepôt cible** : l'entrepôt dans lequel vous stockez les articles finis avant leur expédition.
- **Entrepôt de ferraille** : si la nomenclature aboutit à du matériel de rebut, l'entrepôt de rebut doit être sélectionné.

### 3.2 Tableau des articles requis

L'entrepôt source peut être modifié pour les articles de matières premières utilisés ici. L'entrepôt par défaut peut être défini au niveau de l' article dans la base d' articles ou globalement dans les paramètres de stock.

- **Articles requis** : Tous les articles requis (matières premières) seront extraits de la nomenclature et renseignés dans ce tableau. Ici, vous pouvez également modifier l'entrepôt source de n'importe quel article. Et pendant la production, vous pouvez suivre les matières premières transférées à partir de cette table.
- **Quantité requise** : elle sera calculée automatiquement en fonction de la nomenclature .
- **Quantité transférée** : une fois que l'ordre de travail commence et que les fiches de travail sont exécutées, les articles sont transférés de l'entrepôt source à l'entrepôt de travail en cours. Ce champ affiche la quantité dans l'entrepôt. Notez que si vous cochez «**Ignorer le transfert de matériel vers l'entrepôt**», cette colonne ne sera pas mise à jour.
- **Quantité consommée** : lorsque l'article de l'entrepô  est consommé et que le produit fini est produit, ce champ sera mis à jour.
- **Autoriser un article alternatif** : Si un article particulier (matière première ou sous-assemblage) n'est pas disponible, cocher cette case vous permettra de sélectionner un article alternatif défini dans la liste Alternative d'article.
- **Ignorer le transfert de matière** : si vous ne souhaitez pas transférer la matière première spécifique vers l'entrepôt de travail en cours, vous devez cocher cette case.

Une fois décoché cette case pour un article, vous pouvez toujours le sélectionner dans la nomenclature et le bon de travail, mais aucune entrée de stock ne sera créée par rapport à celui-ci.

Une fois l'ordre de travail enregistré, les deux champs suivants afficheront également la disponibilité dans les entrepôts respectifs dans le tableau Articles requis :

- Quantité disponible à l'entrepôt source
- Quantité disponible à l'entrepôt de travaux en cours

### 3.1 Temps

La date de début prévue et la date de livraison prévue peuvent être définies ici. La valeur par défaut de la date de début planifiée est la date et l'heure actuelles au moment de la création de l'ordre de travail.

- Définissez la **date de début planifiée** (une date estimée à laquelle vous souhaitez que la production commence).

### 3.3 Tableau des opérations 

Les matériaux peuvent être transférés contre un bon de travail ou une carte de travail. Ceci est généralement extrait de la nomenclature , mais vous pouvez également le modifier dans l'ordre de travail.

Les éléments suivants seront extraits de la nomenclature :

- **Dans le tableau des opérations** : les postes de travail sur lesquels les opérations seront effectuées

- **Dans le tableau des articles** : les opérations qui seront effectuées sur les articles

Ces valeurs peuvent également être modifiées.

Une fois le bon de travail enregistré, les champs suivants seront affichés :

- **Quantité terminée** : le nombre d'éléments sur lesquels cette opération a été effectuée.
- **Statut** : si l'opération est en attente, en cours de travail ou terminée. Le statut ici est mis à jour lorsque les cartes de travail sont mises à jour.
- **Durée de l'opération** : elle est extraite de la nomenclature, mais peut être modifiée.
- **Coût de fonctionnement prévu** : il est calculé en fonction de la durée de fonctionnement, du taux horaire, de la quantité fabriquée, etc.
L'heure de fonctionnement réelle, le coût de fonctionnement réel, l'heure de début réelle et l'heure de fin réelle sont mises à jour lorsque les fiches de travail sont mises à jour.

### 3.4 Coût d'opération

Dans cette section, les éléments suivants sont affichés:

- **Coût d'exploitation planifié** : il est extrait selon la nomenclature et les opérations qui y sont définies.
- **Coût de fonctionnement réel** : il est extrait des fiches de travail en fonction des opérations exécutées sur les articles.
- **Coût d'exploitation supplémentaire** : toutes les dépenses supplémentaires que vous avez pu engager lors de la fabrication de l'article peuvent être ajoutées ici.
- **Coût de fonctionnement total** : il est calculé comme étant le coût de fonctionnement réel + le coût de fonctionnement supplémentaire.
Ces valeurs sont calculées selon les Job Cards.

### 3.5 Plus d'informations

Ici, la description de l'article et l'unité de stock sont affichées pour l'article en cours de production.

Lorsqu'un ordre de travail est créé à partir d'une demande de matériel , il sera affiché ici.

### 3.6 Transfert de matériaux pour la production

Une fois que vous avez soumis votre bon de travail, vous devez transférer les matières premières pour lancer le processus de fabrication.
Cela créera une entrée de stock avec tous les articles nécessaires pour compléter cet ordre de travail à ajouter à l'entrepôt WIP. Cela ajoutera les éléments de sous-assemblage tels quels ou les décomposera pour afficher les matières premières selon que vous avez coché «Utiliser la nomenclature à plusieurs niveaux» ou non.

Cliquez sur **Démarrer**. Une fois que vous avez cliqué sur Démarrer, des cartes de travail seront créées pour les opérations impliquées.

Mentionnez la quantité de matériaux à transférer dans ce cycle.

Vous serez redirigé vers une entrée de stock pour **Transfert de matériel pour la productioj**. Soumet le.

Le matériel transféré pour la fabrication sera mis à jour dans l'ordre de travail en fonction de la saisie de stock.

### 3.7 Transfert de matériel par entrée de stock 

Les cas d'utilisation de cette option sont :

- Si un transfert de matériel est effectué en vrac et / ou ne doit pas être suivi par rapport à un bon de travail particulier.
- Si la responsabilité du transfert de matériel et de la saisie de la production incombe à deux utilisateurs distincts.
- Si tel est le cas, vous pouvez cocher la case «Ignorer le transfert de matériel», ce qui vous permettra de faire la saisie de stock de type «Production» directement en cliquant sur le bouton «Terminer».

### 3.8 Création de fiches de travail

La progression de l'ordre de travail peut être suivie à l'aide de fiches de travail
Les brouillons de fiches de travail sont créés en fonction du moment où un bon de travail est soumis.
Pour créer plus de Job Cards par rapport à un ordre de travail, cliquez sur le signe plus à côté de Job Card dans le tableau de bord de l'ordre de travail.
Pour en savoir plus sur les Job Cards, visitez cette page .

### 3.9 Mise à jour des produits finis

Une fois que vous avez terminé avec le bon de travail, vous devez mettre à jour les produits finis.
Cela créera une entrée de stock qui déduira tous les articles et sous-ensembles de l'entrepôt WIP et les ajoutera à l'entrepôt de produits finis.
Cliquez sur **Terminer**.

Mentionnez la quantité de matériaux à transférer.

::alert{type=warning}
**Remarque** : Vous pouvez également terminer partiellement un ordre de travail en mettant à jour le stock de produits finis en créant une entrée de stock.
::

### 3.10 Retour des matériaux non consommés

Dans certains cas, l'utilisateur envoie des matières premières supplémentaires aux stations de fabrication, mais parfois l'opérateur ne consomme pas toutes les matières premières pour compléter les produits finis, ou parfois la quantité à fabriquer est réduite. 

Dans ce cas, les matières premières non consommées sont renvoyées au magasin. Dans Dokos, pour transférer les matières premières vers le magasin à partir de l'entrepôt en cours de travail, l'utilisateur doit cliquer sur le bouton Renvoyer les matières non consommées. 

En cliquant sur un bouton, le système ouvre l'entrée de stock pour transférer les matières premières de l'entrepôt en cours de fabrication vers l'entrepôt des magasins.

L'entrée de stock pour retourner les matières premières est comme ci-dessous

## 3.11 Arrêt d'un ordre de travail

Lorsque vous arrêtez un ordre de travail, son statut devient **Arrêté**, indiquant que tout le processus de production associé à cet ordre de travail s'est arrêté. 

Mais avant d'arrêter, l'utilisateur de l'ordre de travail doit s'assurer que les matières premières qui ont été transférées vers l'entrepôt de travail en cours ont été retournées ou non. 

Dans le cas, si l'utilisateur a essayé d'arrêter l'ordre de travail sans renvoyer les matières premières, le système lèvera l'erreur et ne permettra pas à l'utilisateur d'arrêter l'ordre de travail.

Pour arrêter un ordre de travail, cliquez sur le bouton **Arrêter**.

Si les matières premières ne sont pas retournées et sont toujours disponibles dans l'entrepôt de travail en cours. En cliquant sur le système de bouton d'arrêt, l'erreur ci-dessous sera générée.

Vous pouvez également rouvrir l'ordre de travail arrêté.

### 3.12 Planification de la capacité dans un ordre de travail

Lorsqu'un ordre de travail est soumis, en fonction de la date de début planifiée et de la disponibilité des postes de travail, le système planifie toutes les opérations pour l'ordre de travail (si l'ordre de travail a des opérations spécifiées).

Des brouillons de journaux de temps sont également créés en fonction des opérations planifiées.

Lors de la soumission de l'ordre de travail, le système réservera un créneau pour chacune des opérations de l'ordre de travail en série après la date de début prévue en fonction de la disponibilité du poste de travail. La disponibilité du poste de travail dépend des horaires du poste de travail, de la liste des jours fériés et si une autre opération d'ordre de travail est planifiée dans cet emplacement.

Vous pouvez mentionner le nombre de jours pendant lesquels le système essaie de planifier les opérations dans les paramètres de fabrication. Il est défini sur 30 jours par défaut. Si l'opération nécessite un temps dépassant le créneau disponible, le système vous demandera d'interrompre les opérations. Une fois la planification terminée, le système créera des journaux de temps et les sauvegardera. Vous pouvez les modifier et les soumettre ultérieurement.