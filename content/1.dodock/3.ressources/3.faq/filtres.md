> ##### Je dispose de l'arbre de groupes d'articles suivant et je souhaite filtrer sur tous les articles appartenant au groupe parent *Produits*

::card
#title
Groupes d'articles
#description
- **Produits**
    - *Catégorie A*
    - *Catégorie B*
    - *Catégorie C*
    - *Catégorie D*
::

En filtrant sur les `Descendants de` **Produits**, je peux obtenir tous les articles associés aux groupes d'articles *Catégorie A*, *Catégorie B*, *Catégorie C* ou *Catégorie D*
Si je sélectionne `Egal ou descendants de` **Produits**, je peux obtenir tous les articles associés aux groupes d'articles *Produits*, *Catégorie A*, *Catégorie B*, *Catégorie C* ou *Catégorie D*

::alert{type=warning}
Il est recommandé de ne jamais sélectionner un *groupe parent* dans une transaction.  
Celle-ci risquerait de ne pas être comptabilisée correctement dans les rapports, puisque le système s'attend à additionner les montants des *enfants* pour obtenir les montant applicable au *groupe parent*
::