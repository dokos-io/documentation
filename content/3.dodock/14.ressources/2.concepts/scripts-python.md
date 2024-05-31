---
title: Scripts serveur Python
---

**Un script serveur Python vous permet d'écrire un script exécuté sur le serveur et déclenché via un événement de document ou via un appel à l'API web**

## 1. Comment créer un script serveur en Python

Pour créer un script serveur

1. Vous devez ajouter la clé `server_script_enabled` et la définir à `true` (ou `1`) dans le fichier common\_site\_config.json du bench.
1. Pour ajouter / modifier un script serveur, assurez-vous d'avoir le rôle **Gestionnaire de script**
1. Créez un nouveau script serveur via "Nouveau script serveur" dans la barre d'outils
1. Choisissez le type de script serveur (Evénement de document / API)
1. Choisissez le type de document de référence et le nom de l'événement, ou le nom de la méthode, ajoutez votre script et enregistrez.

> Depuis 2024

## 2. Fonctionnalités

### 2.1 Autoriser les scripts serveur

Les scripts serveur doivent être activés via le fichier common\_site\_config.json ou avec la ligne de commande suivante :

```sh
bench set-config -g server_script_enabled true
```

### 2.2 Evénements de document

Pour les scripts qui sont lancés via des événements de documents, vous devez définir le type de document de référence et nom de l'événement générateur

- Avant l'insertion
- Avant l'enregistrement
- Après l'enregistrement
- Avant la validation
- Après la validation
- Avant l'annulation
- Après l'annulation
- Avant la suppression
- Après la suppression

### 2.3 Scripts API

Vous pouvez créer une nouvelle API qui sera accessible via `/api/method/[methodname]` en sélectionnant le type de script "API"

Si vous voulez qu'un utilisateur invité (non connecté) accède à l'API, cochez la case "Autoriser les invités".

La réponse sera envoyés dans un objet de type `frappe.response["message"]`

### 2.3 Securité

Dokos utilise la librairie RestrictedPython pour restreindre l'accès aux méthodes disponibles pour les scripts Python. Seules les méthodes sûres, listées ci-dessous sont disponibles dans les scripts serveur.

```py
json # module json
dict # dict interne
_ # méthode de traduction
_dict # méthode interne frappe._dict
frappe.flags # flags globaux

# FORMATTAGE
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
log # création d'un log dans la console du navigateur
frappe.log_error # création d'un log d'erreur
frappe.get_hooks # hooks de l'application
frappe.utils # méthodes de frappe.utils
frappe.render_template # frappe.render_template,
frappe.get_url # frappe.utils.get_url
frappe.socketio_port # port pour socketio
frappe.sanitize_html # Assainissement du HTML
style.border_color # '#d1d8dd'
guess_mimetype = mimetypes.guess_type
html2text = html2text
dev_server # Vrai si en mode développeur
```

## 3. Exemples

### 3.1 Changer la valeur d'une propriété avant enregistrement

Type de script: **Avant l'enregistrement**

```py
if "test" in doc.description:
	doc.status = 'Closed'
```

### 3.2 Validation personnalisée

Type de script:: **Avant l'enregistrement**

```py
if "validate" in doc.description:
	raise frappe.ValidationError
```

### 3.3. Auto création d'une ToDo

Type de script: **Après l'enregistrement**

```py
if doc.allocted_to:
    frappe.get_doc(dict(
        doctype = 'ToDo'
        owner = doc.allocated_to,
        description = doc.subject
    )).insert()
```

### 3.4 API

- Type de script: **API**
- Nom de la méthode: `test_method`

```py
frappe.response['message'] = "hello"
```

Requête: `/api/method/test_method`

### 3.5 Création d'une réservation d'articles quand d'autres salles sont réservées

- Type de script: **Après l'enregistrement**

:man_office_worker: Le cas d’usage (réel)
Un tiers-lieu a deux salles de réunions : la salle 1 (1ère étage) et 2 (2e) qu’ils louent à des assos, entreprises etc. Ils souhaitent proposer la salle 1 pour du coworking lorsqu’elle n’est pas utilisée avec à terme la possibilité pour les usagers de réserver eux-mêmes en ligne.

:thinking: Problème : il faut pouvoir empêcher la réservation du coworking quand les deux salles sont louées.

:bulb: Une solution : Un script Python qui vient automatiquement réserver tout les créneaux de coworking lorsque il y a chevauchement entre les réservations de la salle 1 et 2.

```py
#****Script parameters****
master_room1 = "Salle réunion 1"
master_room2 = "Salle réunion 2"
slave_room = "Salle de coworking"

# Constraint: If two master rooms are booked at the same time, then the slave room is booked
# too during the overlap
#****0/ Script only does something if item is one of the two master rooms****
if doc.item == master_room1 or doc.item == master_room2:
    #****1/ Get list of bookings confirmed on the same day, exclusive of the slave room****
    booking_list = frappe.db.get_list('Item Booking',
        filters=[
            ['status','=', 'Confirmed'],
            ['name','!=', doc.name],
            ['item', '!=', slave_room],
            ['starts_on','>=',frappe.utils.getdate(doc.starts_on)],
            ['starts_on' ,'<',frappe.utils.add_to_date(frappe.utils.getdate(doc.ends_on),days=1) ]
        ],
        fields=['name'],
        as_list=True
    )
    # Assign datetime data to variables for clearer code
    start1 = frappe.utils.get_datetime(doc.starts_on)
    end1 = frappe.utils.get_datetime(doc.ends_on)
    #****2/ Cycle through all the slots identified to check for overlaps****
    for x in booking_list:
        item_booking = frappe.get_doc('Item Booking', ''.join(x))
        # Assign datetime data to variables for clearer code
        start2 = frappe.utils.get_datetime(item_booking.starts_on)
        end2 = frappe.utils.get_datetime(item_booking.ends_on)
        #-- Conditions to check for overlaps (hard to get one's head around without a schematic) --
        # Initialisation of a flag to check if one of the condition is met
        overlapflag = 0
        # Initialisation of slave start and end as the same as current doc
        slavestart = start1
        slaveend = end1
        # Tail of previous slots overlaps with current doc
        if end2 > start1 and end2 < end1:
            slaveend = end2
            overlapflag = overlapflag + 1
        # Start of previous slots overlaps with tail of current doc
        if start2 > start1 and start2 < end1:
            slavestart = start2
            overlapflag = overlapflag + 1
        # Current doc is completely contained by previous slot
        if start2 < start1 and end2 > end1:
            slavestart = start1
            slaveend = end1
            overlapflag = overlapflag + 1
        #****3/Create a new slot to book the room if an overlap has been found****
        if overlapflag:
            # Get number of simultaneous bookings allowed
            slave_item = frappe.get_doc("Item", slave_room)
            n_slots = slave_item.simultaneous_bookings_allowed
            frappe.msgprint("Nombre de slots = " + str(n_slots))
            # Create enough slots to fill the slave room
            for x in range(n_slots):
                frappe.msgprint("Création d'une réservation pour l'article : " + slave_room)
                slave = frappe.get_doc({
                    "doctype": "Item Booking",
                    "title" : "résa scriptée",
                    "item" : slave_room,
                    "status" : "Confirmed",
                    "starts_on" : slavestart,
                    "ends_on" : slaveend
                    })
                slave.insert()
        overlapflag = 0
    else:
        pass
```

