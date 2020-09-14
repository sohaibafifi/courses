---
title: M23- TP1 Commandes UNIX
lang: fr-FR
actionText: M23- TP1 
actionLink: /M23/TP/TP1
sidebarDepth: 2	
---

## Objectifs

A l'issue de ce TP vous montrerez que vous êtes capable :
- de faire la différence entre les principaux système d'exploitation existant lors de la création d'un fichier de type texte,
- de gérer des périphériques dans un environnement Unix,
- de créer, visualiser, modifier, renommer fichiers ou répertoires
- d'obtenir de l'aide pour toute commande Unix
- d'exploiter des fichiers issus de systèmes d'exploitation différents.

### Présentation

Ce TP vous permet d'écrire et d'exécuter vos premières commandes dans un terminal sous le système d'exploitation Linux. Ces commandes de base vont vous permettre d'assimiler la notion de fichiers et de parcourir l'arborescence classique du système. Cette notion très importante permet d'accéder à tout type de ressources (disques, réseau, ...). 

Vous rédigerez un compte rendu dans lequel vous justifierez les options des commandes que vous avez utilisées pour réaliser les actions demandées.


## Mise en oeuvre des redirections

Vous allez créer un fichier texte au fur et à mesure de l'utilisation des commandes au cours de ce TP. Pour cela, vous utiliserez les redirections. Ce fichier pourra alors vous servir de guide de commandes unix  (`guide.cmd.unix`) et sera utile pour votre compte-rendu.

- Testez la création de votre guide en le "remplissant" par le listage de votre répertoire courant.

- Visualisez son contenu à l'aide de la commande more.

- Essayez d'y ajouter le résultat de l'éxecution de la commande `dir`

- Essayez d'y ajouter le résultat de l'éxecution de la commande `dir`, en utilisant la commande `dir 2>guide.cmd.unix`

- Essayez d'y ajouter le résultat de l'éxecution de la commande `dir`, en utilisant la commande `dir &>guide.cmd.unix`

- Testez la redirection de l'entrée avec la commande                                         `cat < guide.cmd.unix`.


## Mise en oeuvre de la commande `man`

De nombreuses commandes sont détaillées dans les pages de manuel (pages man) disponibles par la commande `man <nom de commande>`.

Vous naviguez dans le manuel à l'aide des flèches de déplacement, vous quittez cette commande à l'aide de la touche Q.
     
- Consultez le manuel de la commande `man` 
- Créez un nouveau fichier texte en y écrivant l'aide des commandes vues en TD (`cd`, `pwd`, `mkdir`, `rmdir`, `ls`, `rm`, `alias`...) par redirection.
- A l'aide d'un éditeur de texte simple (gedit par exemple) consultez votre guide

## Etude de l'arborescence : chemin absolu / chemin relatif et affichage

- A l'aide des pages du manuel Linux, étudiez les commandes `cp` et `mv`

- A l'aide des commandes de navigation et de création de répertoire dans l'arborescence de votre compte, créez l'arborescence suivante:
        
        ~/M23/Tp1/ ;  ~/M23/Tp2/ ; ... ~/M23/Tp5/
        ~/M24/Tp1/ ;  ~/M24/Tp2/ ;
       
- A l'aide des commandes de navigation, de déplacement et de destruction de répertoire dans l'arborescence de votre compte,
   - Rangez tous les fichiers relatifs aux TP déjà réalisés dans la nouvelle arborescence,
   - Contrôlez le travail réalisé à l'aide des outils graphiques,
   - Supprimez, avec ces mêmes outils graphiques, l'ancienne arborescence de votre compte.


## Gestion des fichiers : création, visualisation, copie, changement et effacement

A l'aide des pages du manuel Linux,

- étudiez les commandes `touch`, `echo`, `quota` et `more`.
- que se passe-t-il lorsqu'une commande est suivie du caractère `&` ?
- créez, modifiez des fichiers texte à l'aide des commandes tappées dans un terminal et visualisez-les à l'aide de l'éditeurs gedit et ghex2. 
- étudiez les commandes principales de l'interpréteur de commande bash
   

##  Notions de droits et de propriété

Le système Linux est un système multi-utilisateurs. Certains utilisateurs ont des droits particuliers (ex: root). Les droits se décomposent en 3 catégories : lecture, écriture et exécution, pour trois types d'utilisateurs : le propriétaire, le groupe, les autres.

**En mode console :**

- Positionez les droits en lecture seule pour le propriétaire et lui seul sur le répertoire `~/M23`. Que pouvez-vous (vous et votre binôme) faire du répertoire M23 et des fichiers qu'il contient ?
- Que devez-vous faire pour lister le contenu de ``~/M23`` ?
- Que devez-vous faire pour que votre binôme puisse lister le contenu de `~/M23` ? N'y-a-t-il que votre binôme qui puisse lister ce répertoire ?
- Copiez le fichier `<N° de binôme>lnx.txt` dans `~/M23`,

