---
title: M2207 - TP2 Création de classes
lang: fr-FR
actionText: M2207 - TP2 
actionLink: /M2207/TP/TP2
sidebarDepth: 1	
---
# M2207 - TP2 : Création de classes
> durée : 4h

## Objectif de ce TP
Vous familiariser avec les bases de la création de classes en Java.

##  Exercice n°1

- Testez les classes du cours si vous ne l'avez pas fait. Ce sont les classes [`Voiture.java`](../code/Voiture.java), [`TestVoiture.java`](../code/TestVoiture.java), [`Personne.java`](../code/Personne.java), [`Etudiant.java`](../code/Personne.java), [`Enseignant.java`](../code/Enseignant.java) et [`TestPersonneEtudiantEnseignant.java`](../code/TestPersonneEtudiantEnseignant.java).

:::tip
Travaillez dans votre répertoire `M2207/TP2`
:::



## Exercice n°2

- Créez une classe personnage avec pour caractéristiques un nom et un nombre de vies.
- Ajoutez l'attribut de classe nbPersonnages (compte le nombre de personnages créés).
- Ajoutez une méthode d'instance et une méthode de classe de votre choix.
- Créez un programme de test.

## Exercice n°3

- Créez les classes et fichiers `Cercle.java`, `Cylindre.java` et `Cone.java` en accord avec le diagramme de classe suivant.

![](./img/white_space.svg)  ![](./img/ccc.png)

- La classe **Cercle** contient un attribut d'instance public rayon et une méthode d'instance publique `surface()` retournant la surface du cercle (valant $\pi r^2$). Vous créerez un constructeur prenant en paramètre un rayon $r$ (double).

:::tip 
Voir feuille de synthèse du cours au cas où pour avoir PI en Java.
:::

- La classe **Cylindre** hérite de la classe Cercle (et donc de son attribut rayon et de sa méthode `surface()`). Elle a en plus un attribut d'instance public `hauteur` et une méthode d'instance publique `volume()` (valant surface de la base fois hauteur). Vous créerez un constructeur prenant en paramètre un rayon $r$ (double) et une hauteur $h$ (double).

:::tip Autrement dit
 un cylindre est vu comme un cercle auquel on a ajouté une hauteur.
:::

- La classe **Cone** hérite de la classe Cylindre et donc des attributs rayon et hauteur, et des méthodes volume() et surface(). Cependant cette classe redéfinit le `volume()` qui vaut pour un cône $\frac{1}{3}$ du volume d'un cylindre. . Vous créerez un constructeur prenant en paramètre un rayon $r$ (double) et une hauteur $h$ (double).

:::tip Autrement dit
 un cône est un cylindre tel que son volume est divisé par 3.
:::

- La classe de test suivante devra fonctionner avec vos classes.

```java 
public class TestCCC {
  public static void main(String[] args) {
    System.out.println("* Création d'un cercle *");
    Cercle c = new Cercle(3.5);
    System.out.println("Rayon : "+c.rayon);
    System.out.println("Surface : "+c.surface());
    
    System.out.println("* Création d'un cylindre *");
    Cylindre cy = new Cylindre(3.5,5);
    System.out.println("Rayon de la base : "+cy.rayon);
    System.out.println("Hauteur : "+cy.hauteur);
    System.out.println("Surface de la base : "+cy.surface());
    System.out.println("Volume du cylindre : "+cy.volume());
    
    System.out.println("* Création d'un cône *");
    Cone co = new Cone(3.5,5);
    System.out.println("Rayon de la base : "+co.rayon);
    System.out.println("Hauteur : "+co.hauteur);
    System.out.println("Surface de la base : "+co.surface());
    System.out.println("Volume du cône : "+co.volume());
  }
}
```

## Exercice n°4

On souhaite créer une classe Adresseipv4 permettant d'obtenir l'adresse réseau et la partie hôte d'une adresse IPv4 (de classe A, B ou C). Le constructeur acceptera une adresse sans masque ou avec un masque, les notations CIDR et décimales étant acceptées. 

:::details Par exemple, le programme de test suivant :
```java
public class TestAdresseipv4 {
  public static void main(String[] args) {
    Adresseipv4 a1 = new Adresseipv4("192.168.1.0");
    a1.affiche();
    Adresseipv4 a2 = new Adresseipv4("192.168.1.0/255.255.240.0");
    a2.affiche();
    Adresseipv4 a3 = new Adresseipv4("192.168.1.0/12");
    a3.affiche();
  }
}
```
:::

:::details Devra afficher le résultat suivant :

