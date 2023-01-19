---
title: Écriture de journal
---

# Écriture de journal

Une écriture au journal est une écriture faite dans le grand livre général et elle indique les comptes concernés.

Une écriture de journal est une transaction polyvalente où les comptes de débit et de crédit peuvent être sélectionnés.

Tous les types d'écritures comptables autres que les transactions de vente et d'achat sont effectués à l'aide de l'écriture de journal . Une écriture de journal est une transaction comptable standard qui affecte plusieurs comptes et la somme des débits est égale à la somme des crédits. Une écriture de journal a un impact sur le grand livre.

Les écritures de journal peuvent être utilisées pour saisir des dépenses, des écritures d'ouverture, des écritures de contrepartie, des paiements bancaires, des écritures d'accise, etc. Par exemple, la réservation de dépenses courantes, les dépenses directes comme l'essence/le transport, les dépenses diverses, les écritures d'ajustement et l'ajustement du montant de la facture.

---

## 2. Caractéristiques

### 2.1 Écritures comptables

- **Dimensions comptables** : Un projet ou un centre de coûts peut être lié ici pour suivre le calcul des coûts séparément.

- **N° de compte bancaire** : Si vous avez ajouté un compte bancaire , le numéro associé à ce compte bancaire sera récupéré.

- **Type de référence** : Si cette écriture comptable est associée à une autre opération, elle peut être référencée ici. Sélectionnez le type de référence et sélectionnez le document spécifique. Par exemple, si vous créez une écriture de journal pour une facture de vente spécifique. Liez cette écriture au journal à la facture. Le montant « impayé » de cette facture sera affecté.

Voici les documents qui peuvent être sélectionnés dans l'écriture au journal sous Type de référence :

- Facture de vente
- Facture d'achat
- Entrée de journal
- Commande client
- Commande fournisseur
- Demande de remboursement
- Actif
- Prêter
- Saisie de la paie
- Avance des employés
- Réévaluation du taux de change
- Escompte de facture

- **Est-ce une avance ?** : S'il s'agit d'un paiement anticipé par un client, définissez cette option sur « Oui ». Ceci est utile lorsque vous avez lié un formulaire 'Type de référence' à cette écriture de journal. La sélection de « Oui » liera cette écriture au journal à la transaction sélectionnée dans le champ « Nom de la référence ». Pour en savoir plus, visitez la page Saisie des paiements anticipés .

::alert{type=warning}
**Remarque utilisateur** : Toute remarque supplémentaire sur l'entrée peut être ajoutée dans ce champ.
::


### 2.2 Contrepasser l'écriture au journal

Dans toute entrée de journal soumise, il y a un bouton dédié pour inverser l'entrée de journal. En cliquant sur le bouton « Inverser l'écriture au journal », le système crée une nouvelle écriture au journal en annulant le montant du débit et du crédit sur les comptes respectifs.

### 2.3 Saisie des différences

La « différence » est la différence qui reste après la somme de tous les débits et crédits.

Conformément au système de comptabilité en partie double, le débit total doit être égal au crédit total.

Cela devrait être zéro si l'entrée de journal doit être « soumise ». Si ce nombre n'est pas zéro, vous pouvez cliquer sur « Saisir la différence » et le système ajoutera automatiquement une nouvelle ligne avec le montant requis pour que le total soit égal à zéro. Sélectionnez le compte à débiter/créditer et continuer.

### 2.4 Référence

Un numéro de référence peut être saisi manuellement et une date de référence peut être définie. En entrant un numéro de référence ici, une « Remarque » s'affichera, par exemple :

Dans la section Référence, les champs suivants peuvent être saisis manuellement si la facture a été enregistrée hors ligne et non dans le système Dokos. Ceci est uniquement à des fins de référence.

### 2.5 Saisies multi-devises

Si les comptes sélectionnés sont dans des devises différentes, cochez la case 'Multi Currency'. Si cette case n'est pas cochée, vous ne pourrez pas sélectionner de devises étrangères dans l'écriture de journal. Cela affichera les différentes devises et récupérera le « taux de change ». Pour en savoir plus, visitez la page Comptabilité multi-devises .

