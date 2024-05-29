# Synchronisation avec Google Agenda

ToobibPro permet de synchronisez vos rendez-vous avec Google Agenda.
Vous pouvez voir tous vos rendez-vous enregistrés dans ToobibPro, les modifier ou en créer de nouveaux depuis votre agenda Google.

## Lier ToobibPro et Google Agenda

Allez dans `Rendez-vous > Google Agenda`.
Dans cette section, vous pouvez créer autant d'agendas Google que vous le souhaitez.  

Pour synchroniser les rendez-vous de ToobibPro, sélectionnez l'option **Rendez-vous**.

![Nouveau Google Agenda](/content/maia/appointments/google_calendar.gif)

:::warning Attention
Il faut que chaque sage-femme ait son propre agenda pour que logiciel puisse attribuer correctement les rendez-vous que vous créez dans Google Agenda.
:::


Une fois créé, il ne vous reste plus qu'à attribuer cet agenda à une sage-femme.

Dans chaque fiche d'informations professionnelles, liez l'agenda correspond à chaque sage-femme.  
Vous pouvez également cocher l'option `Synchroniser tous les événements avec Google Agenda par défaut` pour que tous les rendez-vous de cette sage-femme soient automatiquement synchronisés avec son agenda Google.   

![Liaison du Google Agenda](/content/maia/appointments/link_google_calendar.png)


## Synchronisation des rendez-vous

Il est possible d'activer ou désactiver la synchronisation de chaque rendez-vous directement dans la fiche du rendez-vous.  
Pour activer la synchronisation, cochez la case `Synchroniser avec Google Agenda`.  
L'agenda sera automatiquement récupéré depuis la fiche d'informations professionnelles de la sage-femme.  
Vous pouvez le changer si vous souhaitez synchroniser ce rendez-vous avec un autre agenda.  

![Synchronisation des rendez-vous](/content/maia/appointments/sync_booking.png)

:::callout 
L'option `Synchroniser avec Google Agenda` est cochée par défaut si vous avez activé `Synchroniser tous les événements avec Google Agenda par défaut` dans votre fiche d'informations professionnelle.  
Il en est de même pour les rendez-vous créés en ligne par vos patientes.  
:::

Vous pouvez modifier vos rendez-vous sur les deux plateformes, en prenant en compte les limitations suivantes:
- Si vous créez un événement dans Google Agenda, cela créera forcément un événement personnel dans ToobibPro
- Si vous modifier un événement au sein d'une récurrence, le changement ne sera pas pris en compte dans ToobibPro. Il faut que vous changiez toutes les occurences pour que cela soit réflété dans ToobibPro.

:::callout{icon="i-heroicons-exclamation-triangle" color="amber"}
Lorsque vous créez un rendez-vous, la modification dans Google Agenda est quasi immédiate, tandis que si vous créez/modifiez un événement sur Google Agenda, il peut mettre une minute à être créé dans ToobibPro.
:::