---
title: Facteur de conversion
description: Convertissez vos unités de mesure
---

# Les facteurs de conversion

Les facteurs de conversion permettent à Dokos de convertir des unités de mesure entre elles.  
La flexibilité de la configuration des unités de mesure permet de définir ses propres facteurs de conversion entre deux unités de mesure.

La catégorie sert uniquement à catégoriser vos conversions afin de les retrouver plus facilement.


# Pour les réservations d'article

Afin que le système soit capable de convertir les unités de mesure de vente en minutes pour calculer les créneaux disponibles, vous devez configurer un ou plusieurs facteurs de conversion d'unité de mesure.

Vérifiez que vous avez un facteur de conversion pour toutes vos unités de mesure de vente et de stock pour une minute. Ici l'unité de mesure "Minute" correspond à celle définie dans le document [Paramètres du lieu](/fr/venue/venue-settings).

|De        |Vers    |Valeur           |
|------------|------|----------------|
|Unité de mesure de vente|Minute|Minute/Unité de mesure de vente|


> Si vous prévoyez de vendre des créneaux à l'heure ou à la journée, assurez-vous d'avoir au moins ces deux facteurs de conversion:
> 
> |De|Vers    |Valeur|
> |----|------|------|
> |Heure|Minute|60   |
> |Jour |Minute|480  |
> 
> Veuillez noter qu'ici, 1 jour correspond à 480 minutes, car nous considérons que, d'un point de vue commercial, nous vendons 8 heures par jour.
> Vous pouvez, bien sûr, ajuster cette valeur en fonction de vos besoins métiers.