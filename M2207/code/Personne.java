public class Personne {
  private String nom; //accès privé
  
  // Constructeur
  public Personne(String nom){
    this.nom=nom;
  }
  
  // Pour modifier le nom
  public void setNom(String nom){
    this.nom=nom;
  }
  
  // Pour accéder au nom
  public String getNom(){
    return this.nom;
  }
}
