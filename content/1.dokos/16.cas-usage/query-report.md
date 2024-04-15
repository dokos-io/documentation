---
title: Rapports SQL
---

# Le Rapports SQL

Les rapports SQL vous permettent de créer des rapports qui seront définis par les requêtes SQL. On peut ajouter diverses données qui seront stockées dans le logiciel DOKOS pour obtenir ces rapports.

## Cas d'usage <*Mappemonde*>

Vous avez un besoin de  traiter les différentes réservations chaque jour. Et vous n'avez pas toutes les informations sur les événements.

Il vous faut une liste qui puisse clairement vous indiquer ou à vos clients le jour, le type événement, le lieu, les participants, le thème, etc. 

## Solution pour la création du rapport

### 1.1 Créer événement

> Accueil > Lieu > Evénement > **+ Ajouter Événement**

**Remplissez les champs suivant** : 
-	**Le sujet**
- **Commence le** 
- **Termine le**
- **Les participants**
- **les personnes assignées**
- **La description**

![booming_1.png](/content/cas_usage_booming_tiers_lieu/booming_1.png)

### 2.1 Créer un rapport 
1. Saisir **Rapport** dans la barre de recherche.
2. Cliquez sur **Nouveau.elle Rapport**

![creer_rapport_2.png](/content/cas_usage_booming_tiers_lieu/script_report/creer_rapport_2.png)

**Une fois sur la page de création du rapport**

3. Saisissez un **Nom**
4. Sélectionnez le **DocType** que vous voulez rattaché au rapport
	Pour ce cas, choisissez **EVENT** (Événement).
5. Dans **Type de Rapport**, mettez **Rapport de requête**
6. **Enregistrez**

Le rapport est maintenant créé.

![creer_rapport.png](/content/cas_usage_booming_tiers_lieu/script_report/creer_rapport.png)

Cela permet de créer un rapport qui peut gérer des codes SQL. (SQL est une requête de base de données et un langage de programmation, principalement utilisé pour accéder aux données et aux requêtes.) 

L'avantage de l'utilisation de ce langage est que les utilisateurs peuvent fortement personnaliser le format, le contenu de la table et peuvent connecter plusieurs tables de données.

![booming_2.png](/content/cas_usage_booming_tiers_lieu/booming_2.png)

### 2.2 Requête SQL

#### 2.2.1 Présentation des données des documents sur DOKOS

**Comment récupérer les donnnées du document ?** 

1. **Première façon**

- Cliquez sur les trois points en haut à droite.
- Faites **Personnaliser** pour aller sur la page du formulaire. 

![booming_3.png](/content/cas_usage_booming_tiers_lieu/booming_3.png)

- Dans **type de formulaire** : Mettez **Event** (Événement)

En dessous, vous pouvez voir tous les noms de champs sur l'événement. 

![booming_4.png](/content/cas_usage_booming_tiers_lieu/booming_4.png)

 2. **Deuxième façon**

- Allez dans **Type de document**, vous trouverez toutes les données de chaque document. 

Pour accéder à la **liste Type de document**, allez sur :

> Accueil > Développement > Modèles > **Type de document**


::callout{icon="i-heroicons-exclamation-triangle" color="amber"}
**Attention les noms des documents sont en anglais**
::


Pour aller sur le formulaire Événement, il faut taper **Event** dans la barre de filtre > Nom.

![booming_5.png](/content/cas_usage_booming_tiers_lieu/booming_5.png)

Rédigez les codes pour définir le contenu de votre rapport.

#### 2.2.2 Les codes SQL et ajout des colonnes

Voici le format SQL  : 

