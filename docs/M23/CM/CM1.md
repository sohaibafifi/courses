---
title: M23- CM1 Commandes UNIX
lang: fr-FR
actionText: M23- CM1 
actionLink: /M23/CM/CM1
sidebarDepth: 2	
---

## Système d'exploitation

### Description

Programme chargé de la gestion des ressources matérielles et qui contrôle l'exécution des programmes.

les systèmes d’exploitation assurent fondamentalement trois tâches :

- Gérer le matériel

- Fournir une abstraction du matériel (cacher hétérogénéité des matériels)

- Fiabiliser/sécuriser/administrer l’exécution des traitements


**Objectif** : offrir une interface de gestion d'un ordinateur

### Système Unix/Linux

- Création de Unix aux laboratoires Bell (USA) en 1969. But : gestion d'un mini-ordinateur

- Intéressé rapidement les universités, ensuite les constructeurs.

- Linux : Version d'Unix pour micro-ordinateurs, 1991.

- Différentes distributions : Slackwre, Red Hat, Debian, SuSE, Ubuntu,

**Caractéristiques** : 

- Multi-plateforme

- Multitâches et multi-utilisateurs

- Un système ouvert

- Différents environnements de commandes : les shells
 
- Système de fichiers hiérarchique
 
- Gestion hiérarchisée des processus


## Interpréteur de commandes

Interface entre l’utilisateur et le système d’exploitation

L’interpréteur de commandes a la charge de créer les processus qui vont exécuter les commandes, il est en liaison directe avec les autres composants du système d’exploitation.

Une commande va déclencher des appels systèmes pour :

- contrôler les processus

- manipuler des fichiers, des périphériques - contrôler les communications

## Système de Fichiers


###  Description
En informatique, un système de fichiers (FS ou FileSystem en anglais) est une méthode d'organisation des données persistantes sur un médium durable (par exemple : disque dur, DVDROM, clef USB ...).


- les fichiers sont regroupés dans des collections nommées répertoires; les répertoires sont organisés en arborescence (il y a un répertoire racine et des sous-répertoires).


- Peut gérer la compression ou le chiffrement automatique des données, une gestion plus ou moins fine des droits d'accès aux fichiers, et une journalisation des écritures (pour la robustesse, en cas de crash système).

- Peut s'étendre sur un réseau entier (système de fichiers distribué, ou réparti : NFS par exemple).


###  Les méta-données

Chaque fichier possède des méta-données (stockées dans l'inode sous Unix), et les données (stockées dans un ou plusieurs blocs selon la taille).


Les méta-données les plus courantes sous UNIX sont :



- Droits d'accès en lecture, écriture et exécution.


- Dates de dernier accès, de modification des meta-données (inode), de modification des données (bloc)


- Propriétaire et groupe propriétaire du fichier


- Taille du fichier


- Nombre de liens, nombre de blocs utilisés par le fichier (*)


- Type de fichier : fichier simple, lien symbolique, répertoire, périphérique ...


####  Systèmes de fichiers et systèmes d'exploitation associés ou compatibles

**Non journalisés :**


- Ext2 : Extented FS version 2 (Linux, BSD)

- FAT : File Allocation Table (DOS/Windows, Linux, BSD, OS/2, Mac OS X)

- FFS (BSD, Linux expérimental)

- HFS (Mac OS, Mac OS X, Linux)

- HPFS (OS/2, Linux)

- minix fs (minix, Linux)

- S5 (UNIX System V, Linux)

- Unix_File_System : Unix FS (BSD, Linux en lecture seule)

**Journalisés :**

- BFS (BeOS, Haiku, Linux en lecture seule et expérimental)

- Ext3,Ext4 : Extented FS version 3 (Linux)

-  HFS+ (Mac OS X, Linux)

-  JFS (AIX, OS/2, Linux)

-  NTFS (Windows, Linux en lecture seule, Mac OS X en lecture seule)

-  ReiserFS (Linux), Reiser4 (Linux expérimental)

-  Spufs : Synergistic processing unit filesystem

-  UFS+ : Unix FS + journal (BSD, Linux en lecture seule)

-  XFS (Irix, Linux)

-  ZFS : Zettabyte FS (Solaris10)

**Réseau :**

- NFS (Tous les Unix, Linux, Mac OS X) (Windows via un émulateur)

- SMB (Windows) (Linux, BSD et Mac OS X via Samba)

- CIFS (Evolution de SMB, supporté par Samba ainsi que par Windows)


**Spécialisés**

- CFS (Cryptographic File System) : FS chiffré (BSD, Linux)

- cramfs : FS compressé (Linux en lecture seule)

- iso9660 : en lecture seule sur tous les systèmes lisant les CDROM/DVDROM de données

- JJFS et JJFS2 : FS pour support physique sans block, typiquement des cartes flash. Il est compressé et journalisé (Linux)

- QNX4fs : FS utilisé pour le temps réel (QNX, Linux en lecture seule)
 
####  Le Fichier
 Unité informationnelle physiquement stockée sur un support de mémoire de masse permanent (disque dur par exemple).


Un fichier peut contenir un programme, un document, un texte, ou
toute autre sorte de données déterministes.

Tous les systèmes de fichiers permettent (et imposent) : 

- de classer les fichiers au travers d'une arborescence;

- de nommer les fichiers;

- de disposer d'informations supplémentaires sur ces fichiers (datation, droits d'accès, ...).

