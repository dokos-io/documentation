---
title: Nomenclature
---

# Nomenclature

Une **nomenclature** est une liste d'articles et de sous-ensembles avec les quantités requises pour produire un article.

Une nomenclature peut également contenir les opérations de production nécessaires à la conception de l'article.

**Une nomenclature - Liste de matériel (LDM)** est au cœur du système de production et le document le plus important qui aidera à créer d' autres types de documents tels que les bons de travail et cartes de travail. DOKOS prend en charge la nomenclature à plusieurs niveaux. Pour en savoir plus, visitez cette page.

La nomenclature est une liste de tous les matériaux (achetés ou produits) et des opérations qui entrent dans la production d'un produit fini ou d'un sous-ensemble. Dans DOKOS, chaque article (sous-assemblage) peut avoir sa propre nomenclature, formant ainsi une arborescence d'articles à plusieurs niveaux.

---

Pour effectuer des demandes d'achat précises, vous devez toujours gérer des nomenclatures correctes.

Pour accéder à la liste de nomenclatures, accédez à:

> Accueil > Production > Liste de matériaux > **Liste de matériaux**

::alert{type=warning}
Notez qu'une fois qu'une nomenclature est soumise, elle ne peut pas être modifiée. Vous ne pouvez annuler que l'existant, le dupliquer et en soumettre un autre. Une nomenclature est également liée à plusieurs emplacements dans le module de fabrication, de sorte que sa modification peut être longue et fastidieuse. Il est donc recommandé de bien réfléchir et de remplir les nomenclatures avant de les soumettre.
::

## 1. Prérequis avant utilisation

Avant de créer et d'utiliser une nomenclature, il est conseillé de créer d'abord les éléments suivants:

- **[Article](/fr/stocks/item)**
- **[Opération](/fr/manufacturing/operation)**
- **[Station de travail](/fr/manufacturing/workstation)**
- **[Routage](/fr/manufacturing/routing)**

## 2. Comment créer une nomenclature

1. Accédez à la liste des nomenclatures, cliquez sur **:heavy_plus_sign: Ajouter Nomenclature**.
2. Sélectionnez l'article à produire. Le nom de l'article, l'unité de mesure, la société et la devise seront récupérés automatiquement.
3. Entrez la quantité de l'article qui sera fabriqué à partir de cette nomenclature.
4. Sous la table Articles, sélectionnez les matières premières (articles) nécessaires à la fabrication de l'article. Puis passez à : 

	- Sélectionnez la quantité de matière première utilisée.
	- Définissez ici une opération d'élément à récupérer ultérieurement dans les bons de travail.
	- Si cet article est un sous-assemblage, la nomenclature par défaut correspondant sera récupérée.
	- Sélectionnez l'entrepôt source pour suivre l'inventaire.
	- Entrez le pourcentage de rebut qui restera après l'utilisation de cette matière première.
  
5. Dans la section Rebut, sélectionnez l'article de rebut qui sera créé lors de la fabrication et sa quantité. L'élément de rebut peut également avoir un tarif s'il s'agit d'un sous-produit et non d'un déchet. Ignorez cette section si 100% des matières premières sont entièrement utilisées.
6. **Enregistrer** et **envoyer**.

Dans le tableau Articles, vous verrez une option **Inclure l'article dans la production**. Les matières premières doivent avoir cette case à cocher. Si vous devez inclure dans la nomenclature des opérations ou des services qui ne sont pas nécessairement un article utilisé pour la production, décochez cette case. Par exemple, le traitement du plastique avec un produit chimique implique un certain coût, mais ce n'est pas un article et le coût doit être suivi.

### 2.1 Options supplémentaires lors de la création d'une nomenclature 

