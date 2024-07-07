---
title: Gestion des plans de dotation et des demandes de création de poste
description: Ces deux fonctionnalités permettent de planifier efficacement les besoins en personnel, d'optimiser l es coûts, de structurer le processus de recrutement et de garantir que les ressources humaines sont alignées avec les objectifs stratégiques de l'entreprise.
---

Plan de dotation

Un plan de dotation dans Dokos est un outil de gestion des ressources humaines qui permet de planifier, suivre et gérer les besoins en personnel. Il aide à identifier les postes à pourvoir et à anticiper les besoins futurs en personnel.

Prérequis

- Avoir défini des départements
- Avoir défini des postes

Le plan de dotation permet de :

- **Anticiper les besoins en personnel** : En identifiant à l'avance les postes qui devront être pourvus, le plan de dotation aide à éviter le manque d'employés.
- **Gérer les budgets de recrutement** : En fixant des coûts estimés pour chaque poste et en établissant un budget total, le plan de dotation aide à contrôler les dépenses liées aux recrutements.

Analyse des Besoins en Personnel :

Évaluation des besoins actuels et futurs en personnel en fonction des objectifs de l'entreprise, des projets en cours, et des prévisions de croissance.

Plan de dotation

::tour{demo="Mappemonde" doctype="staffing-plan"}
Créer un plan de dotation dans la démo
::

![Cette image permet de visualiser le formulaire plan de dotation.](/RH1.png)

- **Nom** : Définir un nom clair et compréhensible.
- **Département** : Facultatif, ce champ  permet d'affiner votre plan de dotation en fonction des départements de votre entreprise.
- **Obtenir les demandes d'ouverture de postes** : Permet de récupérer les demandes d'ouverture d'emploi soumises et validées.
- **Postes vacants** : Nombre de postes que vous souhaitez recruter.
- **Coût estimé par poste** : Spécifiez le coût pour l'entreprise par poste.

> Estimation des coûts, y compris les salaires, les avantages sociaux, les coûts de recrutement et les dépenses de formation.

- **Budget total estimé** : Une fois que vous avez saisi le plan de recrutement, le plan de dotation établira le budget total estimé conformément au plan.

Demande d'ouverture de poste

::tour{demo="Mappemonde" doctype="job-requisitionm"}
Créer une demande d'ouverture de poste dans la démo
::

Une demande d'emploi est un **document interne utilisé pour initier le processus d'embauche d'un nouvel employé**. Ce document permet de structurer et de formaliser la demande de création d'un nouveau poste, assurant ainsi que toutes les étapes nécessaires sont suivies et que toutes les informations requises sont collectées. Ces demandes sont ensuite transformées en offres d'emploi ou intégrées dans le budget lors de la création du **plan de dotation**. La demande passe généralement par un processus de validation et d'approbation par les responsables concernés avant de lancer le recrutement, garantissant que le besoin est justifié et budgétisé.

![Cette image de visualiser le formulaire de création d'une demande d'un nouveau poste.](/RH3.png)

1. **Détails du Poste** :

- **Masque de numérotation** : Une référence unique pour identifier la demande
- **Nombre de postes** : Indiquer le nombre de postes à pourvoir.
- **Poste** : Titre du poste.
- **Département** : Département où le poste sera intégré.
- **Statut** : État de la demande (en attente, approuvée, rejetée, etc.).

> Vous avez la possibilité de créer un [**flux de travail**](/dokos/parametrage/demarrage/workflows) pour définir le flux d'approbation de cette demande.

2. **Rémunération attendue** :\* Indique la compensation prévue pour le poste. Généralement, cette valeur est en brut.
3. **Demandé par** : Nom de la personne qui initie la demande d'ouverture de poste.
4. **Échéances** :

- **Date de comptabilisation** : La date à laquelle le poste doit être créé ou la date de début du recrutement.
- **Attendu pour** : Date à laquelle le poste doit être pourvu.

5. **Description du poste** :

- **Description du poste**: Détail de la fiche de poste.
- **Motif de la demande**: Justification de la demande d'ouverture de poste.

![Cette image permet de visualiser le formulaire de demande de création de poste, avec la bannière recommandation.](/RH4.png)

Lorsque la demande est enregistrée (statut en attente ou approuvé), une bannière apparaîtra si une recommandation estt ouverte, permettant de ne pas ouvrir d'offre d'emploi si cette personne convient pour le poste demandé.

![Cette image permet de visualiser le formulaire : Demande d'un nouveau poste.](/RH2.png)

Une fois la demande approuvée, vous pouvez directement créer une offre d'emploi ou associer cette demande à une offre d'emploi déjà créée.
