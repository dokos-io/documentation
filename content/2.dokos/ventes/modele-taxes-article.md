---
title: Modèle de taxe sur les articles
description: 
---

# Modèle de taxe sur les articles

Le modèle de taxe sur les articles est utile pour la taxation des articles.

Si certains de vos articles ont des taux de taxe différents du taux de taxe standard attribué dans le tableau Taxes et frais, vous pouvez créer un modèle de taxe d'article et l'affecter à un article ou à un groupe d'articles . Le taux attribué dans le modèle de taxe de l'article sera prioritaire par rapport au taux de taxe standard attribué dans le tableau Taxes et frais.

Par exemple, si la taxe de 20% est ajoutée dans le tableau Taxes et frais de vente, elle sera appliquée à tous les articles de votre commande. 
Cependant, si vous devez appliquer un taux de taxe différent sur certains articles, les étapes sont indiquées ci-dessous.

---

Pour accéder à la liste des modèles de taxe sur les articles, allez sur : 

> Accueil > Comptabilité > Taxes > **Modèle de taxe sur les articles**

Supposons que nous créons une commande client. Nous avons le modèle principal des taxes et frais de vente avec une TVA de 20 %. Sur tous les articles en vente. Sur un article, un taux de 10% sera appliquée.

## 1. Prérequis avant utilisation

Avant de créer et d'utiliser un modèle fiscal d'article, il est conseillé de créer d'abord ce qui suit :

- Article
- Activez **Ajouter automatiquement les taxes et les frais à partir du modèle de taxe sur les articles** dans les paramètres de comptabilité.

## 2. Comment créer un modèle de taxe sur les articles 

1. Accédez à la liste Modèle de taxe sur les articles et cliquez sur Nouveau.
2. Saisissez un titre pour le modèle de taxe sur les articles.
3. Sélectionnez un compte et définissez le taux prioritaire. Ajoutez plus de lignes si nécessaire.
4. Faites enregistrer.

Le modèle fiscal de l'article est maintenant prêt à être attribué à un article. Pour ce faire, accédez à la section Article, Taxe sur l'article et sélectionnez un Modèle de taxe sur l'article :

> **Remarque** : Il est conseillé de ne pas utiliser le modèle de vente/achat sélectionné ici dans la règle fiscale , cela peut provoquer des interférences. Si vous souhaitez utiliser les mêmes taux de taxe pour la règle de taxe et le modèle de taxe sur les articles, utilisez un nom différent pour les modèles de taxe sur les ventes/achats.
{.is-warning}


### 2.1 Mentionner la Taxe Applicable dans la Fiche article

Les modèles de taxe sont prédéfinis avec des valeurs. Pour les articles dont le taux de taxe est différent des autres, vous devez le modifier dans le référentiel d'articles. Accédez au tableau des taxes dans l'article, ajoutez une ligne, sélectionnez le type de taxe et modifiez le taux. Désormais, ce nouveau tarif remplacera le modèle lors de la création d'une commande/facture. Par exemple, dans la capture d'écran ci-dessous, vous pouvez voir que le taux de taxe est défini sur 5 et c'est le taux qui sera appliqué dans les transactions.

Pour l'article entièrement exonéré de taxe, indiquez 0 % comme taux de taxe dans la fiche article.

> **Remarque** : Pour que le modèle de taxe sur les articles fonctionne, vous devez vous assurer que les types de taxes (comptes) définis dans le modèle de taxe sur les articles (avec des taux de taxe modifiés) sont présents dans le modèle de taxes et frais de vente.
{.is-warning}

Si vous souhaitez inclure plusieurs éléments avec des taux de taxe différents, vous devez les enregistrer sous différentes rubriques fiscales.

### 2.2 Calcul de la taxe en transaction

Dans les transactions de vente telles que le devis, la commande client et la facture client, les taxes sur les articles sont calculées conformément au modèle de taxes et frais de vente sélectionné. Toutefois, si certains articles sont liés à un modèle de taxe sur les articles, les taxes sont calculées sur ces articles selon les taux mentionnés dans le modèle de taxe sur les articles au lieu des taux mentionnés dans le modèle de taxes et frais de vente.

### 2.3 Modèle de taxe sur les articles pour chaque article 

Vous pouvez également sélectionner manuellement un modèle de taxe d'article différent pour chaque article d'une transaction :

### 2.4 Taxe par article sur un groupe d'articles 

Vous pouvez affecter le modèle de taxe sur les articles à un groupe d'articles en modifiant le tableau Taxes sur les articles dans la section Taxes sur les articles du document Groupe d'articles.

Le modèle fiscal d'article appliqué à un groupe d'articles s'appliquera à tous les articles de ce groupe, sauf si un article individuel du groupe d'articles a son propre modèle fiscal d'article qui lui est attribué.

### 2.5 Validité des taxes sur les articles 

Vous pouvez également attribuer une validité aux modèles de taxe, comme indiqué dans l'image ci-dessus.

En fonction de la date de publication de la transaction, un modèle de taxe valide sera automatiquement récupéré.
S'il existe plusieurs modèles de taxe valides, le premier modèle de taxe valide de la table Taxe sur les articles sera récupéré.
Dans le cas où il n'y a pas de modèles de taxe valides, le premier modèle de taxe sans date "Valide à partir de" dans le tableau Taxe sur l'article sera récupéré.
Remarque : lors de l'ajout d'articles dans la facture d'achat, la première préférence sera donnée à la « date de facturation du fournisseur » au lieu de la « date de publication » pour récupérer un modèle de taxe d'article valide.

### 2.6 Quelques points à noter

Si vous définissez la catégorie de taxe sur vide, le modèle de taxe d'article par défaut sera appliqué aux articles dans les transactions.

Vous pouvez appliquer différents modèles de taxes sur les articles pour différentes catégories de taxes.

Pour qu'un modèle de taxe d'article remplace les taxes, il doit y avoir une ligne dans le tableau Taxes et frais avec le même titre de compte de taxe avec un taux de taxe standard.

Si vous souhaitez appliquer des taxes uniquement sur les articles avec un modèle de taxe d'article, vous pouvez définir le taux de taxe standard sur 0.
