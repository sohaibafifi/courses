public class TestPersonneEtudiantEnseignant {
  public static void main(String[] args) {
    Personne bob = new Personne("Bob");
    // provoque une erreur : System.out.println(p1.nom); car nom est privé
    // il faut utiliser getNom() pour accéder à un nom
    System.out.println(bob.getNom()+" est une Personne."); 
    
    Etudiant alice = new Etudiant("Alice",12345678);
    System.out.println(alice.getNom()+" est une étudiante."
            + " Elle a le numéro étudiant "+alice.numEtu+"."); 
    
    Enseignant martin = new Enseignant("Martin","Anglais");
    System.out.println(martin.getNom()+" est un enseignant dont"
            + " la discipline est : "+martin.discipline+".");
  }
}
