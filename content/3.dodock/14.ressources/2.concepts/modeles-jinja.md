---
title: Modèles Jinja
---

Le langage Jinja est utilisé dans _Dokos_ pour créer des modèles d'email, des notifications et des formats d'impression personnalisés complexes en y intégrant des variables. Il permet de mélanger du language HTML avec des variables en Python.

Pour en savoir plus sur le langage Jinja et avoir accès à la documentation: [Jinja](https://palletsprojects.com/p/jinja/)

## Les variables

Lorsque vous envoyez un email depuis un document, qu'un notification est envoyée ou que vous imprimer un document, vous avez accès à tous les champs qui composent votre document de référence.  
Vous pouvez donc les appeler en utilisant la syntaxe:  

```
{{ doc.nom_du_champ }}
```

`doc` fait référence au document de référence  - certain document peuvent également donner accès à d'autres variables - et `nom_du_champ` doit être remplacé par le nom du champ correspondant.  
La liste des champs composant un document est disponible en cliquant sur l'onglet "Menu > Personnaliser". Le nom du champ est la valeur de la colonne "Nom" du tableau des champs.  

## Les méthodes

Souvent l'accès à une variable n'est pas suffisant pour afficher les informations qui nous intéressent et il faut qu'on puisse soit changer le format d'affichage de la valeur soit avoir accès aux valeurs renseignées dans d'autres documents.  

_Dokos_ donne accès à un certain nombre de méthodes qui peuvent être appelées en Jinja pour ces besoins:

```py
json # module json
dict # dict interne
frappe._ # méthode de traduction
frappe._dict # méthode interne frappe._dict
frappe.flags # flags globaux

# FORMATTAGE
frappe.format # frappe.format_value(value, dict(fieldtype='Currency'))
frappe.format_value # frappe.format_value(value, dict(fieldtype='Currency'))
frappe.date_format # format de date par défaut
frappe.format_date # retourne une date sous la forme "1er septembre 2019"

# SESSION
frappe.form_dict # paramètres de requêtes / formulaires
frappe.request # objet de requête
frappe.response # objet de réponse
frappe.session.user # utilisateur actuel
frappe.session.csrf_token # jeton CSRF de la session en cours
frappe.user  # utilisateur actuel
frappe.get_fullname # nom complet de l'utilisateur actuel
frappe.get_gravatar # frappe.utils.get_gravatar_url
frappe.full_name = # nom complet de l'utilisateur actuel

# ACCES AUX DONNEES
frappe.get_meta # obtenir l'objet de métadonnées
frappe.get_doc
frappe.get_cached_doc
frappe.get_list
frappe.get_all
frappe.get_system_settings

# BASE DE DONNEE
frappe.db.get_list
frappe.db.get_all
frappe.db.get_value
frappe.db.get_single_value
frappe.db.get_default
frappe.db.escape

# UTILITAIRES
frappe.msgprint # msgprint
frappe.get_hooks # hooks de l'application
frappe.utils # méthodes de frappe.utils
frappe.render_template # frappe.render_template,
frappe.get_url # frappe.utils.get_url
frappe.socketio_port # port pour socketio
frappe.sanitize_html # Assainissement du HTML
style.border_color # '#d1d8dd'
guess_mimetype = mimetypes.guess_type,
html2text = html2text,
dev_server # Vrai si en mode développeur
```


## Exemple de modèle d'email


Dans cet exemple, on peut utiliser ce modèle dans tous les documents qui ont un champ "contact_person" (Personne de contact). Dans notre cas nous comptons utiliser ce modèle depuis les factures de vente.

Le script va d'abord aller chercher le contenu de la fiche "Contact" correspondant à la personne renseignée dans le champ "contact_person" et l'enregistrer dans une variable "contact".  
On a ensuite accès aux valeurs de tous les champs de cette fiche contact et on peut récupérer le prénom de notre contact dans notre email.

```
{% set contact = frappe.get_doc("Contact", contact_person) %}
Bonjour {{ contact.first_name }},

Veuillez trouver ci-joint votre facture.

Le total à régler est de {{ doc.grand_total }}

Bien cordialement,

XXX

```

::alert{type=warning}
Vous avez sûrement remarqué que dans les modèles d'email on n'utilise pas le préfixe `doc.` avant d'appeler un champ de notre document de référence.
C'est une différence historique de fonctionnement entre les modèles d'emails et les autres documents qui sera probablement corrigée à l'avenir.
::


## Exemple de notification

Nous souhaitons envoyer une notification automatique lorsque quelqu'un fait une réservation de salle en ligne.
Contrairement aux modèles d'email que l'on peut modifier dans l'éditeur d'email avant envoi, les notifications sont envoyées toutes seules et il faut donc s'assurer qu'elles sont correctement formattées. On va donc utiliser du HTML dans notre modèle pour garantir la structure de notre email.

Cet exemple est un email envoyé lors de la création de la commande correspondant à la validation de la réservation - lorsque l'utilisateur·rice clique sur "Passer la commande" dans son panier.

```html
<!--On affiche directement le nom du contact ou rien si ce champ n'est pas rempli-->
<p>Bonjour {{ doc.contact_display or "" }},</p>

<p>Merci pour votre réservation, celle-ci est bien prise en compte.</p>
<p>En voici le détail :</p>

<!--On affiche le détail de sa réservation dans un tableau. Vous pouvez utiliser la librairie Bootstrap pour le formattage.-->
<table class="table table-bordered">
	<thead>
		<tr>
            <th>Description</th>
            <th>Heure et date</th>
		</tr>
	</thead>
	<tbody>
        <!--On itère sur les différentes lignes de la commande pour en imprimer le détail-->
        {% for item in doc.items %}
        <!--On utilise la méthode frappe.db.get_value pour récupérer l'heure de début et l'heure de fin de la réservation d'article correspondant à la ligne de commande-->
        {% set booking_start = frappe.db.get_value("Item Booking", item.item_booking, "starts_on") %}
        {% set booking_end = frappe.db.get_value("Item Booking", item.item_booking, "ends_on") %}
        <tr>
            <td>{{ item.description or "" }}</td>
            <td>
                <!--On utilise la méthode frappe.utils.formatdate pour formatter la date de début de la réservation-->
                <span>{{ frappe.utils.formatdate(booking_start) }} </span>
                <!--On utilise la méthode frappe.utils.get_time pour récupérer l'heure de début et de fin de la réservation et on la formatte avec la méthode standard Python strftime-->
                <span>{{ frappe.utils.get_time(booking_start).strftime("%H:%M") }} - {{ frappe.utils.get_time(booking_end).strftime("%H:%M") }}</span>
            </td>
        </tr>
        <!--On indique à Jinja que notre itération s'arrête là-->
        {% endfor %}
	</tbody>
</table>


<br>
<p>Si vous avez une question ou besoin d'information pour préparer votre venue, n'hésitez pas à revenir vers moi.</p>

<p>A bientôt,</p>

<p>XXXXX</p>
```


## Exemple de format d'impression

Il est possible de créer vos propres formats d'impression personnalisés en Jinja dans _Dokos_.
Voici un exemple de facture entièrement personnalisée:

```html
{% if letter_head and not no_letterhead %}
<div class="letter-head">{{ letter_head }}</div>
{% endif %}
<div class="row">
	<div class="col-xs-6 col-xs-push-6">
		<div class="row">
			{% set salutation = frappe.db.get_value("Customer", doc.customer, "salutation") %}
			<div class="col-xs-12 text-left "><strong>{{ salutation or '' }} {{ doc.customer_name }}</strong></div>
		</div>
		{% if doc.customer_address %}
            {% set client_address = frappe.get_doc("Address", doc.customer_address) %}
            <div class="row">
                <div class="col-xs-12 text-left">
                    {{ client_address.address_line1 }}<br> {% if client_address.address_line2 %}{{ client_address.address_line2 }}<br>{% endif %} {{ client_address.pincode }} {{ client_address.city }}<br> {{ client_address.country }}
                </div>
            </div>
		{% endif %}
	</div>
</div>
{% if doc.print_heading_template %}
    {{ frappe.render_template(doc.print_heading_template, {"doc":doc}) }}
{% else %}
    <div class="print-heading">
        <h2>{{ doc.select_print_heading or (doc.print_heading if doc.print_heading != None else _(doc.doctype)) }}</h2>
    </div>
{% endif %}
{%- if doc.meta.is_submittable and doc.docstatus==0 and (print_settings==None or print_settings.add_draft_heading) -%}
    <div class="text-center" document-status="draft">
        <h4 style="margin: 0px;">{{ _("DRAFT") }}</h4>
    </div>
{%- endif -%}
{%- if doc.meta.is_submittable and doc.docstatus==2-%}
    <div class="text-center" document-status="cancelled">
        <h4 style="margin: 0px;">{{ _("CANCELLED") }}</h4>
    </div>
{%- endif -%}
<div>
	<div id="footer-html" class="visible-pdf">
		{% if not no_letterhead and footer %}
		<div class="letter-head-footer visible-pdf">
			{{ footer }}
		</div>
		{% endif %}
		<p class="text-center small page-number visible-pdf">
			{{ _("Page {0} of {1}").format('<span class="page"></span>', '<span class="topage"></span>') }}
		</p>
	</div>

	<div class="row">
		<div class="col-xs-6">
      {% set account_manager = frappe.db.get_value("Customer", doc.customer, "account_manager") %}
      {% if account_manager %}
      {% set user = frappe.get_doc("User", account_manager) %}
			<div class="row">
				<div class="col-xs-4 text-left"> <label>{{ _("Contact") }}</label> </div>
				<div class="col-xs-8 text-left ">
					<strong>{{ user.first_name or ''}} {{ user.last_name or '' }}</strong></div>
			</div>
			<div class="row">
				<div class="col-xs-4 text-left"> <label>{{ _("Email") }}</label> </div>
				<div class="col-xs-8 text-left ">
					{{ user.email or ''}}</div>
			</div>
			<div class="row">
				<div class="col-xs-4 text-left"> <label>{{ _("Phone") }}</label> </div>
				<div class="col-xs-8 text-left ">
					{{ user.phone or ''}}</div>
			</div>
      {% endif %}
		</div>

		<div class="col-xs-6">
			<div class="row">
				<div class="col-xs-5 text-left"><label>{{ _("Invoice Number") }}</label></div>
				<div class="col-xs-7 text-left ">{{ doc.sub_heading if doc.sub_heading != None else doc.name }}</div>
			</div>
			<div class="row">
				<div class="col-xs-5 text-left"> <label>{{ _("Date") }}</label> </div>
				<div class="col-xs-7 text-left ">{{ doc.get_formatted("posting_date") or ''}}</div>
			</div>
			<div class="row">
				<div class="col-xs-5 text-left"> <label>{{ _("Due Date") }}</label> </div>
				<div class="col-xs-7 text-left">
					{{ doc.get_formatted("due_date") or ''}}</div>
			</div>
		</div>
	</div>

	<table class="table table-condensed table-bordered">
		<tr>
			<th>{{ _("Description") }}</th>
			<th>{{ _("Quantity") }}</th>
			<th class="text-right">{{ _("Rate") }}</th>
			<th class="text-right">{{ _("Amount") }}</th>
		</tr>
		{%- for row in doc.items -%}
		<tr>
			<td style="width: 55%;">{{ row.item_name or '' }}</td>
			<td style="width: 15%;">{{ row.get_formatted("qty") }} {{ row.stock_uom }}</td>
			<td style="width: 15%; text-align: right;">

				{{ row.get_formatted("rate", doc) or ''}}
				<td style="width: 15%; text-align: right;">{{ row.get_formatted("amount", doc) or ''}}</td>
		</tr>
		{%- endfor -%}
		</tbody>
	</table>

	<div class="row">
		<div class="col-xs-6 text-right"></div>
		<div class="col-xs-4 text-right"><label>{{ _("Total") }}</label></div>
		<div class="col-xs-2 text-right">{{ doc.get_formatted("total") or '' }}</div>
	</div>
	<br>
    {%- if doc.discount_amount -%}
        <div class="row">
            <div class="col-xs-6 text-right"></div>
            <div class="col-xs-4 text-right"><label>{{ _("Discount") }}</label></div>
            <div class="col-xs-2 text-right">- {{ doc.get_formatted("discount_amount") }}</div>
        </div>
        <div class="row">
            <div class="col-xs-6 text-right"></div>
            <div class="col-xs-4 text-right"><label>{{ _("Net Total") }}</label></div>
            <div class="col-xs-2 text-right">{{ doc.get_formatted("net_total") or '' }}</div>
        </div>
        <br>
    {%- endif -%}
    {%- for row in doc.taxes -%}
        {%- if row.tax_amount_after_discount_amount -%}
            <div class="row">
                <div class="col-xs-6 text-right"></div>
                <div class="col-xs-4 text-right"><label>{{ row.description }}</label></div>
                <div class="col-xs-2 text-right">{{ row.get_formatted("tax_amount_after_discount_amount", doc) }}</div>
            </div>
	    {%- endif -%}
    {%- endfor -%}

	{%- if doc.taxes or doc.discount_amount -%}
        <br>
        <div class="row">
            <div class="col-xs-6 text-right"></div>
            <div class="col-xs-4 text-right"><label>{{ _("Grand Total") }}</label></div>
            <div class="col-xs-2 text-right"><strong>{{ doc.get_formatted("grand_total") }}</strong></div>
        </div>
	{% endif %}
	{% set customer = frappe.get_doc("Customer", doc.customer) %}
	{% if customer.tax_id %}
        <br>
        <div class="row">
            <div class="col-xs-2 text-left"><label>{{ _("Customer VAT N°") }}</label></div>
            <div class="col-xs-10">{{ customer.tax_id }}</div>
        </div>
        </div>
	{% endif %}
	<br>
    {% if doc.remarks -%}
        <div class="row">
            <div class="col-xs-2 text-left"><label>{{ _("Remarks") }}</label></div>
            <div class="col-xs-10">{{ doc.remarks }}</div>
        </div>
	{%- endif %}

	<br>
	<div class="row">
		<div class="col-xs-12 text-left"><label>{{ _("IBAN") }}</label></div>
	</div>
	<div class="row">
		<div class="col-xs-12 text-left">
            <p>ABCXXXXXXXXXXXXXX</p>
        </div>
	</div>

	<p style="page-break-after:always;"></p>

	<div class="row">
		<div class="col-xs-12 text-left">{{ doc.terms or '' }}</div>
	</div>
</div>
```