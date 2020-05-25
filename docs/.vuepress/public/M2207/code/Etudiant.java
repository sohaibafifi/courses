public class Etudiant extends Personne {
  int numEtu;
  int annee;
  
  public Etudiant(String nom, int numEtu){
    // appel du constructeur de la classe mère 
    // (attribut nom : Personne(nom))
    super(nom); 
    
    this.numEtu=numEtu;
  }
}