```
Adresse : 192.168.1.0
Adresse (octets) : [192|168|1|0]
Masque : 255.255.255.0
Masque (octets) : [255|255|255|0]
Adresse Réseau : 192.168.1.0
Partie Hôte : 0.0.0.0

Adresse : 192.168.1.0
Adresse (octets) : [192|168|1|0]
Masque : 255.255.240.0
Masque (octets) : [255|255|240|0]
Adresse Réseau : 192.168.0.0
Partie Hôte : 0.0.1.0

Adresse : 192.168.1.0
Adresse (octets) : [192|168|1|0]
Masque : 255.240.0.0
Masque (octets) : [255|240|0|0]
Adresse Réseau : 192.160.0.0
Partie Hôte : 0.8.1.0
```
:::
La diagramme de classe pour la classe à construire est donné ci-dessous.
![](./img/white_space.svg) ![](./img/white_space.svg)  ![](./img/adresseipv4.png)

L'utilisateur de la classe va donner une adresse IPv4 sous forme de chaîne par exemple "192.168.1.0", "192.168.1.0/255.255.240.0" ou "192.168.1.0/12"). On stockera alors :

- l'adresse dans l'attribut **a** (Ex : "192.168.1.0")
- pour aider dans les calculs, chaque octet de l'adresse sous la forme d'un entier dans le tableau à 4 éléments **aO** (aO[0] contient le premier octet, aO[1] le 2e octet, ...) (Ex : |192|168|1|0| tableau de 4 entiers)
- le masque dans de l'adresse dans l'attribut **m** (Ex : "255.255.255.0", s'il n'est pas donné, c'est le masque par défaut de la classe)
- et idem pour aider dans les calculs, chaque octet du masque est stocké sous la forme d'un entier dans le tableau à 4 éléments **mO** (mO[0] contient le premier octet du masque, mO[1] le 2e octet, ...) (Ex : |255|255|255|0| tableau de 4 entiers)

C'est dans le constructeur public `Adresseipv4(String adr){...}` que ces 4 attributs seront initialisés.

- La méthode de classe (nom soulignée dans le diagramme de classe) `cidr_en_masque` prend en entrée un entier représentant un masque CIDR (Ex : 12) et retourne une chaîne de caractères contenant le masque associé en notation décimale (Ex : "255.240.0.0").
- La méthode d'instance `reseau` retourne une chaîne contenant l'adresse du réseau associé à l'adresse IPv4.
- La méthode d'instance `hote` retourne une chaîne contenant la partie hôte associée à l'adresse IPv4.

:::tip 
Les méthodes `split()` et `contains()` de la classe `String` vous serviront
- Pour vérifier si la chaine adr contient un slash ("/") : `adr.contains("/")`
- Pour le découpage d'une chaîne adr selon le slash ("/") ou les points (".") : `adr.split("/")`, `adr.split("\\.")`
```java
public class Adresseipv4 {

  public String a;
  public int[] ao = new int[4];
  public String m;
  public int[] mo = new int[4];

  public Adresseipv4(String adr) {
    if (!adr.contains("/")) {
      // Pas de masque donné
      // ...
    } else {
      // Masque décimal ou cidr donné
      // ...
    }
  }
  
  public static String cidr_en_masque(int cidr) {
    // Méthode de classe : appel avec Adresseipv4.cidr_en_masque(cidr) 
    // Une solution courte mais un peu technique (opérations bit-à-bit)
    // vous est donnée. 
    // << décalage à gauche, ex : 4<<2 vaut (10000) soit 16
    // >>> décalage à droite avec remplissage de 0, ex : 4>>>1 vaut (010) soit 2
    int bits = 0xffffffff ^ (1 << 32 - cidr) - 1;
    return ((bits & 0xff000000) >>> 24) + "." + ((bits & 0xff0000) >>> 16) + 
            "." + ((bits & 0xff00) >>> 8) + "." + (bits & 0xff);
  }

  public void affiche() {
    // ...
  }

  public String reseau() {
    // Rappel : Adresse IP & Masque = adresse réseau
    // return ...
  }
  
  public String hote() {
    // Rappel : Adresse IP & ~Masque = Partie hôte
    // return ...
  }
}
```
Vous pourrez aussi vous aider de la méthode privée suivante

```java
private static void decoupe (int[] so, String s){
   String[] sos = s.split("\\.");
   for(int i=0;i<sos.length;i++)
      so[i]=Integer.parseInt(sos[i]);
}
```
:::

## Synthèse

- Complétez le tableau suivant dans un fichier libreoffice, rtf ou word à rendre avec vos programmes.

|**Concept**|**En Java**|
|----------------------------- |---------------------------------------- |
|Création d'une classe publique|`public class Classe{...}`|
|mot clé réservé pour désigner <br/> l'objet||
|mot clé réservé pour désigner <br/> le constructeur ou une méthode <br/> de la classe mère||
|mot clé réservé pour désigner <br/> un attribut ou une méthode public||
|mot clé réservé pour désigner <br/> un attribut ou une méthode privé||
|mot clé réservé pour désigner <br/> un attribut ou une méthode d'instance||
|mot clé réservé pour désigner <br/> un attribut ou une méthode de classe||


:::danger Compte-rendu
À la fin de chaque TP, déposez sur rt-bethune (Moodle) une archive au format zip d'un répertoire à votre nom contenant vos programmes avec un éventuel fichier de commentaires.
:::