-  Positionez les droits en écriture seule pour le propriétaire et lui seul sur le répertoire `~/M23`. Que pouvez-vous faire du répertoire M23 et des fichiers qu'il contient ?
- Copiez le fichier `<N° de binôme>.txt` dans `~/M23`,
- Créez un sous-répertoire Temp dans `~/M23`,
 -   Que devez-vous faire pour vérifier la présence du fichier copié et du répertoire créé ?
 -   Que devez-vous faire pour que votre binôme puisse ajouter un fichier dans `~/M23` ?
- Dans ce cas, peut-il supprimer le fichier qu'il vient de copier ?
- Peut-il supprimer d'autres fichiers ? Dans quels cas ?

- Positionnez les droits en exécution seule pour le propriétaire et lui seul sur le répertoire `~/M23`.
-   Que pouvez-vous (vous et votre binôme) faire du répertoire M23 et des fichiers et répertoires qu'il contient ?
-   Copiez les fichiers `<Nom_prenom>.txt` et `<Nom_prenom>lnx.txt` présents dans votre répertoire de login vers `~/M23/Temp`,
- Vérifiez la présence des fichiers copiés.

Vous savez maintenant gérer vos droits sur un répertoire.

**En mode graphique :**
- Créez le fichier cmd dans `~/M23/Temp` qui contient le texte "date", 
- Modifiez les droits de ce fichier du répertoire `~/M23/Temp` en  :
-  lecture seule :  testez les possilités d'accès à ce fichier,
-  lecture et écriture seule :  testez les possilités d'accès à ce fichier,
-  exécution :  testez les possilités d'utilisation de ce fichier (qui est exécutable ...).

Vous savez maintenant gérer les droits d'un fichier.

**En mode console :**
-  Créez le répertoire Partage dans `~`,
-  Mettre les droits minimum sur `~` et Partage afin de permettre l'accès en écriture seule pour les membres du groupe **rims** et  l'accès complet pour vous,
-  Copiez le fichier `<Nom_prenom>lnx.txt` vers le répertoire Partage de votre voisin, qui fera de même,
-  Visualisez le contenu du fichier reçu dans votre répertoire Partage,
-  Créez un nouveau fichier `<Nom_prenom>2.txt` copiez-y les données de votre voisin puis insérez (en respectant la même syntaxe) vos données. Votre voisin fera de même.
-  Vérifiez que ce fichier ne possède pas les droits en écriture pour le groupe,
-  Copiez le fichier `<Nom_prenom>2.txt` dans le répertoire Partage de votre voisin, qui fera de même,
-  Sauvegardez le fichier reçu dans votre répertoire TP,
-  Est-il possible de supprimer votre répertoire Partage ?
-  Est-il possible de changez le propriétaire du fichier dans le répertoire Partage de votre voisin ?
-  Supprimez le répertoire Partage.

Vous savez maintenant gérer les propriétaires et les groupes d'un fichier.
 
**En mode console :**
   -  Quels sont les droits nécessaires pour un fichier et un répertoire pour pouvoir appliquer la commande `chown` ?     
   -  Quels sont les droits nécessaires pour un fichier et un répertoire pour pouvoir appliquer la commande `chgrp` ?

Vous savez maintenant gérer les propriétaires et les groupes d'un fichier.


## Notion de processus et de priorités

Le système Linux est un système multi-utilisateurs et multi-processus. Chaque utilisateur peut exécuter plusieurs programmes en même temps.
Le temps de calcul et l'ordonnancement entre les programmes seront affectés automatiquement par le système. Cependant, en tant qu'utilisateur, vous pouvez visualiser l'ensemble des processus (programmes + environnement) exécutés sur une machine. De plus, vous pouvez agir sur les processus dont vous êtes propriétaire en envoyant des signaux ou en précisant une priorité.

-  Testez et commentez les commandes : `ps`, `top`, `kill`, `nice`
-  Exécutez en tâche de fond gedit et firefox, notez leur propriétés et supprimez le processus lié à gedit,

-  Lancez la calculatrice par la commande `xcalc`. Pour une raison inconnue, imaginons que cette application ne réponde plus. Plutôt que de redémarrer le système, vous pouvez "tuer" le processus lié à cette application graphique par la commande : `xkill`
        appliquée à la fenêtre.

:::danger rem 
Pensez à sauver le travail en cours avant toute utilisation de cette commande ! 
:::

## Les filtres simples

