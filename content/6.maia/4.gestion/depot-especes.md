# Dépôt d'espèces

Lorsque votre patiente vous règle en espèces, vous devez indiquer à Maia lorsque vous déposez celles-ci à la banque pour que le logiciel puisse mettre à jour le montant disponible sur votre compte bancaire.

Cette opération est à enregistrer en tant qu'opération diverse.

## Sélection du type d'opération

Allez dans "Comptabilité > Opération diverse" et créez une nouvelle opération de type "Dépôt d'espèces":
![Opération de dépôt d'espèces](/img/accounting/cash_deposit/cash_deposit_operation.png)

A ce stade, les opérations qu'il faut effectuer sont les suivantes:

1. Calculer le montant d'espèces à déposer en banque.
2. Déduire ce montant du poste comptable correspondant aux espèces et l'ajouter au poste comptable correspondant au compte bancaire sur lequel est effectué le dépôt.
3. Si besoin ventiler le montant avec le poste comptable de l'exploitant si une partie des espèces n'est pas déposée en banque.
4. Mettre à jour la date de rapprochement bancaire dans les différents documents de paiements correspondant à ce dépôt.


En sélectionnant ce type d'opération, Maia va automatiquement préparer votre document:

- Dans la section écriture comptable, tous les postes comptables de type __Banque__, __Espèce__, __Exploitant__ sont ajoutés automatiquement dans le tableau.
- Une nouvelle section permettant de sélectionner les paiement correspondants est automatiquement ajoutées au dessus des postes comptables.


## Sélection des paiements

En cliquant sur "Obtenir tous les paiements en espèce non réconciliés", Maia va automatiquement récupérer tous les paiements validés ayant un mode de paiement de type "Espèces" et n'étant pas encore rapproché.

![Paiements en espèces](/img/accounting/cash_deposit/cash_payments.png)

Maia va automatiquement déduire le total de ces paiements du poste comptable "Espèces"

![Paiements en espèces](/img/accounting/cash_deposit/amount_calculation.png)

:::tip Astuce
Lors de l'installation de Maia, un poste comptable "Espèce" est automatiquement configuré pour vous.  
Vous pouvez tout à fait le renommer ou en ajouter d'autres si besoin depuis la rubrique "Poste comptable"
:::

Vous pouvez désormais supprimer certains paiements de la liste en les sélectionnant grâce aux cases tout à gauche du tableau.
Le montant déduit du poste comptable "Espèces" est alors automatiquement ajusté.

:::warning
Vous pouvez ne pas utiliser ce tableau pour effectuer un dépôt d'espèces ou modifier le montant à déduire du poste comptable "Espèces".
Dans ce cas:
- Pensez à bien rapprocher tous les paiements concernés par votre dépôt d'espèce manuellement.
- N'hésitez pas à mettre en note tous les éléments vous permettant de retrouver l'origine de ce dépôt d'espèce. Ce qui vous paraît être une évidence aujourd'hui ne le sera peut-être plus dans quelques mois ou quelques années !
:::

## Ventilation comptable

Une fois vos paiements sélectionnés ou le montant du dépôt correctement déduit du poste comptable "Espèces", vous pouvez répartir ce montant sur les comptes bancaire sur lesquels le paiement a été effectué.

::: example Exemple

Vous avez touché 270 € pour 5 consultations.
Vous souhaitez déposer 250 € sur votre compte bancaire BNP PARIBAS et garder 20 €.

Dans ce cas la ventilation comptable de cette opération sera la suivante:

|Poste comptable|Montant|
|---------------|-------|
|Espèces        |-270 € |
|BNP PARIBAS    |250 €  |
|Exploitant     |20  €  |

![Ventilation comptable](/img/accounting/cash_deposit/cash_deposit_accounting_split.png)
:::

Il est important que la différence entre les montants positifs et les montants négatifs soit égale à 0, sinon Maia vous empêchera de valider l'opération.
Vous pouvez alors enregistrer et valider votre opération diverse.

## Rapprochement des paiements

Vous avez donc déposé vos espèces en banque et le montant apparaît sur votre relevé bancaire, vous pouvez donc rapprocher les paiements dans Maia.
Si vous avez lié votre document de dépôt d'espèces avec les paiements correspondants, un bouton "Action" apparaît à la place du bouton "Valider" après la validation.
![Rapprochement bancaire](/img/accounting/cash_deposit/cash_deposit_action.png)

Cliquez sur "Mettre à jour les dates de rapprochement", choisissez la date et validez pour que tous les paiements liés à cette opération de dépôt d'espèces soient immédiatement rapprochés.

