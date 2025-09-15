/*Exercice 1 :
Déclarez une variable pour stocker une température en degrés Celsius.
Convertissez cette température en degrés Fahrenheit en utilisant la
formule : F = C * 9/5 + 32.
Affichez la température en degrés Celsius et Fahrenheit.*/

let celcius = 25;
let fahrenheit = celcius * 9/5 + 32;
console.log(celcius + "°C est égal à " + fahrenheit + "°F");

/*Exercice 2 :
Déclarez deux variables pour stocker la longueur et la largeur d'un
rectangle.
Calculez l'aire du rectangle en multipliant la longueur par la largeur.
Affichez le résultat.*/ 
let longueur = 10; 
let largeur = 5;
let aire = longueur * largeur;
console.log("L'aire du rectangle est de " + aire + " unités carrées."); 

/*Exercice 3 :
Déclarez deux variables pour stocker un prénom et un nom.
Concaténez les deux variables pour former une chaîne complète.
Affichez la chaîne complète.*/
let prenom = "Quentin";
let nom = "Affholder" ;
let nomComplet = prenom + " " + nom;
console.log("Nom complet : " + nomComplet);

/*Exercice 4 :
Déclarez une variable pour stocker le montant HT (hors taxe) d'un
produit.
Déclarez une constante pour stocker le taux de TVA (par exemple, 20%).
Calculez le montant TTC (toutes taxes comprises) en ajoutant la TVA au
montant HT.
Affichez le montant HT, le montant de la TVA et le montant TTC.*/
let montantHT = 100;
const tauxTVA = 0.20;
let montantTVA = montantHT * tauxTVA;
let montantTTC = montantHT + montantTVA;
console.log("Montant HT : " + montantHT + "€, Montant TVA : " + montantTVA + "€, Montant TTC : " + montantTTC + "€.");

/*Exercice 5 :
((4 >= 6) || ("herbe" != "verte")) && !(((12 * 2) == 144) && true)
Est-ce true ?*/
let resultat = ((4 >= 6) || ("herbe" != "verte")) && !(((12 * 2) == 144) && true);
console.log(resultat); // Affiche true

