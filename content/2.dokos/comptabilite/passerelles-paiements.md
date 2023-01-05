---
title: Payment Gateways
description: 
published: true
date: 2020-11-27T07:13:50.830Z
tags: 
editor: undefined
dateCreated: 2020-11-26T13:26:41.032Z
---

# Payment gateways

Payment gateways are documents creating a link between dokos standard invoicing and payments documents and external payment intermediates like Stripe, Braintree, GoCardless, Paypal, etc...


## How are payment gateways structured

A new payment gateway is automatically created when you configure a new integration with a payment intermediate in dokos.
E.g. When adding a new Stripe account called `ABC`, a payment gateway called `Stripe-ABC` will automatically be created in dokos.

A payment gateway is then linked to one or several accounts for each possible currency used in a payment.
E.g. If you want to process payments in EUR and USD, you need to create two payment gateway accounts linked to your payment gateway:
- One with the currency EUR, linked to an account in EUR
- One with the currency USD, linked to an account in USD

Each time a payment is made through this payment gateway, the system assigns the payment entry to the right payment gateway account.


## Settings

It is possible to define the following elements for each payment gateway:

- For the automatically generated payment entries:
    - A mode of payment
    - A fee account: Used to book the payment provider's fees
    - A cost center

- For the portal:
    - A title
    - An icon

Example:
![payment_request_link.png](/accounting/payment-gateways/payment_request_link.png)

## Integrations
### Stripe
#### Configure Stripe

In order to configure the integration with Stripe, you need to add the following elements:

- Create a new `Stripe Settings` for each of your companies
  Go to `Integrations > Stripe Settings`
- Add the publishabled key
- Add the secret key
  These keys can be found in the `Developer > API keys` section of the Stripe Dashboard.
- Add a header image: it will displayed above the payment form on your portal, but is not mandatory
- Add a redirect URL if different from the standard redirect URL.
  After a successful payment, the user is redirected to a `Payment success` page (`/integrations/payment-success`) with a clickable button `continue`. You can set the redirection link for this button in this field.

#### Webhooks

It is also possible to receive webhooks from Stripe to trigger invoicing actions automatically.

In order to activate webhooks, go to your Stripe Dashboard, select `Webhooks` in the `Developer` section and add a new endpoint with the following URL: 

`https://{your_site}/api/method/erpnext.erpnext_integrations.doctype.stripe_settings.webhooks?account={your_stripe_account_name}`

Replace {your_site} and {your_stripe_account_name} with your site URL (e.g. `myerp.dokos.io`) and the name of your Stripe account in dokos (e.g. `ABC`)

You can send all events linked to document:
  - charge

Then copy the secret key and paste it in your Stripe account in dokos.

#### After creation

Once your Stripe account is created, go to the generated payment gateway and complete the information presented in section 2.
If you need to autorize payments in other currencies than your company currency, add additional payment gateway accounts.

dokos is currently configured to accept the following currencies with Stripe:
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


### GoCardless
#### Configure GoCardless

In order to configure the integration with GoCardless, you need to add the following elements:

- Create a new `GoCardless Settings` for each of your companies
  Go to `Integrations > GoCardless Settings`
- Add the access token
  This token can be generated in the `Developers > Create > Access token` section of the GoCardless Dashboard.
- Check `Use the sandbox` if it is a GoCardless test account.

#### Webhooks

To integrate GoCardless webhooks into dokos, create a new endpoint by clicking on `Developers > Create > Webhook endpoint`.
Give it a meaningful name and add the following URL

`https://{your_site}/api/method/erpnext.erpnext_integrations.doctype.gocardless_settings.webhooks?account={your_stripe_account_name}`

Replace {your_site} and {your_stripe_account_name} with your site URL (e.g. `myerp.dokos.io`) and the name of your GoCardless account in dokos (e.g. `ABC`)

You can leave the `Secret` field empty, as it will be automatically generated by GoCardless.

Save and copy and paste the generated `Secret` in your GoCardless settings in dokos.

#### Check for updates

By checking `Check for updates`, you are enabling a daily check of the following items:

- Mandate status are updated if any change is registered by GoCardless
- Payment status are updated if any change is registered by GoCardless

These two checks are additional to the webhooks you might received from GoCardless