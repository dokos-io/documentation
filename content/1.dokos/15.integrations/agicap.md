---
title: Intégration Agicap
---

[Agicap](https://agicap.com) est un logiciel de gestion et de prévisions de trésorerie.  

Une application dédiée permet de synchronisez vos factures d'achat et de ventes avec Agicap pour améliorer vos prévisionnels et projections.  


## Installation

1. Installez [Dokos CLI & Dodock](https://doc.dokos.io/dodock/installation).

2. Une fois l'installation terminée, ajoutez l'application Agicap à votre bench en lançant
    ```
    $ bench get-app agicap --branch develop https://gitlab.com/dokos/agicap.git
    ```

<!-- > Exemple: Si vous souhaitez utiliser cette application avec Dodock/Dokos v3, vous devez utiliser la branche `develop`  
> `$ bench get-app agicap --branch develop https://gitlab.com/dokos/agicap.git` -->

3. Installez l'application Agicap sur votre site en lançant
    ```
    $ bench --site <sitename> install-app agicap
    ```

## Périmètre de l'intégration

Cette application permet de synchroniser vos factures de vente et vos factures d'achat avec Agicap.  
Vous pouvez connecter plusieurs sociétés et créer plusieurs comptes pour chacune des devises que vous utilisez.  

Actuellement le système synchronise les factures de vente et les factures d'achat une fois par heure.  
Les nouvelles factures créées des transactions en attente dans Agicap.  
En cas de modifications sur vos factures, les transactions attendues sont mises à jour sur Agicap.  
En cas d'annulation d'une facture, la transaction correspondante est supprimée sur Agicap.  

::alert{type=info}
La synchronisation est effectuée automatiquement une fois par heure
::

