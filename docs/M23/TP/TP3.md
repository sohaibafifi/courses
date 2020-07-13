---
title: M23- TP3 Services réseaux
lang: fr-FR
actionText: M23- TP3 
actionLink: /M23/TP/TP3
sidebarDepth: 2	
---

## Objectifs
L'objectif de ce TP est :
- de mettre en place un serveur web APACHE2 .
- de mettre en place une machine LEMP qui utilise le service web NGINX.

## Outils

Plusieurs machines virtuelles derrière une RT-Box (machine virtuelle routeur) pour faire office de serveurs et de clients
la connaissance de votre cours de ce module...

## Serveur WEB 

Un serveur WEB est un logiciel capable de répondre à des requêtes HTTP qui lui sont soumises via une (ou plusieurs URL).
De nombreuses fonctionnalités peuvent être mises en service par l'administrateur :
- les pages fournies peuvent être protégées (accès contrôlé),
- l'accès des clients peut être limité en bande passante,
- les utilisateurs de la machine serveur peuvent avoir leur propre "site web",
- un serveur apache peut servir plusieurs sites virtuels,
- ...

Un serveur LEMP est une machine Linux sur laquelle sont installés des services particuliers corespondant aux produits suivants : **E**ngineX, **M**ySQL et **P**HP). Ce type de serveur permet de fournir aux clients des pages web dynamiques, des outils permettant de  gérer les Bases De Données (comme phpmyadmin) pouvant être installés.


### Installer les différents paquetages et configurer le service apache2 du serveur web

- **Installer les paquets**

    - Faire une installation de base du serveur apache2 en utilisant [la documentation officielle](http://doc.ubuntu-fr.org/apache2#installation)

    - Vérifier que votre service est fonctionnel.
    - Insérer dans votre compte-rendu tous les éléments qui permettent de s'assurer de la bonne configuration de votre service (méthodes, extrait de fichier de configuration, extrait des commandes  exécutées avec leur résultat, ...).

- **Configuration de base d'apache2**

    - Vérifier et compléter la configuration de votre serveur en suivant [la documentation officielle](http://doc.ubuntu-fr.org/apache2#fichiers_de_configuration) sans mettre en place (pour l'instant) ni les hôtes virtuels, ni la sécurisation du serveur.

    - Insérer dans votre compte-rendu tous les éléments qui permettent de s'assurer de la bonne configuration de votre service (méthodes, extrait de fichier de configuration, extrait des commandes  exécutées avec leur résultat, ...).

- **Pages protégées**

    - Créer, dans l'arborescence de votre serveur, un dossier à accès protégé accessible uniquement par les utilisateurs du groupe RT1 qui donneront un mot de passe valide. Pour cela, vous mettrez en oeuvre la procédure vue en cours et en TD et utiliserez  [la documentation officielle](http://doc.ubuntu-fr.org/apache2#htaccess)
    - Configurer votre serveur, relancer le service,  tester cette fonctionalité
    - Insérer dans votre compte-rendu tous les éléments qui permettent de s'assurer de la bonne configuration de votre service (méthodes, extrait de fichier de configuration, extrait des commandes  exécutées avec leur résultat, ...).

- **Limitation de la bande passante**

    - Modifier la configuration de votre site pour que tous les clients soit limités à 40Kb/s en utilisant la  [la documentation officielle](http://httpd.apache.org/docs/2.4/fr/mod/mod_ratelimit.html) suivante
    - Configurer votre serveur, relancer le service,  trouver une procédure de validation de cette fonctionnalité et la tester
    - Insérer dans votre compte-rendu tous les éléments qui permettent de s'assurer de la bonne configuration de votre service (méthodes, extrait de fichier de configuration, extrait des commandes  exécutées avec leur résultat, ...).

- **Pages personnelles**

    - Modifier la configuration de votre site pour que les utilisateurs (user dans l'exemple) de votre serveur disposent d'un espace web accessible via l'URL :  http://localhost/~user en utilisant la  [la documentation officielle](http://doc.ubuntu-fr.org/apache2#mod_userdir)
    - Configurer votre serveur, relancer le service,  tester cette fonctionnalité
    - Insérer dans votre compte-rendu tous les éléments qui permettent de s'assurer de la bonne configuration de votre service (méthodes, extrait de fichier de configuration, extrait des commandes  exécutées avec leur résultat, ...).

- **Serveurs virtuels**

    - Mettre en place deux serveurs virtuels accessibles par les URL suivants http://vendeur.localhost et  http://client.localhost en utilisant la [la documentation officielle](http://doc.ubuntu-fr.org/apache2#creation_d_hotes_virtuels) et [le lien fourni](https://httpd.apache.org/docs/current/fr/vhosts/examples.html)
    - Configurer votre serveur, relancer le service,  tester cette fonctionnalité
    - Insérer dans votre compte-rendu tous les éléments qui permettent de s'assurer de la bonne configuration de votre service (méthodes, extrait de fichier de configuration, extrait des commandes  exécutées avec leur résultat, ...).


### Machine LEMP

- Mettre en oeuvre un serveur LEMP à l'aide de [la documentation suivante](http://www.it-connect.fr/installer-un-serveur-lemp-linux-enginex-mysql-php)
:::warning  Attention
 vous supprimer le numéro de version dans les noms de paquets (pour PHP: php5-cli php5-fpm php5-mysql) afin d'aller chercher automatiquement la dernière version.
:::

- Installer **phpmyadmin**
- Mettre en place la gestion des fichiers de log de votre serveur nginx en mode DEBUG à l'aide de [la documentation suivante](http://www.it-connect.fr/gerer-le-log-level-sous-nginx)
- Insérer dans votre compte-rendu tous les éléments qui permettent de s'assurer de la bonne configuration de votre service (méthodes, extrait de fichier de configuration, extrait des commandes  exécutées avec leur résultat, ...).

