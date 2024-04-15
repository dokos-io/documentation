---
title: Espace de travail
---

# Espace de travail

Lorsque vous vous connectez sur le Bureau Administrateur de Dokos, vous arrivez sur bureau d'accueil. Il s'agit d'ici un espace de travail.
Dokos est présenté de la façon suivante :

- Une **barre latérale persistante** triée en catégories sur la gauche. Chaque élément de la barre latérale renvoie à une page appelée Espace de travail.
- Une **barre du haut** avec une fonction de recherche pour retouver tous les documents, des clients, des fourniseurs etc.

## 1. Qu'est-ce qu'un espace de travail

Un **Espace de travail** représente un module (par exemple CRM dans Dokos). Un espace de travail comprend les éléments suivants :

- Une **section de tableau de bord // Rapport** pour le module.
- Une **section de raccourci** pour les masters, les transactions ou les pages fréquemment utilisés.
- Une **section maîtres** où tous les rapports et maîtres sont regroupés et répertoriés.

## 2. Espace de travail standard 

- Chaque module de Dokos a son propre espace de travail standard qui est généré avec des raccourcis et des liens appropriés.

### 2.1 Comment modifier un espace de travail ?

Toute personnalisation à apporter à l'espace de travail standard peut être effectuée avec l'option **Personnaliser** l'espace de travail dans le coin supérieur droit de l'espace de travail.

:::callout{icon="i-heroicons-exclamation-triangle" color="amber"}
Ces personnalisations seront spécifiques à l'utilisateur et ne seront visibles que par cet utilisateur.
:::

## 3. Espace de travail personnalisé

Vous pouvez également créer vos propres espaces de travail en créant simplement un nouveau document d'espace de travail.

Pour accéder à la liste **Espace de travail**, allez sur :

> Accueil > Développement > Modules > **Espace de travail**

![liste_espace_de_travail.png](/content/customization/workspace/liste_espace_de_travail.png)

1. Ajoutez un Espace de travail en cliquant sur **Ajouter Espace de travail**.

2. Remplissez les détails de votre nouvel espace de travail :

![nouveau_espace_de_travail.png](/content/customization/workspace/nouveau_espace_de_travail.png)

- Nom : Le texte que vous entrez ici sera affiché dans la barre latérale.
- Module : Sélectionnez le module que représentera l'espace de travail.
- Catégorie : 
- Restreindre au domaine : 
- Onboarding
- Étendre une autre page : Si coché, cet espace de travail sera traité comme une version personnalisée d'un autre espace de travail.

### 3.1 Tableaux de bord

Ajoutez un tableau de bord pour l'afficher en haut de l'espace de travail.

![tableaux_de_bord.png](/content/customization/workspace/tableaux_de_bord.png)

### 3.2 Raccourcis

Ajoutez des raccourcis à une page, des rapports ou une liste spécifiques qui seront affichés sous le tableau de bord.

![raccourcis.png](/content/customization/workspace/raccourcis.png)

### 3.3 Cartes de lien

Vous pouvez ajouter des cartes qui afficheront une liste qui renvoie à une page, un rapport ou une liste spécifique. Vous devez les ajouter dans un format JSON spécifique comme affiché dans l'image ci-dessous.

![carte_de_liens.png](/content/customization/workspace/carte_de_liens.png)