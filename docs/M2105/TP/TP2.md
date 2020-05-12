---
title: M2105 - TP2  Introduction au CMS Wordpress
lang: fr-FR
actionText: M2105 - TP2
actionLink: /M2105/TP/TP2
sidebarDepth: 1	
---
# M2105 - TP2 : Introduction au CMS Wordpress
> durée : 8h

## Présentation du TP

Un **CMS** (Content Management System), ou SGC (Système de Gestion de Contenu) en français, est un logiciel permettant la réalisation "facile" de pages Web ainsi que la mise à jour de leurs contenus (pages, rubriques, ...) via une interface Web d'administration. Le contenu est stocké dans une base de données. La présentation est réalisée via des templates (gabarits, modèles de présentation).

Ce TP a pour but de vous faire découvrir le CMS **WordPress** qui est basé sur **PHP** (Langage de Programmation Web) et **MySQL** (Système de Gestion de Base de Données - SGBD)

:::tip  Élements importants sur un CMS

Il y a deux interfaces Web : le site en lui même que l'utilisateur verra (appelé **front-end**), et l'interface Web d'administration permettant de gérer le site (appelée **back-end**)


Le super utilisateur (super user) peut se loguer sur les deux interfaces. Conservez bien en mémoire les identifiants que vous aurez choisis à l'installation.
:::

## Installation d'un serveur Web PHP/MySQL et de WordPress

Pour utiliser WordPress vous avez besoin d'un serveur Web avec PHP et MySQL.

e plus simple est d'utiliser [un stack Bitnami pour WordPress](https://bitnami.com/stack/wordpress/installer) qui comprend tout : serveur Web, PHP, base de données et WordPress, quel que soit votre système d'exploitation (Linux, Mac, Windows).

Installez ce stack sous une machine virtuelle à l'IUT ou sur votre machine personnelle

Pour Ubuntu, le fichier d'installation a déjà été téléchargé pour vous et se trouve sur iut-rt dans le répertoire ```/opt/donneesTP/M2105/WordPress```

- Copier le fichier sur votre machine

```bash 
scp votrelogin@iut-rt:/opt/donneesTP/M2105/WordPress/bitnami* cheminSurVotreMachine
```

- Pour installer un fichier .run, il suffit de mettre les droits d'exécution dessus, puis d'exécuter le fichier.
- L'interface Bitnami se lance alors via un script (Quelque chose autour de "```manager-linux-x64.run```") situé dans votre répertoire d'installation


## Réalisation de votre site

Comme pour votre premier site, vous devez réaliser un site web personnel sur ce que vous voulez : votre page personnel, un hobby, une association fictive ou non, ...

Vous devez mettre en avant vos compétences acquises. Les éléments suivants seront pris en compte dans la notation :

- Qualité des pages et menus réalisés.
- Gestion de plusieurs utilisateurs.
- Utilisation de formulaires.
- Plugins installés. Vous pouvez ajouter d'autres fonctionnalités : Forum, Mailing List, Calendrier, Paiement électronique, - ...
- Bonus : développement de template.


:::tip Pour vous aider 
 [documentation en français](https://codex.wordpress.org/fr:Accueil)
:::
