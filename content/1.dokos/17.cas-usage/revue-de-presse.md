---
title: Revue de Presse
description: Un cas d'usage sur créer un modèle de Type de document et sur créer un rapport Revue de presse
---

# Cas d'usage : Revue de presse

Une revue de presse est un genre journalistique et entrepreneurial qui consiste en une compilation d'articles de presse généraliste ou spécialisée, à une échelle géographique et temporelle choisie. Cette synthèse peut relever juridiquement du panorama de presse si elle ne répond pas à certains critères, dont la gratuité.

Pour la création d'un espace lié à la création d'une Revue de presse il faut :
- 1. Créer un endroit dans le Dokos qui permet de stocker les informations.
- 2. Pouvoir générer des rapports, qui contiennent des informations sur les revues de presse et le chemin de visualisation des fichiers associés.

### Solution

Comment créer un espace dédié à la création de Revues de presse ?

- Il faut créer un nouveau type de document qui correspondra au dossier des revues de presse.

Dans Dokos, vous pouvez retrouver tous les types de document dans :

> Accueil > Développement > Modèles > **Type de document**

## 1. Créer un nouveau modèle de **Type de document**

1. Allez sur la liste de tous les types de document
2. Cliquez sur **+ Ajouter Type de document** 
Ou vous pouvez saisir **Type de document** dans la barre de recherche.

![doctype_1.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/doctype_1.png)

3. Accédez au formulaire qui permet de définir les **informations du nouveau document**.
4. Nommer le document dans le champ **Nom**
5. Sélectionnez le **module** qui sera associé au document.

![doctype_2.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/doctype_2.png)

Dans le partie **contenu**, vous pouvez définir tous les champs du document. Il s'agit des champs que les utilisateurs devront remplir pour valider une Revue de presse.

Dans ce cas là, vous pouvez ajouter les champs suivants :

- Utilisateur
- Date de publication
- Sujet de la revue de presse
- Description de la revue de presse

Etc..

### **Les informations de la table**

1. **Libelle** : Nom du champ créé. 
2. Le **Type** permet de définir le type de ces données, il existe plusieurs choix possible. *Les plus utilisés sont :*
	- Type **Donnée** : Vous pouvez renseigner du texte personnalisé.
	- Type **Lien** : Vous pouvez choisir les données d'un autre document et il vous permet de rediriger et lier le document à un autre.
	- Type **Date** : le champ est mis sous le format d'une date.
	- Type **Saut de colonne** : Il permet de créer un saut de ligne entre les champs.
	- Type **Saut de section** : Vous permet de segmenter votre document en plusieurs parties. Par exemple, Détails généraux, Table des articles, Termes et conditions etc..
	- Type **Sélectionner** : Vous pouve donner des choix en **Options** 
…
3. **Obligation**: Si la case est coché, ce champ sera obligatoire pour pouvoir le valider.

4. **Options** : Quand le **Type** de donnée est **Sélectionner** ou **Lien**, vous devez saisir les choix ou le nom de type de document pour rediriger la page...

![doctype_3.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/doctype_3.png)


5. Le champ suivant est le **Nom* automatique** qui sera généré à la création d'un document. 
Vous pouvez définir la façon de nommer les différents documents en ce type. Par défaut c’est aléatoire. Ici on utilise la façon [série], on remplit "REVUE.#####" dans ce champ.
![doctype_4.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/doctype_4.png)

6. **Enregistrer** le nouveau document.

7. Créez votre premier document pour votre revue de presse en allant sur :

> Accueil > Lieu > **Revue de presse**
ou en recherchant Revue de presse dans la barre de recherche.

![doc_revue_de_presse5.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/doc_revue_de_presse5.png)

## 2. Créer un Rapport : Revue de Presse

Vous pouvez retrouver deux cas d’usage a propos de la création des Rapports.

