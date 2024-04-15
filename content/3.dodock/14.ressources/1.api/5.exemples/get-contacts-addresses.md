---
title: Récupérer la liste des contacts et adresses associées à un client
description: 
published: true
date: 2022-03-01T18:40:06.850Z
tags: 
editor: markdown
dateCreated: 2022-03-01T18:40:06.850Z
---

# Contacts

Pour récupérer les contacts associés au client _Francis Charpentier_:

`http://localhost:8000/api/resource/Contact?filters=[["Dynamic Link", "link_doctype", "=", "Customer"], ["Dynamic Link", "link_name", "=", "Francis Charpentier"]]`


# Adresses


Par exemple pour récupérer les adresses associés au client _Francis Charpentier_:

`http://localhost:8000/api/resource/Address?filters=[["Dynamic Link", "link_doctype", "=", "Customer"], ["Dynamic Link", "link_name", "=", "Francis Charpentier"]]`