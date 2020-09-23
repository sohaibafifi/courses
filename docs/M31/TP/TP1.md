---
title: M31- TP1 La commande AWK
lang: fr-FR
actionText: M31- TP1 
actionLink: /M31/TP/TP1
sidebarDepth: 2	
---

# La commande AWK


  

## Objectifs

Extraire des informations précises d'un fichier créé dans un format propriétaire particulier

## Présentation

A l'aide de la commande AWK, vous allez tout d'abord mettre les informations contenues dans un fichier au format particlier sous une forme qui sera directement exploitable pour vous retrouver facilement certaines informations. Vous allez utiliser la commande AWK et son langage de programmation associé pour effectuer ce premier travail. Dans un deuxième temps, vous isolerez certaines informations à l'aide de commandes ou scripts. Le fichier [materiel](data/materiel) que nous vous fournisssons contient des informations sur les machines qui se trouvent dans un laboratoire d'informatique. Pour chaque machine, nous avons les informations suivantes:  

 **Champ**

**Signification**

|Champ|Signification|
|--- |--- |
|ident|Nom de la machine|
|numip|Numéro IP|
|hostid|Numéro d'identification du processeur|
|sn|Numéro de serie|
|type|Type de matériel|
|modèle|modèle de matériel|
|config|Configuration du matériel|
|install|Date d'installation|
|fourn|Fournisseur|
|maint|Date de maintenance|
|prop|Propriétaire de la machine|
|util|Utilisateur de la machine|
|pos|Position géographique de la machine|

Les informations concernant une machine sont repérées par une ligne de symbole #.  
  
Une ligne contient un champ de l'information d'une machine.

## Travail

- Créér un répertoire dans lequel vous allez copier le fichier [materiel](data/materiel) .  

  

- Transformer le fichier [materiel](data/materiel) pour que toutes les informations concernant une machine se trouvent sur une seule ligne. Chaque champ d'information étant séparé des autres par le symbole :'. Le fichier [materiel](data/materiel) transformé sera rangé dans le fichier **[mat](data/mat)**.

  

- Donner la commande permettant de trier le fichier [mat](data/mat) par ordre alphabétique sur le nom de la machine.

  

- Donner la liste des machines avec leur position respective.

  

- Donner la liste des noms de machine par modèle.

  

- Donner le nombre de machines par position.

  

- Donner le nombre de machines par modèle.

  

- Donner la liste des noms de machine et leur numéro IP par ordre croissant du numéro IP. Pour répondre à cette question, une solution consiste à utiliser la commande sort. Toutes les machines ont un numéro de classe B dont la partie réseau vaut 172.31, il faudra donc utiliser le troisième et le quatrième octet de l'adresse pour trier la liste des machines.

  

- Donner la liste des machines installées en 1991.

  

- Donner la liste des machines installées depuis 1992.

  

- Donner la liste des machines pour un propriétaire donné en argument (script shell).

  

- Donner la liste des machines pour un type de machine donné en argument (script shell).

  

- Donner l'ensemble des informations concernant une machine donnée en argument (script shell).