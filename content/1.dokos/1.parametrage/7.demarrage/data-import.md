---
title: Outil d'importation de données
---

# Outil d'importation de données
L'outil d'importation de données vous permet d'importer des enregistrements à partir d'un fichier CSV / Excel.

L'outil d'importation de données est un moyen facile de télécharger (ou de modifier) des données en masse (en particulier des données de base) dans le système.

---

Pour commencer à importer des données, allez sur :

> Accueil > Paramètres > Données > **Importer des données**

Ou allez dans le document que vous souhaitez importer et cliquez sur Menu > **Importer**:

::alert{type=warning}
Avant d'utiliser l'importation de données, assurez -vous que toutes vos données sont prêtes.
::

## 1. Insertion de nouveaux enregistrements

Supposons que vous souhaitiez importer la liste des clients de votre ancien système dans Dokos. La première étape consiste à télécharger un modèle dans lequel nous pouvons saisir nos données.

### 1.1 Téléchargez le modèle

1. Allez dans la liste des clients, cliquez sur Menu > Importer. Cliquez sur **:heavy_plus_sign: Ajouter Import de données**.
2. Sélectionnez le **type d'importatio**n comme insérer de nouveaux enregistrements.
3. Cliquez sur **Enregistrer** .

4. Maintenant, cliquez sur **Télécharger le modèle**.
5. Lors de l'insertion de nouveaux enregistrements, le modèle doit être vide. Si vous avez quelques clients dans votre système, vous pouvez sélectionner le type d'exportation comme "5 enregistrements" pour voir le format dans lequel vous devez entrer les données dans le modèle.
6. Sélectionnez le **type de fichier** du modèle d'exportation.
7. Sélectionnez les champs que vous souhaitez remplir en tant que détails du client.
8. Cliquez sur **Exporter**.

### 1.2 Saisie de données dans le modèle

Votre modèle téléchargé ressemblera à ceci:

Ouvrez le modèle téléchargé dans une application de feuille de calcul (comme Excel, Numbers ou Libre Office) et entrez les données sous les en-têtes de colonne comme suit:

Maintenant, enregistrez votre modèle en tant que fichier Excel ou CSV (valeurs séparées par des virgules).

Vous pouvez laisser la colonne ID vide lors de l'insertion de nouveaux enregistrements.

Lorsque vous importez ce modèle, chaque ligne crée un enregistrement client dans le système.

### 1.3 Importer le modèle

1. Après avoir mis à jour votre fichier modèle, revenez au formulaire d'importation de données et joignez le fichier en cliquant sur le bouton Joindre .
2. Sélectionnez le fichier modèle et cliquez sur **Télécharger** .
3. Une fois le téléchargement réussi, cliquez sur **Démarrer l'importation**.

::alert{type=warning}
S'il y a des erreurs dans votre modèle, elles seront affichées dans la section **Avertissements**. Les avertissements seront classés par ligne ou colonne avec leur numéro afin que vous puissiez facilement les retrouver dans le modèle et les résoudre. Vous devez résoudre tous les avertissements avant de pouvoir importer les données.
::

Après avoir résolu les avertissements, cliquez à nouveau sur Démarrer l'importation pour importer les données. Une fois l'importation des données réussie, vous verrez un journal de chaque enregistrement créé dans la section Journal d'importation.

## 2. Mise à jour des enregistrements existants

Supposons que vous souhaitiez mettre à jour les données client en masse dans votre système. La première étape consiste à télécharger le modèle avec les données.

### 2.1 Téléchargez le modèle

1. Par exemple, allez dans la liste des clients, cliquez sur Menu > Importer. Cliquez sur **:heavy_plus_sign: Ajouter Import de données** .
2. Sélectionnez le type d'importation pour mettre à jour les enregistrements existants
3. Cliquez sur **Enregistrer** .
4. Maintenant, cliquez sur **Télécharger le modèle**.
5. Lors de la mise à jour des enregistrements existants, vous devez exporter les enregistrements du système avec le champ ID et les champs que vous souhaitez mettre à jour. Vous pouvez choisir Tous les enregistrements ou Enregistrements filtrés en fonction de votre cas.
6. Sélectionnez les champs que vous souhaitez mettre à jour pour les enregistrements client.
7. Cliquez sur **Exporter** .

### 2.2 Mise à jour des données dans le modèle

