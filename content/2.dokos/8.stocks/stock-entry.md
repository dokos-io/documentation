---
title: Écriture de stock
description: 
published: true
date: 2022-11-02T08:59:30.994Z
tags: 
editor: markdown
dateCreated: 2021-05-26T10:55:51.715Z
---

# Écriture de stock
Une entrée de stock vous permet d'enregistrer le mouvement d'article entre les entrepôts.

---

Pour accéder à la liste des **écritures de stock**, allez sur :

> Accueil > Actions > Opérations sur actions > **Écriture de stock**

Les entrées de stock peuvent être effectuées à des fins suivantes :

- **Problème matériel** : si le matériel est délivré à une personne à l'intérieur ou à l'extérieur de l'entreprise (matériel sortant). Les articles seront déduits de l'ensemble de l'entrepôt sous Entrepôt source.
- **Réception d'article** : si l'article est en cours de réception (article entrant). Les articles seront ajoutés à l'entrepôt défini sous Entrepôt cible.
- **Transfert de matériel** : si l'article est déplacé d'un magasin interne à un autre.
- **Transfert de matériaux pour la production** : Si les matières premières sont transférées pour la fabrication. Le transfert peut avoir lieu contre un bon de travail ou une carte de travail . Pour en savoir plus, visitez la page Nomenclature .
- **Consommation d' articles pour la production** : Il peut y avoir plusieurs entrées de stock de consommation par rapport à un ordre de travail de fabrication. Référez-vous à ce lien pour plus de détails
- **Production** : si l'article est reçu d'une opération de fabrication / production.
- **Remballer** : si l'article / les articles d'origine sont reconditionnés dans de nouveaux articles.
- **Sous -contrat** : si l'article est émis pour une activité de sous-traitance. Cette entrée est effectuée à partir d'un bon de commande. Pour en savoir plus, visitez la page de sous - traitance .
- **Envoyer à l'entrepôt** : Si l'article est envoyé dans un entrepôt et nécessite une confirmation à la réception, ce document sera sélectionné dans la saisie de stock avec le type «Réception en entrepôt» pour confirmer le nombre d'articles reçus. Le statut sera «Marchandises en transit» jusqu'à ce que toutes les marchandises soient reçues, après quoi le statut passera à «Marchandises transférées».
- **Réception à l'entrepôt** : Si l'article est reçu dans un entrepôt, l'entrée de stock avec le type «Envoyer à l'entrepôt» sera sélectionnée ici et le nombre de marchandises reçues sera mis à jour.

Pour en savoir plus sur les types d'entrées d'actions, visitez cette page.

## 1. Prérequis avant utilisation

Avant de créer et d'utiliser une entrée de stock, il est conseillé de créer d'abord les éléments suivants :

- Entrepôt
- Article

## 2. Comment créer une entrée de stock 

Les entrées de stock à des fins de fabrication sont généralement créées à partir d'un ordre de travail . Pour créer manuellement une entrée de stock à d'autres fins, procédez comme suit:

1. Accédez à la liste **Entrée d'actions**, cliquez sur :heavy_plus_sign: Nouveau.
2. Sélectionnez le but de l'entrée de stock parmi ceux énumérés ci-dessus.
3. Si vous définissez les entrepôts source ou cible par défaut, ils seront automatiquement renseignés pour les lignes du tableau Articles.
4. Les entrepôts source / cible seront disponibles conformément à l'objectif d'entrée de stock que vous avez sélectionné.
5. Sélectionnez Articles et saisissez une quantité.
6. Le tarif de base sera récupéré et le montant sera calculé automatiquement.
7. **Enregistrer** et **envoyer**.

Habituellement, **Entrepôt source** et **Entrepôt cible** sont tous deux définis pour enregistrer un mouvement.

### 2.1 Options supplémentaires lors de la création d'une entrée d'actions

