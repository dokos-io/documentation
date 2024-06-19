---
title: Type de quart
---

La section Gestion des quarts de travail des ressources humaines aide votre organisation à gérer les quarts de travail de vos employés.

Pour utiliser un type de quart dans Dokos,

- Configurer un type d'équipe.
- Entrez la demande de décalage.
- Afficher et gérer les affectations de quarts.

---

Pour accéder à **la liste de Type de quart**, allez sur :

> Accueil > Ressources Humaines > Gestion des quarts > **Type de quart**

![liste_type_de_quart.png](/content/rh/shift-type/liste_type_de_quart.png)

## 1. Type de quart

Le document Type d'équipe vous permet de définir les différents types d'équipes dans votre organisation et de configurer la présence automatique pour l'équipe. La présence automatique marque la présence en fonction de « l'enregistrement des employés » pour les employés affectés au quart de travail.

1. Accédez à la liste des types de décalage, cliquez sur **:heavy_plus_sign: Ajouter type de quart**.
2. Entrez le nom, l'**heure de début** et l'**heure de fin**
3. Sélectionnez **la liste de congés**
3. Enregistrer

![créer_type_de_quart.png](/content/rh/shift-type/créer_type_de_quart.png)

## 2. Caractéristiques

En plus de définir les différents quarts de travail dans votre organisation, le document Type de quart comporte également le paramètre de présence automatique. La présence automatique marque la présence des employés affectés à ce quart de travail en fonction des enregistrements du document « Contrôle des employés ». La présence automatique pour tous les enregistrements de type d'équipe est tentée d'être marquée toutes les heures. Vous pouvez également déclencher manuellement la présence automatique pour un seul type d'équipe en appuyant sur le bouton « Marquer la présence » dans le document de type d'équipe.

### 2.1 Heure de début

L'heure de la journée à laquelle commence ce quart de travail. L'heure doit être saisie au format 24H.

### 2.2 Heure de fin

L'heure de la journée à laquelle ce quart se termine. L'heure doit être saisie au format 24H.

::callout{icon="i-heroicons-exclamation-triangle" color="amber"}
**Remarque** : Pour les cas où l'**Heure de fin** est inférieure à l **Heure de début**, le quart de travail est supposé être un quart de nuit qui commence à une date calendaire et se termine à la date calendaire suivante.
::

### 2.3 Liste des congés

Les jours de congés applicables pour ce quart de travail peuvent être sélectionnés ici. Si elle est laissée vide, la liste des congés par défaut de l'employé ou du document de l'entreprise est prise en compte.

### 2.4 Activer l'enregistrment auotmatique des présences 

Vous pouvez utiliser cette option pour activer le marquage de la présence des employés affectés à ce quart de travail en fonction de **Enregistrement des employés**.

### 2.5 Paramètres de présence automatique

Vous pouvez utiliser les paramètres suivants pour configurer la présence automatique selon vos besoins.

#### Déterminer l'enregistrement et le départ

L'enregistrement des employés peut ne pas toujours avoir un type de journal IN/OUT. Pour de tels scénarios, vous pouvez utiliser cette option pour obtenir des résultats appropriés du système de présence automatique.

1. Entrées alternées comme IN et OUT pendant le même quart de travail :
	- La première entrée est considérée comme IN, suivie de l'entrée suivante comme OUT et l'entrée suivante comme IN et ainsi de suite.
2. Strictement basé sur le type de journal dans l'enregistrement des employés :
	- L'enregistrement est déterminé comme IN ou OUT strictement basé sur le **Type de journal** dans l'enregistrement d'enregistrement de l'employé.

#### Calcul des heures de travail basé sur 
Les heures de travail peuvent être calculées soit en incluant les pauses entre les quarts de travail, soit en excluant les pauses.

Cela peut être configuré à l'aide des options suivantes :

1. Premier enregistrement et dernier départ :
	- La sélection de cette option calcule les heures de travail en considérant le premier ENT et le dernier enregistrement de l'employé au cours du quart de travail.
	- Dans le cas où l'ENTRÉE/SORTIE est déterminée en alternant les entrées, le premier enregistrement de l'employé est considéré comme IN et le dernier enregistrement de l'employé est considéré comme OUT aux fins du calcul des heures de travail.
2. Chaque enregistrement et départ valides :
	- La sélection de cette option exclut le temps pendant lequel l'employé est extrait.
	- c'est-à-dire que seul le temps pendant lequel l'employé est enregistré est calculé comme heures de travail.

#### Commencez l'enregistrement avant l'heure de début du quart de travail 
Souvent, les employés s'enregistraient quelques minutes avant l'heure de début du quart de travail. Pour considérer ces enregistrements comme faisant partie du quart de travail lors du calcul de la fréquentation, vous pouvez configurer cette valeur en conséquence.

#### Autoriser le départ après l'heure de fin de quart

Souvent, les employés partaient après l'heure de fin du quart de travail. Pour considérer ces sorties comme faisant partie du quart de travail lors du calcul de la fréquentation, vous pouvez paramétrer cette valeur en conséquence.

#### Seuil d'heures de travail pour une demi-journée

Si le nombre réel d'heures de travail est inférieur à la valeur indiquée dans ce champ, la présence de l'employé est marquée comme « demi-journée ». Si vous ne souhaitez jamais marquer la demi-journée en fonction des heures de travail, vous devez définir cette valeur sur zéro.

#### Seuil d'heures de travail pour les absences

Si le nombre réel d'heures de travail est inférieur à la valeur indiquée dans ce champ, la présence de l'employé est marquée comme « Absent ». Si vous ne souhaitez jamais marquer Absent en fonction des heures de travail, vous devez définir cette valeur sur zéro.

#### Participation au processus après

La date à partir de laquelle la « Présence automatique » doit commencer à marquer la présence. Vous devez définir une date après laquelle vous disposez des enregistrements d'enregistrement des employés pour ce quart de travail.

#### Dernière synchronisation de l'enregistrement

Il s'agit de l'heure jusqu'à laquelle la présence est marquée en fonction des enregistrements d'enregistrement des employés. Vous devez définir une date et une heure jusqu'à laquelle l'enregistrement des employés a été synchronisé. Sinon, un employé pourrait être marqué comme absent en raison de l'absence de registres d'enregistrement.

