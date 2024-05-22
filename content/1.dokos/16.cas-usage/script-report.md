---
title: Rapport de type Script
---

# Le Rapport de Script

Tout ce qui ne peut pas être réalisé à l'aide de Report Builder ou de Query Report peut être réalisé à l'aide de Script Reports. Comme son nom l'indique, ces rapports sont créés à l'aide de scripts Python. Étant donné que ces rapports vous donnent un accès illimité via des scripts Python, ils ne peuvent pas être créés par les administrateurs. Ces rapports sont destinés à être rédigés pendant le développement et à faire partie de votre application.

## Cas d'usage <*MappeMonde*>

MappeMonde (Tiers Lieu) avait besoin d'une liste claire et formelle qui contiendra toutes les informations relatives à l'événement, y compris le nom de la réunion, le thème, l'horaire, les participants, et le contenu impliqué.

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

### 2.1 Comment créer un rapport de script ?

1. Saisir **Rapport** dans la barre de recherche.
2. Cliquez sur **Nouveau.elle Rapport**

![creer_rapport_2.png](/content/cas_usage_booming_tiers_lieu/script_report/creer_rapport_2.png)

**Une fois sur la page de création du rapport**

3. Saisissez un **Nom**
4. Sélectionnez le **DocType** que vous voulez rattaché au rapport
	Pour ce cas, choisissez **EVENT** (Événement).
5. Dans **Type de Rapport**, mettez **Rapport de script**
6. **Enregistrez**

Le rapport est maintenant créé.

![creer_rapport.png](/content/cas_usage_booming_tiers_lieu/script_report/creer_rapport.png)

::callout{icon="i-heroicons-exclamation-triangle" color="amber"}
**Le langage Python** est le langage de programmation Open source le plus employé par les développeurs. Ce langage s’est propulsé en tête de la gestion d’infrastructure, d’analyse de données ou dans le domaine du développement de logiciels. C'est aussi l'un des langages informatiques les plus utilisés au monde. 
::

L'avantage de l'utilisation de ce langage est que les utilisateurs peuvent définir beaucoup de variables.

