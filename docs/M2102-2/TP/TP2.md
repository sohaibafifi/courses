---
title: M2102-2 - TP2 Docker
lang: fr-FR
actionText: M2102-2 - TP2 
actionLink: /M2102-2/TP/TP2
sidebarDepth: 1	
---

# Docker

## Installation

Docker fait partie des dépôts officiels à partir d’Ubuntu. Il suffit donc d'installer le paquet **```docker.io```**. Puis démarrez le service avec : ```systemctl start docker```.


Docker cherche les images en local dans un premier temps. Si l'image n'existe pas il va alors tenter de télécharger la dernière version à partir du docker store (le hub). Puisque l’IUT utilise un proxy, il faut l’indiquer à Docker. Pour cela, il faut créer le répertoire suivant :


	mkdir /etc/systemd/system/docker.service.d


puis ajoutez le fichier ```http-proxy.conf``` dans ce répertoire et écrire dedans :

    [Service]
    Environment="HTTP_PROXY=http://cache-etu.univ-artois.fr:3128/"

Il faut ensuite redémarrer docker :

	systemctl daemon-reload
	systemctl restart docker

## Utilisation

1.  Démarrons notre premier containers ```docker run rtbethune/debian df -Th ``` 
    Que se passe-t-il ?
2.  Un container ne reste en vie que si un processus est actif. On peut lister les containers actifs avec la commande ```docker ps```. On peut aussi lister tous les containers, actifs ou
    inactifs avec ```docker ps -a```. Que vous retourne ces commandes et pourquoi ?
3.  Nous allons maintenant rediriger l’entrée standard du container avec l’option ```-i``` et ouvrir un pseudo-terminal avec ```-t```, le tout en exécutant le processus ```bash``` : 

		docker run -ti --name=debian rtbethune/debian bash
	
    Quelle est la version de debian du container (tapez ```cat   /etc/os-release```) et la version du noyou Linux  (tapez ```uname -a```)?
4.  Quelle est l'adresse ip du container ? Communiquer avec le système  hôte avec un ```ping```.
5.  Créez un ficher avec ```touch test``` ou faites n'importe  quelle modification sur le container.
6.  Ouvrez un second terminal. Listez les containers actifs ? Combien y  en a-t-il ? Notez leurs **ID**.
7.  Lorsque l'on fait des modification dans un container, on peut comparer à l'image d'origine avec : ```docker diff ID```
