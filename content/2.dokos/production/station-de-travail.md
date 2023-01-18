---
title: Station de travail
description: 
published: true
date: 2021-05-31T13:46:23.404Z
tags: 
editor: markdown
dateCreated: 2021-05-31T12:27:52.929Z
---

# Station de travail

Une station de travail stocke des informations concernant l'endroit où les opérations de la station de travail sont effectuées.

Les données concernant le coût de fonctionnement, le loyer, l'électricité peuvent être stockées ici.

::alert{type=warning}
**Remarque** : une opération peut avoir lieu sur plusieurs postes de travail.
::

Une opération a lieu sur une station de travail. 

**L'opération est le travail effectué** et la **station de travail est le lieu** / la **machine** où elle est effectuée. 

Par exemple, la fusion est une opération qui peut être effectuée sur 10 postes de travail différents.

---

Pour accéder à la **liste des stations de travail**, allez sur :

> Accueil > Production > Liste de matériaux > **Station de travail**

![station_de_travail.png](/content/manufacturing/workstation/station_de_travail.png)

## 1. Comment créer un poste de travail

1. Allez dans la liste des stations de travail, cliquez sur **:heavy_plus_sign: Ajouter Station de travail**.
2. Entrez un **nom** pour le station de travail.
3. Sous **Coûts de fonctionnement**, entrez les éléments suivants, le cas échéant :
	- Coût d'électricité
	- Coût du loyer
	- Coût des consommables
	- Les salaires
4. **Enregistrer**.

![détails_station_de_travail.png](/content/manufacturing/workstation/détails_station_de_travail.png)

Vous pouvez éventuellement saisir une description pour la station de travail.

Les heures pendant lesquelles la station de travail sera opérationnel peuvent être ajoutées. Lors de l'ajout d'une liste de jours fériés, les jours indiqués comme jours fériés ne seront pas comptés comme travaillant pour le poste de travail.

Après avoir enregistré le poste de travail, les actions suivantes peuvent être effectuées sur celui-ci :

## 2. Caractéristiques 
### 2.1 Coûts d'exploitation

Les coûts d'exploitation correspondent au nombre total de travaux pouvant être exécutés simultanément sur la station de travail respectif.

Les différents coûts d'exploitation sont : 

- **Coût de l'électricité**
- **Coût des consommables**
- **Coût de la location**
- **Salaires**

![coût_exploitation_.png](/content/manufacturing/workstation/coût_exploitation_.png)

### 2.2 Heures de travail

Sous le tableau Heures de travail, vous pouvez ajouter des heures de début et de fin pour un poste de travail. 

Par exemple, un poste de travail peut être actif de 9 h à 13 h, puis de 14 h à 17 h. Vous pouvez également spécifier les heures de travail en fonction des équipes. Lors de la planification d'un ordre de travail , le système vérifiera la disponibilité du poste de travail en fonction des heures de travail spécifiées.

![heures_de_travail.png](/content/manufacturing/workstation/heures_de_travail.png)

### 2.3 Liste des jours fériés

Une liste de jours fériés peut être ajoutée pour exclure le comptage de ces jours pour le poste de travail.
Remarque: vous pouvez activer les heures supplémentaires pour un poste de travail dans les paramètres de production.