1. **[Rapport de requête](https://doc.dokos.io/fr/customizations/use-cases/query-report)**
2. **[Rapport de script](https://doc.dokos.io/fr/customizations/use-cases/script-report)**. 

Dans ce cas là, il faut créer un **[Rapport de requête](https://doc.dokos.io/fr/customizations/use-cases/query-report)**

Le flux de Rapport:

>Onglet à gauche > Développements > Vues > **Rapport**

Ou 

> Directement saisir ‘**Rapport**’ dans notre barre de recherche.


1. Cliquez sur **+ Ajouter Rapport** en haut à droite. 
![rapport_revue1.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/rapport_revue1.png)

2. Le **Nom du Rapport** : 'Revue de Presse'
3. Le **Type de rapport** : Sélectionnez ‘Rapport de Requête'
4. Le **Doctype de Réf.** : Sélectionnez ‘Revue de Presse 1’(C’est le Doctype que vous avez vient créé). 
5. Cliquez sur **Enregistrer**.


![rapport_revue21.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/rapport_revue21.png)
![rapport_revue2.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/rapport_revue2.png)

6. Ajoutez des colonnes de rapport dans **Colonnes** et écrire des codes dans **Requête/Script**.

![rapport_revue3.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/rapport_revue3.png)

### 2.1 Ecrire les codes

1. Ajoutez des données dans les **Colonnes**. 
2. Remplissez le nom des données dans **Nom du champ**
3. Nommez les colonnes dans le champs **Libellé**
4. Sélectionnez le **Type de champ** selon les types de données. 

Écrivez le code suivant :

```
SELECT contact, client, date, sujet, description
FROM `tabRevue de Presse`
```
![codes1.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/codes1.png)


Pour afficher le résultat de rapport, cliquez sur le bouton **Afficher le rapport** en haut à droite après avoir enregistré :
![codes2.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/codes2.png)
![codes3.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/codes3.png)

Pour imprimer en PDF, cliquez sur les trois point en haut à droite et cliquez sur PDF
![codes4.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/codes4.png)
![codes5.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/codes5.png)


### 2.2 Ajouter le lien de fichier associé dans le rapport

Comme toutes les données liées à l'ajout de fichier dans l’onglet de gauche de Rapport n'appartiennent pas à ce Rapport. Cela veut dire que les données de **Pièces jointes** ne sont pas dans les données du document **Revue de Presse**. Ces données sont toutes stockées dans le **Fichier** Dokos.

1. Allez dans le fichier associé

Le flux de **Fichier**:

> Onglet à gauche > Outil > **Fichier**

Ou 

> Directement saisir ‘**Fichier**’ dans notre barre de recherche.

![fichier1.png](/content/cas_usage_booming_tiers_lieu/fichier1.png)

![fichier2.png](/content/cas_usage_booming_tiers_lieu/fichier2.png)

2. Cliquez sur le fichier "YUKI SCRIPT RAPPORTc94640" que nous avons ajouté dans le **Pièces jointes**. Nous pouvons observer les données de ce fichier comme **Nom du Fichier**, **URL du fichier**, **Joint au DocType**, **Joint Au Nom**...

![fichier3.png](/content/cas_usage_booming_tiers_lieu/fichier3.png)

![fichier4.png](/content/cas_usage_booming_tiers_lieu/fichier4.png)

3. Pour connaître les noms de ces champs, cliquez sur les trois points en haut à droite et cliquez sur **Personnalisation**. 
**Entrez le type de formulaire**, le **Nom** de ces champs et ses **Type** de données.

![fichier5.png](/content/cas_usage_booming_tiers_lieu/fichier5.png)

![fichier6.png](/content/cas_usage_booming_tiers_lieu/fichier6.png)

4. Retournez dans le rapport **Revue de Presse**
5. Ajoutez une colonne ‘file_url’ dans **Colonnes**. Puis, on corrige le code en :

```
SELECT r.contact, r.client, r.date, r.sujet, r.description, 
(SELECT GROUP_CONCAT(file_url)
FROM tabFile as f
WHERE f.attached_to_name = r.name AND f.attached_to_doctype = "Revue de Presse")
FROM `tabRevue de Presse` AS r
```
![fichier7.png](/content/cas_usage_booming_tiers_lieu/fichier7.png)

Voici le résultat que vous allez avoir :

![fichier8.png](/content/cas_usage_booming_tiers_lieu/fichier8.png)

![fichier9.png](/content/cas_usage_booming_tiers_lieu/fichier9.png)


### 2.3 Format de rapport plus beau

Si vous voulez un URL complet, il faut ajouter “https://tierslieux.dokos.io” avant le fichier URL. On écrit les codes: 
```
SELECT r.contact, r.client, r.date, r.sujet, r.description, 
(SELECT GROUP_CONCAT("https://tierslieux.dokos.io",file_url)
FROM tabFile as f
WHERE f.attached_to_name = r.name AND f.attached_to_doctype = "Revue de Presse")
FROM `tabRevue de Presse` AS r
```
Voici le résultat donné :

![format1.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/format1.png)

![format2.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/format2.png)

![format3.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/format3.png)

Vous pouvez tester le rapport avec plusieurs revues de presse et ajouter plus de fichiers associés dans chaque document.

![format4.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/format4.png)

![format5.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/format5.png)

![format6.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/format6.png)

![format7.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/format7.png)


Exécutez à nouveau le code :

```
SELECT r.contact, r.client, r.date, r.sujet, r.description, 
(SELECT GROUP_CONCAT("https://tierslieux.dokos.io",file_url)
FROM tabFile as f
WHERE f.attached_to_name = r.name AND f.attached_to_doctype = "Revue de Presse")
FROM `tabRevue de Presse` AS r
```
![format8.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/format8.png)

![format9.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/format9.png)

![format10.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/format10.png)

A partir de ces résultats, vous pouvez observer que lorsque le nombre de ‘Revue de Presse’ augmente, il n'y a pas de problème avec les résultats. 

Mais lorsque plusieurs fichiers sont ajoutés, en raison de la fonction `GROUP_CONCAT()`, il y a des virgules entre les différents liens. 

Donc, on pourrait corriger les codes pour le faire plus simple :
```
SELECT r.contact, r.client, r.date, r.sujet, r.description, 
REPLACE((SELECT GROUP_CONCAT("https://tierslieux.dokos.io",file_url)
FROM tabFile as f
WHERE f.attached_to_name = r.name AND f.attached_to_doctype = "Revue de Presse"),",","<br>")
FROM `tabRevue de Presse` AS r
```
![format11.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/format11.png)

![format12.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/format12.png)

![format13.png](/content/cas_usage_booming_tiers_lieu/revue_de_presse/format13.png)
