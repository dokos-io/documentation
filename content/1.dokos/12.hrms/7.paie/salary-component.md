---
title: Composante salariale
description: 
published: true
date: 2021-06-17T08:53:02.754Z
tags: 
editor: markdown
dateCreated: 2021-06-17T07:58:58.348Z
---

# Composante salariale

Les salaires sont payés par les organisations à leurs employés en échange des services qu'ils rendent. Les différentes composantes qui composent la structure salariale sont appelées composantes salariales.

Le salaire versé aux employés comprend plusieurs éléments différents, tels que le salaire de base, les indemnités, les arriérés, etc. Dokos vous permet de définir ces éléments de salaire et également de spécifier ses différents attributs.

---

Pour accéder à **la liste composante salariale**, allez sur :

> Accueil > Ressources humaines > Paie > **Composante Salaire**

![liste_composant_salariale.png](/content/payroll/liste_composant_salariale.png)

## 1. Comment créer une composante salariale 

1. Accédez à la liste des éléments de salaire, cliquez sur **:heavy_plus_sign: Ajouter Composante salariale**.
2. Entrez son **nom** et son **abréviation**.
3. Indiquez le **type** : Revenus ou déduction
4. Saisissez la **description** de l'élément de salaire (facultatif).
5. Saisissez le nom de l'entreprise et le compte par défaut de la composante salariale dans le tableau Comptes.
6. **Enregistrer**.

![détails_composante_salariale.png](/content/payroll/détails_composante_salariale.png)

## 2. Caractéristiques

### 2.1 Champs supplémentaires

Certains des attributs supplémentaires de la composante salariale qui peuvent être activés à l'aide des cases à cocher sont les suivants :

- **Est payable** : Sélectionnez cette option si la composante salariale est payable.
- **Dépend des jours de paiement** : si cette case est cochée, la composante salariale sera calculée en fonction du nombre de jours ouvrables.
- **La taxe est-elle applicable** : cette case à cocher s'applique aux composants de gain. Cocher cette case permet d'appliquer la taxe sur cette composante salariale.
- **Déduire la totalité de l'impôt à la date de paie sélectionnée** : si cette case est cochée et que la composante est utilisée dans le salaire supplémentaire, le montant d'impôt applicable sur le montant supplémentaire sera déduit le mois de paie spécifique. Si elle n'est pas cochée, la taxe sera répartie sur les mois restants de la période de paie. Par exemple, si un bonus est accordé au cours d'un mois particulier à l'aide d'un salaire supplémentaire, vous pouvez alors déduire le montant total de l'impôt le même mois uniquement.
- **Arrondir à l'entier le plus proche** : Cocher cette case vous permet d'arrondir le montant de cette composante salariale à l'entier le plus proche.
- **Composante statistique** : Si cette option est sélectionnée, la valeur spécifiée ou calculée dans cette composante ne contribuera pas aux gains ou aux déductions. Cependant, sa valeur peut être référencée par d'autres composants qui peuvent être ajoutés ou déduits. Si vous définissez une composante salariale en tant que composante statistique, vous n'avez pas besoin de définir le compte par défaut pour la même chose. De plus, vous ne pourrez pas définir ce composant comme un avantage flexible.
- **Ne pas inclure dans le total** : cochez cette case pour garantir que la composante salariale n'est pas incluse dans le salaire total. Il est utilisé pour définir la composante qui fait partie de la CTC mais qui n'est pas payable (par exemple l'utilisation des voitures de société).
- **Variable basée sur le salaire imposable** : La composante est calculée automatiquement sur le revenu imposable en fonction de la tranche d'impôt sur le revenu applicable (par exemple, TDS ou impôt sur le revenu).
- **Exonéré d'impôt sur le revenu** : Si coché, le montant total sera déduit du revenu imposable avant le calcul de l'impôt sur le revenu sans aucune déclaration ni présentation de justificatif . Par exemple, la taxe professionnelle en Inde est déduite du revenu imposable avant le calcul de l'impôt sur le revenu.
- **Désactivé** : cette case à cocher peut être cochée pour désactiver cette composante salariale. Une composante salariale désactivée ne peut pas être utilisée dans la structure salariale.

![détails_composante_salariale.png](/content/payroll/détails_composante_salariale.png)

### 2.2 Avantages flexibles

Cette section s'affiche si la composante salariale est une composante salariale. Les régimes d'avantages sociaux flexibles permettent aux employés de bénéficier des avantages qu'ils souhaitent ou dont ils ont besoin d'un ensemble de programmes offerts par un employeur. Ils peuvent inclure l'assurance maladie, les régimes de retraite, les frais de téléphone, etc. Pour définir un élément de salaire comme un avantage flexible, cochez la case **Est-ce un avantage flexible**.

Saisissez le montant annuel maximum de cet avantage flexible dans le champ **Montant maximum de l'avantage (annuel)**. Certains des attributs supplémentaires des avantages flexibles qui peuvent être activés à l'aide des cases à cocher sont les suivants :

- **Payer contre demande d'avantages** : cochez cette case si vous souhaitez payer cet avantage via la demande d'avantages sociaux .
- **Impact fiscal uniquement** (ne peut pas réclamer mais une partie du revenu imposable) : si elle est définie, l'avantage flexible fera partie du revenu imposable.
Créer une écriture de paiement distincte pour la demande de prestations : Si cette case est cochée, elle vous permettra de créer une écriture de paiement distincte pour la demande de prestations.

![avantages_sociaux_variables.png](/content/payroll/avantages_sociaux_variables.png)

### 2.3 Comptes

Dans cette section, ajoutez le comptes comptable si nécessaire pour ce composant salarial.

Indiquez la société concernée et le compte comptable.

![compte_composante.png](/content/payroll/compte_composante.png)

### 2.4 Condition et formule

Dans cette section, la condition et la formule requises pour le calcul de la composante salariale peuvent être spécifiées. Pour spécifier la formule, cochez la case **Montant basé sur la formule**.

Dans le cas où la Composante Salaire est basée sur un montant prédéfini, Dokos vous permet de saisir directement le montant dans le champ Montant (désactivez la case à cocher « Montant basé sur la formule »).

::callout{icon="i-heroicons-exclamation-triangle" color="amber"}
**Remarque** : Cette configuration ci-dessus est facultative. Vous pouvez également définir le montant et la formule/condition pour une composante salariale directement dans la structure salariale. S'ils sont spécifiés dans le document de la composante salariale lui-même, les informations seront directement récupérées dans la structure salariale lorsque la composante est sélectionnée.
::

![condition_et_formule.png](/content/payroll/condition_et_formule.png)

