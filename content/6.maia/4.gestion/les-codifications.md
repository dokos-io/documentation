# Les codifications

Maia vous permet de configurer vos codifications en fonction de vos besoins depuis le module "Dossiers médicaux".

![Codification](/content/maia/first_steps/new_invoice/codification.png)

Une codification est constituée des éléments suivants:

1. **La codification CPAM**: Celle-ci doit être identique à la lettre de codification définie par la sécurité sociale.
2. **La description**: Celle-ci apparaîtra à côté de la codification sur la quittance donnée à la patiente
3. **Le prix CPAM**: Correspond à la base de remboursement de la sécurité sociale
4. **Le prix Sage-Femme**: Correspond au prix pratiqué par la sage-femme, incluant les éventuels dépassements d'honoraires
5. **Indemnités spécifiques**: Si cette codification correspond à une indemnité spécifique, il faut alors cocher la case correspondante pour que Maia puisse la prendre en compte lors de la facturation
6. **Poste comptable**: Correspond au poste comptable sur lequel cet acte sera enregistré.


Vous pouvez créer autant de nouvelles consultations que vous le souhaitez en fonction de vos spécificités locales.

:::alert
*Lorsque vous définissez des codifications pour des actes hors nomenclature, le prix CPAM doit être égal à 0, car la CPAM ne rembourse pas ce type d'acte*
:::

### Facturaction de plusieurs actes

Pour facturer plusieurs actes, vous pouvez sélectionner plusieurs codifications dans vos consultations.
Le cumul de deux actes peut entraîner la cotation de l’acte avec le plus fort coefficient est à taux plein et le second divisé par 2.
Dans ce cas vous pouvez créer une nouvelle codification avec un prix de base divisé par 2.

**Exemple: Facturation de SF15 + SF12**

Dans ce cas, on doit réellement facturer SF15 + SF12/2
Vous pouvez donc créer une nouvelle codification appelée *SF12/2* avec comme codification *SF12* et comme prix de base *16,8 €*.

Dans votre consultation, sélectionnez SF15 puis SF12/2 pour que Maia calcule le bon tarif.