- **Est actif** : un article peut également être fabriqué à l'aide d'un autre ensemble de matériaux / opérations. Dans ce cas, décochez cette case pour désactiver cette nomenclature et en utiliser une autre.
- **Est par défaut** : cette nomenclature sera sélectionnée par défaut dans les bons de travail, etc. lorsque l'article sera sélectionné.
- **Inspection requise** : Cela rendra «l'inspection de la qualité» obligatoire pour les matières premières et les produits finis. Sélectionnez le modèle d'inspection de la qualité après avoir coché cette case.
- **Autoriser un article alternatif** : Parfois, lors de la fabrication d'un produit fini, des matériaux spécifiques peuvent ne pas être disponibles. Si vous cochez cette case, vous pouvez créer et sélectionner un article alternatif dans la liste Alternative d'article. Par exemple, utiliser des perles en plastique au lieu de cristaux en plastique. Pour plus de détails, visitez cette page .
- **Autoriser le même article plusieurs fois** : dans certains cas de fabrication, le même article doit être ajouté deux fois. Par exemple, deux tuyaux métalliques de 0,5 m chacun pour former une autre forme. Ici, la quantité ne peut pas être simplement définie sur 2 et être effectuée car l'UoM affichera 1 m comme total, mais nous avons besoin de 0,5 m + 0,5 m sous la forme de deux tuyaux pour la production. Cocher cette case vous permet de sélectionner le même élément plusieurs fois.
- **Définir le taux de l'article de sous-assemblage en fonction de la nomenclatur**e : L'activation de cette case à cocher définit le taux des articles de sous-assemblage en fonction de leur nomenclature. Si elle n'est pas cochée, le taux sera extrait du taux de valorisation de l'article de sous-assemblage.
- **Taux de matières basé sur** : Le taux de matières premières utilisées peut être calculé en fonction de différents paramètres.
	-	**Taux de valorisation** : le taux de valorisation défini dans la fiche article .
	- **Dernier taux d'achat** : Le taux est extrait de la dernière commande client / facture .
	- **Liste de prix** : le tarif sera extrait du prix de l' article . Pour plus de détails, visitez cette page.

## 3. Caractéristiques

### 3.1 Devise et liste de prix 

Vous pouvez définir la devise dans laquelle la nomenclature doit être envoyée. Vous pourrez définir sur quelle option est basée le Prix des matériaux, sur Taux de valorisation, Dernier prix d'achat ou Liste de prix.

### 3.2 Nomenclature avec opérations

Pour ajouter des opérations, cochez la case **Avec opérations**.

Maintenant, une table d'opérations peut être vue. Cette option est utile pour suivre le coût de diverses opérations effectuées pour produire l' article. Les opérations peuvent être ajoutées facilement en définissant un modèle avec le maître de routage.

1. Dans le tableau **Opérations**, ajoutez les opérations qui doivent être effectuées pour produire cet article particulier.
2. Pour chaque opération, il vous sera demandé de saisir un poste de travail sur lequel l'opération sera effectuée. Un poste de travail par défaut peut être défini à partir du document Opération.
3. Entrez le taux horaire de fonctionnement, la durée de fonctionnement en minutes et la taille du lot créé avec l'opération. Le coût d'exploitation sera calculé en fonction de ces valeurs.

::alert{type=warning}
**Remarque** : Les postes de travail sont définis uniquement à des fins de planification des coûts de produit et des opérations de bon de travail, sans suivi des stocks. Les stocks sont suivis dans les magasins définis dans la table Articles de la nomenclature.
::

Transférer l'article par rapport à doit être défini pour une nomenclature avec opérations. Les matériaux peuvent être transférés par rapport à un ordre de travail en vrac ou des cartes de travail individuelles. 

Le fait de changer cela affecte le fait que le **transfert de matériel pour la production** soit effectué par rapport à l'ordre de travail en une fois ou plusieurs fois par rapport aux fiches de travail individuelles. 

La définition de cette option dépend de facteurs tels que le temps nécessaire à la fabrication de l'article, la valeur des articles fabriqués, le nombre de pièces utilisées dans la fabrication, la compétence de votre main-d'œuvre impliquée, etc.

### 3.3 Coût de la nomenclature

La section Coût dans une nomenclature donne un coût approximatif de production de l'article.

Le CCR est calculé à partir du taux de valorisation des matières premières / sous-ensembles concernés et des coûts d'exploitation.

Si la nomenclature a été soumise alors que les coûts des articles / opérations n'ont pas été mis à jour, vous pouvez mettre à jour les coûts à l'aide du bouton Mettre à jour le coût . Cela récupérera le dernier prix / coûts.

Le coût de la nomenclature peut également être configuré pour être mis à jour automatiquement via les paramètres de production, option **Mettre à jour automatiquement le coût de la nomenclature**.

### 3.4 Matériel requis (éclaté)

Ce tableau répertorie toutes les matières premières nécessaires à la fabrication d'un article. Il récupère également les matières premières des sous-ensembles ainsi que les quantités. Le tableau non éclaté ne listera pas les matières premières nécessaires à la réalisation des sous-ensembles.

### 3.5 Projet et site Web

La nomenclature peut être liée à un projet pour suivre l'avancement, le coût du projet, etc. En cas d'ingénieur à la commande, chaque commande pourrait être un projet et les sous-ensembles seraient des tâches . L'achèvement peut être suivi en établissant un lien vers un projet dans ce cas.

