---
title: M23- TD1 Commandes UNIX
lang: fr-FR
actionText: M23- TD1 
actionLink: /M23/TD/TD1
sidebarDepth: 2	
---
# TD1 Commandes UNIX

```Awk```  : filtre programmable, peut s'appliquer sur 1 ou plusieurs fichiers, prend la syntaxe *
du langage C.

**Syntaxe**: 

```
awk 'instructions' fichiers_cibles
```		

```
cmd | awk 'instructions'
```

```
awk -f fichierInstructions fichiers_cibles
```

**3 sections** : 
	
- le avant : instructions exécutées avant le parcours du fichier
        ```BEGIN {}```

- le pendant : instructions exécutées pour chaque enregistrement (ligne) du fichier

- l'après : instructions exécutées après le parcours du fichier
        ```END {}```

Les variables prédéfinies : 
	
- ```FS```: Field Separator (séparateur de champs)

- ```OFS``` : Output Field Separator

- ```NF```: le nombre de champs

- ```NR```: numero de l'enregistrement courant

- ```$0```: ligne entière

- ```$1```: 1er champ

- ```$NF``` : le dernier champ



## Exercice 1

Donner la commande awk qui permet de numeroter les lignes du fichier /etc/passwd 
en commençant à 100 et écrit "Fin" en fin de traitement.


## Exercice 2

Donner la commande awk qui permet de numeroter les lignes du fichier /etc/passwd 
en commençant à 100 et d'afficher uniquement la premiere colonne et 
écrit "Fin" en fin de traitement.



## Exercice 3

Donner la commande awk qui permet d'afficher les lignes qui correspondent au groupe 
utilisateurs (GID=510) précédées de leur numéro (commançant par 100) 
dans le fichier /etc/passwd




## Exercice 4

Donner la commande awk qui permet d'afficher pour chaque utilisateur de votre systeme 
son login, son repertoire home, son GID, son UID séparé par des '@'



## Exercice 5

Donner la commande awk qui affiche pour chaque numero de groupe la liste des utilisateurs 




## Exercice 6

Donner la commande awk qui permet de compter le nombre d'erreur par adresse IP
sur votre serveur Web (apache)