Le codage utilisé détermine la nature du fichier : texte, image, son, vidéo, documents, programme exécutable, etc.

**Regles de nommage :**


-  Nom d'un fichier : chaîne de caractères,

-  En pratique, limitez-vous aux caractères alphabétiques, aux chiffres, ainsi qu'aux caractères : . - '

-  Souvent on utilise : ```nom.extension```

-  L'extension permet à l'utilisateur de se souvenir du type du fichier : txt, pdf, gif, png, jpeg, avi, mpeg

-  Linux fait la différence entre les caractères majuscules et les minuscules. Exemple : ```Essai.txt``` ≠ ```essai.txt```

*Exemple :*

sous Windows :

- ```C:\WINNT\system\sys.ini``` - désignation absolue du fichier sys.ini se trouvant dans le répertoire C:\WINNT\system\ ;
- ```sys.ini``` - désignation relative du fichier sys.ini, lorsque l'utilisateur se trouve dans le répertoire C:\WINNT\system\.

sous Unix :

- ```/var/spool/mail/r4f``` - désignation absolue du fichier r4f se trouvant dans le répertoire ```/var/spool/mail```;

- ```mail/r4f``` - désignation relative du fichier r4f se trouvant dans le sous- répertoire mail, lorsque l'utilisateur se trouve dans le répertoire ```/var/spool/```

####  Le Répertoire
**Liste d'adresses de fichiers**

- traitée comme un fichier dont le contenu est la liste des fichiers référencés.

- Possède les mêmes propriétés qu'un fichier (nom,taille,date, droits, ...)


**Arborescence**

- Chaque fichier ou répertoire est référencé par un autre répertoire, ce qui forme une hiérarchie cohérente, appelée aussi arborescence, dont le point d'entrée est le répertoire racine.

- **Répertoire courant/de travail** désigné par ```.```

- **Répertoire de connexion** d'un utilisateur désigne par ```~``` est le répertoire courant par défaut lors de la connexion au système.

> Exemple : pour l'utilisateur **eve** le répertoire de connexion est ``/home/eve``

- **Répertoire père** Le repertoire qui englobe le repertoire courant est désigné par ```..```

- **Répertoire racine** désigne par ```/``` est le seul répertoire qui n'a pas de répertoire père


### Les commandes Unix 

####  Répertoires

-  Changement de répertoire : ```cd```

-  Affichage du nom du répertoire courant : ```pwd```

-  Affichage du contenu du répertoire : ```ls```

-  Création d’un répertoire : ```mkdir```

-  Suppression d’un répertoire : ```rmdir```

-  Renommage/déplacement un répertoire : ```mv```

-  Comparaison de 2 répertoires : ```dircmp```


#### Manipulation

- ```cp``` : (copy)
> cp ancien nouveau : copier le fichier ancien dans nouveau
> cp -R AncienRep NouveauRep : copier d'une manière récursive le répertoire AncienRep dans NouveauRep

- ```mv``` : (move) ```rm``` : (remove)
> ```mv ancien nouveau``` : déplacer le fichier ancien dans nouveau , en le renommant si nouveau designe un fichier
> ```rm fic``` : effacer le fichier fic

- ```mkdir``` : (make directory)
> ```mkdir rep``` : créer le répertoire rep

