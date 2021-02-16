---
title: M2102-2 - TP3 VMware ESXi
lang: fr-FR
actionText: M2102-2 - TP3 
actionLink: /M2102-2/TP/TP3
sidebarDepth: 1	
---


# VMware ESXi

::: danger 

Ce TP se fait uniquement en présentiel à l'IUT.
:::

VMware ESXi est un hyperviseur de type 1 indépendant des systèmes d'exploitation. Il repose lui-même sur le système d'exploitation VMkernel qui assure directement l'interface avec les agents VMware et les modules tiers agréés. Les administrateurs chargés de la virtualisation peuvent configurer VMware ESXi via sa console, le client VMware vSphere ou son interface web.

-   Accédez à l'interface web de notre serveur ESX via l'url : [http://rt-vm1.univ-artois.fr](http://rt-vm1.univ-artois.fr).
-   Notez les performances de ce serveur et décrivez les différentes parties de l'outil.
-   L'objectif est de créer une machine identique à votre machinve physique :
    -   Créez une machine virtuelle avec les paramètres suivants :
        - Nom : le même nom que votre machine physique
        - Type : Ubuntu Linux 64 bits
        - Stockage : 10G
        - Réseau : intern
        - Pointer le lecteur CD/DVD vers l'image ISO d'ubuntu qui se trouve dans le répertoire ```/nas/isos```.
    -   Lancez la machine et installez le système d'exploitation.
    -   Notez les changements de performances dans la partie Hôte.
    -   Faites communiquer les différentes machines virtuelles entre elles ainsi qu'avec les machine physique (avec des ping par exemple)
