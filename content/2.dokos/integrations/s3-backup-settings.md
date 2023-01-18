---
title: Paramètres de sauvegarde S3
description: 
published: true
date: 2021-10-26T13:28:12.436Z
tags: 
editor: markdown
dateCreated: 2021-10-26T11:21:16.314Z
---

# Paramètres de sauvegarde S3 - Amazon S3

Amazon S3 est le service de stockage principal d’Amazon Web Services. Il permet de stocker une quantité « virtuellement » illimitée de données avec une très haute disponibilité.

La grande particularité d’Amazon S3 réside dans le stockage en mode objet : contrairement au stockage en mode block ou file storage, un objet dans Amazon S3 est composé de data et de metadata, et répond à une API REST

## 1. Télécharger des sauvegardes sur Amazon S3

**Conditions préalables**
- Compte email

Pour recevoir des e-mails pour les sauvegardes échouées et réussies, veuillez d'abord créer un compte de messagerie.

### 1.1 Créer un compartiment S3 et configurer l'accès 

1. Créez un nouveau compartiment s3.

Dans les paramètres du bucket, activez **Bloquer tous les accès publics**  pour garder vos données privées. N'hésitez pas à activer le chiffrement, la gestion des versions ou le verrouillage d'objet selon vos besoins (veuillez vous référer à la documentation d' Amazon ).

2. Ouvrez la gestion des identités et des accès (IAM).

	- Créez une nouvelle politique pour le Service "S3", autorisant les Actions "ListBucket" et "PutObject".
	- Créez un nouvel utilisateur pour l'accès par programmation.
  
  ![s3_backup_add_user.png](/content/integrations/s3-backup-settings/s3_backup_add_user.png)
  
- Attachez la stratégie que vous avez créée au nouvel utilisateur.
	- Copiez la clé d'accès et le secret de l'utilisateur.
	
Pour supprimer automatiquement les anciennes sauvegardes ou les déplacer vers une classe de stockage moins chère, jetez un œil à la gestion du cycle de vie.

## 2. Configurer la sauvergarde S3 sur Dokos

Pour accéder aux **paramètres de sauvergade S3**, allez sur :

> Accueil > Intégration > Sauvegarde > **Paramètres de sauvegarde S3**

1. Allez dans les **paramètres de sauvegarde S3**.
2. Cochez la case **Activer la sauvegarde automatique**.
3. **Collez l'ID de Clé d'Accès** et la **Clé secrète d'accès**.
4. Définissez une adresse e-mail pour recevoir une notification lorsqu'une sauvegarde échoue. Si vous souhaitez également recevoir un e-mail pour des sauvegardes réussies, activez "Envoyer un e-mail pour une sauvegarde réussie".
5. Spécifiez le nom du bucket que vous avez créé à l'étape 1.
6. Choisissez la fréquence à laquelle vous souhaitez effectuer et télécharger des sauvegardes. Cela peut aller du mensuel au quotidien. Si vous souhaitez uniquement effectuer des sauvegardes manuelles, définissez la fréquence sur "Aucun".