---
title: La gestion des utilisateurs
---

## **Types d'utilisateurs et groupes**

Dokos vous permet de gérer finement vos utilisateurs et leurs permissions :

### **Groupes d'utilisateurs**

L'intérêt principal des groupes est de permettre des assignations collectives. Par exemple, si vous avez plusieurs comptables, vous pouvez :

- Attribuer des tâches à l'ensemble du groupe comptabilité
- Mentionner le groupe dans les commentaires avec **@nomdugroupe** pour notifier tous ses membres

### **Types d'utilisateurs**

Cette fonctionnalité permet d'accorder des autorisations spécifiques à certaines catégories d'utilisateurs.

### **Suivi des activités**

Dokos offre deux journaux complémentaires :

- **Journal d'activité** : Retrace l'ensemble des actions réalisées sur votre plateforme
- **Journal d'accès** : Enregistre les connexions et déconnexions des utilisateurs

---

## **Rôles et autorisations**

### **Comprendre les rôles**

Un rôle est un ensemble d'autorisations groupées qui définit ce qu'un utilisateur peut faire dans le système.

![administration\_les\_roles](/generalites_dokos/administrer_son_site/administration_les_autorisations.png)

### **Configuration par défaut**

Par défaut, un nouvel utilisateur reçoit le rôle de "**client**", lui donnant uniquement accès au portail. Vous pouvez ensuite lui attribuer des rôles supplémentaires.

### **Structure des autorisations**

Pour chaque rôle, vous définissez :

- Les types de documents concernés
- Les actions autorisées (lecture, écriture, impression, annulation, validation)

Par exemple, un utilisateur avec le rôle "acheteur" pourra créer des contacts, gérer des adresses et des commandes fournisseurs, mais aura uniquement un droit de lecture sur les exercices fiscaux.

### **Niveaux d'autorisation**

Chaque champ sur vos formulaires est associé à un niveau d'autorisation (de 0 à 9 par défaut), permettant une gestion plus fine des accès :

**Exemple pratique** : Dans une demande de congés, certains éléments peuvent être réservés au manager (niveau 1). De même, un employé qui saisit ses notes de frais ne verra pas la partie comptable, accessible uniquement aux comptables disposant d'une autorisation de niveau supérieur.

### **Personnalisation des rôles**

Vous avez la flexibilité de :

- Créer vos propres rôles
- Désactiver les rôles standard
- Dupliquer des rôles existants pour les adapter

**Bonne pratique** : Pour des modifications importantes, il est recommandé de désactiver les rôles standard et de créer vos propres rôles personnalisés. Cela évite que vos personnalisations ne soient écrasées lors des mises à jour.

### **Profils de rôle**

![administrateurs\_les\_profils](/generalites_dokos/administrer_son_site/administration_profil_de_role.png)

Les profils de rôle vous permettent de combiner plusieurs rôles pour créer des ensembles cohérents d'autorisations. Par exemple, dans l'équipe RH, vous pourriez avoir :

- Un profil "Responsable RH" avec des droits étendus
- Un profil "Utilisateur RH" avec des droits plus limités comme pour les stagiaires

Un utilisateur peut se voir attribuer plusieurs profils selon ses responsabilités.

#### **Rôles spéciaux**

- **Responsable système** : Accès complet à l'administration du système
- **Invité** : Utilisé pour les utilisateurs non connectés

### **🚫 Restriction par espace de travail**

Les profils de module vous permettent de contrôler quels modules sont visibles pour chaque utilisateur :

**Important** : Les profils de module contrôlent uniquement la visibilité des espaces de travail dans la barre latérale, mais n'affectent pas les autorisations. Un utilisateur peut toujours accéder à des documents via la recherche s'il dispose des autorisations nécessaires.

Cette fonctionnalité puissante vous permet de limiter l'accès des utilisateurs à certaines données.

### **Exemple concret**

Imaginons que votre entreprise gère deux sociétés : Dokos et Mappemonde. Si Raphaëlle est salariée de Dokos, vous pouvez restreindre son accès pour qu'elle ne voie que les documents liés à Dokos.

### **Fonctionnement**

Les restrictions s'appliquent automatiquement à tous les documents contenant le champ spécifié (par exemple "société"). Vous pouvez également :

- Définir une valeur par défaut pour les nouveaux documents créés par l'utilisateur
- Masquer les descendants (utile dans une structure de holding avec filiales)
- Appliquer des restrictions par département, centre de coûts, ou même sur des champs personnalisés

**Attention** : Pour les employés, des restrictions sont créées automatiquement lors de l'association d'un utilisateur à un profil employé. Vérifiez toujours ce paramètre.
