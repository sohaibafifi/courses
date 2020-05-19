import java.time.LocalDate;

public class Voiture {
  public String marque;
  public String modele;
  public String couleur;
  public double km;
  public LocalDate dateMiseEnCirculation;
  
  /* Constructeur sans argument */
  public Voiture(){
    this.marque = "inconnue";
    this.modele = "inconnu";
    this.couleur = "inconnue";
    this.km = 0;
    this.dateMiseEnCirculation = LocalDate.now();
  }
  
  /* 2e constructeur */
  public Voiture(String marque, String modele, String couleur, int km){
    this.marque = marque;
    this.modele = modele;
    this.couleur = couleur;
    this.km = km;
    this.dateMiseEnCirculation = LocalDate.now();
  }
  
  /* 3e constructeur */
  public Voiture(String marque, String modele, String couleur, int km,
          int annee, int mois, int jour){
    this.marque = marque;
    this.modele = modele;
    this.couleur = couleur;
    this.km = km;
    this.dateMiseEnCirculation = LocalDate.of(annee,mois,jour);
  }
  
    public String chaine(){
      return "Voiture :\n"+
              "\t Marque : "+ this.marque +"\n"+
              "\t Modèle : "+ this.modele +"\n"+
              "\t Couleur : "+ this.couleur +"\n"+
              "\t Kilométrage : "+ this.km +"\n"+
              "\t Date de mise en circulation : "+ this.dateMiseEnCirculation;
    }
}
