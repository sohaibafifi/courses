---
title: M2102-2 - TP1 Virtualbox
lang: fr-FR
actionText: M2102-2 - TP1 
actionLink: /M2102-2/TP/TP1
sidebarDepth: 1	
---

# Virtualbox


## Première machine virtuelle

La documentation permettant l'installation de virtualbox se situe ici :
<http://doc.ubuntu-fr.org/virtualbox>

La documentation de référence de virtualbox se trouve ici :
<http://www.virtualbox.org/wiki/End-user_documentation>

**Travail préliminaire :**

-   Monter le serveur nas du département dans votre arborescence : ``` mount -t nfs rt-nas:/mnt/distvm /srv/nas``` 

1.  Installez la dernière version Oracle de **virtualbox** ainsi que  **le pack d'extension**. Pour plus d'informations consulter la section 3 sur [cette page](http://doc.ubuntu-fr.org/virtualbox).
2.  Pour créer une machine virtuelle, il faut spécifier à Virtualbox ses caractéristiques. Lancez Virtualbox et créez une machine virtuelle en utilisant l'interface graphique avec les paramètres suivants :
	- Nom : Ubuntu1
	- Type : Ubuntu Linux 64 bits
	- Stockage : 10G
	- Pour toutes les autres options, prendre les valeurs par défaut

3.  A partir de la commande file (faire un man pour interpréter les valeurs) et en inspectant les fichiers textes, indiquez quels fichiers ont été créés sur le disque, quel est leur type (binaire,  ascii) ainsi que leur rôle ? .
4.  Quelle est la taille actuelle du disque virtuel sur le disque ? Cela correspond-il au paramétrage ?
5.  Editez les paramètres de votre machine. Dans l'onglet « Stockage »,  ajoutez un disque CD/ROM virtuel pointant sur l'ISO de la dernière version de ubuntu qui se trouve sur ``` /srv/nas/``` .  Bootez et faites une installation classique en créant un utilisateur primaire user.

*Installer complètement une VM est aussi long qu'installer une  machine physique. En parallèle passez à la partie [Docker](#docker).*

## Les Additions invité

Les Additions invité sont des pilotes adaptés pour les systèmes invités comme Windows ou ceux basés sur GNU/Linux qui permettent :

- Un affichage graphique plus rapide (avec gestion de l'accélération 2D et 3D) et automatiquement adapté à la résolution graphique du système hôte,
- Le partage du presse-papier,
- Le partage des dossiers,
- Une capture/libération dynamique du curseur lorsque celui-ci se déplace entre système hôte et système invité.

Pour activer les Additions invité, lancez Virtualbox, puis le Système invité. Ensuite dans le menu **Périphériques**, cliquez sur **Insérer l'image CD des Additions invité…**. (La suite dépend du système invité.)

Sur la machine invitée, installez les paquets nécésaires :

    sudo apt-get install build-essential  linux-headers-$(uname -r)

A partir du répertoire du cd monté executez la commande d'installation :

    sudo ./VBoxLinuxAdditions.run 

## Réseau

Virtualbox permet de partager des répertoires entre la machine hôte et
la machine invité.

1.  Créez un répertoire partagé à l'aide de l'interface graphique de Virtualbox pour votre machine Ubuntu1. Cochez la cache permanent mais PAS automatique car on veut ajuster les droits d'accès au répertoire.
2.  Montez le répertoire comme une partition externe de type vboxsf dans   le répertoire Shared de l'utilisateur de base 'user'. Est-ce que
    user peut écrire dans ce répertoire. Pourquoi ?
3.  On veut que le montage soit automatique au démarrage. Pour cela,   modifiez /etc/fstab avec comme nom du volume, le nom donné dans l'interface Virtualbox, comme type vboxfs et comme options uid= et gid= mis aux bonnes valeurs pour l'utilisateur user (probablement 1000).

4. Etudions maintenant le type d'interconnexion réseau de la machine. Nous allons maintenant comparer les performances réseaux des modes **NAT** et **pont (bridge)**.

-   Configurez apt-get pour passer par le proxy en créant le fichier ```/etc/apt/apt.conf.d/proxy``` : 

        Acquire::http::Proxy "http://cache-etu.univ-artois.fr:3128/";

-   Pour faire les tests de performance, on va utiliser deux machines (une avec une connexion de type NAT et une autre en pont (avec une adresse MAC connue par le serveur dhcp, ```08:00:27:00:03:XX``` (XX est votre numéro) !)). Créez une nouvelle machine Ubuntu2 en faisant un  clone de la première. Mais **avant** installez l'outil iperf dont le manuel d'utilisation est ici <http://openmaniak.com/iperf.php>. Quel est le débit obtenu en mode NAT et en mode bridge ? Quelle configuration d'iperf avez-vous utilisez ?

## Performances CPU

Nous allons faire tourner un benchmark en lui faisant tester la vitesse d'excécution d'un programme de calcul de nombre premiers avec un nombre de threads variables (on le fait varier si on a plusieurs cœurs associés à l'OS) afin de comparer les performances dans la machine virtuelle et dans la machine physique.

1.  Installez le benchmark sysbench (par un apt-get install classique)  
     
2.  Faites tourner le benchmark en lui faisant tester la vitesse  d'excécution d'un programme effectuant 10000 calculs dans une seule thread à l'aide de la commande suivante :\

        sysbench --test=cpu --cpu-max-prime=10000 --num-threads=1 run | grep "total time:"
 
3. Si il a N cœurs à sa disposition et N threads, chaque thread fera  10000/N calculs donc le temps total est divisé par N.  Comparez en les commantant les performances dans la machine    virtuelle et dans la machine physique.
