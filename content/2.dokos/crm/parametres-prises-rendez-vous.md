---
title: Paramètre de prise de rendez-vous
description: 
published: true
date: 2022-05-03T13:43:20.811Z
tags: 
editor: markdown
dateCreated: 2022-05-03T13:39:36.919Z
---

# Paramètres de prise de rendez-vous

Vous pouvez trouver tous les paramètres liés à la prise de rendez-vous dans les **paramètres de prise de rendez-vous**.

![parametre-rendez-vous.png](/crm/parametre-rendez-vous.png)

## 1. Activer la prise de rendez-vous

Cette case à cocher activera la prise de rendez-vous et activera également la page **/book_appointment** pour les utilisateurs du site Web (vos clients).

## 2. Détails de l'agent

Dans cette section, vous pouvez ajouter des détails sur les agents, tels que leurs heures de travail et leurs jours fériés.

### 2.1 Disponibilité des créneaux

Ici, vous pouvez définir le moment auquel vos agents sont disponibles pour assister à un rendez-vous. Celui-ci est défini par jour de la semaine. 

Chaque ligne représente un bloc de temps continu, vous pouvez avoir plusieurs entrées pour chaque jour de la semaine.

Par exemple si vos agents travaillent du lundi au vendredi, de 9h à 17h mais avec une pause déjeuner à 13h30 pendant une demi-heure. Vous devrez créer deux entrées pour chaque jour. Une de 9h à 13h30 et une autre de 14h à 17h.

### 2.2 Agents

Il s'agit de la liste des agents qui seront automatiquement affectés aux rendez-vous. Le nombre de rendez-vous pouvant exister dans une plage horaire dépend également du nombre d'employés dans cette liste.

### 2.3 Liste des jours fériés

Vous pouvez lier une liste de jours fériés. Si le jour est un jour férié, la prise de rendez-vous ce jour-là ne sera pas autorisée.

## 3. Détails du rendez-vous

Cette section contient des détails sur le rendez-vous eux-mêmes.

### 3.1 Durée du rendez-vous en minutes

La durée du rendez-vous en minutes. Ceci est utilisé pour calculer les plages horaires de rendez-vous pour le portail Web. Changer cela n'affecte pas les rendez-vous créés avant le changement.

### 3.2 Notification par e-mail

L'activation de cette case à cocher enverra un e-mail aux participants des rendez-vous, c'est-à-dire votre employé et le client le jour du rendez-vous. La modification de cette case à cocher n'affecte pas les rendez-vous créés avant la modification.

### 3.3 Le nombre de jours de rendez-vous peut être réservé à l'avance

Il s'agit du nombre de jours pendant lesquels le rendez-vous peut être réservé à l'avance. Si la liste des jours fériés fournie ci-dessus se termine avant la date calculée à l'aide de ce numéro, la prise de rendez-vous sera arrêtée à la fin de la liste des jours fériés.

## 4. Paramètres de réussite

### 4.1 URL de redirection réussie

Il s'agit de l'URL vers laquelle l'utilisateur sera redirigé lors de la création d'un rendez-vous réussi via le portail Web. Cette redirection ne se produira pas lors de la création de rendez-vous à partir de l'interface utilisateur du bureau. Laissez vide pour la maison. Ceci est relatif à l'URL du site, par exemple "about" redirigera vers "https://yoursitename.com/about"