---
title: Payment Request
description: 
published: true
date: 2020-11-27T07:13:52.861Z
tags: 
editor: undefined
dateCreated: 2020-11-26T13:43:10.002Z
---

# Payment request

A payment request is a document used as a reference to send a payment link to your customers in order to allow them to pay their invoices directly on your dokos website.

## How to create a payment request

1. In a submitted, but unpaid sales order or sales invoice click on 'Make > Payment request'
2. Add one or several payment gateways
3. Select an email template or write a message if you want to send an email to your customer upon submission of the document
4. Save and submit your document

> If you only want to record the payment request internally without sending it to your customer, check "Don't create a payment link"
> 
{.is-info}

## Features
### Payment gateways

You need to select at least one payment gateway in order to submit your payment request.  
dokos creates a unique link for each payment request redirecting your users to a payment page so they can choose their preferred payment method:
![payment_request_link.png](/accounting/payment-gateways/payment_request_link.png)

If your reference doctype (Sales invoice/sales order) is linked to a subscription, dokos will do the following:
1. Select the payment methods automatically when you click on save
2. If you add or remove a payment gateway, it will check if is consistent with the payment gateways registered in the subscription plans linked to your reference document

> If you use Sepa direct debit with GoCardless, once your customer is linked with a valid mandate, your are able to process the payment directly from the payment request without having to send a new link to your customer.
> 
> Click on 'Actions > Process payment immediately' to process the payment.
> 
> If you still decide to send a link to your customer, the GoCardless gateway link will not appear on the screen if the customer is linked to a valid mandate. To create a new GoCardless customer, cancel any existing mandate in dokos first.
{.is-info}


### Payment gateways template

In order to facilitate the selection of several payment gateways for each payment request, create templates and select only the template corresponding to your business case each time.


### Fee amount

You can either enter a fee amount manually or leave it to 0 so dokos can retrieve the exact fee amount from the payment processor and register it automatically.

This amount will then be deducted from the payment amount and booked against the fee account registered in the corresponding [payment gateway](/dokos/accounting/payment-gateway.md).

### Notification email

You can send a notification email directly from your payment request to your customer:::.
Select an email template or write a new message directly in the message field, select a print format for your reference document and just save and submit your document for the email to be automatically sent to the recipient.

You can use 2 specific objects and 1 variable in order to create a dynamic email:

- Objects:
    **doc**: gives access to the payment request document. E.g. `{{ doc.transaction_date }}`
    **reference**: gives access to the reference document (Sales order/sales invoice). E.g. `{{ reference.grand_total }}`

- Variable:
    **payment_link**: gives access to the formatted payment link .  
    E.g `{{ payment_link }}` will be transformed into `https://{your_site}/payments?link=3bec23ddb9e0f4d4af1df01d807725680544a603fa500228085ac65f`