La nomenclature peut également être affichée sur le site Web des produits matériels Open Source. Le matériel open-source est similaire à l'open-source où les spécifications du produit sont répertoriées publiquement.

### 3.6 Modèle de nomenclature

Avec le modèle de nomenclature, vous pouvez créer des nomenclatures pour les articles de modèle (par rapport auxquels vous créez des articles de variante). Ces nomenclatures peuvent être utilisées comme nomenclature par défaut lors de la création d'ordres de travail par rapport aux variantes de l'article modèle. Vous pouvez également ajouter les articles modèles en tant que matières premières dans la nomenclature modèle. Lors de la création de l'ordre de travail à partir du modèle de nomenclature, ERPNext donne la possibilité de sélectionner la variante d'article par rapport au modèle d'article, pour plus de détails, consultez la capture d'écran suivante.

L'utilisateur peut également créer la nomenclature du poste de variante à l'aide du modèle de nomenclature. 

**Pour créer la variante de nomenclature** : 

1. Accédez au modèle de nomenclature. 
2. Cliquez sur le bouton Créer. 
3. Cliquez sur Variante Nomenclature. 
4. Sélectionnez l'article de variante pour lequel vous souhaitez créer la nomenclature. 
5. Si les matières premières de la nomenclature sont un modèle d'article, le système prévoit la sélection de la variante d'article.

### 3.7 Après l'enregistrement

Une fois la nomenclature soumise, les types de document suivants peuvent être créés par rapport à la nomenclature à partir du tableau de bord:

# Outil de mise à jour de la nomenclature

Pour accéder à l'**outil de mise à jour de nomenclature**, allez sur :

> Accueil > Production > Outils > **Outil de mise à jour de nomenclature**

## 1. Comment utiliser l'outil de mise à jour de la nomenclature

Considérons un scénario pour mieux comprendre cela.

Supposons qu'une entreprise **produit des ordinateurs**, la nomenclature de l'ordinateur ressemblera à ceci :

1. Écran
2. Clavier
3. Souris
4. Processeur central (CPU)

Parmi tous les éléments ci-dessus, le processeur est assemblé séparément. Par conséquent, une nomenclature distincte sera créée pour la CPU. Voici les éléments de la nomenclature de la CPU.

1. Disque dur de 250 Go
2. Carte mère
3. Processeur
4. SMTP
5. Cecteur de DVD

Si d'autres articles doivent être ajoutés ou des articles existants doivent être modifiés dans la nomenclature de la CPU, créez une nouvelle nomenclature pour celle-ci.

1. Disque dur de 950 Go (Remplacement du disque dure de 250 go)
2. Carte mère
3. Processeur
4. SMTP
5. Lecteur de DVD

Sélectionnez la nomenclature actuelle et la nouvelle nomenclature de l'article de sous-assemblage :

Pour mettre à jour la nouvelle nomenclature dans toutes les nomenclatures parent, où l'UC est sélectionnée comme sous-assemblage, vous pouvez utiliser le bouton Remplacer .

En cliquant sur le bouton Remplacer, l'ancienne nomenclature du processeur sera remplacée par la nouvelle nomenclature dans la nomenclature de l'article fini (ordinateur).

L'outil de remplacement de nomenclature fonctionnera-t-il pour remplacer les articles éclatés dans la nomenclature parent?

Non, les articles éclatés qui n'ont pas de nomenclature propre ne peuvent pas être remplacés dans la nomenclature parent. Par exemple, considérez si le moniteur d'élément n'a pas de sous-assemblage et qu'il ne peut pas être mis à jour à l'aide de cet outil. Pour mettre à jour les articles éclatés, vous devez annuler et modifier la nomenclature actuelle ou créer une nouvelle nomenclature pour l'article fini.

## 2. Mettre à jour le coût de la nomenclature

En utilisant le bouton Mettre à jour le dernier prix dans toutes les nomenclatures , vous pouvez mettre à jour le coût de toutes les nomenclatures , en fonction du dernier prix d'achat / tarif tarifaire / taux de valorisation des matières premières. Ceci est utile si votre nomenclature mise à jour contient des articles avec des taux différents.

En cliquant sur ce bouton, le système créera un processus d'arrière-plan pour mettre à jour tous les coûts de la nomenclature. Il est traité via des travaux en arrière-plan car ce processus peut prendre quelques minutes (selon le nombre de nomenclatures) pour mettre à jour toutes les nomenclatures.

Cette fonctionnalité peut également être exécutée automatiquement quotidiennement. Pour cela, vous devez activer «Mettre à jour automatiquement le coût de la nomenclature» dans les paramètres de fabrication.