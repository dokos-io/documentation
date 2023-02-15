---
title: Les paramètres du système
---

# Les paramètres du système
Le paramètre système contient les paramètres de configuration du compte à l'échelle du système.

Vous pouvez localiser DOKOS pour utiliser un fuseau horaire, une date, un nombre ou un format de devise particulier, et également définir l'expiration globale de la session via les paramètres système.

---

Pour ouvrir les paramètres système, allez sur :

> Accueil > Paramètres > **Paramètres système**

## 1. Sections des paramètres système

## 1.1 Général
- **Pays** : Vous pouvez définir le pays par défaut ici, il sera récupéré lors de la création de nouvelles adresses. Si votre entreprise possède plusieurs succursales dans différents pays, choisissez l'emplacement du siège social.
- **Fuseau horaire** : règle automatiquement l'heure en fonction du fuseau horaire.
- **Langue** : définit la langue globale du compte DOKOS. Ensuite, la langue sera modifiée dans tous les menus, transactions, rapports, etc.

## 1.2 Format de date et de nombre

- **Format de la date** : format dans lequel les dates seront affichées. Par exemple, jj.mm.aaaa ou mm / jj / aaaa. Cela dépend du formatage des dates dans votre région.
- **Format de l'heure** : format dans lequel l'heure sera affichée. Vous pouvez choisir d'afficher ( HH:mm:ss) ou de masquer les secondes en définissant l'option sur ( HH:mm).
- **Format des nombres** : Format dans lequel les nombres seront formatés. Par exemple, 1000 ou 1000,00.
- **Nombre de Décimales** : Le nombre de zéros affichés après la virgule décimale pour les quantités, etc. La plage est comprise entre 2 et 9. La valeur par défaut est 3.
- **Précision de la devise** : nombre de zéros affichés après la virgule décimale pour les valeurs de devise. S'il est laissé vide, il sera basé sur le format numérique .

## 1.3 Sauvegardes
Dans DOKOS, vous pouvez sauvegarder la base de données ainsi que vos fichiers. Les sauvegardes de base de données sont créées automatiquement tandis que les sauvegardes de fichiers doivent être téléchargées explicitement.

Ce champ indique le nombre de sauvegardes après lequel les plus anciennes seront supprimées. Par défaut, 3 sauvegardes sont enregistrées sur 24 heures. De nouvelles sauvegardes sont automatiquement créées au bout de quelques heures et la dernière sauvegarde écrasera la plus ancienne. Pour une sauvegarde des fichiers, cliquez sur le bouton **Télécharger** la sauvegarde des fichiers dans le formulaire **Télécharger les sauvegardes**.

::alert{type=warning}
Garder des sauvegardes régulières de votre système est une bonne pratique en cas d'accident et que vous souhaitez revenir en arrière ou simplement pour vos archives.
::

## 1.4 Exécution d'Opérations en Arrière-Plan

- **Conserver les logs pendant seulement 30 jours** : Si la case est cochée alors les utilisateurs pourront rester connectés à DOKOS durant 30 jours, au-délà, l'utilisateur sera déconnecté automatiquement et devra se connecter à nouveau pour accéder à DOKOS.
- **Ne lancer les tâches qu'une fois par jour si inactif depuis (jours)** : Les programmés seront exécutés une fois par jour pour les sites inactifs au bout de X jour(s). La valeur par défaut est 4. C'est-à-dire, si il n'y a eu aucune activité sur le site durant 4 jours, les tâches seront exécutées une seule fois par jour.

## 1.5 Autorisations

À l'aide des autorisations, vous pouvez limiter l'accès des utilisateurs aux types de documents. La limitation peut être basée sur des champs tels que Société, Territoire, Succursale, etc. 

Si la case Appliquer les autorisations utilisateur strictes est cochée et que l'autorisation utilisateur est définie pour un DocType pour un utilisateur, tous les documents pour lesquels la valeur du lien est vide ne seront pas affichés à cet utilisateur.

Cela se fait à partir de :

> Accueil > Utilisateurs et autorisations > Autorisations > **Autorisations utilisateur**

**Par exemple** : si vous définissez les autorisations utilisateur pour le territoire et que vous définissez la valeur sur Inde. Si la case à cocher est décochée, toutes les transactions (commandes client, devis) avec l'Inde et vide seront montrées aux utilisateurs.

Si la case à cocher Appliquer les autorisations utilisateur strictes est cochée, les documents dont le territoire est vide ne seront pas affichés aux utilisateurs.

