---
title: M3210C - TP4 - Introduction aux sockets
lang: fr-FR
actionText: M3210C - TP4 
actionLink: /M3210C/TP/TP4
sidebarDepth: 1	
---
# M3210C - TP4 : Introduction aux sockets
> durée : 4h

## Objectif de ce TP
Vous initier aux sockets.


## Récupérer une adresse IP avec InetAddress

Le package java.net de la plate-forme Java fournit une classe InetAddress qui nous permet de récupérer et manipuler son adresse internet, IP pour les intimes. Cette classe n'a pas de constructeur, pour pouvoir avoir une instance de cette classe on a besoin des méthodes de classe. Voici les méthodes dont je vous parle :

- `getLocalHost()` : elle retourne un objet qui contient l'adresse IP de la machine locale.

- `getByName(String nom_de_l_machine)` : elle retourne un objet qui contient l'adresse IP de la machine dont le nom est passé en paramètre.

- `getAllByName(String nom_de_l_machine)` : elle retourne un tableau d'objets qui contient l'ensemble d'adresses IP de la machine qui correspond au nom passé en paramètre.

A présent, voyons les méthodes applicables à un objet de cette classe :

- `getHostName()` : elle retourne le nom de la machine dont l'adresse est stockée dans l'objet.

- `getAddress()` : elle retourne l'adresse IP stockée dans l'objet sous forme d'un tableau de 4 octets.

- `toString()` : elle retourne un String qui correspond au nom de la machine et son adresse.

Et pour terminer un petit exemple :

```java 
import java.net.InetAddress;
import java.net.UnknownHostException;


public class Adressage {
	
	public static void main(String[] zero) {
		
		InetAddress LocaleAdresse ;
		InetAddress ServeurAdresse;

		try {

			LocaleAdresse = InetAddress.getLocalHost();
			System.out.println("L'adresse locale est : "+LocaleAdresse ); 
			
			ServeurAdresse= InetAddress.getByName("rt-bethune.univ-artois.fr");
            System.out.println("L'adresse du serveur du département RT est : "+ServeurAdresse);
		
		} catch (UnknownHostException e) {
			
			e.printStackTrace();
		}
	}

}
```




## Qu'est-ce qu'un socket ?

Un socket est un point de terminaison d'une communication bidirectionnelle, c'est-à-dire entre un client et un serveur en cours d'exécution sur un réseau donné. Les deux sont liés par un même numéro de port TCP de sorte que la couche puisse identifier la demande de partage de données.

Un serveur fonctionne sur une machine bien définie et est lié à un numéro de port spécifique. Le serveur se met simplement à l'écoute d'un client, qui demande une connexion.

En outre, java.net comprend la classe ServerSocket, qui met en oeuvre une sorte de prise que les serveurs peuvent utiliser pour écouter et accepter les connexions des clients. Ce qui nous donne :

```java
ServerSocket socketserver = new ServerSocket(numero_port);
```

Ainsi on obtient un objet de la classe ServerSocket sur un port spécifique : si ce dernier est à 0, le socket est créée sur n'importe quel port libre.

Il existe deux autres constructeurs ; l'un a deux paramètres, le premier est bien sûr le numéro de port et le nombre total de connexion simultanées acceptées, voyez :

```java
ServerSocket socketserver = new ServerSocket(numer_port,nbr_max);
```

**nbr_max** est le nombre maximal de connexions traitées simultanément. Par exemple au-delà de cinq tentatives de connexion consécutives autorisées, les connexions sont refusés.

Pour le second constructeur il suffit de spécifier l'adresse locale du serveur.


```java
ServerSocket socketserver = new ServerSocket(numer_port,nbr_max,adresse_locale);
```

Quant au client, celui-ci connaît le nom de la machine sur laquelle le serveur est en exécution et le numéro de port sur lequel il écoute. Le client va demander une connexion au serveur en s'identifiant avec son adresse IP ainsi que le numéro de port qui lui est lié.


Pour cela, le package `java.net` fournit une classe `Socket` qui met en œuvre une connexion bidirectionnelle entre votre programme Java et un autre programme situé sur le réseau. La classe `Socket` permet de cacher les détails d'implémentation de cette connexion. En utilisant cette classe en lieu et place d'un code natif, vos programmes peuvent communiquer sur le réseau quel que soit la plateforme sur laquelle ils se trouvent. La création d'un socket pour un programme client s'effectue à l'aide d'un des constructeurs suivants :


```java
Socket socket = new Socket(param1, param2)
```

Le premier paramètre correspond à l'identité du client, il peut être une chaine de caractère ou de type InetAddress, param2 correspond au numéro de port sur lequel on souhaite se connecter sur le serveur. Il est possible également de spécifier son adresse local comme troisième paramètre et le numéro de port local :


```java
Socket socket = new Socket(adresse_distante, port_distant, adresse_locale, port_locale)
```

Après tentative de connexion, si tout va bien, le serveur accepte la connexion du client, et reçoit un nouveau socket qui est directement lié au même port local. Il a besoin d'une nouvelle prise de sorte qu'elle puisse continuer à écouter le socket d'origine pour les demandes de connexion, tout t'en satisfaisant les besoins du client connecté. Voici comment accepter une connexion d'un client :



```java
Socket socketduserveur = socketserver.accept();
```