(Si vous voulez en connaître plus sur le langage Python, cliquez [ici](https://www.python.org/))


### 2.2 Requête Script

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

Allez dans **Type de document**, vous trouverez toutes les données de chaque document. 

Pour accéder à la **liste Type de document**, allez sur :

> Accueil > Développement > Modèles > **Type de document**

::callout{icon="i-heroicons-exclamation-triangle" color="amber"}
**Attention les noms des documents sont en anglais**
::

Pour aller sur le formulaire Événement :

- Tapez **Event** dans la barre de filtre > Nom.

![booming_5.png](/content/cas_usage_booming_tiers_lieu/booming_5.png)

#### 2.2.2 Les codes script et ajout des colonnes

Retournez sur le rapport de l'événement que vous venez de créer en allant sur :

> Accueil > Développement > Vues > **Rapport**

Sur la liste des rapports, retrouvez le rapport que vous avez créé.

::callout{icon="i-heroicons-exclamation-triangle" color="amber"}
Pour les rapports de script, la librairie Frappe API est utilisé pour créer et gérer les données. 
::

A propos de l'usage de ce libraire, allez sur le lien suivant pour ens avoir plus [ici](https://doc.dokos.io/fr/developers). 

**Le format de notre requête script est :** 

```
result = [résultat]
```
ou avec l'ancien style
```
data = [colonnes], [résultat]
```
`result` : cela indique les résultats affichés.

**Application dans notre cas :**

- Utilisez la fonction `frappe.db.get_all()` pour lire les données dans notre doctype.

Son format est :
```
frappe.db.get_all(doctype, filters, or_filters, fields, order_by, group_by, start, page_length)
```
Attention ici, si vous n’avez pas besoin de filtrer, par order_by, par group_by, start, par page_length. 
Vous pouvez vous passer de ces éléments, il ne reste que la ligne de code : `frappe.db.get_all(doctype, fields)`.

Pour `frappe.db.get_all()` vous pouvez également utiliser l'alias `frappe.get_all()`.

#### Comment ajouter une colonnne ?

- Faites **Ajouter une ligne**
- Indiquez le **Nom du champ**, le **libellé**
- Indiquez **Type de champ**

Si vous choisissez le type de champ : **Lien**. Vous pouvez indiquer le **chemin du Lien** dans Modifier la ligne > **Option**

![result_1.png](/content/cas_usage_booming_tiers_lieu/script_report/result_1.png)

Dans le résultat affiché et sur le PDF, vous pouvez cliquer sur le lien pour accéder à la page de ‘le type de formulaire’.

![filtre11.png](/content/cas_usage_booming_tiers_lieu/script_report/filtre11.png)
![lien1.png](/content/cas_usage_booming_tiers_lieu/script_report/lien1.png)

Pour lire les données de l'événement, selon `frappe.db.getall()`, il faut écrire :

```
result = frappe.get_all('Event',  fields = ['name','subject','starts_on','ends_on','description'])
```

Ou il faut utiliser la deuxième façon pour afficher le résultat:

```
columns = [
		{
        "fieldname": "name",
        "fieldtype": "Data",
        "label": "Event"
    },
    {    
        "fieldname": "subject",
        "fieldtype": "Data",
        "label": "Subject"
    },
		{   
        "fieldname": "starts_on",
        "fieldtype": "Date",
        "label": "Starts On"
    },
		{    
        "fieldname": "ends_on",
        "fieldtype": "Date",
        "label": "Ends On"
    },
    {    
        "fieldname": "description",
        "fieldtype": "Data",
        "label": "Description"
		}
]


fields = ["name","subject","starts_on","ends_on","description"]
    
    
data = columns, frappe.get_all("Event",fields = fields)
```
![data=.png](/content/cas_usage_booming_tiers_lieu/script_report/data=.png)

Cliquez sur le bouton blanc **Afficher le rapport** en haut à droite.

![affiche_result_1.png](/content/cas_usage_booming_tiers_lieu/script_report/affiche_result_1.png)

Dokos vous permet de l’imprimer ou l'afficher en PDF: Cliquez sur les trois points en haut à droite et PDF pour générer un PDF à imprimer

![pdf1.png](/content/cas_usage_booming_tiers_lieu/script_report/pdf1.png)


### 2.3 Comment ajoutez des filtres ?

![Plusieurs événement](/content/cas_usage_booming_tiers_lieu/booming_14.png)

Tous les événements sont affichés dans le résultat.

Dans ce cas, vous avez besoin d’ajouter des filtres dans le champ 'filtre' pour filtrer selon vos besoins.

Vous pouvez par exemple ajouter une ligne, ‘le nom du champ' est 'starts_on', le libellé est ‘Starts On’, ‘le type de champ’ est ‘date’.

Et une ligne ‘le nom du champ' est 'ends_on', le libellé est Ends On’, ‘le type de champ’ est ‘date’.

::callout{icon="i-heroicons-exclamation-triangle" color="amber"}
**A noter** :  
Les filtres que vous ajoutez peuvent être utilisés dans les codes suivants comme :
-filters.starts_on
-filters.ends_on
::

![filtre.png](/content/cas_usage_booming_tiers_lieu/script_report/filtre.png)

Le code est donc le suivant :
```
result = frappe.get_all('Event', fields = ['name','subject','starts_on','ends_on','description'], filters = {"starts_on": ("between", [filters.starts_on,filters.ends_on])})
```

Dans le code ici, 'starts_on' c’est l'élément que nous voulons comparer avec les dates. On choisira ('filters.starts_on' et 'filters.ends_on')

'Between' signifie 'starts_on' est entre 'filters.starts_on' et 'filters.ends_on'. Normalement, ici on pourrait utiliser les symboles pour comparer comme “>” ou “<” ou “=”...

Le logiciel nous permet d'ajouter divers filtres comme celui des dates mais d'autres sont également possibles.
 
Voici le résultat après l'ajout des filtres.

![filtre_code.png](/content/cas_usage_booming_tiers_lieu/script_report/filtre_code.png)

Les événements entre 30/06/2021 et 03/07/2021

![filtre_date1.png](/content/cas_usage_booming_tiers_lieu/script_report/filtre_date1.png)

Les événements entre 30/06/2021 et 31/07/2021

![filtre_date2.png](/content/cas_usage_booming_tiers_lieu/script_report/filtre_date2.png)

::callout{icon="i-heroicons-exclamation-triangle" color="amber"}
Quand on ajoute des filtres, le contenu de cette page est modifié donc il faut recharger la page sur le bouton dans le coin supérieur droit.
::

### 2.4 Comment connecter plus de Doctype ?

#### 2.4.1 Réservation d’article

Pour connecter les données de **Réserver un article**

Il faut réserver un article pour notre événement. 

1. Cliquez sur le bouton '**Réserver un article**' dans «**Evénement**» 2. Selectionnez les articles que vous voulez. 
3. Après la soumission, il faut retourner sur la page d'évenement.
4. Cliquez sur l'article dans les **Documents liés**
5. Sélectionnez **Commence le**, **Termine le** et le **statuts**
6. Faites **Enregistrer**

![reser1.png](/content/cas_usage_booming_tiers_lieu/script_report/reser1.png)

![reser2.png](/content/cas_usage_booming_tiers_lieu/script_report/reser2.png)

![reser3.png](/content/cas_usage_booming_tiers_lieu/script_report/reser3.png)

#### 2.4.2 Requête pour importer les données de Réservation d’article dans le résultat affiché.

**Les différentes étapes en utilisant le langage Python :**

Dans tableau qui comporte les colonnes ‘name’,’subject’, ‘starts_on’, ‘ends_on’ et ‘description’. 

Vous pouvez importer les autres données dans ce tableau.

- Créez les nouvelles colonnes vides qui permettent que les nouvelles données puissent le remplir. 

- Utilisez `for`

Pour en savoir plus, cliquez sur [ici](https://www.w3schools.com/python/python_for_loops.asp).

Application du code :

```
events = frappe.get_all('Event', fields = ['name','subject','starts_on','ends_on','description'], filters = {"starts_on": ("between", [filters.starts_on,filters.ends_on])})

for event in events:
     event["item"] = ""
     event["status"] = ""
     for booking in frappe.get_all('Item Booking', fields = ['item','status'], filters = {'event': event.name}):
          event["item"] = event["item"] + booking.item + "<br>"
          event["status"] = event["status"] + booking.status + "<br>"

result = events
```

La premiere ligne :

```
events = frappe.get_all('Event', fields = ['name','subject','starts_on','ends_on','description'], filters = {"starts_on": ("between", [filters.starts_on,filters.ends_on])})
```

- Utilisez `frappe.get_all()`. Fonction pour lire les champs ('name','subject','starts_on','ends_on','description') à l’origine du type de document ‘Event’. 

- Mettre le filtre pour lire les données quand le champ ‘**starts_o**n’ d'événement qui est entre le '**starts_on**' et '**ends_on**' dans le champs de filtre.

Pour la première ligne de ce code :

```
for event in events: 
```
Nous utilisons une boucle for pour lire séparément chaque événement dans 'Events', et nous nommons chaque événement.
```
event["item"] = ""
event["status"] = ""
```
- Créez deux colonne ‘item’ et ‘status’ dans chaque ‘event’ que l’on a lu en for boucle. Mais le contenu de ces colonnes est vide car ils sont égal à "".

- Mettez les données suivantes :
```
for booking in frappe.get_all('Item Booking', fields = ['item','status'], filters = {'event': event.name}):
```
Il faut retirer les données dont on a besoin.

- Utilisez`frappe.get_all`(). fonction pour lire les données de ‘**item**’ et '**status**' dans le type de document ‘Item Booking’. Quand la colonne ‘**event**’ de ‘**Item Booking**’ est égale à event.name.

La boucle `for` nous aide à lire chaque ‘item’ et chaque ‘status’ dans le ‘booking’

Enfin, on doit mettre ces données que l’on a retirées dans la colonne ‘item’ et ‘status’ de ‘event’.
```
event["item"] = event["item"] + booking.item + "<br>"
event["status"] = event["status"] + booking.status + "<br>"
```
Vous pouvez utiliser ‘=’ pour définir une variable à nouveau. 

- Définissez le nouveau event\["item"] égal à event\["item"] précédent(vide) + item à l’origine de booking + “\<br>” (le symbole pour sauter la ligne).

- Utilisez \<br> pour séparer ces certains )

Pour event\["status"], c’est le même principe.

Voici les résultats : 

![connect_1.png](/content/cas_usage_booming_tiers_lieu/script_report/connect_1.png)

![connect_2.png](/content/cas_usage_booming_tiers_lieu/script_report/connect_2.png)

En PDF
![connect_3.png](/content/cas_usage_booming_tiers_lieu/script_report/connect_3.png)


### 2.5 L'amélioration de format

Deux nouvelles colonnes viennent d'être ajoutées qui sont "**Item**" et "**Statuts**"

Vous pouvez connecter ces deux colonnes.

```
events = frappe.get_all('Event', fields = ['name','subject','starts_on','ends_on','description'], filters = {"starts_on": ("between", [filters.starts_on,filters.ends_on])})

for event in events:
     event["item"] = ""
     for booking in frappe.get_all('Item Booking', fields = ['item', 'status'], filters = {
          'event': event.name
}):
          event["item"] = event["item"] + booking.item + ": " + booking.status + "<br>"

result = events
```

- Définir le contenu de event\["item"]. 
- Mettre les  données booking.item et booking.status dans ces deux colonnes et les séparons par deux points.

![format1.png](/content/cas_usage_booming_tiers_lieu/script_report/format1.png)

![format2.png](/content/cas_usage_booming_tiers_lieu/script_report/format2.png)

Il suffit d'utiliser et de combiner habilement différentes fonctions en Python.