---
title: Journal Comptable
description: 
published: true
date: 2022-06-28T16:06:40.336Z
tags: 
editor: markdown
dateCreated: 2020-11-26T12:52:58.984Z
---

# Journaux comptables

::alert{type=info}
:point_right: v2
::


Les journaux comptables sont des journaux auxiliaires du grand livre.
Dokos permet la création d'autant de journaux que nécessaire à la tenue de votre comptabilité.

Vous pouvez forcer l'utilisation d'un journal comptable dans toutes vos transactions en cochant l'option "Comptabiliser toutes les transactions dans un journal comptable" dans les Paramètres des comptes.

### 1. Comment créer un journal comptable

`Comptabilité > Journal Comptable`

1. Choisissez un nom et un code pour votre journal comptable
2. Si votre journal est un journal de banque ou de caisse, sélectionnez le compte comptable associé
3. Ajoutez autant de lignes de conditions que nécessaire (voir-dessous)

::alert{type=info}
Généralement on recommande d'avoir au moins 4 journaux par défaut:
- Ventes
- Achats
- Trésorerie
- Opérations diverses

Il faut également décomposer le journal de trésorerie en autant de journaux que vous avez de comptes bancaires et de caisses
::



### 2. Les conditions

Chaque journal peut être associé avec une ou plusieurs transactions.

::alert{type=info}
Le journal "VENTES" va être associé au type de document "Facture de Ventes".
A chaque fois qu'une facture sera validée, les écritures comptables correspondantes seront enregistrées dans le journal des ventes.
::



Il est également possible d'ajouter une condition pour une transaction donnée.

::alert{type=info}
Le journal "AVOIRS" va être également associé au type de document "Facture de Ventes", avec la condition `doc.is_return`

Désormais lorsqu'une facture sera validée, elle sera enregistrée dans le journal "VENTES" et s'il s'agit d'un avoir il sera enregistré dans le journal "AVOIRS"
::



Les conditions doivent prendre la forme `doc.{nom du champ à valider}` et doivent retourner une valeur de type Vrai/Faux.

Exemples retournant le même résultat:
```
doc.is_return
doc.is_return == 1
doc.is_return == True
```

### 3. Exemples

#### Journal d'A-Nouveaux

|Type de document|Condition|
|----------------|--------------|
|Facture de vente|doc.is_opening=="Yes"|
|Facture d'achats|doc.is_opening=="Yes"|
|Ecriture de journal|doc.is_opening=="Yes"|
|Ecriture de stock|doc.is_opening=="Yes"|