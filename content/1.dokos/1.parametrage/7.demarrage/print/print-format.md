---
title: Formats d'impression
description: 
published: true
date: 2021-05-13T07:57:40.563Z
tags: 
editor: markdown
dateCreated: 2020-11-26T15:02:30.606Z
---

# Format d'impression

DOKOS donne la possibilité de personnaliser complètement vos formats d'impression pour tous les types de documents.
Vous pouvez utiliser les styles et paramètres d'impression pré-configurés ou personnaliser complètement vos formats d'impression directement depuis l'interface utilisateur.

## 1. Configurer un format d'impression

Afin de configurer vos formats d'impression, dokos vous fournit deux niveaux de paramétrage:
1. Paramètres d'impression
  Ces paramètres sont globaux et affectent tous les formats d'impression.
2. Format d'impression
  Chaque format d'impression a ses propres paramètres applicable seulement pour lui-même.

## 2. Paramètres d'impression

Afin de configurer vos paramètres d'impression, allez sur :
> Paramètres > **Format d'impression**.

### 2.1 Paramètres PDF

- **Envoyer les impressions en PDF**: Cela enverra tous les documents joints à un email au format PDF.
  Dans le cas contraire, toutes les impressions de documents seront envoyées au format HTML.
- **Répéter l'en-tête et le pied de page sur les PDF**: L'en-tête et le pied de page du PDF seront répétés sur toutes les pages.
  Dans le cas contraire, l'en-tête sera seulement ajouté sur la première page et le pied de page ne sera pas affiché.
- **Taille de la page en PDF**: Les tailles de pages officiellement supportées sont `A4` et `Lettre`.

::alert
Si besoin, vous pouvez personnaliser le champ de taille de la page en PDF pour ajouter d'autres options supportées par [wkhtmltopdf](https://github.com/wkhtmltopdf/wkhtmltopdf/blob/master/src/lib/pdfsettings.cc) (La librairie de génération de PDF).  
Ex. A0, A1,..., A5, A6,... Folio, Tabloid,...
::


### 2.2 Paramètres de la page

- **Imprimer avec un en-tête**: Active l'option `En-tête` de l'aperçu avant impression par défaut.
  Cette option peut être activée/désactivée dans chaque aperçu avant impression.
- **Impression des articles compacte**: Active un format d'impression plus compact pour les tableaux d'articles.
- **Autoriser les impression des documents en brouillon**: Autorise l'impression des documents en brouillon.
- **Envoyer un lien web vers le document dans les emails**: Si activé, ajoutera un lien pour voir une version HTML du document imprimé dans le navigateur du destinataire.
- **Toujours ajouter "Brouillon" pour l'impression des documents brouillons**: Ajoute le mot `BROUILLON` en haut des impressions de tous les documents en brouillon.
- **Autoriser les sauts de page dans les tableaux**:  Si activé, les utilisateurs peuvent créer des sauts de page entre deux articles en cochant la case correspondante dans chaque ligne d'article.
- **Autoriser les impressions des documents annulés**: Autorise l'impression de documents annulés.
- **Impression des taxes avec un montant nul**: Imprimera les lignes de taxes avec une valeur égale à 0. Dans le cas contraire, elles ne seront pas imprimées.

### 2.3 Serveur d'impression

Vous pouvez configurer un serveur d'impression lié à dokos en ajoutant l'adresse IP du serveur et le port de connexion.
dokos récupérera toutes les imprimantes liées à cette adresse et vous pourrez sélectionner l'imprimante à utiliser afin de pouvoir imprimer des documents depuis le logiciel.

:warning: **Vous devrez peut-être installer des librairies python additionnelles sur vos serveurs**

### 2.4 Style d'impression

