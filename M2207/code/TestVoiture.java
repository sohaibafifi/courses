public class TestVoiture {
  public static void main(String[] args) {
    Voiture v1 = new Voiture();
    System.out.println(v1.chaine());
    System.out.println(v1.marque);
    
    Voiture v2 = new Voiture("Peugeot","205","Grise",123450);
    System.out.println(v2.chaine());
    
    Voiture v3 = new Voiture("Peugeot","205","Grise",123450,1992,4,20);
    System.out.println(v3.chaine());
  }
}
