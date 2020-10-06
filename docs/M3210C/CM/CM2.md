---
title: M3210C - La programmation orientée objet avec Java (suite)
lang: fr-FR
actionText: M3210C - CM2
actionLink: /M3210C/CM/CM2
sidebarDepth: 1	
---
# M3210C - CM2 : La programmation orientée objet avec Java (suite)
> durée : **2h**


## Les Tableaux 

Un tableau est un ensemble indexé de données d'un même type. L'utilisation d'un tableau se décompose en trois parties :

- Création du tableau;
- Remplissage du tableau;
- Lecture du tableau.


### Création du tableau

Un tableau se déclare et s'instancie comme une classe :

```java 
int monTableau[ ] = new int[10];
````

ou

```java 
int [ ] monTableau = new int[10];
````

L'opérateur ```[ ]``` permet d'indiquer qu'on est en train de déclarer un tableau.

Dans l'instruction précédente, nous déclarons un tableau d'entiers (int, integer) de taille 10, c'est-à-dire que nous pourrons stocker 10 entiers dans ce tableau.

Si ```[ ]``` suit le type, toutes les variables déclarées seront des tableaux, alors que si ```[ ]``` suit le nom de la variable, seule celle-ci est un tableau :

```java 
int [] premierTableau, deuxiemeTableau;
float troisiemeTableau[], variable;
```

Dans ces quatre déclarations, seule variable n'est pas un tableau.


### Remplissage d'un tableau

Une fois le tableau déclaré et instancié, nous pouvons le remplir :

```java 
int [] monTableau = new int[10];

monTableau[5] = 23;
````

L'indexation démarre à partir de 0, ce qui veut dire que, pour un tableau de N éléments, la numérotation va de **0 à N-1**.

Dans l'exemple ci-dessus, la 6ème case contient donc la valeur 23.

Nous pouvons également créer un tableau en énumérant son contenu :

```java
int [] monTableau = {5,8,6,0,7};
````

Ce tableau contient 5 éléments.

Lorsque la variable est déjà déclarée, nous pouvons lui assigner d'autres valeurs en utilisant l'opérateur ```new``` :

```java
monTableau = new int[]{11,13,17,19,23,29};
````

### Lecture d'un tableau

Pour lire ou écrire les valeurs d'un tableau, il faut ajouter l'indice entre crochets ([ et ]) à la suite du nom du tableau :

```java
int [] monTableau = {2,3,5,7,11,23,17};
int nb;

monTableau[5] = 23;  // ->  2 3 5 7 11 23 17
nb = monTableau[4];  // 11
````

L'indice 0 désigne le premier élément du tableau.

