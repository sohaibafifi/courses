---
title: M3210C - TP2 - La programmation orientée objets (suite)
lang: fr-FR
actionText: M3210C - TP2 
actionLink: /M3210C/TP/TP2
sidebarDepth: 1	
---
# M3210C - TP2 : La programmation orientée objets (suite)
> durée : 2h

## Objectif de ce TP
Consolider vos bases de programmation OO Java.

## Exercice n°1 - Capter et Gérer les exceptions (MonEntier)

**A/** Créez une classe d'objet ```MonEntier``` qui contient une propriété ```val``` de type ```int```. Ecrivez le constructeur de cette classe qui initialise correctement l'objet.
 
**B/** Ajoutez à cette classe la méthode ```division()```.

Cette méthode retourne le résultat (```int```) de la division entière de la propriété ```val``` d'un objet ```MonEntier``` par la propriété ```val``` d'un autre objet ```MonEntier``` qu’on appelera « **diviseur** ». 
**L'objet diviseur sera passé en paramètre de la méthode division.**

Ajouter dans la méthode ```division()``` un message indiquant « ```division de X par Y``` » avant l’opération.
 
**C/** Créez une méthode ```main()``` créant deux entiers quelconques et appeler la méthode division avec ces 2 valeurs en affichant le résultat retourné. 

Que se passe-t-il avec un diviseur égal à zéro? (La division par zéro crée une ```ArithmeticException```, vérifiez).
 
**D/** Dans la méthode division: testez (```try```) le bloc qui effectue l'opération. Si une ```ArithmeticException``` est générée, affichez le message ```Division impossible```.
 
:::tip  
Vous pouvez afficher le message de l'exception en utilisant la méthode ```getMessage()``` :

```System.out.println(variableException.getMessage());```
:::

**E/** Commentez le bloc try de la question D. Déplacez le bloc ```try {} catch{}``` dans la méthode main. Comment doit il être placé ?
 
**F/** Proposez une modification pour que le message "Division effectuée" soit affichée à l’écran qu’il y ait eu une erreur ou non. Quelles sont les 3 possibilités ?
 
 

## Exercice n°2 - Entrées/sorties fichiers

**A/** Ecrire un programme  ```Ecrire```  qui crée le fichier binaire (```bytes```) nommé ```donnees.dat```. Il tire au hasard une série de 14 nombres compris entre 0 et 32767 et les écrits dans le fichier.

:::tip
Utiliser pour cela la méthode ```nextInt(int n)``` de la classe ```Random``` (java.util) qui retourne un entier entre 0 et n-1. vous pouvez aussi utiliser ```Math.random()```
:::

Ecrire un programme ```Lire```  qui lit le fichier binaire (bytes) nommé "**donnees.dat**" et qui affiche à l’écran la liste des valeurs.

**B/** Modifier les programmes des question A pour éliminer la limitation de 14 nombres.

- ```Ecrire```  devra recevoir en paramètre sur la ligne de commande le nombre de valeurs à générer vers le fichier, et devra recevoir également le nom du fichier sur la ligne de commande.

-  ```Lire```  devra également le nom du fichier sur la ligne de commande et lire tant qu'il y a des données dans le fichier.