- ```rmdir``` : (remove directory)
> ```rmdir rep``` : effacer le répertoire rep

 - ```ls``` : (list)


#### méta-caractères


- ```*``` : remplace toute chaîne de caractères ne commençant pas par . 

- ```?``` : remplace n'importe quel caractère

- ```[abc]``` : un caractère parmi a,b ou c

- ```[a-d]``` : un caractère dans la plage de a à d.

> ```ls -l *.txt``` : affiche seulement les fichiers ayant l'extension txt

> ```rm td[1-3].pdf``` : effacer les fichiers ```td1.pdf```, ```td2.pdf``` et ```td3.pdf```

> ```cp /tmp/?2018.data .``` : copier dans le répertoire courant tous les fichiers qui sont dans le répertoire ```/tmp``` dont le nom est composé d'une chaîne de cinq caractères qui se termine par 2018 et qui ont l'extension data

#### Fichiers

- Suppression d’un fichier : ```rm```

-  Copie des fichiers : ```cp```

-  Déplacement d’un fichier : ```mv```

-  Création ou modification de la date de modification d’un fichier : ```touch```

-  Afficher le contenu d’un fichier page par page : ```more```

-  Afficher le contenu d’un fichier : ```cat```

-  Afficher les N premières lignes : ```head```

-  Afficher les N dernières lignes : ```tail```

-  Découper un fichier : ```cut```

- Comparaison de 2 fichiers : ```diff```, ```cmp```

- Comptage du nombre de caractères, de mots et de lignes contenus dans un fichier : ```wc```

- Impression d’un fichier : ```lpr```, ```a2ps```, ```lp```, ...

- Création d’un lien physique ou symbolique : ```ln```

- Dimensionner un fichier : ```split```

- Archivage des fichiers : ```tar```, ```cpio```

- Compression d’un fichier : ```compress```, ```gzip```, ```bzip2```

- Décompression d’un fichier : ```uncompress```, ```gunzip```, ```bzip2```

- Identifier le type de fichiers : ```file```

- ***Recherche d’un fichier :*** ```find```

- ***Recherche d’un motif dans un fichier :*** ```grep```

- Tri d’un fichier : ```sort```

- Suppression des lignes adjacentes identiques : ```uniq```

- Masque de création des fichiers : ```umask```

- Fusion de 2 fichiers : ```paste```

- Extraction des lignes communes de 2 fichiers : ```comm```

### Les droits d'accès

Chaque utilisateur du systeme est :

- désigné par un identicateur unique : **uid**

- peut appartenir à un ensemble de groupes. Chaque groupe est à son tour désigné par un identicateur **gid**

- La commande ```id``` user donne l'uid de l'utilisateur et la liste des groupes auxquels il appartient.

Chaque ressource (ex. fichier) a un seul proprietaire. On specifie pour chaque ressource 3 groupes de droits d'acces :

- Les droits du propriétaire : **user**

- Les droits des utilisateurs appartenant au même groupe que lepropriétaire : **group**

- Les autres : **others**

Trois types de droits d'acces :

-  Droit de lecture (read) désigné par : **r**

-  Droit de ecriture (write) désigné par : **w**

-  Droit d'exécution (execute) désigné par : **x**

> Le droit d'exécution sur un repertoire donne l'autorisation de le traverser.

Commande : **chmod**

## Processus

Le système d'exploitation est chargé d'allouer les ressources (mémoires, temps processeur, entrées/sorties) nécessaires aux processus et d'assurer que le fonctionnement d'un processus n'interfère pas avec celui des autres (isolation). Il peut aussi fournir une API pour permettre la communication inter-processus (IPC).

Outre le multiplexage des ressources matérielles, le système peut contrôler l'accès des processus aux ressources selon une matrice de droits

