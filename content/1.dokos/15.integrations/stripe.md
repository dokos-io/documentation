---
title: Stripe
---

# Intégration Stripe

L'intégration avec [Stripe](https://stripe.com/fr) permet de proposer des paiements par carte bancaire sur votre site Dokos.

## Configuration

Afin de configurer une intégration avec Stripe, vous devez ajouter les éléments suivants:

- Créez un nouveau document `Paramètres Stripe` pour chacune de vos sociétés
  Allez dans `Intégrations > Paramètres Stripe`
- Ajoutez la clé publiable
- Ajoutez la clé secrète
  Ces clés peuvent être trouvées dans la section `Développeur > Clés API` du tableau de bord Stripe.
- Ajoutez une image d'en-tête (Optionnel): elle sera affichée au dessus du formulaire de paiement sur votre portail
- Ajoutez une URL de redirection si différente de l'URL de redirection standard.
  Après un paiement réussi, l'utilisateur est redirigé vers une page de `Succès de paiement` (`/integrations/payment-success`) contenant un bouton `continuer`. Vous pouvez définir le lien de redirection de ce bouton dans ce champ.

## Webhooks

Il est aussi possible de recevoir des webhooks de Stripe pour générer des actions de facturation automatiquement.
Afin d'activer les webhooks, allez dans votre tableau de bord Stripe, sélectionnez `Webhooks` dans la section `Développeur` et ajoutez un nouveau `endpoint` avec l'URL suivante:

`https://{votre_site}/api/method/payments.payment_gateways.doctype.stripe_settings.webhooks?account={nom_de_votre_compte_stripe}`

Remplacez {votre_site} et {nom_de_votre_compte_stripe} par l'URL de votre site (exemple: `myerp.dokos.io`) et le nom de votre compte Stripe dans dokos (exemple: `ABC`)

Vous pouvez envoyez tous les événements liés aux documents:
  - payment_intent
  - invoice

Copiez ensuite la clé secrète et collez là dans votre compte Stripe sur dokos.

::callout{icon="i-heroicons-light-bulb" color="teal"}
Vous pouvez également créer les webhooks depuis Dokos en cliquant sur le bouton *Webhooks > Créer des webhooks Stripe* disponible dans le document de Paramètres Stripe.
::


## Passerelles de paiement

Une fois votre compte Stripe créé, allez dans les passerelles de paiement générées et complétez les informations présentées dans la page dédiées aux [passerelles de paiement](/dokos/comptabilite/passerelles-paiements).
Si vous devez autoriser des paiements dans d'autres devises que la devise de votre société, ajoutez des comptes de passerelle de paiement additionnels.

Dokos est configuré pour accepter les devises suivantes dans Stripe:
```
"AED", "ALL", "ANG", "ARS", "AUD", "AWG", "BBD", "BDT", "BIF", "BMD", "BND",
"BOB", "BRL", "BSD", "BWP", "BZD", "CAD", "CHF", "CLP", "CNY", "COP", "CRC", "CVE", "CZK", "DJF",
"DKK", "DOP", "DZD", "EGP", "ETB", "EUR", "FJD", "FKP", "GBP", "GIP", "GMD", "GNF", "GTQ", "GYD",
"HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "ISK", "JMD", "JPY", "KES", "KHR", "KMF",
"KRW", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "MAD", "MDL", "MNT", "MOP", "MRO", "MUR", "MVR",
"MWK", "MXN", "MYR", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "PAB", "PEN", "PGK", "PHP", "PKR",
"PLN", "PYG", "QAR", "RUB", "SAR", "SBD", "SCR", "SEK", "SGD", "SHP", "SLL", "SOS", "STD", "SVC",
"SZL", "THB", "TOP", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VND", "VUV", "WST",
"XAF", "XOF", "XPF", "YER", "ZAR"
```