---
title: Création d'une commande client via l'API
description: 
published: true
date: 2022-03-01T18:37:58.459Z
tags: 
editor: markdown
dateCreated: 2022-03-01T18:23:48.000Z
---

# Créer une commande client via l'API avec Postman

::alert
Postman est une plateforme permettant d'utiliser une API. Nous l'utilisons ici pour simplifier les appels à l'API de Dokos.  
https://www.postman.com/
::



1. Créez un nouvel onglet
2. Sélectionnez le type d'appel `POST`
3. Entrez l'URL de votre site suivi de la ressource que vous souhaitez créer: Sales Order (Commande client)

Exemple: `http://localhost:8000/api/resource/Sales Order`

4. Dans la section _Headers_ ajoutez les deux clés/valeurs suivantes:

|KEY|VALUE|
|---|---|
|Authorization|token [clé publique]:[clé privée]|
|Content-Type|application/json|

::alert
Vous pouvez récupérer une clé publique et une clé privée associée à un utilisateur en allant dans ses paramètres utilisateur; section Accès API.
::

5. Dans la section _Body_, cochez _raw_ et ajoutez un objet contenant les valeurs qu'on souhaite associer à notre réservation:

Exemple:
```
{
    "customer": "Roslyn Lépicier",
    "items": [
        {
            "item_code": "Salle de coworking",
            "delivery_date": "2022-04-01",
            "qty": 1,
            "uom": "Heure"
        }
    ]
}
```

Exemple en associant votre commande à une réservation d'articles:
*Vous pouvez, par exemple, créer une réservation d'articles et inclure son _nom_ dans votre requête.*
```
{
    "customer": "Roslyn Lépicier",
    "items": [
        {
            "item_code": "Salle de coworking",
            "delivery_date": "2022-04-01",
            "qty": 1,
            "uom": "Heure",
            "item_booking": "STO-BOOK-2022-00102"
        }
    ]
}
```

::alert
Seuls le champ `customer`et une ligne de commande (`items`) sont obligatoires, mais il est possible d'ajouter une valeur pour n'importe quel autre champ disponible dans le document.  
Pour connaître les champs disponible et leur caractère obligatoire ou non, il suffit d'aller dans la liste de Réservations d'article et de sélectionner Menu (...) > Personnaliser.  
Pour les tables enfants (_Sales Order Item_ par exemple), sélectionnez _Personnaliser une table enfant_ dans la page de personnalisation de formulaire.
::


## Valider une commande

Pour valider une commande vous pouvez passer le statut de document 1 dans votre document:

```
{
    "customer": "Roslyn Lépicier",
    "docstatus": 1,
    "items": [
        {
            "item_code": "Salle de coworking",
            "delivery_date": "2022-04-01",
            "qty": 1,
            "uom": "Heure",
            "item_booking": "STO-BOOK-2022-00102"
        }
    ]
}
```

Vous pouvez également utiliser l'API suivante pour soumettre un brouillon déjà créé et renvoyé par l'API:

`http://localhost:8000/api/method/frappe.client.submit`

Avec, dans le corps de l'appel, un brouillon de commande créé précédemment:

