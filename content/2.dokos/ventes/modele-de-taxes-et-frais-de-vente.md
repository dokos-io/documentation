---
title: Modèle de taxes de vente et frais
description: 
---

# Modèle de taxes de vente et frais
Les taxes et frais de vente peuvent être appliqués à tout article que vous vendez.

Les modèles créés à partir de ce formulaire peuvent être utilisés dans les commandes et les factures de vente.

Pour les comptes comptables que vous souhaitez utiliser dans les modèles de taxes, vous devez définir le champ Type de compte sur «Taxe» pour ce compte particulier. DOKOS configure les taxes via des modèles. D'autres types de frais pouvant s'appliquer à vos factures (comme l'expédition, l'assurance, etc.) peuvent également être configurés en tant que taxes et frais.

---

Pour accéder au modèle de **taxes de vente et frais**, allez sur :

> Accueil > Vente > Paramètres > **Modèle de taxes de vente et frais**

![liste_taxes_et_frais_de_vente.png](/sales/sales-taxes-and-charges-template/liste_taxes_et_frais_de_vente.png)

## 1. Comment ajouter des taxes de vente / frais via un modèle

Avant de créer un nouveau modèle, notez que des modèles sont déjà créés pour de nombreuses taxes couramment utilisées.

1. Accédez à la liste des modèles de taxes de vente et frais, cliquez sur Nouveau.
2. Entrez un nom de titre pour la taxe.
3. Sous type, définissez ce que la taxe sera calculée et le taux de taxe. Il existe cinq options sous type pour lesquelles la taxe sera calculée.
- **Réel** : vous pouvez saisir directement le montant de la dépense.
- **Sur total net** : sur le total net de tous les éléments.
- **Sur le montant de la ligne précédente** : Ceci sert à composer les frais. Par exemple, les frais de cessation dépassent le montant auquel la taxe était déjà appliquée à la ligne précédente.
- **Sur le total de la ligne précédente** : comme ci-dessus, mais appliqué sur la facture totale et pas seulement sur le montant d'un article.
- **Sur la quantité d'article** : la taxe sera calculée en tant que taux de taxe * Quantité d'article. Par exemple, si le taux de taxe est de 2% et le nombre d'articles est de 1, le taux de taxe sera de 4, si le nombre d'articles est de 5, le taux de taxe sera de 10, et ainsi de suite.
4. Sélectionnez un compte qui a un taux d'imposition prédéfini ou créez le vôtre.
5. La sélection par défaut appliquera ce modèle par défaut aux nouvelles transactions de vente.
6. **Enregistrer**.

![création_modèle_de_taxe_vente.png](/sales/sales-taxes-and-charges-template/création_modèle_de_taxe_vente.png)

## 2. Caractéristiques

### 2.1 Tableau des taxes et frais de vente

- **Tenez compte des taxes ou des frais pour** : Total - pour le total de tous les articles. Évaluation - pour chaque article. Évaluation et total - appliquer les taxes / frais aux deux. Consultez cet article pour connaître la différence
- **Numéro de ligne de référence** : Si la taxe est basée sur le "Total de la ligne précédente", vous pouvez sélectionner le numéro de ligne qui sera pris comme base pour ce calcul (la valeur par défaut est la ligne précédente).
- **Cette taxe est-elle incluse dans le total net ?** : Si coché, le montant de la taxe sera considéré comme déjà inclus dans le taux d'impression / montant d'impression dans le tableau Article d'une transaction. Ceci est utile lorsque vous souhaitez donner un prix TTC à vos clients. Pour tenir compte des taux TTC, le système calcule le montant net en déduisant le montant de la taxe à appliquer puis calcule la taxe sur celui-ci.
- **Compte comptable** : Le grand livre du compte sous lequel cette taxe sera comptabilisée. Si vous sélectionnez TVA ou toute autre tête prédéfinie, le taux sera automatiquement rempli.
- **Centre de coûts**: si la taxe / charge est un revenu (comme l'expédition) ou une dépense, elle doit être comptabilisée auprès d'un centre de coûts.
- **Description** : Description de la taxe (qui sera imprimée dans les factures / devis).
- **Taux**: Le taux de la taxe, par exemple: 14 = 14% de taxe.
- **Montant** : le montant de la taxe à appliquer, par exemple: 100,00 = 100€ taxe.

![caractéristiques_taxe_et_frais_de_vente.png](/sales/sales-taxes-and-charges-template/caractéristiques_taxe_et_frais_de_vente.png)

Les taux de taxe que vous définissez dans le modèle sont le taux de taxe standard pour tous les articles. Si certains articles sont supposés avoir des taux différents, vous pouvez remplacer le taux de taxe standard en définissant un modèle de taxe d'article sur l'article ou le groupe d'articles.

