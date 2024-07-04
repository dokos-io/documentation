---
title: Ajouter un champ -- Statut envoi d'email
---

# Suivi envoi d'email

Dans cas d'usage, nous allons voir comment afficher un champ qui va indiquer si un email a été envoyé à votre contact.

#### Explication du Cas :

L'objectif est de savoir si le document a bien été envoyé à votre contact quand vous allez sur un document comme une commande client ou une facture de vente.

Lors de la création d'une commande client :

1. Si vous cochez la case **Envoyé un email automatiquement** 
2. Alors dès que cette case est cochée
3. Et que le document Commande client est **Validé**
4. Un email est envoyé automatiquement.
5. Puis, une fois que l'email est envoyé, le champ **Statut Email** est modifié avec la valeur **Envoyé**

![flux_email.png](/content/use-cases/flux_email.png)


### Étape 1

Pour débuter il faut ajouter des nouveaux champs à votre document. Nous allons ajouter une nouvelle section pour la séparer des autres sections et ajouter deux champs qui seront : 
- **Email envoyé automatiquement** : Avec une case à cocher.
- **Statut Email envoyé** : En choisissant manuellement envoyé ou non envoyé. Et pour automatiser cela, nous allons configurer une automation pour mettre la valeur Envoyé.

### Étape 2

Par la suite, pour automatiser l'action de l'envoi de l'email et du changement de la valeur pour le champ **Statut Email envoyé**, nous allons créer une notification.

![section-email.png](/content/use-cases/section-email.png)

## 1. Ajouter des champs personnalisés

Nous allons ajouter deux champs qui seront utilisés :
- Un champ de saut de section 
- Email envoyé automatiquement : Oui ou non
- Email Statut : Pas envoyé ou Envoyé

### 1.1 Ajouter un premier champ : Email envoyé automatiquement

Tout d'abord, il faut ajouter sur le type de document Commande client / Facture de vente le champ **Envoyé un email automatiquement**.

*Nous allons voir ce cas pour le type de document : Commande client*

1. Allez sur le document **Commande client**
2. Cliquez sur les 3 petits points en haut.
3. Faites **Personnaliser**

![commande-client.png](/content/use-cases/commande-client.png)

*Vous allez arriver sur le document Personnalisation du formulaire pour le document Commande de vente*

4. Allez dans la section Champs, puis en bas faites **Ajouter une ligne**

![ajouter-nouvelle-ligne.png](/content/use-cases/ajouter-nouvelle-ligne.png)

::callout{icon="i-heroicons-exclamation-triangle" color="amber"}
Avant cela, ajoutez un champ **Saut de section**, cela vous permettra d'avoir une section indépendante - Déplacez ce champ à la ligne 17.
::

5. Renseignez la ligne des champs comme suit :
	- Indiquez dans **Libellé** : Envoyé un email automatiquement
	- Indiquez dans **Type** : Vérifier
	- Dans **Nom** : Il sera mis automatiquement à l'enregistrement

6. Faites **Modifier**, tout à droit de la ligne du nouveau champ.
7. Déplacez ce champ où vous souhaitez le faire apparaître dans le document par exemple à la ligne 18.

![deplace.png](/content/use-cases/deplace.png)

### 1.2 Ajouter un second champ : Statut Email

Tout d'abord, il faut ajouter un nouveau champ qui permettra de savoir si l'email a bien été envoyé avec les options (Pas envoyé, Envoyé).

1. Allez dans la section Champs, puis en bas faites **Ajouter une ligne**
2. Renseignez la ligne des champs comme suit :
	- Indiquez dans **Libellé** : Email Statut
	- Indiquez dans **Type** : Sélectionner
	- Dans **Nom** : Il sera mis automatiquement à l'enregistrement
  - Indiquez dans **Option** : Pas envoyé, Envoyé en sautant des lignes pour chaque option.

3. Faites **Modifier**, tout à droit de la ligne du nouveau champ.
4. Dans la section **Autorisation**, coché la case **Autoriser les modifications après validation**

![modification.png](/content/use-cases/modification.png)

5. Déplacez ce champ où vous souhaitez le faire apparaître dans le document par exemple à la ligne 19.

**Voici les champs que vous obtenez à la fin.**
![section.png](/content/use-cases/section.png)

## 2. Créer une notification et modification d'un champ automatiquement

Il faut créer une nouvelle notification qui sera exécutée dès que le champ "**Envoyé un email automatiquement**" est coché sur votre **commande/facture**

Pour ce faire, il faut : 

1. Allez dans le document **Notification**
2. Ajoutez une notification
3. Indiquez un nom d'usage
4. Sélectionnez le canal Email

![detail.png](/content/use-cases/detail.png)  
<br>


### 2.1 Section Filtre

- **Sujet** : Il s'agit du nom de l'objet qui sera envoyé au client
- **Type de document**: Sélectionnez Commande client
- **Envoyer une alerte lors de l'événement** : Valider

<br>
   
  
### 2.2 Section Condition

- **Condition** : Indiquez `doc.{nom_du_champ}`
*Le nom du champ correspond au champ **Email envoyé automatiquement** dans le document Commande client. Cela signifie que si ce champ est coché, alors la notification sera exécutée dès que la cas est coché et à la validation du document*.

![condition.png](/content/use-cases/condition.png)
  <br>


### 2.3 Section Modifier une propriété après la notification

- **Modifier une propriété après la notification** : Sélectionnez le champ **Staut Email**
- **Valeur à définir** : Indiquez **Envoyé**

![modifie_propriete.png](/content/use-cases/modifie_propriete.png)
  <br>

### 2.4 Section Destinataires

- Ajoutez une nouvelle ligne
- Destinataire par champ de document : Sélectionnez **contact_email**

![destinataire.png](/content/use-cases/destinataire.png)
  <br>


### 2.5 Section Message
- Indiquez le contenu de l'email qui sera envoyé au client.
  <br>
  
### 2.6 Impressions
- Joindre une impression de document : Cochez cette case pour que votre document soit envoyé en pièce jointe dans l'email.

**Faites Enregistrer**