Votre modèle téléchargé ressemblera à ceci :

Maintenant, modifiez les valeurs de votre modèle et enregistrez le fichier au format Excel ou CSV.

::alert{type=warning}
Lors de l'exportation des enregistrements pour les mettre à jour, assurez-vous que la colonne ID est exportée et qu'elle n'est pas modifiée. Les valeurs de la colonne ID sont utilisées pour identifier les enregistrements dans le système. Vous pouvez mettre à jour les valeurs dans d'autres colonnes mais pas dans la colonne ID.
::

### 2.3 Importer le modèle

Suivez les étapes de la section **Importation du modèle** ci-dessus.

## 3. Importation d'enregistrements enfants

Les données dans DOKOS sont stockées dans des tableaux comme une feuille de calcul avec des colonnes et des lignes de données. Chaque formulaire peut avoir plusieurs champs comme la commande client. Il a les champs : Client, Entreprise, etc. Il a également des tables comme la table des articles, la table des taxes, etc. Dans l'importation de données, l'ensemble des champs de la commande client est traité comme la table principale et les lignes à l'intérieur de la table enfant (table des éléments) sont traitées comme la table enfant pour l'importation de données.

Chaque formulaire dans DOKOS peut être associé à plusieurs tables enfants. Les tables enfants sont liées aux tables parentes et sont implémentées là où il existe plusieurs valeurs pour une propriété. Par exemple, un article peut avoir plusieurs prix, une facture de vente a plusieurs articles, taxes, etc.

Lorsque vous exportez un document avec des tables enfants, par exemple, chaque ligne enfant apparaîtra sur une ligne distincte mais elle est associée à une seule ligne parente. Les valeurs suivantes dans les colonnes parentes resteront vides. Vous devez vous assurer que cet ordre n'est pas rompu lorsque vous les importez via Data Import.

## 4. Options d'importation

### 4.1 Importer depuis Google Sheets

Vous pouvez également importer des données depuis Google Sheets. Importez votre modèle dans Google Sheets et saisissez les données. Assurez-vous que la feuille de calcul Google est publique. Vous pouvez tester cela en ouvrant l'URL de Google Sheets dans une fenêtre de navigateur privée.

### 4.2 Soumettre après l'importation

Dans DOKOS, les types de documents sont principalement de deux types: les maîtres et les transactions. Les maîtres sont des enregistrements comme Client et Tâche qui ne peuvent être sauvegardés que non soumis. Les transactions telles que les commandes clients, les factures d'achat sont des documents à soumettre et peuvent être soumises.

Lorsque vous sélectionnez un type de document à soumettre pour l'importation, vous pouvez cocher Soumettre après l'importation pour soumettre le document après son importation.

### 4.3 Attention aux envois d'emails !

Supposons que vous ayez créé une notification dans votre système et que chaque fois qu'un prospect est créé, un e-mail est envoyé. Désormais, si vous importez en masse des prospects, de nombreux e-mails seront envoyés, ce qui peut ne pas être souhaité. Vous pouvez désactiver cette option pour éviter d'envoyer des e-mails.

## 5. Notes complémentaires

### 5.1 Limite de téléchargement
Il n'y a pas de limite stricte sur le nombre d'enregistrements pouvant être importés. Mais vous devez essayer de ne télécharger que quelques milliers d'enregistrements à la fois. L'importation d'un grand nombre d'enregistrements (disons 50 000) peut ralentir considérablement le système pour les utilisateurs qui utilisent le système.

### 5.2 Fichiers CSV
Un fichier CSV (Comma Separated Value) est un fichier de données que vous pouvez télécharger dans ERPNext pour mettre à jour diverses données. Tout fichier de feuille de calcul à partir d'applications de feuille de calcul populaires telles que MS Excel ou Open Office Spreadsheet peut être enregistré sous forme de fichier CSV.

Si vous utilisez Microsoft Excel et que vous utilisez des caractères non anglais, assurez-vous d'enregistrer votre fichier encodé au format UTF-8.

Pour les anciennes versions d'Excel, il n'y a pas de moyen clair d'enregistrer au format UTF-8. Enregistrez donc votre fichier au format CSV, puis ouvrez-le dans le Bloc-notes, puis enregistrez-le sous «UTF-8». (Ou mettez à jour votre Excel!)