Une fois le socket créé, l'attente de connexion provenant du client se fait à l'aide de la méthode `accept()`.


> La méthode `accept()` reste bloquante tant qu'elle n'a pas détecté de connexion.

**Côté client**, si la connexion est acceptée, une socket est créé et le client peut utiliser la socket pour communiquer avec le serveur.

L'établissement d'une connexion peut lever une exception de type `IOException`.

On va essayer d'établir une communication. Vous avez tout les éléments à portée de main, vous pouvez désormais établir une connexion, au boulot ! 

Le client et le serveur peuvent à présent communiquer par l'écriture ou la lecture. 









```java
// Serveur.java

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class Serveur {

	public static void main(String[] zero) {
		
		ServerSocket socketserver  ;
		Socket socketduserveur ;

		try {
		
			socketserver = new ServerSocket(2009);
			socketduserveur = socketserver.accept(); 
			System.out.println("Un client s'est connecté !");
		        socketserver.close();
		        socketduserveur.close();

		}catch (IOException e) {
			e.printStackTrace();
		}
	}

}
```

```java
// Client.java
import java.io.IOException;
import java.net.InetAddress;
import java.net.Socket;
import java.net.UnknownHostException;


public class Client {
	
	public static void main(String[] zero) {
		
		Socket socket;

		try {
		
		    socket = new Socket(InetAddress.getLocalHost(),2009);	
	        socket.close();

		}catch (UnknownHostException e) {
			
			e.printStackTrace();
		}catch (IOException e) {
			
			e.printStackTrace();
		}
	}

}
```


:::tip 
Lancez le serveur en premier et ensuite le client !
:::

:::danger Attention 
il ne faut jamais oublier de fermer le socket ! Sinon si vous utilisez le même port dans un autre programme, ce (l'action de fermer une socket) ne sera plus possible car il (le port) sera occupé !
:::


## Échange de message

Vous venez d'établir votre première connexion entre un serveur et un client. Maintenant, voyons comment envoyer et recevoir des messages.

Une fois la connexion établie, il est possible de récupérer le flux d'entrée et de sortie de la connexion TCP vers le serveur. Il existe deux méthodes pour permettre la récupération des flux :

- `getInputStream()` de la classe `InputStream`. Elle nous permet de gérer les flux entrant ;

- `getOutputStream()` de la classe `OuputStream`. Elle nous permet de gérer les flux sortant.

Ces deux méthodes nous permettent donc de gérer les flux en entrée et en sortie. En général le type d'entrée et sortie utilisé est `BufferedReader` et `InputStreamReader` pour la lecture, `PrintWriter` pour l'écriture. Mais on peut utiliser tous les autres flux.

```java
// Server.java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.InetAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.UnknownHostException;
import java.io.PrintWriter;

public class Serveur {
	
	public static void main(String[] zero) {
		
		ServerSocket socketserver  ;
		Socket socketduserveur ;
		BufferedReader in;
		PrintWriter out;
		
		try {
		
			socketserver = new ServerSocket(2009);
			System.out.println("Le serveur est à l'écoute du port "+socketserver.getLocalPort());
			socketduserveur = socketserver.accept(); 
		        System.out.println("Un client s'est connecté");
			out = new PrintWriter(socketduserveur.getOutputStream());
		        out.println("Vous êtes connecté !");
		        out.flush();
		                
		        socketduserveur.close();
		        socketserver.close();
		        
		}catch (IOException e) {
			
			e.printStackTrace();
		}
	}

}
```

```java
// Client.java

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.InetAddress;
import java.net.Socket;
import java.net.UnknownHostException;


public class Client {
	
	public static void main(String[] zero) {
		
		
		Socket socket;
		BufferedReader in;
		PrintWriter out;

		try {
		
			socket = new Socket(InetAddress.getLocalHost(),2009);	
		        System.out.println("Demande de connexion");

		        in = new BufferedReader (new InputStreamReader (socket.getInputStream()));
		        String message_distant = in.readLine();
		        System.out.println(message_distant);
		        
		        socket.close();
		       
		}catch (UnknownHostException e) {
			
			e.printStackTrace();
		}catch (IOException e) {
			
			e.printStackTrace();
		}
	}

}
```


Résultat chez le serveur :
```
Le serveur est à l'écoute du port 2009
Un client s'est connecté
```
Résultat chez le client :

```
Demande de connexion
Vous êtes connecté !
```

### Explications 

#### Côté Serveur

Après établissement de la connexion, le serveur obtient son socket qu'il utilise pour gérer le flux sortant à l'aide de `socketduserveur.getOutputStream()` ; ensuite, à l'aide de la méthode `println` on envoie un message au client, on utilise `flush` pour vider le buffer tout simplement. Et pour finir on ferme la connexion.

#### Côté Client
Après avoir obtenu notre socket, on utilise `socket.getInputStream()` pour récupérer le flux sortant. La méthode `readLine()` nous permet de lire une chaîne de caractères. Il existe plusieurs autres méthodes telles :

`readInt()` permettant de lire un entier ;

`readDouble()` permettant de lire un nombre de type double ;


Pour finir, on affiche le message reçu et on ferme notre socket.

Ça a l'air très simple à première vue pour deux hôtes, mais si l'on veut que plus que deux puissent communiquer entre eux à la fois, comment faire ? D'où la nécessité d'utiliser les Threads...