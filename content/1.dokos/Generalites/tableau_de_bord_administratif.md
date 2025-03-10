---
title: Le tableau de bord Administratif
---

Bienvenue dans Dokos, votre logiciel de gestion complet ! Le module **Administration** est votre centre de contrôle pour superviser l'ensemble du système.

## **Tableau de bord administratif**

![tableau\_de\_bord\_administratif](/generalites_dokos/administrer_son_site/module_administration_tableau_de_bord.png)

Sur le tableau de bord, vous pouvez visualiser :

- Le **nombre total d'utilisateurs actifs**
- Les **connexions en échec** des 30 derniers jours
- La **répartition des connexions par type d'utilisateur**

---

## **Journaux et suivi système**

![administration\_les\_journaux](/generalites_dokos/administrer_son_site/administration_les_journaux.png)

:br

### **Journal des erreurs**

Ce journal recense toutes les erreurs survenues sur le système, quelle que soit leur typologie. Rassurez-vous, la présence d'erreurs n'est pas nécessairement préoccupante ! Il est important d'analyser ces erreurs pour :

- Résoudre des problèmes techniques potentiels
- Identifier des dysfonctionnements sur votre site
- Obtenir des informations sur des processus qui ne se sont pas déroulés comme prévu

Si vous rencontrez des difficultés :

- **Sans contrat de support** : Ouvrez un ticket sur [Gitlab](https://gitlab.com/groups/dokos/-/issues)
- **Avec contrat de support** : Envoyez un email à <help@dokos.cloud>

**Note importante** : Le [forum](https://community.dokos.io/) est principalement dédié aux questions d'usage, tandis que [Gitlab](https://gitlab.com/groups/dokos/-/issues) est réservé aux problèmes techniques ou aux signalements de bugs.

### **Journal des tâches de fond programmées**

Ce journal vous permet de surveiller l'état des tâches automatisées. Portez une attention particulière aux tâches dont le statut est "**Échec**" - cela signifie que des processus programmés pour s'exécuter à intervalles réguliers n'ont pas pu être complétés pour diverses raisons.

### **Demandes d'intégration**

Cette section répertorie tous les événements reçus des sites externes, principalement les notifications envoyées par les passerelles de paiement. Par exemple, lors d'un paiement en ligne, vous recevez en temps réel les informations de la transaction, puis quelques secondes plus tard, un webhook de confirmation du statut du paiement. Si vous avez mis en place des passerelles de paiement, vérifiez régulièrement s'il y a des échecs, qui pourraient indiquer des transactions non finalisées.