Les filtres vont vous permettre d'effectuer un traitement sur les données ou sur les fichiers, i.e. ajouter, trier, supprimer des lignes, des colonnes de données.

A l'aide des commandes head, tail et cut, vous effectuerez les traitements suivants :

-  Afficher les 3 premières lignes du fichier `<Nom_prenom>.txt` de la partie précédente,
-  Afficher les 3 dernières lignes du fichier `<Nom_prenom>.txt`,
-  Afficher seulement la 2 ème lignes du fichier `<Nom_prenom>.txt`,
-  Afficher de la 2 à la 5 lignes incluses du fichier `<Nom_prenom>.txt`,
-  Afficher les 20 premiers caractères de la premiere ligne du fichier `<Nom_prenom>.txt`,
-  N'afficher que les noms contenus dans le fichier `<Nom_prenom>.txt`.

A l'aide de la commandes sort et uniq, vous effectuerez les traitements suivants :

-  Trier la liste des processus par ordre croissant d'occupation CPU,
-  Afficher la liste des dix processus qui consomment le plus de CPU,
-  Afficher uniquement les numéros de processus (PID) classés par ordre décroissant,
-  Donner la liste des utilisateurs (sans doublons) qui ont un processus en cours.


## Utilisation du périphérique d'impression

Tout travail d'impression est d'abord stocké dans une file d'attente avant d'être récupéré par le processus serveur d'impression nommé "**cupsd**".
Pour partager les ressources imprimantes, l'ensemble des travaux sont centralisés au niveau du serveur **iut-rt**.
Pour ajouter un travail dans la file d'attente d'impression (donc, pour imprimer...), vous utiliserez les commandes suivantes : `a2ps` (pour les fichiers texte et UNIQUEMENT de type TEXTE) ou `lpr` (pour les fichiers postscript UNIQUEMENT ) ou directement à partir de l'application pour les autres types de fichiers (ex. OpenOffice)

-  Utilisez l'aide pour préciser l'imprimante qui reçoit le travail d'impression par défaut,
-  Testez et commentez les commandes : `a2ps` avec un fichier **TEXTE**, `lpr` avec un fichier **POSTSCRIPT**,
-  Pour connaître l'état de votre impression (en cours, en attente) ou supprimer un travail en cours, vous utiliserez les commandes : `lpq`, `lpstat`, `lprm`.
-  Testez et commentez ces commandes avec leurs options éventuelles.

:::info rem 
Les fichiers temporaires nécessaires à l'impression sont stockés dans une file d'attente dans le répertoire `/var/spool/cups`; vérifiez que seul le groupe propriétaire lp a accès aux fichiers de cette file d'attente.
:::

-  Comment pouvez-vous alors ajouter des travaux d'impressions ?

## Recherche de fichiers

Vous allez examiner plusieurs commandes effectuant des recherches de fichiers, de répertoires et d’utilisateurs. 
La commande find permet de retrouver des fichiers à partir de certains critères. La syntaxe est la suivante :
    
`find <où ?> <critères de recherche> <action>`

Vos recherches seront fonction de certains critères comme la date, la taille, le nom, le type de fichier ou encore les droits appliqués au fichier.  La partie action est facultative. Par défaut il s’agit d’un affichage à l’écran  (`print`) mais on peut aussi afficher dans un format long, ou effacer les fichiers  concernés par la recherche ou exécuter tout autre commande.

-  Rechercher le fichier `passwd` dans `/etc`
-  Rechercher tous les fichiers se terminant par « .conf » dans `/etc`. 
-  idem avec un affichage en format long.
-  Compter le nombre de fichiers de configurations dans `/etc`.
-  Rechercher et supprimer tous les fichiers se terminant par `~` dans votre répertoire personnel. 
-  Rechercher les fichiers modifiés ce jour dans votre répertoire personnel.
-  Rechercher les fichiers modifiés il y a moins de 7 jours dans `/etc`.
-  Rechercher dans toute l'arborescence les fichiers dont l’écriture est autorisée à la classe d’utilisateurs « other ».
-  idem en redirigeant la sortie erreur vers `/dev/null`
-  Rechercher dans votre arborescence les fichiers dont la taille dépasse 1Mo.
-  Rechercher dans votre arborescence les fichiers non executables dont la taille est supérieure à 1Mo OU inférieure  à 10ko.



A l'aide des commandes `comm`, `diff` et `patch`, vous effectuerez les traitements suivants :

-  Mettez en valeur les différences et les points communs des fichiers `<N° de binôme>lnx.txt` et `<N° de binôme>2.txt`,
-  A partir d'un fichier texte, faites le modifier par votre voisin puis détectez les changements à l'aide des commandes `comm` et `diff`,
-  Patchez votre fichier initial afin d'obtenir le fichier modifié par votre voisin.



