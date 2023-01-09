---
title: Down payment invoice
description: 
published: true
date: 2020-11-27T07:13:46.860Z
tags: 
editor: undefined
dateCreated: 2020-11-26T13:21:29.232Z
---

# Down Payment Invoice

A down payment invoice is used to notice the payment of a part of the price of a sales before its delivery or a service before its realization.  
In __Dokos__, it is possible to register the down payment and to settle it manually through a journal entry or a payment entry, but it is also possible to let the software do this entry automatically by adopting the following flow.  


## Pre-requisite

- Create an item, check the checkbox "Down payment item" and set a down payment percentage associated to this item.  
If you have several types of down payments with different percentages, create an item for each item type.  

- In the company document, check that the field "Default customer down payment account" is set.  
The selected account must be of type "Receivable".
Currently, only customer down payments can be automated. Supplier down payments are planned for a future version.  

## Create a sales invoice from a sales order

To simplify your invoicing, create a sales order corresponding to the final amount to invoice.  
From within this sales order, click on "Create > Sales Invoice"  

In the sales invoice, check "Down payment invoice".  
By checking this field, you trigger two actions:  

1. __Dokos__ fetches the down payment item automatically, if you have only one, and calculates the down payment amount based on the sales order amount.  
2. The receivable account is replaced by the default down payment account.  

::alert{type=info}
If you uncheck the "Down payment invoice" field, the receivable account is replaced by the customer's account.
::


When you validate the invoice, no accounting entries are generated. Only the payment serves to register the down payment in accounting.  

## Create the down payment entry

Create a new payment entry from the sales invoice.  
Check that __Dokos__ has correctly fetched the down payment account from the invoice, add a reference and validate your payment.  

## Create the final invoice

To create your final invoice, start from the sales order and create a new sales invoice.  
The invoice amount correspond to the sales order full amount.  

Go to section "Advance Payments" and click on the button "Get Advances Received".  
You previously created down payment is automatically fetched and the outstanding amount is updated. You can print it on your sales invoice.  

## Create the final payment

After validation of your sales invoice, create a payment entry.  
The payment amount corresponds to the outstanding amount of your sales invoice, meaning the total amount minus the down payment.  

Validate your payment and check that __Dokos__ a well reversed the down payment accounting entries and registered the total amount of both payments on the customer account.  