Un style d'impression est une feuille CSS ajoutant du style à votre format d'impression. Vous pouvez utiliser le framework [Bootstrap 3.3](https://getbootstrap.com/docs/3.3/getting-started/) avec ses classes et composants.

Vous pouvez choisir entre différents styles d'impression fournis par défaut avec dokos ou créer votre propre style d'impression.

Un style d'impression sera appliqué par défaut à tous les formats d'impression créés pour votre site dokos.
Ils peuvent être écrasés dans chaque format d'impression par du style CSS spécifique.

De ce fait, il est recommandé de créer un style de base qui sera appliqué à tous les formats d'impression de vos documents et de seulement ajouter du style spécifique pour chaque format d'impression si besoin.

Les formats d'impression standards ne peuvent pas être modifiés, car ils peuvent être mis à jour avec le logiciel dans le temps.
A la place, il est recommandé de copier le format d'impression standard que vous souhaitez modifier, de l'éditer et de le sélectionner dans vos paramètres d'impression.
Vous pouvez aussi désactiver les styles d'impression que vous ne souhaitez pas utiliser.

### 2.5 Polices

Vous pouvez choisir différentes polices fournies par défaut et ajuster la taille de police standard de vos formats d'impression.

## 3. Format d'impression

Il y a plusieurs types de formats d'impression:

1. **Standard**: Inclus avec le code de dokos et peuvent être mis à jour dans le temps. Ces formats d'impression peuvent être copiés pour être personnalisés.
2. **Non standard** et non **personnalisé**: Formats d'impression personnalisé modifié via l'**Editeur de format d'impression**.
3. **Non standard** et **personnalisé**: Formats d'impression personnalisés en [Jinja](https://jinja.palletsprojects.com/en/master/) et générés sur le serveur ou dans le navigateur.

Un format d'impression peut être créé et modifié via deux canaux différents:
1. Allez à `Paramètres > Format d'impression` et cliquez sur nouveau ou sélectionnez le format à éditer.
2. Si votre format d'impression est **non standard** et n'est pas **personnalisé**, vous pouvez allez à `Paramètres > Editeur de format d'impression` et sélectionner votre format d'impression ou un document de référence pour en créer un nouveau.


### 3.1 Format d'impression standard

Les formats d'impression standards sont fournis avec le logiciel et peuvent être utilisés tels quels ou personnalisés.
Afin de les personnaliser, vous devez faire une copie (`Menu > Dupliquer`) et nommer votre copie différemment du format standard.

Chaque format d'impression est lié avec un module et un type de document de référence.
Vous avez accès à tous les champs de la référence et votre format d'impression sera uniquement proposé dans l'aperçu avant impression de ce type de document.

Lorsque vous dupliquez un format d'impression, assurez vous de conserver le même type de format: si `Format personnalisé` n'est pas coché, vous devez utiliser l'éditeur de format d'impression pour le personnaliser. Dans le cas contraire, vous créerez simplement un format d'impression complètement différent.

### 3.2 Formats d'impression spécifiques aux utilisateurs

#### 3.2.1 Format personnalisé

Un format d'impression personnalisé peut être de deux types:
- JINJA: Sera imprimé sur le serveur
- JS: Sera imprimé dans le navigateur

Vous pouvez construire votre format d'impression en HTML en utilisant le language [Jinja](https://jinja.palletsprojects.com/en/master/) et ajouter du style en CSS en utilisant les classes et composants de [Bootstrap 3.3](https://getbootstrap.com/docs/3.3/getting-started/).

Si votre imprimante permet l'impression brute, vous pouvez lui envoyer des commandes spécifiques en cochant **Impression brute**.


### 3.3 Format généré via l'éditeur de format d'impression

Si vous préférez utiliser l'éditeur de format d'impression, vous pouvez définir quelques paramètres additionnels pour votre format d'impression:
- **Alignez les étiquettes à droite**: Alignera tous les libellés à droite. Si désactivé, tous les libellés seront alignés à gauche par défaut.
- **Afficher les titres de section**: Affichera le titre de chaque section dans le format d'impression. Chaque titre est personnalisable dans l'éditeur de format d'impression.
- **Afficher les sauts de Ligne après chaque section**: Ajoutera des sauts de lignes après chaque section.
- **Langue d'impression par défault**: Sera sélectionné par défaut lors de l'impression du document.
- **Police de caractère**: Ecrasera la police globale sélectionnée dans les paramètres d'impression.

Vous pouvez aussi ajouter du style en CSS pour écraser le style par défaut de votre format d'impression.

#### 3.3.1 Modifier le format

Vous pouvez ensuite cliquer sur `Modifier le format` pour commencer à éditer votre format d'impression.

L'éditeur de format d'impression vous donnera la possibilité d'ajouter des sections et colonnes ainsi que d'éditer la section titre de votre format d'impression.

#### 3.3.2 Sections et colonnes

Vous pouvez ajouter autant de sections que vous le souhaitez et jusqu'à 4 colonnes par section.
Cliquez simplement sur la roue en haut à droite de chaque section pour les configurer:
- **Nb de Colonnes**: Ajoutez jusqu'à 4 colonnes.
- **Titre de la section**: Editez le titre de la section. Il sera seulement affiché sur le paramètre est activé dans les propriétés du format d'impression (voir ci-dessus)
- **Saut de page**: Ajoutera un saut de page juste sous cette section.

Vous pouvez aussi supprimer une section en cliquant sur le bouton `supprimer`.

#### 3.3.3 Section titre

Vous pouvez aussi éditer la section titre affichée en haut de la première page de votre document.
Modifiez simplement le libellé ou personnalisés la section complètement si vous êtes à l'aise en HTML et/ou Jinja.

#### 3.3.3 Champs

Une fois que votre structure de document est prête, glissez/déposez simplement des champs dans chaque colonne pour les afficher sur votre format d'impression.
Si le champ n'a pas de valeur, il ne sera pas affiché.

Par défaut, vous pouvez ajouter tous les champs disponibles dans le document de référence.
Si vous souhaitez récupérer la valeur d'un champ disponible dans un document lié avec votre document de référence, vous pouvez ajouter un champ `HTML personnalisé` et utiliser du code Jinja.

Ex. Vous voulez afficher le compte bancaire par défaut d'un client dans sa facture:

```
{% set bank_account = frappe.db.get_value("Customer", doc.customer, "default_bank_account") %}
<div class="row">
	<div class="col-md-3 text-right">{{ _("Bank Account") }}</div>
	<div class="col-md-9">{{ bank_account or '' }}</div>
</div>
```

#### 3.3.5 Traductions

Si vous ajoutez des libellés traductibles dans votre code, n'oubliez pas d'ajouter également des traductions pour toutes les langues que vous envisagez d'utiliser dans le type de document `Traduction`.


### 3.4 Formats d'impression multiples

Si vous avez plusieurs formats d'impression pour un document, cliquez sur `Format par défaut pour ce type de document` pour définir le plus utilisé comme étant le format par défaut pour ce document.

### 3.5 Page de couverture

Une page de couverture est une page qui est ajoutée avant l'impression de votre PDF.
Il ne peut s'agir que d'un document en PDF qui sera ensuite concaténé avec le document généré par Dokos.

Créez une nouvelle page de couverture via le type de document "Page de couverture", puis sélectionnez la dans vos formats d'impression.

### 3.6 Cas d'usage

#### 3.6.1 Ajouter un titre au dessus des lignes d'articles dans les transactions d'achat/vente

Pour ajouter un titre au dessus d'une ligne dans une transaction, il suffit d'ajouter un champ personnalisé:

:point_right: Allez dans le menu "Personnaliser un formulaire".
:point_right: Cherchez le type de document correspondant à votre tableau d'articles, par exemple "Article de la facture de vente".
:point_right: Ajoutez un champ dans ce document, mettez "Title" ou "Print Title" dans le libellé et cochez les cases **Autoriser les modifications après validation** et **Masquer à l'impression**.
:thumbsup: Cliquez sur "Mettre à jour"


Vous pouvez désormais mettre un titre qui apparaîtra juste au dessus de la ligne d'articles concernée.

#### 3.6.2 Ajouter un titre au dessus du tableau des articles

Pour ajouter un titre ou un champ de texte libre au dessus du tableau des articles, il suffit d'ajouter un champ personnalisé:

:point_right: Allez dans le menu "Personnaliser un formulaire".
:point_right: Cherchez le type de document pour lequel vous souhaitez ajouter ce champ.
:point_right: Choisissez le type de champ qui vous convient le mieux et donnez lui un libellé.
:thumbsup: Cliquez sur "Mettre à jour"

Ensuite allez dans votre format d'impression et ajoutez ce champ juste au dessus du tableau des articles. Il apparaîtra désormais sur vos impressions de document.