-  Visualisez les alias prédéfinis à l'aide de la commande : `alias`
-  Déterminez visuellement la commande passée la plus utilisée et créez un alias correspondant :  `alias <nom_alias>='<commande>'`

##  Déclarations 

Dans cette partie, vous allez manipuler les variables systèmes et apprendre à utiliser vos propres définitions de variables notamment en affectant le résultat d'une commande

Tout d'abord ce qu'il faut savoir : 

-  Une variable permet de stocker temporairement de l'information qui sera utilisée plus tard pour le traitement. Il n'y a pas de partie déclarative en SHELL ni de type. Par défaut, tout est sous la forme de chaîne de caractères et donc le contenu de toute variable (même inexistante) est égal à la chaîne vide ("")
-  L'affectation d'une variable (i.e. lui associer une valeur) se fait de la manière : `nomVariable=saValeur`
       
*Attention il n'y a pas d'espace entre le nom, le signe `=` et la valeur*

-  La valeur associée à une variable est obtenue en faisant précéder son nom du signe `$` (e.g. `$nomVariable`)

-  Donner le script shell qui affiche le contenu de  toutes les variables  systèmes que vous connaissez

L'utilisation des guillemets ("), cotes ( ' ), ou cotes inversées (  ` ) en SHELL est bien définie et a une signification particulière

-  Dans votre script, affecter à une variable nommée `rep` la valeur `/home/votre_nom` et donner la commande pour afficher cette valeur
-  Remplacer la valeur précédente par le contenu de la variable `HOME`
-  Remplacer les guillemets par des cotes simples, que se passe-t-il ?
-  Affecter maintenant à la variable `rep` le résultat de la commande `pwd` à l'aide des cotes inversées
-  Afficher une phrase avec le contenu de la variable `rep`, puis directement en utilisant l'exécution de la commande `pwd`
-  Terminer cette partie en affectant à la variable `rep`, le répertoire dans lequel est sauvegardé votre script (par la méthode de votre choix)

## Les paramètres

Dans cette deuximèe partie, vous allez récupérer les valeurs qui sont données derrière le nom de votre script.

:::tip Ce qu'il faut savoir : 
Des variables sont prédéfinies et permettent d'accèder aux valeurs passées derrière la commande (ce que l'on appelle également paramètre)
- `$#` correspond au nombre de paramètres
- `$*`  correspond à la liste des paramètres
- `$0`  correspond à la commande en elle-même
- `$1`   correspond au premier paramètre
- `$n`  , où n est un nombre, correspond au nième paramètre
:::

-  Donner le script shell qui affiche le nombre de paramètres passé à la ligne de commande, essayer plusieurs fois en faisant varier le nombre de valeurs passées derrière la commande.
-  Donner le script shell qui affiche le premier paramètre, essayer plusieurs fois (que se passe-t-il si il n'y a aucun paramètre) 
-  Compléter pour qu'il affiche un message avec le nom de votre script
-  A la suite, essayer la commande `shift` : quelle est son effet sur les valeurs `$#`, `$*` ? A quoi va-t-elle vous servir ? 
-  A quoi correspond la valeur `$?`, afficher cette valeur à la suite d'une commande grep ou d'une commande find, commenter

## Les structures de contrôle

Vous avez vu en algorithmique les principales structures de controles : l'alternative, la boucle, le "tant que", ... Vous retrouvez bien entendu ces structures dans le langage de programmation SHELL. 
> Vérifier bien la syntaxe des instructions dans votre cours !

-  Donner le script shell qui teste si son unique argument est un fichier ordinaire, un répertoire ou d'autres types de fichiers.  
> Vous afficherez le type de fichier rencontré.

-  Donner le script shell qui affiche ses arguments dans l'ordre lexicographique (1 argument par ligne).  
> Vous ferez une première solution avec une boucle puis une deuxième avec un "tant que".

-  Donner le script shell qui vérifie que tous ses arguments sont des répertoires.  Vous afficherez un message approprié pour chaque cas.

-  Donner le script shell qui vérifie que la variable PATH contient bien les répertoires habituels pour les exécutables des commandes de base. Vous ajouterez si nécessaire les chemins suivants :
             
        PATH :  /usr/local/bin

-  Donner le script shell qui permet de tirer aléatoirement et d'afficher un nombre entre 1 et 100.  
> Vous utiliserez la date système de la manière suivante : heure+ min*secondes modulo 100

> Vous isolerez les secondes, minutes et heures dans trois variables différentes que vous afficherez 
 
-  Donner le script shell qui vérifie que les arguments sont des entiers.
