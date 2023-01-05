---
title: Page web
description: 
published: true
date: 2021-07-06T10:28:38.134Z
tags: 
editor: markdown
dateCreated: 2021-07-06T09:28:37.130Z
---

# Page web

Le contenu statique comme votre page d'accueil, À propos de nous, Contactez-nous, Les pages de conditions peuvent être créées à l'aide de la page Web.

---

Pour accéder à **la liste page Web**, allez sur :

> Accueil > Site Web > Site internet > **Page Web**

![liste_page_web.png](/site-web/web-page/liste_page_web.png)

## 1. Comment créer une page Web ?

1. Accédez à la liste des pages Web et cliquez sur **:heavy_plus_sign: Ajouter Page Web.**
2. Entrez un **titre** et ajoutez du **contenu** dans la section principale. L'itinéraire sera généré automatiquement, mais vous pouvez le modifier.
3. Cliquez sur **Enregistrer**.
4. La page Web ne sera publiée que lorsque **Publié** est coché.

![détails_page_web.png](/site-web/web-page/détails_page_web.png)

Affichez votre page Web en cliquant sur **Voir sur le site Web** dans la barre latérale.

### 1.1 Conseils pour créer une bonne page Web 

#### Titre

La première chose à définir est le titre de votre page. Le titre a le poids maximum pour les moteurs de recherche, alors choisissez un titre qui reflète les mots-clés que vous ciblez pour votre public. L'itinéraire (URL) sera généré automatiquement à partir du titre mais vous pouvez le modifier.

#### Contenu

Vous pouvez écrire votre contenu en Rich Text, Markdown ou HTML. Si vous souhaitez créer des pages de contenu simples, Rich Text et Markdown sont d'excellentes options.

![contenu_page_web.png](/site-web/web-page/contenu_page_web.png)

Apprenez le markdown en quelques minutes sur Mastering Markdown .

#### Images

Pour le contenu en texte enrichi, vous pouvez directement intégrer des images à l'aide de l'éditeur. Pour Markdown et HTML, vous devez d'abord joindre les images au document. Obtenez maintenant l'URL de votre image en faisant un clic droit sur votre pièce jointe et en copiant l'adresse.

Maintenant, ajoutez-les à votre Markdown ou HTML en utilisant la syntaxe appropriée.

````
<!-- markdown -->
![Alt Text](/path/to/image-url.png)

<!-- html -->
<img src="/path/to/image-url.png" alt="Alt Text">
````

## 2. Caractéristiques

### 2.1 Contexte

Ajoutez du contexte avec le script de contexte. Définissez le contexte de publication du modèle.

Exemple : 

````
context.project = frappe.get_doc("Project", frappe.form_dict.name)
````

![contexte_page_web.png](/site-web/web-page/contexte_page_web.png)

### 2.2 Script

Vous pouvez ajouter un script JS à votre page Web dans la section Script . Assurez-vous d'écrire votre script dans le frappe.readyrappel.

````
frappe.ready(() => {
    // your script here
});
````

![script_.png](/site-web/web-page/script_.png)

### 2.3 Style

En cochant sur la case Insérer du style, vous pouvez ajouter du style CSS à votre page web.

Inspectez les éléments pour voir quelles classes sont disponibles pour le style. Si vous utilisez du contenu HTML, vous pouvez utiliser vos propres classes et les styliser ici.

Choisissez où le texte sera aligné : Droit, gauche ou centre.

![style_page_web.png](/site-web/web-page/style_page_web.png)

### 2.4 Barre latérale

Vous pouvez ajouter une barre latérale de site Web avec des liens personnalisés sur votre page Web. Dans la section Barre latérale et commentaires , activez Afficher la barre latérale. Sélectionnez une barre latérale de site Web existante ou créez-en une nouvelle.

Ajoutez des liens et leur itinéraire dans le tableau Éléments de la barre latérale.

![barre_latérale_et_commentaires.png](/site-web/web-page/barre_latérale_et_commentaires.png)

### 2.5 Commentaires

Vous pouvez activer les commentaires sur votre page Web où les gens peuvent laisser un commentaire avec leur nom et leur adresse e-mail. Activez les commentaires à partir de la section Barre latérale et commentaires.

![barre_latérale_et_commentaires.png](/site-web/web-page/barre_latérale_et_commentaires.png)

### 2.8 Balises Méta

Vous pouvez également ajouter des balises Meta à votre page Web. Vous devez ajouter la clé de propriété et sa valeur dans la table des balises méta et elle générera automatiquement des metabalises HTML sur votre page Web.

![meta_tags.png](/site-web/web-page/meta_tags.png)

### 2.9 Diaporama

Vous pouvez également ajouter un diaporama à votre page Web. Référez-vous à la création d'un diaporama sur la page d'accueil Diaporama

### 2.10 Publication programmée

Vous pouvez planifier la publication de vos pages Web si vous définissez la date de début et la date de fin pour votre page Web. Ils seront définis comme publiés dans les plages de dates et seront automatiquement dépubliés en dehors de la plage.

Les pages non publiées lanceront un message Error 404lorsqu'elles seront visitées.

### 2.11 En-tête

Vous pouvez ajouter un code HTML personnalisé pour la section d'en-tête de la page. Cela remplacera le titre de la page Web.

### 2.12 Fil d'ariane

Vous pouvez ajouter une liste de fils d'Ariane sur votre page Web. Ceux-ci seront affichés en haut avant l'en-tête.

