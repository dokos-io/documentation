---
title: API Jinja
description: 
published: true
date: 2022-03-02T07:15:10.868Z
tags: 
editor: markdown
dateCreated: 2021-01-14T14:04:34.408Z
---

Voici la liste de méthodes en whitelist que Dodock fourni pour l'utilisation dans les modèles Jinja.

## frappe.format
`frappe.format(value, df, doc)`

Formatte une valeur brute (enregistrée dans la base de donnée) dans un format présentable pour les utilisateurs.
Par exemple, converti 2020-09-08 en 08/09/2020

Usage
{% raw %}
```html
<div>{{ frappe.format('2020-09-08', {'fieldtype': 'Date'}) }}</div>

<!-- résultat -->
<div>09-08-2020</div>
```
{% endraw %}

## frappe.format_date
`frappe.format_date(date_string)`

Formatte une date en un format long lisible par utilisateur.

Usage
{% raw %}
```html
<div>{{ frappe.format_date('2020-09-08') }}</div>

<!-- résultat -->
<div>8 septembre 2020</div>
```
{% endraw %}

## frappe.get_url
`frappe.get_url()`

Renvoi l'URL du site

Usage
{% raw %}
```html
<div>{{ frappe.get_url() }}</div>

<!-- résultat -->
<div>https://dokos.io</div>
```
{% endraw %}

## frappe.get_doc
`frappe.get_doc(doctype, name)`

Renvoi un document grâce à son nom.

Usage
{% raw %}
```html
<div>
	{% set doc = frappe.get_doc('Task', 'TASK00002') %}
	{{ doc.title }} - {{ doc.status }}
</div>

<!-- résultat -->
<div>
	Acheter des oeufs - Ouvert
</div>
```
{% endraw %}

## frappe.get_all
`frappe.get_all(doctype, filters, fields, order_by, start, page_length)`

Renvoi une liste de tous les enregistrements d'un type de document.

```python
frappe.get_all(doctype, filters, fields, order_by, start, page_length)
```

Usage
{% raw %}
```html
<div>
	{% set tasks = frappe.get_all('Task', filters={'status': 'Open'}, fields=['title', 'due_date'], order_by='due_date asc') %}
	{% for task in tasks %}
	<div>
		<h3>{{ task.title }}</h3>
		<p>Date d'échéance: {{ frappe.format_date(task.due_date) }}</p>
	</div>
	{% endfor %}
</div>

<!-- résultat -->
<div>
	<div>
		<h3>Design du site web</h3>
		<p>Date d'échéance: 8 septembre 2020</p>
	</div>
	<div>
		<h3>Ajouter des méta-tags sur le site web</h3>
		<p>Date d'échéance: 22 septembre 2020</p>
	</div>
</div>
```
{% endraw %}

## frappe.get_list
`frappe.get_list(doctype, filters, fields, order_by, start, page_length)`

Similaire à `frappe.get_all` mais filtre les enregistrements en fonction des autorisations de l'utilisateur connecté.

## frappe.db.get_value
`frappe.db.get_value(doctype, name, fieldname)`

Renvoi la valeur d'un champ (ou une liste de valeurs) depuis un document.

Usage
{% raw %}
```html
<div>
	<span>
		{% set company_abbreviation = frappe.db.get_value('Company', 'Mon Tiers Lieux', 'abbr') %}
		{{ company_abbreviation }}
	</span>
	<div>
		{% set title, description = frappe.db.get_value('Task', 'TASK00002', ['title', 'description']) %}
		<h3>{{ title }}</h3>
		<p>{{ description }}</p>
	</div>
</div>

<!-- résultat -->
<div>
	<span>MTL</span>
</div>
```
{% endraw %}

## frappe.db.get\_single\_value
`frappe.db.get_single_value(doctype, fieldname)`

Renvoi la valeur d'un champ d'un type de document unique.

