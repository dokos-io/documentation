---
title: Accord de niveau de service
description: 
published: true
date: 2022-11-02T08:55:12.745Z
tags: 
editor: markdown
dateCreated: 2021-07-24T07:33:00.687Z
---

# Accord de niveau de service

Un accord de niveau de service (ANS) est un contrat entre un fournisseur de services (interne ou externe) et l'utilisateur final sur le niveau de service attendu du fournisseur de services.

Les ANS sont basés sur les résultats, leur objectif est spécifiquement de définir le calendrier dans lequel le Client recevra le service. Les ANS ne définissent pas comment le service lui-même est fourni ou livré.

---

Pour accéder à la **liste des accords de niveau de service**, allez sur :

> Accueil > Support > Accord de niveau de service > **Accord de niveau de service**

## 1. Prérequis avant utilisation

Avant de créer et d'utiliser un accord de niveau de service, il est conseillé de créer/mettre à jour d'abord les éléments suivants :

- **Liste des congés**
- **Activer le suivi de l'accord de niveau de service** dans les paramètres d'assistance

## 2. Comment créer un accord de niveau de service ?

1. Accédez à la liste Accord de niveau service, cliquez sur **:heavy_plus_sign: Ajouter Accord de niveau de service.**
2. Saisissez un **nom** pour le niveau de service.
3. Sélectionnez un **groupe d'employés** qui gérera un niveau de service particulier.
4. Définissez une liste de congés. L'accord de niveau de service ne sera pas appliqué les jours mentionnés dans la liste des jours fériés.
5. La case **Activer** détermine si un accord de niveau de service est activé ou désactivé.
6. Cochez la case **Accord de niveau de service par défaut** appliquera ce ANS à un client s'il n'a pas de ANS particulier qui lui est attribué.
7. **Type d'entité** : les accords de niveau de service peuvent être affectés à un client/groupe de clients/territoire, ce qui vous permet d'appliquer un accord de niveau de service en fonction de ces facteurs.
8. **Entité** : sélectionnez le client/groupe de clients/territoire spécifique.
9. **Date de début/fin** : Définit la validité de l'accord.
10. **Priorités** : vous pouvez définir plusieurs priorités de problème et leur temps de réponse et de résolution (en heures et en minutes).
11. **Priorité par défaut** : priorité par défaut sélectionnée dans le tableau des priorités qui sera appliquée dans l'accord de niveau de service.
12. **Heures d'assistance** : Contient les jours de la semaine pendant lesquels l'assistance est fournie. A une heure de début et une heure de fin de la journée de travail.
13. **Enregistrer**

## 3. Caractéristiques

### 3.1 Entité

Dans cette section, vous allez pouvoir indiquer à quel type d'entité l'ANS sera affecté.

- **Type d'entité** : les accords de niveau de service peuvent être affectés à un client/groupe de clients/territoire, ce qui vous permet d'appliquer un accord de niveau de service en fonction de ces facteurs.
- **Entité** : sélectionnez le client/groupe de clients/territoire spécifique.

### 3.2 Détails de l'accord et mise en attente

Indiquez la date et la date de fin de l'accord de niveau de service.

- **Date de début**
- **Date de fin**

#### Suspendre l'ANS
 
Dokos vous permet de suspendre l'ANS sur les problèmes lorsque vous attendez qu'un événement se produise. Vous pouvez le faire en sélectionnant un état qui est configuré dans ce tableau "Mettre en attente".

- Définissez les statuts sur lesquels vous souhaitez suspendre le SLA dans le document SLA. Vous pouvez également ajouter des statuts personnalisés ici.

- Lorsque le statut est modifié pour l'un des éléments ci-dessus, les champs de résolution et de réponse sont désactivés et les indicateurs du tableau de bord deviennent.

- Lorsque le statut du problème revient à un statut non suspendu (qui n'est pas configuré dans le tableau « Pause SLA On »), le champ Durée totale de blocage sera défini dans votre document de problème.

Le temps de réponse et de résolution sera recalculé en ajoutant le temps d'attente, redémarrant ainsi vos temporisateurs SLA.

### 3.3 Temps de réponse/résolution dans les problèmes

Le temps de réponse à un problème et le temps de résolution seront affichés.

Ces délais sont basés sur les délais définis dans le champ « Priorité » du tableau des priorités du niveau de service.

### 3.4 S'applique aux nouveaux problèmes

Une fois qu'un ANS est enregistré, il sera appliqué aux problèmes soulevés par les clients/territoires selon l'option que vous avez choisie dans **Type d'entité**.

### 3.5 Réinitialisation d'un ANS

Un ANS peut également être réinitialisé pendant le temps défini de l'ANS. Par exemple, si l'ANS est de 3 jours, vous ne pouvez réinitialiser l'ANS que dans les 3 jours suivant la création du problème. Après cela, le niveau de service affichera échoué.