L'attribut length d'un tableau donne sa longueur (le nombre d'éléments). Donc pour un tableau nommé monTableau l'indice du dernier élément est ```monTableau.length-1```.

Ceci est particulièrement utile lorsque nous voulons parcourir les éléments d'un tableau.

```java
for (int i = 0; i < monTableau.length; i++) {
    int element = monTableau[i];
    // traitement
}
```

Java 5 fournit un moyen plus court de parcourir un tableau.

L'exemple suivant réalise le traitement sur monTableau :

```java
for (int element : monTableau){
   // traitement
}
```

### Tableaux à plusieurs dimensions

En Java, les tableaux à plusieurs dimensions sont en fait des tableaux de tableaux.

Exemple, pour allouer une matrice de 5 lignes de 6 colonnes :

```java 
int[][] matrice=new int[5][];
for (int i=0 ; i<matrice.length; i++)
    matrice[i]=new int[6];
```

Java permet de résumer l'opération précédente en :

```java
int[][] matrice=new int[5][6];
```

La première version montre qu'il est possible de créer un tableau de tableaux n'ayant pas forcément tous la même dimension.

On peut également remplir le tableau à la déclaration et laisser le compilateur déterminer les dimensions des tableaux, en imbriquant les accolades :

```java
 int[][] matrice =
    {
        { 0, 1, 4, 3 } , // tableau [0] de int
        { 5, 7, 9, 11, 13, 15, 17 } // tableau [1] de int
    };
````

Pour déterminer la longueur des tableaux, on utilise également l'attribut length :

```java
matrice.length     //  2
matrice[0].length  //  4
matrice[1].length  //  7
```

**Exercice :** Comment parcourir un tableau deux dimensions

::: details Solution

De la même manière que précédement, on peut facilement parcourir tous les éléments d'un tableau :

```java
for (int i=0 ; i<matrice.length ; i++)
{
	for (int j=0 ; j<matrice[i].length ; j++)
	{
		//Action sur matrice[i][j]
	}
}
```

Depuis Java 5, il est possible de parcourir les valeurs comme ceci :

```java
for (int[] row : matrice)
{
	for (int j=0 ; j<row.length ; j++)
	{
		//Action sur row[j]
	}
}
```

Le parcours des éléments du tableau row peut également utiliser la boucle for itérative sur le type primitif int. Ce type de boucle ne permet pas de modifier les éléments du tableau.

```java
for (int[] row : matrice)
{
	// Modifications sur row[index] répercutées sur matrice[...][index]
	// Modifications sur row ignorées
	for (int cell : row)
	{
		// Action sur cell
		// Modifications sur cell ignorées
	}
}
```
Pour une matrice d'objet, cela est donc également possible :

```java
String[][] matrice_de_themes =
{
	{ "Java", "Swing", "JavaFX" },
	{ "Python", "Numpy" },
	{ "Vélo", "Chambre à air", "Rustine", "Guidon" },
	{ "Cuisine", "Recette", "Ingrédient", "Préparation", "Ustensile" },
};
for (String[] ligne_theme : matrice_de_themes)
{
	for (String mot : ligne_theme)
	{
		//Action sur mot
		System.out.println(mot);
	}
}
```
:::

## Les flux d’entrée/sortie

En java, toutes les entrées/sorties sont gérés par des flux (= **streams**).

- Lecture du clavier

- Affichage sur la console

- Lecture/écriture dans un fichier

- Echange de données réseau avec des sockets

Un flux est une série d’informations envoyée sur un canal de communication entre deux entités.

### Circulation d’informations dans un flux

- Il y a un **émetteur** (qui envoie/écrit) et un **récepteur** (qui reçoit/lit).

- Le flux véhicule des **octets** entre eux.

- Emetteur et récepteur doivent se mettre d’accord sur le format des données envoyées (protocole)

- Emetteur et récepteur se chargent de la transformation des données.

###  Flux standards

Dans un système d’exploitation, il existe trois flux standards:


- entre l’application et l’écran pour transmettre une information (```System.out```).

- entre l’application et l’écran pour indiquer une erreur (```System.err```).

- entre le clavier et l’application (```System.in```).

###  Exemple de saisie avec System.in

Voici un programme qui lit l’entrée du clavier et qui envoie le caractère saisi sur la sortie standard (affichage du code UNICODE du caractère).

```java 
import java.io.IOException;
public class MainClass {
  public static void main(String[] args) throws IOException {
    System.out.println("Entrez un caractère");
    int inChar = System.in.read();
    System.out.println("Vous avez saisi: "+inChar);
  }
}
```

### Autres entités

Outre les flux standards, d’autres flux sont possibles entre des entités pouvant émettre ou recevoir des informations:

- Le **fichier**, point d’accès au disque dur (```java.io.File```).

- Le **socket réseau**, point d’accès pour une connexion TCP/IP entre deux machines (```java.net.Socket```)

### Le package java.io

#### Description

Le package java.io fournit un mécanisme d’entrée/sortie au moyen de flux de données, de caractères, d’objets. Le fichier est un émetteur ou récepteur privilégié de ces flux.


#### Création d’un flux

**1 - instanciation des entités**

```java
File f1 = new File("/tmp/toto");
File f2 = new File("/tmp/titi");
````

2 - instanciation des récepteurs (flux d’entrée) ou des émetteurs (flux de sortie)

```java 
FileInputStream fin = new FileInputStream(f1);
FileOutputStream fout = new FileOutputStream(f2);
```

3 - réception (lecture) ou émission (écriture)

```java 
val = fin.read();
fout.write(val);
```

#### Flux d’entrée

Les flux d’entrée héritent tous de la classe abstraite ```InputStream``` dont voici les méthodes principales:


- ```abstract int read()``` Lit le prochain octet. La valeur de l’octet est retournée comme un entier entre 0 et 255, -1 si la fin de fichier est atteinte.

- ```int read(byte[] b)``` Lit un certain nombre d’octets et les copie dans le buffer b. Le nombre d’octets lu est retourné, -1 si la fin de fichier est atteinte.

- ```void close()``` Ferme proprement le flux.

#### Flux de sortie

Les flux de sortie héritent tous de la classe abstraite OutputStream dont voici les méthodes principales:

- ```void write(int b)``` Ecrit l’octet b (seulement les 8 bits de poids faibles sont pris en compte).

- ```void write(byte[] t)``` Ecrit les octets du tableau d’octets t.

- ```void close()``` Ferme proprement le flux.

**Exercice :  Copie de fichiers**

Ecrivez une classe exécutable ```Copy``` qui réalise la copie d’un fichier dans un autre octet par octet, en respectant la convention suivante:

- ```java Copy source cible``` pour copier source vers cible.
- ```java Copy source``` pour écrire sur la sortie standard.
- ```java Copy``` pour lire puis écrire sur la sortie standard.

Le coeur de la copie sera effectuée dans la méthode suivante:

```java 
private static void copy(InputStream is, OutputStream os)
  throws IOException { ... }
```

## Classes abstraites
Une classe abstraite se trouve à mi-chemin entre les interfaces et les classes.

- Les classes abstraites, comme les interfaces, ne sont pas instanciables.

- Les classes abstraites sont déclarées par le modificateur abstract.

Il y a plusieurs intérêts à définir des classes abstraites :

- pour interdire l'instanciation d'une classe ;

- pour faire de la factorisation de code en ne donnant qu'une implémentation partielle.


## Les interfaces 


- Liste de méthodes dont on donne seulement la signature

- Représente un "contrat", ce qu'on attend d'un objet

- Peut être implémentée par une ou plusieurs classes qui doivent donner une implémentation pour chacune des méthodes annoncées (et éventuellement d'autres).

- Une classe peut implémenter plusieurs interfaces (permettant un héritage multiple, en les séparant par des virgules après le mot implements).

- Toutes les méthodes d'une interface sont implicitement abstraites.

- Une interface n'a pas de constructeurs

- Une interface ne peut avoir de champs sauf si ceux-ci sont statiques.

- Une interface peut être étendue par une ou plusieurs autre(s) interface(s).

En fait, une interface est une classe abstraite dont toutes les méthodes sont abstraites et dont tous les attributs sont constants (des constantes, voir le mot-clé final).


### Exemple

```java
//Définition de l'interface

package cours;

public interface Vehicule {
	
	void rouler();
	
	void freiner();
	
}
```

On a défini ici ce qu'on attend d'un objet de type véhicule.

On peut maintenant donner une ou plusieurs implémentations de cette interface grâce à l'utilisation du mot clef implements :

```java
package cours;

public class Velo implements Vehicule {
	//Champs
	
	private String marque;
	private int rayonRoue;
	
	//Constructeurs
	
	public Velo(String marque, int rayonRoue)
	{
		this.marque = marque;
		this.rayonRoue = rayonRoue;
	}
	
	//Methodes

	public void rouler() {
		//Coder ici la manière dont le vélo roule
	}
	
	public void freiner() {
		//Coder ici la manière dont le vélo freine
	}

        //Autres méthodes propres à Velo
}
```

```java
package cours;

public class Auto implements Vehicule {
	//Champs
	
	private String marque;
	private int poids;
	
	//Constructeurs
	
	public Auto(String marque, int poids)
	{
		this.marque = marque;
		this.poids = poids;
	}
	
	//Methodes

	public void rouler() {
		//Coder ici la manière dont l'auto roule
	}
	
	public void freiner() {
		//Coder ici la manière dont l'auto freine
	}
       
        //Autres méthodes propres à Auto.
}
```

Dans cet exemple, nous avons donné deux implémentations de Vehicule.

**Conséquences :**

- Ces 2 objets peuvent être vus comme des véhicules, c'est ce qu'on appelle le polymorphisme.

- Partout où on attend un objet de type Vehicule, on peut mettre un de ces deux objets.

- Par ce biais, on introduit une couche d'abstraction dans notre programmation ce qui la rend beaucoup plus flexible.

## Les exceptions 

Une **exception** est un signal qui se déclenche en cas de problème. Les exceptions permettent de gérer les cas d'erreur et de rétablir une situation stable (ce qui veut dire, dans certains cas, quitter l'application proprement). La gestion des exceptions se décompose en deux phases :

- La levée d'exceptions,

- Le traitement d'exceptions.

En Java, une exception est représentée par une classe. Toutes les exceptions dérivent de la classe ```Exception``` qui dérive de la classe ```Throwable```.

### Levée d'exception
Une exception est levée grâce à l'instruction ```throw``` :
```java
 if (k<0)
    throw new RuntimeException("k négatif");
```
Une exception peut être traitée directement par la méthode dans laquelle elle est levée, mais elle peut également être envoyée à la méthode appelante grâce à l'instruction ```throws``` (à ne pas confondre avec ```throw```) :

```java
 import java.io.IOException;
 public void maMethode(int entier) throws IOException
 {
    //code de la methode
 }
```

Dans cet exemple, si une exception de type ```IOException``` est levée durant l'exécution de maMethode, l'exception sera envoyée à la méthode appelant ```maMethode```, qui devra la traiter.

Certaines exceptions sont levées implicitement par la machine virtuelle :

- ```NullPointerException``` quand une référence nulle est déréférencée (accès à un membre),

- ```ArrayIndexOutOfBoundsException``` quand l'indice d'un tableau dépasse sa capacité,

- ```ArithmeticException``` quand une division par zéro a lieu.

Celles-ci n'ont pas besoin d'être déclarées avec l'instruction ```throws``` car elles dérivent de la classe RuntimeException, une classe d'exceptions qui ne sont pas censées être lancées par une méthode codée et utilisée correctement.

### Traitement d'exception
Le traitement des exceptions se fait à l'aide de la séquence d'instructions ```try...catch...finally```.

- L'instruction ```try``` indique qu'une instruction (ou plus généralement un bloc d'instructions) susceptible de lever des exceptions débute.

- L'instruction ```catch``` indique le traitement pour un type particulier d'exceptions. Il peut y avoir plusieurs instructions catch pour une même instruction try.

- L'instruction ```finally```, qui est optionnelle, sert à définir un bloc de code à exécuter dans tous les cas, exception levée ou non.

- Il faut au moins une instruction catch ou finally pour chaque instruction try.

**Exemple :**

```java
 public String lire(String nomDeFichier) throws IOException
 {
     try
     {
         // La ligne suivante est susceptible de lever une exception
         // de type FileNoFoundException
         FileReader lecteur = new FileReader(nomDeFichier);
         char[] buf = new char[100];
         // Cette ligne est susceptible de lever une exception
         // de type IOException
         lecteur.read(buf,0,100);
         return new String(buf);
     }
     catch (FileNotFoundException fnfe)
     {
         fnfe.printStackTrace(); // Indique l'exception sur le flux d'erreur standard
     }
     finally
     {
         System.err.println("Fin de méthode");
     }
 }
```

Le bloc ```catch (FileNotFoundException fnfe)``` capture toute exception du type ```FileNotFoundException``` (cette classe dérive de la classe ```IOException```).

Le bloc ```finally``` est exécuté quel que soit ce qui se passe (exception ou non).

Toute autre exception non capturée (telle ```IOException```) est transmise à la méthode appelante, et doit toujours être déclarée pour la méthode, en utilisant le mot clé ```throws```, sauf les exceptions dérivant de la classe RuntimeException. S'il n'y avait pas cette exception à la règle, il faudrait déclarer ```throws ArrayIndexOutOfBoundsException``` chaque fois qu'une méthode utilise un tableau, ou ```throws ArithmeticException``` chaque fois qu'une expression est utilisée, par exemple.

### Classes et sous-classes d'exception
L'héritage entre les classes d'exceptions peut conduire à des erreurs de programmation. En effet, une instance d'une sous-classe est également considérée comme une instance de la classe de base.

En Java, toute erreur lors d'une instruction génère un OBJET exception. Cet objet est une instance d'une classe qui hérite de la classe ```Throwable```.

ci-dessous un extrait de la hiérarchie de classes d'exceptions ci-dessous :  

- class java.lang.Throwable
    - class java.lang.Error
        - class java.lang.LinkageError
        - class java.lang.VirtualMachineError
    - class java.lang.Exception
        - class java.lang.ClassNotFoundException
        - class java.util.zip.DataFormatException
        - class java.io.IOException
        - class java.lang.RuntimeException
            - class java.lang.ArithmeticException
            - class java.lang.ClassCastException
            - class java.lang.IllegalArgumentException
                - class java.lang.NumberFormatException
            - class java.lang.IndexOutOfBoundsException
                - class java.lang.ArrayIndexOutOfBoundsException
                - class java.lang.StringIndexOutOfBoundsException
            - class java.lang.NullPointerException


#### Ordre des blocs catch :
**L'ordre des blocs catch est important** : il faut placer les sous-classes avant leur classe de base. Dans le cas contraire le compilateur génère l'erreur exception classe_exception has already been caught.

**Exemple d'ordre incorrect :**
```java
 try{
     FileReader lecteur = new FileReader(nomDeFichier);
 }
 catch(IOException ioex) // capture IOException et ses sous-classes
 {
     System.err.println("IOException catched :");
     ioex.printStackTrace();
 }
 catch(FileNotFoundException fnfex) // <-- erreur ici
 // FileNotFoundException déjà capturé par catch(IOException ioex)
 {
     System.err.println("FileNotFoundException catched :");
     fnfex.printStackTrace();
 }
```
L'ordre correct est le suivant :

```java
 try{
     FileReader lecteur = new FileReader(nomDeFichier);
 }
 catch(FileNotFoundException fnfex)
 {
     System.err.println("FileNotFoundException catched :");
     fnfex.printStackTrace();
 }
 catch(IOException ioex) // capture IOException et ses autres sous-classes
 {
     System.err.println("IOException catched :");
     ioex.printStackTrace();
 }
```

#### Sous-classes et clause throws
Une autre source de problèmes avec les sous-classes d'exception est la clause throws. Ce problème n'est pas détecté à la compilation.


**Exemple :**

```java
public String lire(String nomDeFichier) throws FileNotFoundException
 {
     try
     {
         FileReader lecteur = new FileReader(nomDeFichier);
         char[] buf = new char[100];
         lecteur.read(buf,0,100);
         return new String(buf);
     }
     catch (IOException ioe) // capture IOException et ses sous-classes
     {
         ioe.printStackTrace();
     }
 }
 ```

Cette méthode ne lancera jamais d'exception de type ```FileNotFoundException``` car cette sous-classe de IOException est déjà capturée.

###  Relancer une exception
Une exception peut être partiellement traitée, puis relancée. On peut aussi relancer une exception d'un autre type, cette dernière ayant l'exception originale comme cause.

Dans le cas où l'exception est partiellement traitée avant propagation, la relancer consiste simplement à utiliser l'instruction throw avec l'objet exception que l'on a capturé.

**Exemple :**

```java
public String lire(String nomDeFichier) throws IOException
{
    try
    {
        FileReader lecteur = new FileReader(nomDeFichier);
        char[] buf = new char[100];
        lecteur.read(buf,0,100);
        return new String(buf);
    }
    catch (IOException ioException) // capture IOException et ses sous-classes
    {
        // ... traitement partiel de l'exception ...
        throw ioException; //<-- relance l'exception
    }
}
```

Une exception d'un autre type peut être levée, par exemple pour ne pas propager une exception de type SQLException à la couche métier, tout en continuant à arrêter l'exécution normale du programme :

```java
...
    catch (SQLException sqlException) // capture SQLException et ses sous-classes
    {
        throw new RuntimeException("Erreur (base de données)...", sqlException);
    }
...
````

La pile d'appel est remplie au moment de la création de l'objet exception. C'est à dire que les méthodes ```printStackTrace()``` affiche la localisation de la création de l'instance.

Pour mettre à jour la pile d'appel d'une exception pré-existante (réutilisation pour éviter une allocation mémoire, ou relancer une exception), la méthode ```fillInStackTrace()``` peut être utilisée :

```java
...
    catch (IOException ioException) // capture IOException et ses sous-classes
    {
        // ... traitement partiel de l'exception ...
        ioException.fillInStackTrace(); // <-- pile d'appel mise à jour pour pointer ici
        throw ioException;              // <-- relance l'exception
    }
...
```


### Définir ses propres exceptions

Il est possible de créer applications vos propres classes d'exception. La nouvelle classe d'exception créée doit obligatoirement hériter de la classe ```Exception``` de Java ou d'une de ses sous-classes plus spécifiques.

La structure de votre nouvelle classe d'exception doit au moins posséder un des deux constructeurs:

- un sans paramètre

- un avec un paramètre de type ```String``` correspondant au message associé à l'erreur générée.

Exemple de déclaration d'une nouvelle classe d'exception

```java
class MaClasseException extends Exception{
      MaClasseException(){
             super();
      }
 
      MaClasseException(String monMessage){
             super(monMessage);
      }
```

## Types génériques

Les **génériques** (de l'anglais *generics*) sont des classes qui sont typés au moment de la compilation. Autrement dit, ce sont des classes qui utilisent des typages en paramètres. Ainsi une liste chainée, qui peut contenir des entiers, des chaines ou autres, pourra être typée en liste de chaines ou liste d'entiers, et ceci permettra au programmeur de ne pas écrire systématiquement des transtypages, méthode qui pourrait s'avérer dangereuse, ce sera le compilateur qui vérifiera la cohérence des données.


**Exemple :**

```java 
public class Famille < MaClasse >
{
	private LinkedList < MaClasse > liste;

	public setMembre(MaClasse m)
	{
		liste.add(m);
	}

	public MaClasse getMembre(int i)
	{
		return liste.get(i);
	}

	public Integer getInt(int i)     //première erreur
	{
		return liste.get(i);
	}
}
```

**Utilisation :**

```java
Famille<String> famille = new Famille<String>();
famille.setMembre("essai");
famille.setMembre(210);          //seconde erreur
```


## Exercice - Pokémon 

Les Pokémon sont certes de très mignonnes créatures, mais ils sont également un bon exemple pour illustrer l’héritage. Je vous propose donc de commencer par créer une classe Pokemon qui contient (entre autres) :

- un attribut ```nom``` qui représente le nom du Pokémon.

- un attribut ```hp``` (pour Health Points) qui représente les points de vie du Poké-
mon.

- un attribut qui s’appelle ```atk``` qui représente la force de base de l’attaque du
Pokémon.

- un constructeur pour instancier des Pokémon adéquatement.

- des getters (accesseurs) qui permettent de consulter les attributs du Pokémon.

- une méthode ```isDead()``` qui retourne un ```boolean``` pour indiquer si un Pokémon
est mort (```hp == 0```) ou non.

- une méthode ```attaquer(Pokemon p)``` qui permet au Pokémon appelant d’atta-
quer le Pokémon passé en paramètre. L’attaque déduit ```atk``` points de la vie hp
du Pokémon attaqué ```p```.

- une redéfinition de la méthode ```toString``` qui affiche les informations du Poké-
mon.

En plus des Pokémon normaux (décrits à travers la classe ```Pokemon```) on ressence trois types de Pokémon. 
Les Pokémon de type **Feu**, les Pokémon de type **Eau** et les Pokémon de type **Plante** (en réalité il existe 17 types en tout mais on ne va pas s’amuser à tous les coder) :



- les Pokémon de type Feu sont super efficaces contre les Pokémon de type Plante et leur infligent deux fois plus de dégâts (```2*atk```). Par contre, ils sont très peu efficaces contre les Pokémon de type Eau ou de type Feu et ne leur infligent que la moitié des dégâts (```0.5*atk```). Ils infligent des dégâts normaux
aux Pokémon de type Normal.

- les Pokémon de type Eau sont super efficaces contre les Pokémon de type
Feu et leur infligent deux fois plus de dégâts (```2*atk```). Par contre, ils sont très peu efficaces contre les Pokémon de type Eau ou de type Plante et ne leur infligent que la moitié des dégâts (```0.5*atk```). Ils infligent des dégâts normaux aux Pokémon de type Normal.

- enfin, les Pokémon de type Plante sont super efficaces contre les Pokémon de type Eau et leur infligent deux fois plus de dégâts (```2*atk```). Par contre, ils sont très peu efficaces contre les Pokémon de type Plante ou de type Feu et ne leur infligent que la moitié des dégâts (```0.5*atk```). Ils infligent des dégâts normaux aux Pokémon de type Normal.

Créez trois classes ```PokemonFeu```, ```PokemonEau``` et ```PokemonPlante``` qui héritent de la classe ```Pokemon``` et qui représentent les trois types de Pokémon susmentionnés. En suite, amusez-vous à faire des combats de Pokémon.

:::tip Remarque -  Connaitre le nom de la classe d’un objet

Afin de connaitre la classe à laquelle un objet o appartient, vous pouvez utiliser la méthode ```getClass()``` (appel : ```o.getClasse()```). Pour connaitre le nom de cette classe, vous pouvez utiliser la méthode ```getName()``` (```o.getClass().getName()```) qui retourne le nom complet de la classe (y compris le nom du package auquel elle appartient) ou la méthode ```getSimpleName()``` (```o.getClass().getSimpleName()```) qui retourne seulement le nom de la classe sans le nom du package.
:::