```
{
    "doc": {
        "name": "SAL-ORD-2022-00116",
        "owner": "thierry@dokos.io",
        "creation": "2022-03-01 18:31:44.895404",
        "modified": "2022-03-01 18:31:44.895404",
        "modified_by": "thierry@dokos.io",
        "parent": null,
        "parentfield": null,
        "parenttype": null,
        "idx": 0,
        "docstatus": 0,
        "title": "{customer_name}",
        "naming_series": "SAL-ORD-.YYYY.-",
        "customer": "Roslyn L\u00e9picier",
        "customer_name": "Roslyn L\u00e9picier",
        "order_type": "Sales",
        "skip_delivery_note": 0,
        "amended_from": null,
        "company": "MappeMonde",
        "transaction_date": "2022-03-01",
        "delivery_date": "2022-04-01",
        "po_no": null,
        "po_date": null,
        "tax_id": null,
        "customer_address": "Roslyn L\u00e9picier-Facturation",
        "address_display": "23 rue Clement Marot<br>66100 PERPIGNAN<br>\nFrance<br>\n",
        "contact_person": "Roslyn L\u00e9picier-Roslyn L\u00e9picier",
        "contact_display": "Roslyn L\u00e9picier",
        "contact_phone": "04.37.73.66.41",
        "contact_mobile": "",
        "contact_email": "RoslynLepicier@armyspy.com",
        "company_address": null,
        "company_address_display": null,
        "shipping_address_name": "Roslyn L\u00e9picier-Facturation",
        "shipping_address": "23 rue Clement Marot<br>66100 PERPIGNAN<br>\nFrance<br>\n",
        "customer_group": "Tous les Groupes Client",
        "territory": "Tous les Territoires",
        "currency": "EUR",
        "conversion_rate": 1.0,
        "selling_price_list": "Vente Standard",
        "price_list_currency": "EUR",
        "plc_conversion_rate": 1.0,
        "ignore_pricing_rule": 0,
        "set_warehouse": null,
        "scan_barcode": null,
        "total_qty": 1.0,
        "base_total": 5.0,
        "base_net_total": 5.0,
        "total_net_weight": 0.0,
        "total": 5.0,
        "net_total": 5.0,
        "tax_category": "",
        "shipping_rule": null,
        "taxes_and_charges": null,
        "other_charges_calculation": null,
        "base_total_taxes_and_charges": 0.0,
        "total_taxes_and_charges": 0.0,
        "loyalty_points": 0,
        "loyalty_amount": 0.0,
        "coupon_code": null,
        "apply_discount_on": "Grand Total",
        "base_discount_amount": 0.0,
        "additional_discount_percentage": 0.0,
        "discount_amount": 0.0,
        "base_grand_total": 5.0,
        "base_rounding_adjustment": 0.0,
        "base_rounded_total": 5.0,
        "base_in_words": "Five Euro",
        "grand_total": 5.0,
        "rounding_adjustment": 0.0,
        "rounded_total": 5.0,
        "in_words": "Five Euro",
        "advance_paid": 0.0,
        "disable_rounded_total": 0,
        "payment_terms_template": null,
        "tc_name": null,
        "terms": null,
        "is_internal_customer": 0,
        "represents_company": null,
        "inter_company_order_reference": null,
        "project": null,
        "party_account_currency": null,
        "source": null,
        "campaign": null,
        "external_reference": null,
        "language": "fr",
        "letter_head": null,
        "select_print_heading": null,
        "group_same_items": 0,
        "status": "Draft",
        "delivery_status": "Not Delivered",
        "per_delivered": 0.0,
        "per_billed": 0.0,
        "billing_status": "Not Billed",
        "sales_partner": null,
        "commission_rate": 0.0,
        "total_commission": 0.0,
        "from_date": null,
        "to_date": null,
        "subscription": null,
        "auto_repeat": null,
        "doctype": "Sales Order",
        "items": [
            {
                "name": "5317c1c489",
                "owner": "thierry@dokos.io",
                "creation": "2022-03-01 18:31:44.895404",
                "modified": "2022-03-01 18:31:44.895404",
                "modified_by": "thierry@dokos.io",
                "parent": "SAL-ORD-2022-00116",
                "parentfield": "items",
                "parenttype": "Sales Order",
                "idx": 1,
                "docstatus": 0,
                "item_code": "Salle de coworking",
                "customer_item_code": null,
                "ensure_delivery_based_on_produced_serial_no": 0,
                "delivery_date": "2022-04-01",
                "item_name": "Salle de coworking",
                "description": "<div><p>R\u00e9servez votre place dans notre salle de coworking</p></div>",
                "item_group": "Coworking",
                "brand": null,
                "image": "/assets/tierslieux/images/coworking.jpg",
                "qty": 1.0,
                "stock_uom": "Heure",
                "uom": "Heure",
                "conversion_factor": 1.0,
                "stock_qty": 1.0,
                "price_list_rate": 5.0,
                "base_price_list_rate": 5.0,
                "margin_type": "",
                "margin_rate_or_amount": 0.0,
                "rate_with_margin": 0.0,
                "discount_percentage": 0.0,
                "discount_amount": 0.0,
                "base_rate_with_margin": 0.0,
                "rate": 5.0,
                "amount": 5.0,
                "item_tax_template": null,
                "base_rate": 5.0,
                "base_amount": 5.0,
                "pricing_rules": "[]",
                "stock_uom_rate": 5.0,
                "is_free_item": 0,
                "net_rate": 5.0,
                "net_amount": 5.0,
                "base_net_rate": 5.0,
                "base_net_amount": 5.0,
                "billed_amt": 0.0,
                "valuation_rate": 0.0,
                "gross_profit": 5.0,
                "delivered_by_supplier": 0,
                "supplier": null,
                "weight_per_unit": 0.0,
                "total_weight": 0.0,
                "weight_uom": null,
                "warehouse": "Magasins - MM",
                "target_warehouse": null,
                "prevdoc_docname": null,
                "against_blanket_order": 0,
                "blanket_order": null,
                "blanket_order_rate": 0.0,
                "bom_no": null,
                "projected_qty": 0.0,
                "actual_qty": 0.0,
                "ordered_qty": 0.0,
                "planned_qty": 0.0,
                "work_order_qty": 0.0,
                "delivered_qty": 0.0,
                "produced_qty": 0.0,
                "returned_qty": 0.0,
                "additional_notes": null,
                "item_booking": "STO-BOOK-2022-00102",
                "page_break": 0,
                "item_tax_rate": "[]",
                "transaction_date": "2022-03-01",
                "doctype": "Sales Order Item",
                "__unsaved": 1
            }
        ],
        "pricing_rules": [],
        "taxes": [],
        "packed_items": [],
        "payment_schedule": [
            {
                "name": "242d92065b",
                "owner": null,
                "creation": "2022-03-01 18:31:45.484130",
                "modified": "2022-03-01 18:31:45.484130",
                "modified_by": "thierry@dokos.io",
                "parent": "SAL-ORD-2022-00116",
                "parentfield": "payment_schedule",
                "parenttype": "Sales Order",
                "idx": 1,
                "docstatus": 0,
                "payment_term": null,
                "description": null,
                "due_date": "2022-03-01",
                "mode_of_payment": null,
                "invoice_portion": 100.0,
                "discount_type": null,
                "discount_date": null,
                "discount": 0.0,
                "payment_amount": 5.0,
                "outstanding": 5.0,
                "paid_amount": 0.0,
                "discounted_amount": 0.0,
                "base_payment_amount": 5.0,
                "doctype": "Payment Schedule"
            }
        ],
        "sales_team": []
    }
}
```

::alert
Vous pouvez trouver d'autres méthodes d'API disponibles dans ce fichier: https://gitlab.com/dokos/dodock/-/blob/develop/frappe/client.py
::


## Créer une facture à partir d'une commande

Vous pouvez créer une facture depuis une commande existante en appelant l'API suivante:

`http://localhost:8000/api/method/erpnext.selling.doctype.sales_order.sales_order.make_sales_invoice`

Corps de l'appel:

```
{
    "source_name": "SAL-ORD-2022-00116"
}
```

Ensuite il ne vous reste plus qu'à poster la facture directement ou via les API de frappe.client

::alert
Vous pouvez modifier le contenu de la facture avant de la poster, pour changer les quantités ou montants facturés par exemple.
::



## Créer un paiement à partir d'une commande

Vous pouvez créer un paiement à partir d'une commande en appelant l'API suivante:

`http://localhost:8000/api/method/erpnext.accounts.doctype.payment_entry.payment_entry.get_payment_entry`

Corps de l'appel:

```
{
		"dt": "Sales Order",
		"dn": "SAL-ORD-2022-00116"
}
```

Ensuite il ne vous reste plus qu'à poster le paiement directement ou via les API de frappe.client