`SELECT` ‘les colonnes que vous voulez choisir’ 
`FROM` \`tableau\`

Si l'événement contien les différents champs :
- Sujet
- Commence le
- Termine le
- Les personnes attribuées
- La description

Il faut écrire sous "**Requête**" : 

```
SELECT name, subject, starts_on, ends_on, _assign, description
FROM tabEvent
```
::callout{icon="i-heroicons-exclamation-triangle" color="amber"}
(Attention! Nom des champs ‘name’ et 'assign' est défini par défaut et ils ne s'affichent pas)
::

Pour ajouter les colonnes il faut :

- Ajoutez une ligne
- Indiquez le **nom de champ**
- Indiquez un **libéllé**
- Sélectionnez un **Type de champ**
- Enregistrer

Il est à noter que le nombre de Colonnes doit être égal au nombre de données sélectionnées après `SELECT`.

- Cliquez sur **Afficher le rapport** en haut à droite pour afficher les résultats de la requête.

![booming_6.png](/content/cas_usage_booming_tiers_lieu/booming_6.png)

Pour voir le résultat de la requête en format PDF :

- Cliquez sur les trois points en haut à droite et cliquez sur PDF pour générer un PDF.

![booming_7.png](/content/cas_usage_booming_tiers_lieu/booming_7.png)
![booming_8.png](/content/cas_usage_booming_tiers_lieu/booming_8.png)

### 2.3 Réserver un article et connectez les tableaux différents

Pour afficher les informations de l'article dans la liste.

- Réservez une salle dans **Réservation un article** dans l'Événement. 
- Ajoutez des codes SQL pour connecter le tableau **Réservation d’article** et le tableau **Event**.

**1. Première étape**

- Cliquez le bouton **Réserver un article** dans **Evénement**.
- Choisissez les salles (la salle peut être ajoutée à l’avance dans **Article**). 
- Cliquez sur la salle en bleu dans **Evénement**.
- Indiquez **Commence le**, le **Termine le** et le **statuts**
- **Enregistrez**

![booming_9.png](/content/cas_usage_booming_tiers_lieu/booming_9.png)
![booming_10.png](/content/cas_usage_booming_tiers_lieu/booming_10.png)
![booming_11.png](/content/cas_usage_booming_tiers_lieu/booming_11.png)

**2. Deuxième étape : changer les codes pour connecter les 2 tableau**

- Utiliser LEFT JOIN dans la requête SQL. 
	Fonction qui permet de connecter le tab1 et tab2. 
  
S'il y a deux colonnes identiques dans les deux tableaux, il faut utiliser `LEFT JOIN` ... `ON`... pour connecter ces deux tableaux. 

Voici le code qu'il faut utiliser :
``` 
SELECT t1.n, t1.b, t1.c, t2.d, t2.e
FROM tab1 AS t1
LEFT JOIN tab2 AS t2
ON t1.n = t2.f
 ```
`as` : fonction pour nommer le tableau dans ces codes pour simplifier

Ici, car la colonne "e" dans tab1 et la colonne "n" dans tab2 ont les mêmes données. Nous utilisons donc `LEFT JOIN`...`ON`... pour joindre les deux tables. De cette façon, les t2.d et t2.e que nous lisons sont toutes des données qui correspondent à t1.n.

On pourrait utiliser **t1.n** pour indiquer la colonne **n** qui est à l'origine du tableau **t1**. De cette façon, on peut facilement distinguer différentes colonnes **n**.

([Ici](https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/), vous pouvez connaître plus d’informations de différents `JOIN`)

Dans notre cas actuel, on peut observer les données de **Evénement** et **Réservation d’article**. Le **nom** de **Evénement** c’est ‘EV00001’, le "**event**" de **Réservation d’article** c’est aussi ‘EV00001’. Donc on peut l'utiliser en SQL.

Attention ! Si le nom de tableau est composé de plusieurs mots, il faut utiliser backtick pour le composer en ensemble. 

Exemple, le tableau de Item Booking est `tabItem Booking`.
 ```
