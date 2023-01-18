---
title: Type de congés
description: 
published: true
date: 2021-09-23T15:36:45.733Z
tags: 
editor: markdown
dateCreated: 2020-11-27T07:16:21.728Z
---

# Type de congés

Le type de congé fait référence aux types de congés alloués à un employé qu'il peut utiliser lors de la demande de congé.

Vous pouvez créer autant de types de congés que vous le souhaitez en fonction des besoins de votre entreprise.

---

Pour accéder à **la liste type de congé**, allez sur :

> Accueil > Ressources humaines > Congés > **Type de congé**

![liste_type_de_congé.png](/content/rh/leave-type/liste_type_de_congé.png)

## 1. Comment créer un type de congé

1. Allez dans la liste Type de congé, cliquez sur :heavy_plus_sign: Ajouter Type de congé.
2. Entrez le nom du type de congé.
3. Entrez le nombre maximal de congés autorisés, applicable après (jours ouvrés), le nombre maximal de jours continus applicables (facultatif).
4. **Enregistrer**.

![créer_type_de_congé.png](/content/rh/leave-type/créer_type_de_congé.png)

## 2. Options des types de congés

- **Congés maximum autorisés**: Nombre de jours maximum de ce type de congés qu'un employé peut demander.
- **Applicable après (jours ouvrés)**: Saisissez ici le nombre minimum de jours ouvrables. Seuls les employés qui ont travaillé pendant ce nombre de jours ou plus seront autorisés à demander ce type de congé particulier. Tous les autres congés (tels que les congés occasionnels, les congés de maladie, etc.) pris par les employés après leur date d'embauche seront également pris en compte lors du calcul des jours ouvrables de l'employé.
- **Jours consécutifs maximum applicables**: Nombre maximum de jours de congés consécutifs qu'un employé peut demander.
- **Est un report**: Si coché, le solde de congés de ce type de congés sera reporté sur la prochaine période d'allocation
- **Est un congé sans solde**: Le salaire sera déduit pour ce type de congés
- **Est un congé facultatif**: Les congés facultatifs sont des jours fériés que les employés peuvent choisir au sein d'une liste de congés publiée par la société. La liste de congés pour congés facultatifs peut avoir n'importe quel nombre de jours fériés, mais vous pouvez restreindre le nombre de congés que chaque employé peut prendre en mettant une valeur dans le champ 'Congés maximum autorisés'.
- **Autoriser un solde négatif**: Si coché, les employés seront autorisés à demander ce type de congés même s'ils n'ont pas un solde suffisant. Cela résultera en un solde négatif pour ce type de congés.
- **Inclure les vacances dans les congés en tant que congés**: Cochez cette option si vous souhaitez compter les jours fériés tombant pendant des congés comme des congés. Par exemple, si un employé a demandé des congés un vendredi et un lundi, et que samedi et dimanche sont des jours fériés, si cette option est cochée, le système considèrera samedi et dimanche également comme des congés. Ces jours fériés seront ajoutés au nombre total de congés pris.
- **Exclure de l'acquisition de congés**: Si cette case est cochée, tous les jours de congés pris avec ce type de congés seront considérés comme des absences pour le calcul des congés acquis.
- **Congés compensatoires**: Les congés compensatoire sont des congés accordés en contrepartie d'heures supplémentaires ou de travail pendant les jours fériés. Ils peuvent être encaissables. Un employé peut faire une demande de congés compensatoires via les demandes de congés compensatoires.

## 3. Caractéristiques

### 3.1 Congés pré-définis

Si le nombre de congés est pré-défini, définissez simplement le nombre de congés maximum autorisés et les règles d'application.

### 3.2 Congés acquis

Si les congés sont acquis, comme les congés payés par exemple, sélectionnez la règle d'acquisition dans la section correspondante.  
Si vous sélectionnez une période et un arrondi, les congés seront calculés sans tenir compte des présences/absences des employés.  

Certains pays disposent de formules de calcul personnalisés adaptés aux règles locales.  

![congés_acquis.png](/content/rh/leave-type/congés_acquis.png)

### 3.3 France

#### 3.3.1 Congés payés sur jours ouvrables

La formule prend en compte des semaines de 6 jours et divise le nombre de jours travaillés par 24.  
Le nombre de congés annuels est multiplié par la valeur la plus élevée entre le nombre de jours travaillés divisés par 24 ou le nombre de semaines travaillées divisées par 4.  
Si vous sélectionnez cette formule, n'ajoutez pas le samedi ou le dimanche aux jours de congés à la liste de congés associée à votre employé.  

#### 3.3.2 Congés payés sur jours ouvrés

La formule prend en compte des semaines de 5 jours et divise le nombre de jours travaillés par 20.  
Le nombre de congés annuels est multiplié par la valeur la plus élevée entre le nombre de jours travaillés divisés par 20 ou le nombre de semaines travaillées divisées par 4.  
Si vous sélectionnez cette formule, ajoutez le samedi et le dimanche (ou autres jours de week-end) à la liste de congés associée à votre employé.  

### 3.4 Congés encaissables

Si ce type de congés est encaissable par l'employé, cochez la case correspondante et définissez un seuil d'encaissement.  
Le seuil d'encaissement est le nombre de jours que l'employé ne pourra pas encaisser. Il ne pourra encaisser que les jours au delà de ce seuil.  