Usage
{% raw %}
```html
<div>
	<span>
		{% set timezone = frappe.db.get_single_value('System Settings', 'time_zone') %}
		{{ timezone }}
	</span>
</div>

<!-- résultat -->
<div>
	<span>
		Europe/Paris
	</span>
</div>
```
{% endraw %}

## frappe.get\_system\_settings
`frappe.get_system_settings(fieldname)`

Renvoi la valeur d'un champ des paramètres système.

Usage
{% raw %}
```html
<div>
	{% if frappe.get_system_settings('country') == 'France' %}
	<button>Payer avec GoCardless</button>
	{% else %}
	<button>Payer avec Stripe</button>
	{% endif %}
</div>

<!-- résultat -->
<div>
	<button>Payer avec GoCardless</button>
</div>
```
{% endraw %}

## frappe.get_meta
`frappe.get_meta(doctype)`

Renvoi les métadonnées d'un type de document. Elle contiennent des informations comme les champs ou le nom du champ du titre, le champ image, etc...

Usage
{% raw %}
```html
<div>
	<span>
		{% set meta = frappe.get_meta('Task') %}
		La tâche a {{ meta.fields | len }} champs.
		{% if meta.get_field('status') %}
		Elle a aussi un champ de statut.
		{% endif %}
	</span>
</div>

<!-- résultat -->
<div>
	<span>
		La tâche à 18 champs. Elle a aussi un champ de statut.
	</span>
</div>
```
{% endraw %}

## frappe.get_fullname
`frappe.get_fullname(user_email)`

Renvoi le nom complet de l'utilisateur auquel appartient cet email. Si aucun utilisateur n'est passé, le système considèrera qu'il s'agit de l'utilisateur connecté.

Usage
{% raw %}
```html
<div>
	<span>Le nom complet de martine@dokos.io est {{ frappe.get_fullname('martine@dokos.io') }}</span>
	<span>L'utilisateur connecté en ce moment s'appelle {{ frappe.get_fullname() }}</span>
</div>

<!-- résultat -->
<div>
	<span>Le nom complet de martine@dokos.io est Martine Dupond</span>
	<span>L'utilisateur connecté en ce moment s'appelle Jean Martin</span>
</div>
```
{% endraw %}

## frappe.render_template
`frappe.render_template(template_name, context)`

Interprète un modèle (chaine de caractères ou fichier) Jinja avec son contexte.

Usage
{% raw %}
```html
<div>
	<!-- interprète un fichier jinja -->
	{{ frappe.render_template('templates/includes/footer/footer.html', {}) }}

	<!-- interprète une chaine de caractères Jinja -->
	<p>{{ frappe.render_template('{{ foo }}', {'foo': 'bar'}) }}</p>
</div>

<!-- résultat -->
<div>
	<footer class="web-footer">
		<!-- footer complet html -->
	</footer>
	<p>bar</p>
</div>
```
{% endraw %}

## frappe._
`frappe._(string)` or `_(string)`

Usage
{% raw %}
```html
<div>
	<p>{{ _('This string should get translated') }}</p>
</div>

<!-- résultat -->
<div>
	<p>Cette chaine de caractère doit être traduite</p>
</div>
```
{% endraw %}

## frappe.session.user

Renvoi le nom de l'utilisateur de la session en cours

## frappe.session.csrf_token

Renvoi le jeton CSRF de la session en cours

## frappe.form_dict

Si le modèle est évalué dans une requête web, `frappe.form_dict` renvoi un dictionnaire de paramètres de requête, sinon il renvoi `None`.

## frappe.fmt_money
`frappe.fmt_money(amount, precision, currency, format)`

Formatte une valeur brute (enregistrée dans la base de donnée) dans un format présentable pour les utilisateurs.
Par exemple, converti 2000 en 2000,00 €

Usage
{% raw %}
```html
<div>{{ frappe.utils.fmt_money(doc.grand_total or '', currency=doc.currency) }}</div>

<!-- résultat -->
<div>2000,00 €</div>
```
{% endraw %}