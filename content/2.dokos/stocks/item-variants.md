---
title: Variantes d'article
description: 
published: true
date: 2021-05-25T12:42:42.034Z
tags: 
editor: markdown
dateCreated: 2021-05-25T08:38:58.975Z
---

# Variantes d'article
Une variante d'article est une version d'un article avec différents attributs tels que des tailles ou des couleurs.

Par exemple : Supposons que le t-shirt soit un article et qu'il soit disponible en différentes tailles et couleurs comme petit, moyen, grand et rouge, bleu, vert. Dans DOKOS, le t-shirt sera considéré comme un modèle d'article et chacune des variations sera une variante d'article.

Un t-shirt bleu en taille petite plutôt qu'un simple t-shirt. Les variantes d'article vous permettent de traiter les versions petite , moyenne et grande d'un t-shirt comme des variantes d'un «t-shirt» d'article.

Sans les variantes d'article, vous auriez à traiter les versions petite , moyenne et grande d'un t-shirt comme trois articles distincts.

---

## 1. Utilisation des variantes d'article 
Les variantes peuvent être basées sur deux choses :

- Attributs d'article
- Fabricants

**Conseil**: une fois qu'un modèle d'élément est créé, lorsque vous mettez à jour ce modèle, toutes les variantes sont également mises à jour en conséquence.

### 1.1 Création du modèle de variante d'article 
1. Pour utiliser des variantes d'article dans DOKOS, créez un élément et cochez **A des variantes** sous Variantes.

2. L'élément est alors désigné sous le nom de «modèle». Un tel modèle n'est plus identique à un **article** normal. Par exemple, le modèle ne peut être utilisé directement dans aucune transaction (commande client, bon de livraison, facture d'achat) elle-même.

3. Seules les variantes de l'article ( t-shirt bleu en taille petite) peuvent être utilisées pratiquement. Par conséquent, il serait idéal de décider si un élément **a des variantes** ou non directement lors de sa création

4. En sélectionnant «Possède des variantes», un tableau apparaîtra. Spécifiez les attributs de variante pour l'article dans le tableau. Si l'attribut a des valeurs numériques, vous pouvez spécifier la plage et créer des intervalles basés sur les valeurs d'incrément.

::alert{type=warning}
Remarque: vous ne pouvez pas effectuer de transactions par rapport à un «modèle».
::

### 1.2 Création des variantes d'article en fonction des attributs d'article 
Pour créer des «variantes d'article» par rapport à un «modèle», cliquez sur «Créer». À partir de là, choisissez de créer une seule variante ou plusieurs. Simple est simple où vous créez juste un ou plusieurs attributs et un élément sera créé. Lorsque vous choisissez plusieurs variantes, cochez les attributs et plusieurs éléments seront créés. Par exemple, si vous choisissez Couleur: Rouge, Vert et Taille: Petit, Moyen, Grand, 6 variantes seront créées.

Création de plusieurs variantes dans DOKOS :

Pour en savoir plus sur la définition des attributs, consultez Attributs d'article.

### 1.3 Variantes d'article basées sur les fabricants 
Pour configurer des variantes basées sur des fabricants, dans votre modèle d'article, définissez **Variantes basées sur** comme **Fabricants**. Dans ce cas, pour créer des variantes, cliquez sur **Créer > Créer une variante**. Le système vous demandera de sélectionner un fabricant. Vous pouvez également indiquer en option un numéro de pièce du fabricant.

La dénomination de la variante sera basée sur le nom (ID) de l'élément modèle avec un suffixe numérique. Par exemple, "Screwdriver" aura la variante "Screwdriver-1".

### 2. Mettre à jour les variantes d'article en fonction du modèle 
Accédez à: Accueil> Stock> Articles et prix> Paramètres de variante d'article . Les champs affichés ici seront également copiés dans les variantes. Par défaut, tous les champs sont affichés, supprimez toutes les lignes que vous ne souhaitez pas mettre à jour du modèle d'élément vers les variantes.





