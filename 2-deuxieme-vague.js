/*Exercice 1 :
Créez un objet personne avec les propriétés vous concernant suivantes :
prenom, nom, age, ville
Affichez les propriétés prenom, nom, age et ville de l'objet personne dans
des console.log() séparés.*/
let personne = {
    prenom: "Quentin",
    nom: "Affholder",  
    age: 18,
    ville: "Lisieux"
};
console.log("Prénom : " + personne.prenom);
console.log("Nom : " + personne.nom);
console.log("Âge : " + personne.age);
console.log("Ville : " + personne.ville);

/*Exercice 2 :
Créez un tableau personnes contenant les objets suivants :
- {prenom: "John", nom: "Doe", age: 25, ville: "Rouen"}
- {prenom: "Jane", nom: "Doe", age: 30, ville: "Paris"}
- {prenom: "Jim", nom: "Doe", age: 35, ville: "Caen"}
Affichez le tableau personnes dans la console avec log() et table().*/ 

let personnes = [
    {prenom: "John", nom: "Doe", age: 25, ville: "Rouen"},
    {prenom: "Jane", nom: "Doe", age: 30, ville: "Paris"},
    {prenom: "Jim", nom: "Doe", age: 35, ville: "Caen"}
];
console.log(personnes);
console.table(personnes);

/*Exercice 3 :
Ajoutez un objet à la fin du tableau personnes avec la méthode push() :
- {prenom: " Marc", nom: "Doe", age: 32, ville: "Marseille"}
Affichez le tableau personnes dans la console avec log() et table().*/ 

personnes.push({prenom : "Marc",nom: "Doe", age:32, ville:"Marseille"});
console.log(personnes);
console.table(personnes);

/*Exercice 4 :
Modifiez le premier objet du tableau personnes en utilisant la syntaxe
suivante : personnes[0].prenom = "Jean"
Supprimez le deuxième objet du tableau personnes en utilisant la
méthode splice()
Affichez le tableau personnes dans la console avec log() et table().*/

personnes[0].prenom = "Jean";
personnes.splice(1, 1);
console.log(personnes);
console.table(personnes);