### 2.6 Modèle d'entrée de journal 
À partir du champ du modèle : la sélection d'une option dans ce champ chargera les détails à partir d'un modèle d'entrée de journal.

Il récupérera et ajoutera les détails suivants à l'entrée :

- Type d'entrée
- Société
- Séries
- Comptes dans les écritures comptables

### 2.7 Paramètres d'impression 

Pay To / Recd From : Le nom saisi ici apparaîtra sur la facture de vente. Ceci est utile pour imprimer des chèques. Accédez à la vue d'impression dans l'entrée de journal et sélectionnez le 'Format d'impression du chèque'.

#### En-tête de lettre

Vous pouvez imprimer votre entrée de journal sur le papier à en-tête de votre entreprise. En savoir plus ici .

#### Imprimer les en-têtes

Les entrées de journal peuvent également être intitulées différemment à des fins d'impression. Vous pouvez le faire en sélectionnant un en- tête d'impression . Pour créer de nouveaux en-têtes d'impression, accédez à :

Accueil > Paramètres > Impression > Imprimer l'en-tête

Lisez les titres d'impression pour en savoir plus.

### 2.8 Plus d'informations

- **Mode de paiement** : si le paiement a été effectué par virement bancaire, traite bancaire, carte de crédit, chèque ou espèces. De nouveaux modes de paiement peuvent également être créés. Si un compte bancaire est défini dans Mode de paiement, il sera récupéré ici lorsque le Mode de paiement est sélectionné.
- **Est en cours d'ouverture** : Si l'entrée de journal est de type « entrée d'ouverture », ce champ sera défini sur « Oui ». Pour en savoir plus, visitez la page Solde d'ouverture .
- **À partir d'un modèle** : Lorsqu'un modèle est sélectionné, le tableau 'Écritures comptables' sera d'abord vidé avant de charger les comptes à partir du modèle. Vous pouvez ajouter plus d'entrées de compte après cela.

## 3. Types d'entrées de journal

Jetons un coup d'œil à certaines des écritures comptables courantes qui peuvent être effectuées via Journal Entry dans Dokos.

### 3.1 Saisie du journal

Il s'agit d'un type d'entrée à usage général qui peut être utilisé à différentes fins. Voyons quelques exemples.

#### Dépenses (non cumulables) 

Souvent, il n'est pas nécessaire de comptabiliser une dépense, mais elle peut être directement imputée sur un compte de dépenses lors du paiement. Par exemple, une indemnité de déplacement ou une facture de téléphone. Vous pouvez débiter directement les frais de téléphone (au lieu de votre opérateur téléphonique) et créditer votre banque lors du paiement.

- Débit : Compte de dépenses (comme les frais de téléphone).
- Crédit : Banque ou Compte Espèces.

#### Créditer les salaires

Pour créditer les salaires des employés, le type « Saisie du journal » est utilisé. Dans ce cas,

- Débit : Les éléments de salaire.
- Crédit : Le compte bancaire.

### 3.2 Saisie du journal inter-entreprise

Si une transaction a lieu entre une société mère et une société fille, ou des sociétés sœurs, ou deux sociétés appartenant au même groupe, cette option peut être utilisée pour faire une écriture au journal inter-sociétés.

Pour en savoir plus, visitez la page Inter Company Journal Entry .

### 3.3 Saisie bancaire

Utilisez ce type lorsque vous effectuez ou recevez un paiement à l'aide d'un compte bancaire . Par exemple, payer des frais de divertissement, etc. en utilisant le compte bancaire de la société.

### 3.4 Saisie des espèces

C'est la même chose que « Entrée bancaire », mais le paiement est effectué via un compte de trésorerie.

### 3.5 Saisie par carte de crédit

Il s'agit d'un type d'entrée permettant d'identifier facilement toutes les entrées de carte de crédit.

### 3.6 Note de débit

Il s'agit d'un document envoyé par un client (votre entreprise) à un fournisseur (votre fournisseur) lors du retour de marchandises/articles.

Vous pouvez également créer une note de débit directement à partir d'une facture d'achat.