Distinction entre processus lourd, qui sont complètement isolés les uns des autres, et processus légers (Threads en anglais), qui ont un espace mémoire (et d'autres ressources) en commun.

### caractéristiques

Un processus est un programme est cours d’exécution. Sous Unix, il est caractérisé par :

-  Son identité : **pid**

-  L’identité de son créateur (père) : **ppid**

-  Son propriétaire effectif et réel : **uid**

-  Son groupe effectif et réel : **gid**

-  Son état (élu, bloqué, prêt, zombi)

-  Le programme exécutable

-  Sa priorité : **nice**

-  La date de création

-  Les temps CPU consommés

-  Le masque de création des fichiers : **umask**

-  La table des descripteurs des fichiers ouverts

-  ....etc

Tout processus (sauf init) possède un processus créateur (père). L’ensemble des processus peut être vu comme un arbre.

L'arrêt d'un processus père entraîne l'arrêt de tous les descendants. 

La commande ```nohup cmd``` permet au processus fils exécutant la commande cmd de survivre à l'arrêt de son processus père.

Etat d'un processus :

- **prêt** si toutes les ressources requises sont disponibles sauf le
processeur.

- **bloqué** s'il manque une ressource autre que le processeur.

- **en exécution** si le processeur est alloué au processus

### Gestion des processus

Un ensemble de primitives permet à l’utilisateur de gérer ses processus :

-  ```ps``` : affiche la liste des processus

-  ```pstree``` : affiche les processus sous forme d’un arbre généalogie

-  ```top``` : affiche la liste des processus en commençant par le processus occupant le plus la CPU

-  ```kill``` : envoie un signal à un processus
> – ```kill –9 numpid``` : arrête le processus de pid numpid


- ```killall nomprocess``` : arrête un processus ayant pour nom nomprocess

- Planification des tâches : ```crontab```

- ```at``` : exécution différée d’un processus

- ```nice``` : modification de la priorité d’un processus

## Exécution des commandes

- Enchaînement des commandes (```;```)
> ```cd / ; pwd ; ls –al ``` -> si une des commandes n’existe pas, l’exécution s’arrête.
 

- Exécution en arrière plan (```&```)
> ```mozilla &``` -> l’utilisateur récupère l’interpréteur pour lancer d’autres commandes


-  Exécution conditionnelle ```&&``` ou ```||```
> ```cm1 && cm2``` -> ```cm2``` est exécutée si l’exécution de ```cm1``` a réussi

> ```cm1 || cm2```-> ```cm2``` est exécutée si l’exécution de ```cm1``` a échoué

### Redirections

**Redirection de la sortie standard** : ```>``` et ```>>``` : 

- ```cmd > fichier``` : le résultat de cmd est mis dans un fichier 

- ```cmd >> fichier``` : le résultat de cmd est mis à la fin du fichier

- ```cmd >& fichier``` : la sortie erreur est dans le fichier

**Redirection de l’entrée standard** : ```<```

- ```cmd < fichier``` : cmd lit les données dans le fichier

**Echaînement des commandes** : ```|``` (pipe)

- ```cmd1 | cmd2``` la sortie de cmd1 et dirigée sur l’entrée de cmd2

## Gestion réseaux

- Envoie d’un message à un utilisateur : ```mail```

-  Gestionnaire de messages : ```pine```, ```elm```, ```mailx```

-  Envoie d’un message sur un terminal : ```write```

-  Accepte/refuse la réception des messages : ```mesg```

-  Dialogue entre 2 utilisateurs connectés : ```talk```

-  Connexion sur une machine distant : ```rlogin```, ```telnet```

-  Exécution d’une commande à distance : ```rsh```

-  Copie des fichiers entre systèmes distants : ```rcp```

-  Transfert de fichier : ```ftp```

-  Exécution d'une session à distance : ```ssh```

-  ```hostname``` : afficher le nom symbolique de la machine.

-  ```hostname toto``` : Attribue le nom symbolique toto à la machine.

-  ```ifconfig```, ```ip``` : outil de configuration des interface réseaux (pour l'administrateur). Ca permet aussi de se renseigner sur les caractéristiques  d'une interface réseau donnée de la machine.

-  ```/sbin/ifconfig eth0``` : afficher les informations de conguration de l'interface eth0 (première carte réseau Ethernet de la machine).

-  ```/sbin/ifconfig eth0 10.0.0.1``` : attribuer l'adresse 10.0.0.1 à l'interface eth0.

-  ```nslookup adrsym``` : chercher l'adresse IP correspondant à l'adresse symbolique donnée.

-  ```traceroute adr``` : donner la route entre la machine locale et la machine désignée par adr si la route existe.

-  ```ping adr``` : tester si la machine ayant l'adresse adr existe et, si c'est le cas, donner des informations sur la qualité de la route vers cette machine.

-  ```ping www.univ-artois.fr```

-  ```ssh login@adr``` : se connecter à distance à la machine ayant l'adresse adr et en tant que l'utilisateur identifié par login.