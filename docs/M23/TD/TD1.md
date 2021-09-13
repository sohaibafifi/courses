---
title: M23- TD1 Commandes UNIX
lang: fr-FR
actionText: M23- TD1 
actionLink: /M23/TD/TD1
sidebarDepth: 2	
---


## Les Droits 

Sachant que le résultat d’affichage de la commande `ls -l fichier.txt` est :
 ```
 -rwx-----x 1 user1 groupe1 62 Oct 1 20:05 fichier.txt 
 ```

-	Que signifie cet affichage ? 
-	Modifier les droits pour : 
    -	Ajouter l’accès en lecture à tous
    -	Autoriser l’accès rwx pour user, r pour groupe et x pour les autres 
    -	Retirer tous les accès à tous 
    -	que se passe-t-il ? Peut-on revenir en arrière ? 


## Les filtres simples 

Les commandes à connaitre :
-	`nl` : permet de numéroter les lignes
-	`cat` : permet de concaténer des fichiers
-	`head` : permet de selectioner les n premières lignes
-	`tail` : permet de sélectionner les n dernières lignes
-	`cut` : permet de couper chaque ligne selon l’option choisie 
-	`sort` : permet de trier selon une information choisie
-	`uniq` : permet de supprimer les doublons successifs
-	`wc` : permet de compter les caractères, les lignes, les mots 

Donner la commande qui : 
-	Affiche les numéros des utilisateurs de votre système (prendre le fichier /etc/passwd) 
-	Affiche les numéros de groupe de votre système dans l’ordre croissant
-	Affiche le nombre de groupe différent de votre systèmes 
-	Affiche le nom des 3 plus gros fichiers du répertoire courant 


## La fonction Recherche 


### La recherche dans l'arborescence : find


Donner la commande qui permet de rechercher à partir du répertoire courant: 
-	les fichiers dont le nom comporte 3 caractères
-	les fichiers dont le nom contient un chiffre
-	les fichiers auxquels vous n'avez pas accèdez depuis trois jours 
-	de supprimer les fichiers de taille nulle 
-	une liste des répertoires à partir de la racine pour lesquels le reste du monde dispose d'un accès en lecture 

### La recherche de données: grep 

Donner la commande qui : 
-	de compter le nombre de lignes vides du fichier `fic.txt`
-	de compter le nombre de lignes qui ne commencent pas par un chiffre
-	de compter le nombre de lignes qui terminent par un point.
-	de compter le nombre des processus en exécution qui vous appartiennent 



