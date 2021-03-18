---
title: M2102-2 - TP2 Docker
lang: fr-FR
actionText: M2102-2 - TP2 
actionLink: /M2102-2/TP/TP2
sidebarDepth: 1	
---

## Docker

### Installation

Docker fait partie des dépôts officiels à partir d’Ubuntu. Il suffit donc d'installer le paquet **```docker.io```**. Puis démarrez le service avec : ```systemctl start docker```.


::: danger Si vous êtes à l'IUT :

Docker cherche les images en local dans un premier temps. Si l'image n'existe pas il va alors tenter de télécharger la dernière version à partir du docker store (le hub). Puisque l’IUT utilise un proxy, il faut l’indiquer à Docker. Pour cela, il faut créer le répertoire suivant :


	mkdir /etc/systemd/system/docker.service.d


puis ajoutez le fichier ```http-proxy.conf``` dans ce répertoire et écrire dedans :

    [Service]
    Environment="HTTP_PROXY=http://cache-etu.univ-artois.fr:3128/"

Il faut ensuite redémarrer docker :

	systemctl daemon-reload
	systemctl restart docker
:::

### Utilisation

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


## Docker compose

### Installation

Nous allons maintenant installer docker-compose pour déclarer facilement l'agencement de plusieurs Dockers entre eux. Docker-Compose permet de spécifier comment lancer plusieurs containers en même temps, et de gérer les liens entre eux.

Installer d'abord curl avec la commande `apt install curl` puis lancer les commandes suivantes :

```
sudo curl -L https://github.com/docker/compose/releases/download/1.20.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

```

Une fois installé, on écrit un fichier `docker-compose.yml` à la racine de notre projet qui démarre un serveur apache.

```
version: '3.3'

services:
   web:
      image: webdevops/php-apache:ubuntu-16.04
      container_name: web
      ports:
         - "80:80"
         - "443:443"
      volumes:
         - "$PWD/:/app/"
````

- Que veut dire chaque ligne ?

Une fois le fichier docker-compose adapté à vos besoins, il ne reste plus qu'à démarrer l'environnement. Pour cela veillez à être dans le répertoire contenant votre fichier `docker-compose.yml` puis lancer la commande suivante pour builder les containers:

```
docker-compose up -d
```

- Etudier chaque parametère de la commande `docker-compose` à l'aide de l'option `--help``

Nous allons maintenant adapter le fichier `docker-compose.yml` pour créer un blog WordPress avec une instance de base de données MySQL séparée et qui utilise un volume de données.

```
version: '3.3'

networks:
   mon_reseau:
     driver: bridge 
     ipam:
       config:
        - subnet: 10.16.0.0/24
volumes:
    dbdata:

services:
   db:
     image: mysql:5.7
     container_name: mysql
     volumes:
       - dbdata:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: somewordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress
     networks:
       - mon_reseau

   wordpress:
     depends_on:
       - db
     image: wordpress:latest
     container_name: wordpress
     ports:
       - "8000:80"
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
     networks:
       mon_reseau:
          ipv4_address: 10.16.0.100     
```

Le fichier docker-compose ci-dessus va créer un réseau et 2 containers. Le fichier contient tous les paramètres de connexions à la base données, de l'applicatif, réseau (adresses et mapping des ports) ainsi que le répertoire des volumes persistants.

Démarrer l'environnement et vérifier votre serveur en visitant la page `http://localhost:8000`

### Installation d’un orchestrateur pour docker "portainer"

Si vous cherchez une interface graphique pour gérer votre environnement docker, portainer est fait pour vous!

Portainer est une GUI à docker open source. Il permet d’avoir une jolie interface graphique pour manipuler et visualiser vos docks. On peut en créer, stopper, lancer, visualiser les stats etc etc. Portainer s’installe lui-même sur docker (Inception ?!!).

Ajouter le container suivant à votre fichier, rédemarrer le docker composer puis visiter la page `http://localhost:9000` pour continuer la configuration en mode local.

```
   portainer:
     image: portainer/portainer
     container_name: portainer
     ports:
       - "9000:9000"
     volumes:
      - /var/run/docker.sock:/var/run/docker.sock
     networks:
       - mon_reseau

```

- Etudier l'interface de portainer
- Modifier le fichier yml afin d'ajouter les services suivants :
    - [phpmyadmin](https://github.com/phpmyadmin/docker/blob/master/docker-compose.yml)
    - [postgresql](https://hub.docker.com/_/postgres/)
