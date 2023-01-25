> ##### Comment nommer mes factures en fonction de l'exercice fiscal en cours ?

La numérotation des factures dépend de la règle de nommage du document "Facture de ventes".  
Par défaut, la règle est la suivante: `ACC-SINV-.YYYY.-`, YYYY représentant l'année de création de la facture, donc l'année en cours.  
Pour avoir l'exercice fiscal, il faut changer cette règle et mettre plutôt `ACC-SINV-.FY.-`, avec FY pour Fiscal Year.  
*Vous pouvez bien évidemment aussi changer également le préfixe.*  

::alert{type=warning}
L'exercice fiscal utilisé pour nommer vos factures sera l'exercice fiscal par défaut, défini dans les **Valeurs par défaut globales**
::