- **Ordre de travail** : s'il s'agit d'une entrée de fabrication, l'ordre de travail sera affiché dans ce champ.
- **Modifier la date et l'heure de publication** : vous permettra de modifier la date et l'heure de l'entrée de stock.
- **Inspection requise** : Si une inspection de qualité doit être effectuée sur les articles avant de soumettre l'entrée de stock.
- **À partir de la nomenclature** : s'il s'agit d'une entrée de fabrication, la nomenclature associée à l'article en cours de fabrication sera affichée.

### 2.2 Type d'entrée de stock

Vous pouvez également créer un type d'entrée de stock dans lequel seul le nom sera différent, par exemple «Entrée de rebut». Le but sera le transfert de matériel mais le nom sera différent. Ceci est utile si vous souhaitez que certains utilisateurs n'aient accès qu'à des actions spécifiques liées au stock.

## 3. Caractéristiques

### 3.1 Le tableau des articles 

Les détails sur l'article, le tarif, la quantité, etc. seront affichés ici.

Cochez la case **Autoriser le taux de valorisation nul** permettra de soumettre le reçu d'achat même si le taux de valorisation de l'article est égal à 0. Il peut s'agir d'un exemple d'article ou en raison d'une entente mutuelle avec votre fournisseur.

Différents entrepôts source et cible peuvent être définis pour différents articles.

### 3.2 Coûts supplémentaires

Si l'entrée de stock est une entrée entrante, c'est-à-dire qu'un article est reçu dans un entrepôt cible, vous pouvez ajouter des coûts supplémentaires associés (tels que les frais d'expédition, les droits de douane, les coûts d'exploitation, etc.) associés au processus. Les coûts supplémentaires seront pris en compte pour calculer le taux de valorisation des articles.

Pour ajouter des coûts supplémentaires :

1. Sélectionnez le compte de dépenses dans lequel la dépense de cette entrée de stock sera enregistrée.
2. Saisissez la description et le montant du coût dans le tableau Coûts supplémentaires.

Les coûts supplémentaires ajoutés seront répartis entre les articles de réception (lorsque l'entrepôt cible est mentionné) proportionnellement en fonction du montant de base des articles. Et le coût supplémentaire distribué sera ajouté au taux de base de l'article, pour calculer le taux de valorisation.

La quantité et le taux sont affichés comme suit lorsque vous développez la table Articles.

### 3.3 Dimensions comptables 
Vous pouvez baliser différentes transactions en fonction de différentes dimensions. Par défaut, les projets peuvent être considérés comme une dimension car il est courant de suivre les coûts de différents projets. Pour en savoir plus sur les dimensions comptables, visitez cette page.

### 3.4 Paramètres d'impression 

**En-tête de lettre** 
Vous pouvez imprimer votre reçu d'achat sur le papier à en-tête de votre entreprise. En savoir plus ici .

**Imprimer les titres** 
Les en-têtes des reçus d'achat peuvent également être modifiés lors de l'impression du document. Vous pouvez le faire en sélectionnant un en- tête d'impression . Pour créer de nouveaux en-têtes d'impression, accédez à : **Accueil > Paramètres > Impression > En-têtes d'impression**. En savoir plus ici.

### 3.5 Plus d'informations 

- **Est ouverture** : si cette entrée est l'entrée de stock d'ouverture pour les articles.

- **Remarques** : toute remarque supplémentaire sur l'article.

**Pourcentage transféré** : Le pourcentage d'articles transférés en fonction du but de l'entrée en stock.

**Montant total** : le montant total des articles transférés.

### 3.6 Inventaire perpétuel

Si le système d'inventaire permanent est activé, les coûts supplémentaires seront comptabilisés dans le compte de dépenses mentionné dans le tableau des coûts supplémentaires.

### 3.7 Après l'enregistrement

Après avoir soumis une entrée de stock, vous pouvez accéder au grand livre des stocks ou au grand livre comptable à partir du tableau de bord.