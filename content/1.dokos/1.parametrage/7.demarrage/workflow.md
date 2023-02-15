---
title: Flux de travail
---

# Flux de travail

Avec les Flux de travail, vous pouvez réécrire comment un processus / flux de travail est approuvé dans DOKOS.

Vous pouvez définir plusieurs niveaux d'approbation pour un flux de travail dans DOKOS. Pour permettre à plusieurs personnes de soumettre plusieurs demandes, pour des approbations par plusieurs utilisateurs, DOKOS vous demande de remplir les conditions du flux de travail. DOKOS suit les multiples autorisations avant la soumission.

Un exemple de Flux de travail de demande de congé est donné ci-dessous :

Ceci est un exemple d'approbation à deux niveaux avec annulation. Si un utilisateur demande un congé, sa demande sera envoyée au service des ressources humaines. Le service des ressources humaines (utilisateur des ressources humaines) rejettera ou approuvera cette demande. En conséquence, l'utilisateur obtiendra son statut Approuvé ou Rejeté.

---

Pour accéder à **la liste de flux de travail** et des **règles de transition**, allez sur :

> Accueil > Paramètres > **Flux de travail**

Une fois qu'un flux de travail est créé, vous pouvez effectuer des actions sur celui-ci via les actions de flux de travail.

![liste_flux_de_travail.png](/setup/workflows/liste_flux_de_travail.png)

## 1. Prérequis avant utilisation

Avant de créer un Flux de travail, il est conseillé de les créer d'abord:

- États de flux de travail tels que Approuvé, Annulé, etc.

## 2. Comment créer un flux de travail

### 2.1 Ajouter un nouveau flux de travail

1. Accédez à la liste de Flux de travail, cliquez sur **:heavy_plus_sign: Ajouter Flux de travail**.
2. Entrez un **nom** pour le Flux de travail et sélectionnez le Document Type sur lequel appliquer.
3. Entrez les différents états du Flux de travail. Entrez le statut du document pour eux, sélectionnez le champ à mettre à jour dans la colonne Champ de mise à jour, entrez la valeur à mettre à jour sous Mettre à jour la valeur.

![créer_un_flux_de_travail.png](/setup/workflows/créer_un_flux_de_travail.png)

Les états du Flux de travail peuvent avoir des couleurs différentes selon l'état. Par exemple: vert pour le succès. 

Les différents États de document : 
- En attente = 0
- Approuvé = 1
- Annulé = 2
- Rejeté = 0.

Par exemple, un employé demande une demande de congé pour une période. Le document sera enregistré.

![etat_flux_de_travail.png](/setup/workflows/etat_flux_de_travail.png)

Le champ que vous sélectionnez sous Champ de mise à jour sera mis à jour pour le type de document lorsque l'état change. La valeur de mise à jour est le texte qui apparaît sur le champ sélectionné dans le champ de mise à jour. Donc, ici, le champ d'état est mis à jour en Appliqué, Approuvé, etc.

4. Entrez les règles de transition.

Indiquez les actions qu'un approbateur peut entreprendre sur la demande de congé. L'état suivant est l'état dans lequel se trouve le type de document lorsque l'action est appliquée. Donc, ici, l'état passe de Appliqué à Approuvé par HR lorsque l'action Approuver est exécutée sur celui-ci.

![règle_de_transition_flux_de_travail.png](/setup/workflows/règle_de_transition_flux_de_travail.png)

5. Sous Champ d'état du flux de travail, entrez un nom pour le champ personnalisé qui sera ajouté au document type, quittez l'application dans ce cas.

6. Lors de l'enregistrement, le champ personnalisé sera créé dans le document type.

### 2.2 Points à noter lors de la création d'un Flux de travail

- La création d'un flux de travail dans DOKOS remplace essentiellement le flux de travail normal Enregistrer et soumettre. Ainsi, le document fonctionnera en fonction de votre flux de travail et non en fonction du flux de travail de code prédéfini. Par conséquent, il se peut qu'il n'y ait pas de bouton / option Soumettre si vous ne l'avez pas spécifié dans le flux de travail que vous créez.

- Si vous n'appliquez pas de flux de travail à un document et que ce document peut être soumis, alors il a le flux de travail par défaut avec les états: Brouillon - Soumis - Annulé. Si vous appliquez un flux de travail à un document à soumettre, ces états par défaut doivent être gérés par l'utilisateur.

- Un document ne peut être annulé que s'il est soumis.

- Si vous souhaitez donner la possibilité d'annuler, vous devrez écrire une étape de transition de flux de travail indiquant que vous pouvez annuler à partir de la soumission.

- Si les champs de la colonne Mettre à jour le champ ne sont pas mis à jour, un nouveau champ personnalisé sera créé avec le nom que vous avez défini dans le champ **Champ d'état du flux de travail**.

### 2.3 Autres options pour un flux de travail

- **Est actif** : en cochant cette case, tous les autres flux de travail pour le DocType sélectionné deviennent inactifs.
- **Ne pas remplacer le statut** : le statut de ce flux de travail ne remplacera pas le statut du document (Quitter l'application) dans la vue de liste.
- **Envoyer des alertes par e-mail** : des e-mails seront envoyés à l'utilisateur avec les prochaines actions de workflow possibles.

## 3. Caractéristiques

### 3.1 Activer / Désactiver l'état facultatif du flux de travail

Dans les États, l'état de flux de travail facultatif signifie que l'état peut ne pas faire partie de l'approbation finale.

Par exemple, des états comme Annulé ou Rejeté peuvent être facultatifs.

::alert{type=warning}
Remarque : les actions de workflow ne sont pas créées pour les états facultatifs.
::

### 3.2 Conditions

Vous pouvez également ajouter une condition pour que la transition soit applicable. Par exemple, dans ce cas, si quelqu'un demande un congé de plus de 5 jours, un rôle particulier doit approuver. Pour que cela se produise dans la transition particulière, vous pouvez définir une propriété pour Condition sous Approuvé par les RH comme :

```
doc.total_leave_days <= 5
```

Ensuite, si quelqu'un a demandé un congé de moins de 5 jours, seule cette transition particulière s'appliquera. Voici total_leave_daysle nom de champ du champ «Nombre total de jours de congé» de demande de congé. Pour voir le nom de champ d'un champ, allez dans Menu> Personnaliser.

Sur DOKOS vous pouvez utiliser date / heure, session, obtenir une valeur et obtenir des fonctions de liste dans vos expressions de condition.

**Fonctions autorisées :**

- frappe.db.get_value
- frappe.db.get_list
- frappe.session
- frappe.utils.now_datetime
- frappe.utils.get_datetime
- frappe.utils.add à ce jour
- frappe.utils.now

Exemples:

Cela peut être étendu à n'importe quelle propriété du document.

```
doc.creation > frappe.utils.add_to_date(frappe.utils.now_datetime(), days=-5, as_string=True, as_datetime=True) 
```

## 4. Exemple de processus de demande de congé

Lorsqu'une demande de congé est enregistrée par l'employé, le statut du document passe à **Appliqué**.

Lorsque l'utilisateur RH se connecte, il peut approuver ou rejeter. S'il est approuvé, le statut du document passe à **Approuvé**













