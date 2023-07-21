---
title: Règle d'attribution
---

# Règle d'attribution
Une règle d'attribution vous permet de configurer l'attribution automatique de documents aux utilisateurs.

La règle d'attribution sera utile dans un scénario dans lequel vous avez une équipe de support et des tickets de support entrants. Pour affecter automatiquement les tickets de support parmi les employés qui travaillent sur le support, une règle d'affectation peut être utilisée.

---

Pour accéder à la **règle d'attribution**, allez sur :

> Accueil > Paramètres > **Règle d'attribution**

## 1. Comment créer une règle d'attribution

**Pour configurer une attribution automatique:**

1. Accédez à la **liste des règles d'attribution**, cliquez sur **:heavy_plus_sign: Ajouter Règle d'attribution**.
2. Sélectionnez le **type de document** que vous souhaitez attribuer automatiquement (par exemple Problème ).
3. Écrivez la **description** qui sera ajoutée à la tâche.
4. Sélectionnez la **condition de l'affectation**. Vous pouvez écrire des expressions Python simples pour l'affectation automatique dans les fichiers Assigner une règle, Fermer Règle et Règle de désassignation. Vous aurez accès à toutes les propriétés du document et pourrez utiliser des opérateurs comme>, <, ==, etc. ainsi que plusieurs conditions comme andet or.

![créer_règle_d'attribution.png](/content/setup/workflows/créer_règle_d'attribution.png)

Exemples:

status == "Open"
issue_type == "Technical" and priority=="High" and status == "Open"
5. Sélectionnez la règle d'attribution.

**Round Robin** : attribuez chaque document à un utilisateur dans l'ordre.
Équilibrage de charge : attribuez de nouveaux documents à l'utilisateur qui a le moins d'affectations.

Sélectionnez la liste des utilisateurs auxquels cette règle d'attribution s'appliquera :

![ajouter_utilisateur_-_règle_attribution.png](/content/setup/workflows/ajouter_utilisateur_-_règle_attribution.png)


Basé sur le champ : introduite dans la v13, cette règle peut être utilisée pour attribuer un document à l'utilisateur défini dans le champ configuré.

Sélectionnez le champ Lien utilisateur qui déterminera à qui cette règle d'attribution s'appliquera.

6. **Enregistrer**.

Vous pouvez utiliser les propriétés du document dans le champ Description qui fera partie de l'affectation. Des règles d'attribution de «priorité» plus élevées seront appliquées en premier.

Exemple:

Le téléchargement du fichier de problème de priorité élevée ne fonctionnant pas vous a été attribué.

Vous pouvez également configurer plusieurs attributions automatiques pour chaque type de document, celle avec la priorité la plus élevée sera appliquée en premier:

Voici un exemple de règle d'attribution.

Définissez le type de document, les descriptions et les conditions.

### 1.1 Règles d'attribution multiple

Vous pouvez également configurer plusieurs attributions automatiques pour chaque type de document, celle avec la priorité la plus élevée sera appliquée en premier :

Voici un exemple de règle d'attribution.

Définissez le type de document, les descriptions et les conditions.

### 1.2 Définition de la date d'échéance pour l'attribution

Vous pouvez définir automatiquement des dates d'échéance pour les affectations en fonction du champ de date du document de référence.

**Exemple** :

Si vous souhaitez définir une date d'échéance sur l'affectation du problème en fonction de la date «Résolution par» du problème, vous pouvez le faire en sélectionnant le champ «Résolution par» dans l' Due Date Based Onoption de la règle d'attribution.

### Noter:

L'option "Date d'échéance en fonction du" ne sera pas disponible si "Type de document" n'est pas encore sélectionné ou si le Type de document sélectionné ne comporte aucun champ "Date" ou "Date / heure".
La date d'échéance dans la mission / la tâche sera mise à jour chaque fois que la valeur du champ «Date d'échéance basée sur» est mise à jour dans le document de référence.