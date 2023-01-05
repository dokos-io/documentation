---
title: Sepa Direct Debit
description: 
published: true
date: 2020-11-27T07:13:56.922Z
tags: 
editor: undefined
dateCreated: 2020-11-26T13:32:17.256Z
---

# Sepa direct debit

dokos's Sepa direct debit feature allows you to generate Sepa XML files that can be sent to your bank in order to process multiple direct debit operations in one go.

## Pre-requisites
### Settings

Before generating your first XML file, you need to create a Sepa direct debit Settings file for each of your companies.

Go to `Accounting > Sepa Direct Debit Setting` and create a new document.

Register the following items:

- Your creditor identifier
- Your company name as it registered by your bank
- The type of instrument to use: CORE (B2C) or B2B
- The schema to use to generate the XML file. It can be pain.008.001.02, pain.008.002.02 or pain.008.003.02
- The bank account to use to register/filter the corresponding payments in dokos
- A reference prefix: Will be used to generate the description of the debtor

### Sepa mandates

In order to generate an XML file with accurate values, you need to create a Sepa mandate for each of your customers.
This mandate should have the status `Active` to be considered as valid and you should include the following items:
- The creation date of the mandate
- A bank account with a valid IBAN and a valid SWIFT/BIC number


## How to create a Sepa direct debit file

1. Go to `Accounting > Sepa direct debit` and create a new document.
2. Add a start date and an end date for the period you wish to export.
3. Check your currency and add mode of payment to use as filters to retrieve all corresponding payments within this period.
4. Click on `Get all payment entries`
5. Remove all entries you do not wish to include in your XML file
6. Select your direct debit type: `One-off, First, Recurrent` or `Final`
7. Check the checkbox if it is a batch booking
8. Save your document
9. Click on `Generate an XML file`
10. If your XML file is correct, submit your document to validate your entry


> The direct debit scheme follows sequences:
> - One off: A unique debit
> - First: The first debit of a series
> - Recurrent: Debits consecutive to the first one of a series
> - Final: Last debit of a series
{.is-info}


## Features
### Generate Sepa payments

Given that your customers are already linked to a Sepa mandate, you may expect to only have to generate their invoices every month and have dokos handle the creation of the corresponding payments automatically.

When you are ready to generate your Sepa XML file, you can click on the `Generate Sepa payments` in the toolbar to have all payments generated automatically.

The system will fetch all open invoices (unpaid or overdue) linked to a customer with a valid mandate (with status `Active`) within the selected period and will automatically generate a payment for each of these invoices.

### Include entries already included in a generated XML file

If you need to generate a file with entries that had already been submitted with a previous XML file, you can check this option to have them fetched again.
