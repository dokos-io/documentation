---
title: Thème du site web
description: 
published: true
date: 2021-07-19T13:43:57.508Z
tags: 
editor: markdown
dateCreated: 2021-07-16T12:09:10.864Z
---

# Thème du site web

Dokos fournit des fonctionnalités avancées de thème pour personnaliser l'apparence de votre site Web et l'adapter à votre marque.

---

> Accueil > Site Web > Configuration > **Thème du site Web**

![liste_thème_site_web.png](/projects/website-theme/liste_thème_site_web.png)

## 1. Comment créer un thème de site Web 

1. Accédez à la liste Thème du site Web et cliquez sur Nouveau.
2. Entrez un nom de thème.
3. Personnalisez votre thème.
4. Cliquez sur Enregistrer.

> **Remarque** : assurez-vous de définir le thème du site Web dans les paramètres du site Web pour le thème à appliquer.
{.is-warning}

## 2. Caractéristiques

### 2.1 Configuration du thème

La section **Theme Configuration** est là pour amorcer un thème de base. Ici, vous pouvez choisir votre palette de couleurs, la police et les styles de boutons.

![configuration_theme.png](/projects/website-theme/configuration_theme.png)

### 2.2 Feuille de style

Si vous connaissez les thèmes SCSS et Bootstrap 4 , vous pouvez écrire manuellement un SCSS personnalisé.

Dans le champ **Ecrasements de style personnalisés**, vous pouvez écraser les variables définies par le fichier de thème de n'importe quelle application. Le contenu de ce champ sera inclus avant d' importer tout autre SCSS. Par exemple, la variable $spacerest définie sur 1rempar défaut. Il suffit de le redéfinir $spacer: 2rem;pour que tous les espaces soient deux fois plus grands.

Dans le champ **SCSS personnalisé**, vous pouvez ajouter vos propres styles. Cela sera inclus après l' importation des thèmes de l'application. Vous pouvez également remplacer n'importe quel style spécifique. Par exemple, si vous n'aimez pas nos boutons, incluez simplement les éléments suivants :

`````
.btn-primary {
    background-color: $teal;
    color: $orange;
}
`````
![feuille_de_style.png](/projects/website-theme/feuille_de_style.png)

### 2.3 Fichiers de thème inclus

Si vous jetez un œil au thème par défaut généré par la boîte de dialogue de configuration, il importe frappe/public/scss/websiteet erpnext/public/scss/website. Ce sont les fichiers de thème par défaut pour frappeet erpnextapp. Si vous avez installé d'autres applications, elles peuvent également fournir leur propre website.scssfichier.

La section "Fichiers de thème inclus" répertorie toutes les applications installées. Chaque application peut apporter son propre fichier de thème ( [app]/public/scss/website.scss). Un thème peut être complet, fournissant des styles pour l'ensemble du site Web, ou simplement un module complémentaire. Par exemple, il peut styliser uniquement les éléments qu'il introduit. En cochant les cases, vous pouvez choisir quel thème doit être inclus dans votre site Web.

### 2.4 JS personnalisé

Vous pouvez également écrire du JavaScript personnalisé qui s'exécutera lorsque votre thème sera appliqué. Utilisez-le pour ajouter/supprimer des classes d'éléments ou tout script qui vous aide à modifier l'apparence de vos éléments.

![js_style.png](/projects/website-theme/js_style.png)