## 1.6 Sécurité
- **Expiration de la session** : nombre d'heures d'inactivité après lesquelles vous serez déconnecté d'une session. Cela contribue à une meilleure sécurité. Par exemple, s'il n'y a aucune activité pendant 6 heures, votre compte sera déconnecté.
- **Expiration de la session Mobile** : expiration de la session lors de la connexion depuis un téléphone mobile.
- **Autoriser une seule session par utilisateur** : si vous souhaitez utiliser un seul ensemble d'informations d'identification pour plusieurs utilisateurs, cochez cette case. Le nombre de sessions simultanées peut être modifié sous User master. Les sessions de téléphonie mobile ne sont pas comptabilisées ici.
- **Autoriser la connexion à l'aide du numéro de mobile** : en cochant la case «Autoriser la connexion à l'aide du numéro de mobile», vous pouvez vous connecter à ERPNext en utilisant un numéro de mobile valide défini dans votre compte utilisateur.
- **Autoriser la connexion à l'aide du nom d'utilisateur** : autorise la connexion de l'utilisateur via son nom d'utilisateur défini dans le maître des utilisateurs .
- **Montrer l'erreur complète et autoriser le signalement des problèmes au développeur** : cela affichera toute l'erreur à l'écran et permettra de signaler les problèmes. Si vous avez des connaissances techniques dans ce domaine, vous pouvez vous faire une meilleure idée de l'erreur en lisant l'intégralité du message.
- **Supprimer les tags EXIF des images téléchargées** : les métadonnées stockées dans des fichiers image au format de fichier EXIF peuvent être exploitées pour obtenir des informations utilisateur sensibles. Cette option permet aux utilisateurs de supprimer ces données des images avant de les télécharger.

## 1.7 Mot de passe
- **Forcer l'utilisateur à réinitialiser le mot de passe** : nombre de jours après lequel une réinitialisation du mot de passe est obligatoire. 0 signifie pas de limite.
- **Activer la stratégie de mot de passe** : active un vérificateur de force de mot de passe afin que les utilisateurs doivent utiliser des mots de passe forts pour leur connexion.
- **Score minimum du mot de passe** : score pour le vérificateur de force du mot de passe

	Un score de 2 est moyen
	Un score de 3 est fort
	Un score de 4 est très fort
  
La complexité est basée sur le nombre de caractères, la capitalisation, les caractères spéciaux, etc.

**Limite de génération de lien de réinitialisation de mot de passe** : Ceci permet de limiter le nombre de demandes de réinitialisation de mot de passe par heure, la valeur par défaut est 3. Le paramétrer sur 0 autorisera un nombre illimité de demandes de génération de lien de réinitialisation de mot de passe.

## 1.8 Sécurité contre les attaques de type "force brute"

- **Autoriser les tentatives de connexion consécutives** : connexions consécutives après lesquelles vous serez verrouillé hors du compte pendant une période spécifique. Cela aide si un intrus tente de se connecter à votre compte.
- **Autoriser la connexion après un échec** : secondes après lesquelles une tentative de connexion sera autorisée après des tentatives infructueuses consécutives.

## 1.9 Authentification à Double Facteur

Les paramètres de l'authentification à deux facteurs peuvent être configurés ici.

En cochant **Activer l'authentification à deux facteurs**, les deux options suivantes s'affichent.

- **Contourner l' authentification à deux facteurs pour les utilisateurs qui se connectent à partir d'une adresse IP restreinte** : les utilisateurs qui se connectent à partir d'adresses IP restreintes ne seront pas invités à effectuer une authentification à deux facteurs. Vous pouvez restreindre les adresses IP du maître utilisateur dans le champ Restreindre IP.
- **Contourner la vérification d'adresse IP restreinte Si l' authentification à deux facteurs est activée** : Si cette case est cochée, tous les utilisateurs peuvent se connecter avec l'authentification à deux facteurs, que leur adresse IP soit restreinte ou non.

- **Méthode d'authentification à deux facteurs** : sélectionnez la méthode d'authentification à utiliser - application OTP, SMS ou e-mail.

- **Heure d'expiration de la page d'image QR Code** : Heure d'expiration de l'image QRCode si "OTP App" est sélectionné dans la méthode.
Nom de l'émetteur OTP du mot de passe à usage unique.

## 1.10 Email

- **Adresse e-mail de pied de page** : le nom, l'adresse et d'autres détails de l'organisation peuvent être ajoutés ici. Cela sera défini par défaut dans tous les e-mails sortants.
- **Désactiver le pied de page standard des e-mails** : si cette case est cochée, le pied de page standard des e-mails sera désactivé pour les e-mails sortants.
- **Masquer le pied de page dans les rapports par e-mail automatique** : si cette case est cochée, les pieds de page seront masqués dans les rapports par e-mail automatique.
- **Envoyer le lien de la vue Web du document dans l'e-mail** : ERPNext dispose d'une vue de portail à partir de laquelle des parties comme les clients et les fournisseurs peuvent s'inscrire et consulter l'historique de leurs commandes. Lorsque vous envoyez une transaction par e-mail à votre interlocuteur, vous pouvez également envoyer un lien Web pour afficher le même document sur le portail de votre compte ERPNext. Cette option activera cette fonctionnalité.

## 1.11 Rapport préparé
- **Activer la suppression automatique des rapports préparés** : Si la case est cochée, alors les rapports préparées seront supprimés automatiquement au bout de X jour(s) (voir point ci-dessous).
- **Période d'expiration des rapports préparés (en nombre de Jours)** : Le système supprimera automatiquement et définitivement les rapports préparés après ce nombre de jours/

## 1.12 Chat
- **Activer le chat** : cette option activera le chat intégré à l'application qui peut être utilisé pour communiquer avec d'autres employés.
