---
title: Utilisateur limité
description: 
published: true
date: 2021-05-12T08:21:22.740Z
tags: 
editor: markdown
dateCreated: 2021-05-12T08:21:22.740Z
---

# Utilisateur limité
**L'utilisateur aura un accès limité au système.**

Les utilisateurs limités peuvent accéder uniquement aux documents spécifiques des modules spécifiques. Certains utilisateurs n'utilisent pas tous les modules et n'ont besoin que de modules spécifiques. Par exemple, dans l'entreprise, pour enregistrer la demande de présence quotidienne ou de congé, chaque employé a eu accès au système requis. Mais supposons que 500 personnes travaillent dans l'entreprise, dont seulement 100 utilisent tous les documents et les 400 autres n'ont besoin que de documents pour les demandes de présence ou de congé quotidiennes. Ces utilisateurs sont des utilisateurs limités.

Le document Type d'utilisateur joue un rôle important pour gérer ce cas d'utilisation. Il existe des types d'utilisateurs par défaut, **utilisateur système** et **utilisateur du site Web**, l'utilisateur système peut accéder au bureau et au portail du site Web, tandis que l'utilisateur du site Web ne peut accéder qu'au portail du site Web. Pour gérer le cas d'accès limité aux documents pour les employés par défaut, DOKOS a ajouté un nouveau type d'utilisateur

---

## 1. Type d'utilisateur

Pour accéder au document **Type d'utilisateur**, allez sur :

> Utilisateurs > **Type d'utilisateur**

![type_d'utilisateur.png](/setup/user-permissions/type_d'utilisateur.png)

**L'utilisateur du site Web** et l'**utilisateur du système** seront des types d'utilisateurs standard et ceux-ci ne peuvent être ni supprimés ni modifiés. Cependant, les types d'utilisateurs non standard (personnalisés) peuvent être supprimés, créés, modifiés. Par défaut, les droits de suppression ne sont accordés à aucun utilisateur.

## 2. Type d'utilisateur standard 

### 2.1 Pour le type d'utilisateur non standard

L'utilisateur doit sélectionner le rôle personnalisé, le document sur lequel il souhaite appliquer l'autorisation de l'utilisateur et le nom de champ de l'utilisateur.

Dans l'image ci-dessus, l'employé a le champ de lien ID utilisateur qui est lié au document utilisateur. Étant donné que "Appliquer l'autorisation utilisateur sur" a été défini comme "Employé", l'utilisateur de l'employé concerné ne peut afficher que les documents dans lesquels le champ Employé respectif est lié. Par exemple, l'employé ne peut consulter que la fiche de salaire qui a été créée avec son identifiant d'employé.

![types_de_doc_et_autorisation.png](/setup/user-permissions/types_de_doc_et_autorisation.png)

#### 2.1.1 Types de documents

Les utilisateurs de type utilisateur non standard ne peuvent accéder qu'aux documents qui ont été mentionnés dans le type d'utilisateur.

Le tableau ci-dessus agit également en tant que gestionnaire des autorisations de rôle pour ce type d'utilisateur particulier (Employee Self Service dans notre cas). Employee Self Service en tant que rôle ne sera pas accessible dans le gestionnaire d'autorisations de rôle général.

![types_de_document.png](/setup/user-permissions/types_de_document.png)

#### 2.1.2 Types de documents (sélectionnez les autorisations uniquement)

Dans ce tableau, vous devez répertorier tous les doctypes auxquels vous voulez que l'utilisateur du libre-service employé ait un accès. Il n'y a pas de limite au nombre de doctypes que vous pouvez ajouter ici. Les utilisateurs ne seront pas en mesure de créer les enregistrements pour les documents auxquels ils ont accès à une autorisation de sélection.

![modules_autorisés.png](/setup/user-permissions/modules_autorisés.png)

## 3. Ajout d'un utilisateur non standard

Lors de l'ajout du nouvel utilisateur, l'utilisateur doit sélectionner le type d'utilisateur. Dans le cas d'un type d'utilisateur non standard, l'utilisateur concerné doit être lié au document qui a été défini dans le champ "Appliquer l'autorisation utilisateur sur".















