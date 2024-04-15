---
title: Plan de production
---

# Plan de production

Un plan de production aide à la production et à la planification des matériaux pour les articles prévus pour la fabrication. Ces articles de production peuvent être validés via une commande client (aux clients) ou des demandes de matériel (en interne).

Le plan de production aide l'utilisateur à planifier la production par rapport à plusieurs commandes client ou demandes d'articles. En outre, il aide à la planification de l'approvisionnement en matériaux pour l'article de matière première, en fonction de la quantité de produits finis à fabriquer.

---

Pour accéder à la liste des **plans de production**, allez sur :

> Accueil > Production > Production > **Plan de production**

## 1. Prérequis avant utilisation

Avant de créer et d'utiliser un plan de production, il est conseillé de créer d'abord les éléments suivants:

- **[Article](/dokos/parametrage/articles)**
- **[Demande de matériel](/dokos/stocks/demande-materiel)**
- **[Commande client](/dokos/ventes/commande-client)**
- **[Nomenclature](/dokos/production/nomenclature)**
- **[Routage](/dokos/production/routage)**

## 2. Comment créer un plan de production 

Comme mentionné précédemment, un plan de production peut être utilisé pour planifier la production d'articles par rapport aux commandes client ou aux demandes d'articles.

**Les étapes courantes sont :**

1. Allez dans la liste Plan de production, cliquez sur **:heavy_plus_sign: Ajouter Plan de production**.
2. Sélectionnez si vous souhaitez obtenir des articles à partir d'une commande client ou d'une demande d'article.

![détails_plan_de_production.png](/content/manufacturing/production-plan/détails_plan_de_production.png)

Un plan de production peut également être créé manuellement dans lequel vous pouvez sélectionner les articles à fabriquer.

### 2.1 Production contre commandes clients 

1. Sélectionnez l'option en tant que commande client dans la liste déroulante **Obtenir les articles de**. Le système affichera les filtres, à l'aide desquels vous pourrez extraire les commandes client pour la production. Vous n'avez pas besoin d'utiliser tous ces filtres si vous n'avez que quelques commandes client dans une période donnée.
2. Cliquez sur **Obtenir les commandes** pour récupérer les commandes en fonction des filtres ci-dessus.
3. Cliquez sur **Obtenir des articles pour un bon de commande** pour récupérer les articles des bons de commande ci-dessus. Seuls les articles pour lesquels une nomenclature est présente seront récupérés.
4. En développant une ligne dans le tableau Articles à produire, vous verrez une option pour **Inclure les articles éclatés**. Cocher ceci inclut les matières premières des articles de sous-assemblage dans le processus de production.

### 2.2 Production contre demandes de matériel

1. Sélectionnez l'option comme Demande de matériel dans la liste déroulante Obtenir les articles de. Le système affichera les filtres, en utilisant cela nous pouvons extraire les demandes de matériel pour la production.
2. Cliquez sur **Obtenir une demande de matériel** pour récupérer les demandes de matériel en fonction des filtres ci-dessus.
3. Cliquez sur **Obtenir Articles pour l'ordre de travail** pour récupérer les articles des demandes de matériaux ci-dessus.

### 2.3 Planification des demandes de matériel

En cliquant sur le bouton **Obtenir les matières premières pour la production**, vous récupérez les articles de matière première requis dans le tableau Plan de demande de matériel. 

Par exemple, pour produire 200 cannettes en plastique, vous avez besoin de 100 N°de plastique brut, mais vous n'en avez que 20 dans votre entrepôt, puis cliquez sur ce bouton pour ajouter une ligne avec 80 dans la colonne Quantité requise.

Utilisez les cases à cocher suivantes pour effectuer certaines actions :

- **Inclure les articles hors stock** : pour inclure les articles hors stock dans la planification des demandes d'articles. c'est-à-dire les articles pour lesquels la case «Maintenir le stock» est décochée. Reportez-vous à la page Article pour plus de détails.
- **Inclure les articles sous-traités** : pour ajouter les matières premières de l'article sous-traité si inclure les articles éclatés est désactivé.
- **Ignorer la quantité projetée existante** : si cette option est activée, le système créera la demande d'article même si l'utilisateur a déjà commandé ou demandé les articles respectifs. Par exemple, si vous avez besoin de 100 quantité de matière première A et même si vous en avez déjà 150, l'activation de cette case à cocher ajoutera une demande de 100 quantité de cette matière première.
- **Pour l'entrepôt** : l'utilisateur peut définir l'entrepôt pour lequel il souhaite créer la demande d'article. Lors de la création d'entrées de stock pendant le processus de production, le système recherchera le stock de matières premières dans cet entrepôt.
- **Télécharger les matériaux requis** : - Lorsque cette case est cochée, l'utilisateur recevra la feuille Excel avec les matières premières nécessaires pour compléter ce plan de production. L'utilisateur peut sélectionner l'entrepôt pour vérifier la quantité disponible dans l'entrepôt respectif. Si l'utilisateur a laissé vide le champ «Pour l'entrepôt», le système donnera la feuille Excel avec les matières premières et la quantité disponible dans l'entrepôt des matières premières respectives. La feuille Excel ressemblera à :

### 2.4 Après l'enregistrement

Une fois le plan de production soumis, l'utilisateur a la possibilité de faire des bons de travail pour les articles de production et des demandes de matériel pour les matières premières. Les utilisateurs peuvent également définir le statut comme Fermé dans le plan de production.

#### 2.4.1 Clôture d'un plan de production

Il peut y avoir des cas où un plan de production est partiellement terminé et va être interrompu. Cela peut se produire pour des raisons telles que:

L'un des articles a été produit indépendamment en dehors du plan de production.
Une modification des plans s'est produite et les éléments en attente ne seront pas produits.
Dans de tels cas, les utilisateurs peuvent définir le statut du plan de production sur **Clôturé** , afin qu'aucun nouvel ordre de travail ou demande de matériel ne soit créé en regard de celui-ci.

### 2.5 Faire un bon de travail pour les éléments de sous-assemblage

Dans la capture d'écran ci-dessus, l'utilisateur crée d'abord les poils du pinceau à raser, puis crée les produits finis finaux.

Ici, l'utilisateur souhaite créer l'ordre de travail pour les poils du pinceau de rasage, pour ce faire, l'utilisateur doit activer le champ **Créer un ordre de travail pour les éléments de sous-assemblage** dans le plan de production en regard de l'article Pinceau de rasage.

En cliquant sur **Créer un ordre de travail**, le système générera l'ordre de travail pour les articles de sous-assemblage et les articles en bon état finis.