« Note de débit » est établie pour un fournisseur contre une facture d'achat ou acceptée comme note de crédit du fournisseur lorsqu'une entreprise retourne des marchandises. Lorsqu'une Note de débit est émise, la Société peut soit recevoir un paiement du Fournisseur, soit ajuster le montant sur une autre facture.

- Débit : Compte fournisseur.
- Crédit : Compte de retour d'achat.

### 3.7 Note de crédit 
Il s'agit d'un document envoyé par un fournisseur à un client lors du retour de marchandises/articles.

« Note de crédit » est faite pour un client contre une facture de vente lorsque la société doit ajuster un paiement pour les marchandises retournées. Lorsqu'une note de crédit est établie, le vendeur peut soit effectuer un paiement au client, soit ajuster le montant sur une autre facture.

- **Débit** : Compte de retour des ventes.
- **Crédit** : Compte client.

Une note de débit/crédit est généralement émise pour la valeur des marchandises retournées ou moins.

### 3.8 Contre-entrée

Une Contre-Entrée est comptabilisée lorsque la transaction est comptabilisée au sein d'une même Société de types :

- Espèces à Espèces
- Banque à Banque
- Espèces à la banque
- Banque en espèces

Ceci est utilisé pour enregistrer le retrait ou le dépôt d'argent d'un compte bancaire. Lorsque cette entrée est utilisée, l'argent ne quitte pas l'entreprise à moins qu'il ne soit à nouveau utilisé pour payer quelque chose.

## 3.9 Entrée d'accise

Lorsqu'une entreprise achète des marchandises à un fournisseur, l'entreprise paie des droits d'accise sur ces marchandises au fournisseur. Et lorsqu'une entreprise vend ces marchandises à des clients, elle perçoit des droits d'accise. La société déduira les droits d'accise à payer et le solde du dépôt au gouvernement. Compte.

Lorsqu'une entreprise achète des marchandises avec des droits d'accise :

- **Débit** : Compte d'achat, Compte de droits d'accise.
- **Crédit** : Compte fournisseur.

Lorsqu'une entreprise vend des marchandises avec droit d'accise :

- **Débit** : Compte client.
- **Crédit** : compte de vente, compte de droits d'accise.

### 3.10 Radiations ou créances irrécouvrables

Si vous annulez une facture en tant que créance irrécouvrable, vous pouvez créer un bon de journal similaire à un paiement, sauf qu'au lieu de débiter votre banque, vous pouvez débiter un compte de dépenses appelé créances irrécouvrables.

**Débit** : annulation de créances irrécouvrables
**Crédit** : client
Remarque : Il peut exister des réglementations dans votre pays avant de pouvoir radier les créances irrécouvrables.

### 3.11 Entrée d'ouverture

Cette entrée est utile lors du passage d'un autre logiciel à ERPNext à n'importe quel moment de l'année. Vos factures impayées, actions, etc. peuvent être enregistrées dans ERPNext à l'aide de ce type d'entrée. La sélection du type récupère les comptes de bilan.

### 3.12 Amortissement

L'amortissement est lorsque vous radiez une certaine valeur de vos actifs en tant que dépense. Par exemple, si vous avez un ordinateur que vous utiliserez pendant disons 5 ans, vous pouvez répartir ses dépenses sur la période et passer une écriture au journal à la fin de chaque année en réduisant sa valeur d'un certain pourcentage.

- **Débit** : Amortissement (Dépense).
- **Crédit** : Actif (le Compte sous lequel vous aviez comptabilisé l'actif à amortir).
Pour en savoir plus, visitez la page Amortissement des actifs .

**Remarque** : Il peut exister des réglementations dans votre pays qui définissent le montant auquel vous pouvez déprécier une catégorie d'actifs.

### 3.13 Réévaluation du taux de change

Si votre plan comptable comporte des comptes avec plusieurs devises, une écriture au journal de type « Réévaluation du taux de change » aide à faire face à cette situation. Cette entrée est destinée à être créée à partir d'un formulaire de réévaluation du taux de change. Pour en savoir plus, visitez la page Réévaluation du taux de change .