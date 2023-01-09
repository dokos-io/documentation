---
title: Période comptable
description: 
published: true
date: 2022-10-28T13:50:38.414Z
tags: 
editor: markdown
dateCreated: 2021-08-27T09:09:59.569Z
---

# Période comptable

Une période comptable définit une période au cours de laquelle les états financiers sont enregistrés.

Dans DOKOS, la période comptable est une période en dehors de laquelle les transactions soumises sélectionnées (telles que les factures de vente/d'achat, la saisie des stocks, la saisie de la paie, la saisie au journal, etc.) ne sont pas autorisées à être créées. En d'autres termes, les transactions sélectionnées ne peuvent être créées que dans la période comptable définie.

**Pourquoi la période comptable est-elle nécessaire ?**

Lorsque des transactions sont soumises, elles affectent les grands livres et les rapports qui traitent les données du grand livre. Cela peut poser des problèmes lorsque des rapports financiers doivent être générés pour audit par les autorités ou pour clôturer les livres comptables de l'exercice.

Ici, la période comptable peut être utilisée pour limiter la période pendant laquelle les transactions peuvent être soumises afin de préserver l'intégrité des rapports correspondants.

## 1. Comment créer une période comptable

### 1.1 À quoi sert l'option « Fermé » pour les transactions sélectionnées ? 

L'option "Fermé" dans la table enfant pour les doctypes de transaction est utilisée pour sélectionner lesquels d'entre eux doivent être restreints après la fin de la période comptable.

Notez que si la période comptable se termine et si l'une des transactions sélectionnées dans la table enfant n'a pas la case "Fermé", alors elles ne seront pas restreintes après la fin de la période comptable.

1. Saisissez un **nom** pour la période comptable.
2. Définissez **une période** en définissant des **dates de début et de fin**.
3. **Ajouter** ou **supprimer** des transactions de la table. Notez que toutes les transactions répertoriées dans le tableau avec l'option "Fermé" cochée seront restreintes après la fin de la période comptable.
4. **Enregistrer**.
Si vous essayez de soumettre une transaction fermée après la fin de sa période comptable, vous verrez une erreur de validation vous empêchant de le faire.

::alert{type=warning}
**Remarque** : aucun rôle ne peut soumettre les transactions définies dans la période comptable, même le rôle défini dans « Rôle autorisé à définir des comptes gelés et à modifier les entrées gelées » dans les paramètres du compte .
::