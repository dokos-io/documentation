---
title: Modèle de taxes et frais d'achat
description: 
published: true
date: 2022-10-27T15:52:48.035Z
tags: 
editor: markdown
dateCreated: 2021-05-05T10:26:20.269Z
---

# Modèle de taxes et frais d'achat

Les **taxes et frais d'achat** peuvent être appliqués à tout article que vous achetez.

Le modèle des taxes et frais d'achat est similaire au modèle des taxes et frais de vente. Les modèles créés à partir de ce formulaire peuvent être utilisés dans les bons de commande et les factures d'achat pour les enregistrements internes.

Pour les comptes fiscaux que vous souhaitez utiliser dans les modèles de taxes, vous devez définir le champ Type de compte sur «Taxe» pour ce compte particulier.

---

Pour accéder au modèle de **taxes et frais d'achat**, allez sur :

> Accueil > Achats > Paramètres > **Modèle de taxes et frais d'achat**

## 1. Comment ajouter des taxes / frais d'achat via un modèle 
Avant de créer un nouveau modèle, notez que des modèles sont déjà créés pour de nombreuses taxes couramment utilisées.

- Cliquez sur **:heavy_plus_sign:Ajouter Modèle de Taxe et frais d'achat**.
- Entrez un **nom de titre** pour la taxe.
- Sous type, définissez ce que la taxe sera calculée et le taux de taxe. Il existe cinq options sous type pour lesquelles la taxe sera calculée.
	1. **Réel** : Sur le montant réel de chaque article.
	2. **Sur total net** : sur le total général de tous les éléments.
	3. **Sur le montant de la ligne précédente** : Ceci sert à composer les frais. Par exemple, les frais de cessation dépassent le montant auquel la taxe était déjà appliquée à la ligne précédente.
	4. **Sur le total de la ligne précédente** : comme ci-dessus, mais appliqué sur la facture totale et pas seulement sur le montant d'un article.
- Sélectionnez un chef de compte qui a des taux d'imposition prédéfinis ou créez le vôtre.
- La sélection par défaut appliquera ce modèle par défaut aux nouvelles transactions d'achat.
- **Enregistrer**.

![créer_-_taxes_et_frais_d'achat.png](/buying/purchase-taxes-and-charges-template/créer_-_taxes_et_frais_d'achat.png)

## 2. Caractéristiques

### 2.1 Tableau des taxes et frais d'achat 

- **Tenez compte des taxes ou des frais pour** : Total - pour le total de tous les articles. Évaluation - pour chaque article. Évaluation et total - appliquer les taxes / frais aux deux. Consultez cet article pour connaître la différence.
- **Ajouter ou déduire** : si vous souhaitez ajouter ou déduire la taxe de l'article.

- **Numéro de ligne de référence** : Si la taxe est basée sur le **Total de la ligne précédente**, vous pouvez sélectionner le numéro de ligne qui sera pris comme base pour ce calcul (la valeur par défaut est la ligne précédente).


- **Cette taxe est-elle incluse dans le tarif de base ?**: Si coché, le montant de la taxe sera considéré comme déjà inclus dans le taux d'impression / montant d'impression.

- **Responsable du compte** : Le grand livre du compte sous lequel cette taxe sera comptabilisée. Si vous sélectionnez TVA ou toute autre tête prédéfinie, le taux sera automatiquement rempli.
- **Centre de coûts** : si la taxe / charge est un revenu (comme l'expédition) ou une dépense, elle doit être comptabilisée auprès d'un centre de coûts.
- **Description**: Description de la taxe (qui sera imprimée dans les factures / devis).
- **Taux** : Le taux de la taxe, par exemple : 20 = 20% de taxe.
- **Montant** : le montant de la taxe à appliquer, par exemple: 100,00 = 100 € de taxe.