SELECT e.name, e.subject, e.starts_on, e.ends_on, e._assign, e.description, ib.item, ib.status
FROM tabEvent as e
LEFT JOIN `tabItem Booking` as ib
ON e.name = ib.event
```
Comme code ici, on pourrait obtenir le "item" et le "status" de «Réservation d’article» quand son "event" est ‘EV00001’
 Laisse regarder le résultat.

![Requête](/content/cas_usage_booming_tiers_lieu/booming_12.png)
![Résultat affiché](/content/cas_usage_booming_tiers_lieu/booming_13.png)

*BINGO ! Il est aussi possible de connecter plus de tableaux qui nous permet de lire plus d’informations !<br>De cette façon, je peux avoir une liste très complète, c'est vraiment super !*

### 2.4 Ajout du filtre  
![Plusieurs événement](/content/cas_usage_booming_tiers_lieu/booming_14.png)
![Plusieurs résultat](/content/cas_usage_booming_tiers_lieu/booming_15.png)

Sur la page Rapport, il y a  toujours un filtre. 

Vous pouvez placer les conditions que vous souhaitez filtrer. Vous pouvez sélectionner la date, le statut ou d'autres données que vous souhaitez filtrer. La méthode de filtrage peut être réalisée en sélectionnant des options, ou en sélectionnant des dates, etc. 

Après avoir placé un filtre ici, vous pouvez utiliser la fonction `WHERE`...`AND`...`AND`... dans la Requête suivante pour utiliser le filtre que vous avez ajouté. 

ex.
Vous pouvez ajouter         
```
WHERE nom du champ 1 = %(“Nom du champ 2" de filtre)s     
```
à la fin de la requête
 
Dans la situation actuelle, nous pouvons d'abord mettre en place un filtre sur **starts_on** et **ends_on**. Choisissez leur type de données comme **Date**, puis ajoutez-le à la fin de la requête.
```
WHERE e.starts_on >= %(starts_on)s AND e.ends_on <=%(ends_on)s
```
De cette façon, nous pouvons sélectionner **l'heure de début** et **l'heure de fin** dans les résultats affichés !

![requête de filtre](/content/cas_usage_booming_tiers_lieu/booming_16.png)
![Résultat affiché](/content/cas_usage_booming_tiers_lieu/booming_17.png)

Concernant le status de salle, vous pouvez également ajouter un **status** dans **filtre**.**Type de champ** on sélectionne  ‘Selection’. Mais ce qui est un peu différent, c'est qu'il implique différentes options. Ici, vous devez cliquer sur le **Modifier** à droite du filtre, puis l'ajouter dans l'option
‘Confirmed’
‘Not confirmed’

Ensuite, comme précédemment, nous ajoutons du code à la fin
```
WHERE e.starts_on >= %(starts_on)s AND e.ends_on <=%(ends_on)s
AND ib.status = %(status)s
```
On voit ensemble les résultats d’affiches.

![Résultat affiché](/content/cas_usage_booming_tiers_lieu/booming_18.png)
![Résultat affiché](/content/cas_usage_booming_tiers_lieu/booming_19.png)
![Résultat affiché](/content/cas_usage_booming_tiers_lieu/booming_20.png)

::callout{icon="i-heroicons-exclamation-triangle" color="amber"}
Attention! Quand vous ajoutez des filtres, le contenu de la page est modifié donc il faut recharger la page en cliquant sur le bouton dans le coin supérieur droit.
::

### 3. Améliorer le format

Vous pouvez rédiger le rapport que vous souhaitez pour améliorer le format.

Voici le code rédigé :

```
SELECT e.name, e.subject, e.event_category, REPLACE(CONCAT(CONCAT(e.starts_on,'<br>to<br>'), e.ends_on),'.000000',' '), e.description,

REPLACE((SELECT GROUP_CONCAT(tabUser.full_name)
FROM tabUser
WHERE locate(tabUser.name, e._assign) > 0), ",", "<br>"),

REPLACE((SELECT GROUP_CONCAT(ib.item, " : ", ib.status)
FROM `tabItem Booking` as ib
WHERE ib.event = e.name),',','<br>')

FROM tabEvent as e
WHERE e.starts_on >= %(starts_on)s AND e.ends_on <= %(ends_on)s
```

![requête plus beau](/content/cas_usage_booming_tiers_lieu/booming_21.png)
![Résultat affiché](/content/cas_usage_booming_tiers_lieu/booming_22.png)
![PDF affiché](/content/cas_usage_booming_tiers_lieu/booming_23.png)

Après la fusion de ‘**start time**’ et ‘**end time**’ dans une nouvelle colonne '**Timetable**'.

- Connectez ‘**item**’ et ‘**status**’ en **‘:’**
- Remplacez les Emails en leur '**prénom**'‘**Nom**’. 

Utilisez les fonctions suivantes pour les réaliser : 

Sous requête :
Quand on sélectionne un élément qui n’existe pas dans le tableau principal. On peut utiliser sous-requête (SELECT *** FROM **)

`REPLACE`( , , )
Il peut réaliser le remplacement des informations dans le resultat
Le lien [REPLACE](https://sql.sh/fonctions/REPLACE)

`CONCAT`( , )
Il peut réaliser la connexion de 2 éléments que vous avez choisi, qui peut être une colonne ou un symbole.
Le lien [CONCAT](https://sql.sh/fonctions/concat)


`GROUP_CONCAT`( , )
Il permet de regrouper les valeurs non nulles d’un groupe en une chaîne de caractère. Cela est utile pour regrouper des résultats en une seule ligne que d’avoir autant de ligne qu’il y a de résultat dans ce groupe. Quand notre resultat qui est affiché dans plusieurs lignes, cette fonction nous permet d'afficher en une ligne et séparé par une virgule 
Le lien [GROUP_CONCAT](https://sql.sh/fonctions/group_concat)

`Locate`()
Il permet de chercher la position d’une chaîne de caractère dans un enregistrement. La fonction retourne zéro si la chaîne de caractère n’a pas été trouvée.
Le lien [Locate](https://sql.sh/fonctions/locate)

\<br> signifie le saut de la ligne dans le résultat.