# Prélèvements et apports personnels

Lorsque vous effectuez un transfert entre votre patrimoine personnel et celui de votre cabinet, vous effectuez un apport ou un prélèvement personnel.

Bien qu'il ne s'agisse pas de recettes ou de dépenses impactant le résultat fiscal, ces opérations doivent être enregistrées pour pouvoir suivre les mouvements de trésorerie et vérifier que les enregistrements comptables sont bien exactes.

## Enregistrement d'une opération diverse

Un prélèvement personnel doit être enregistré à chaque fois que vous retirez de l'argent du compte professionnel pour le mettre sur votre compte personnel.
A l'inverse un apport personnel doit être enregistré à chaque fois que vous ajoutez de l'argent depuis votre compte personnel sur le compte professionnel.

Pour ce faire, faites une nouvelle opération diverse et sélectionnez le type "Prélèvement personnel".
![Opération de prélèvement personnel](/content/maia/accounting/personal_debit_credit/personal_debit_credit.png)

ToobibPro va automatiquement récupérer tous les postes comptables de type __Banque__, __Espèces__ et __Exploitant__ pour vous.

Il ne vous reste plus qu'à ventiler votre écriture en fonction de l'opération que vous souhaitez effectuer.

## Prélèvement personnel

Toute retrait d'argent des comptes de l'entreprise ne correspondant pas à un charge pour votre cabinet est un prélèvement personnel.

:::example Exemple 1
Vous souhaitez prélever 2000 € de votre compte professionnel BNP PARIBAS pour vous verser une rémunération.
La ventilation de cette opération sera donc:

|Poste comptable|Montant|
|---------------|-------|
|BNP PARIBAS    |-2000 €|
|Exploitant     |2000 € |

![Prélèvement personnel - Exemple 1](/content/maia/accounting/personal_debit_credit/personal_debit_example_1.png)
:::

:::example Exemple 2
Vous souhaitez prélever 1500 € de votre compte professionnel BNP PARIBAS pour vous verser une rémunération.
Vous avez également reçu 500 € de paiements en espèce que vous souhaiter conserver au lieu de les déposer sur votre compte professionnel.
La ventilation de cette opération sera donc:

|Poste comptable|Montant|
|---------------|-------|
|Espèces        |-500 € |
|BNP PARIBAS    |-1500 €|
|Exploitant     |2000 € |

![Prélèvement personnel - Exemple 2](/content/maia/accounting/personal_debit_credit/personal_debit_example_2.png)
:::

:::example Exemple 3
Vous avez réglé vos courses ménagères avec votre carte bancaire professionnelle sans vous en rendre compte.
Il faut donc enregistrer le mouvement comme étant un prélèvement personnel.
La ventilation de cette opération sera donc:

|Poste comptable|Montant|
|---------------|-------|
|BNP PARIBAS    |-68 €|
|Exploitant     |68 € |

![Prélèvement personnel - Exemple 3](/content/maia/accounting/personal_debit_credit/personal_debit_example_3.png)
:::


:::callout
De manière générale, à chaque fois que vous ajoutez une somme sur le compte de l'exploitant, vous procédez à un prélèvement personnel.
Il est donc, par exemple, tout à fait possible de procéder à un prélèvement personnel lors d'un [dépôt d'espèce](/toobibpro/gestion/depot-especes) en enregistrant un seul document.
:::

## Apport personnel

Tout dépôt d'argent sur les comptes de l'entreprise ne correpondant pas à une recette est un apport personnel.

:::example Exemple 1
Vous souhaitez déposer 2000 € depuis votre compte personnel sur votre compte professionnel FORTUNEO pour acheter le matériel nécessaire à votre installation.
La ventilation de cette opération sera donc:

|Poste comptable|Montant|
|---------------|-------|
|Exploitant     |-2000 €|
|FORTUNEO       |2000 € |

![Apport personnel - Exemple 1](/content/maia/accounting/personal_debit_credit/personal_credit_example_1.png)
:::