let chiffre;
chiffre = 14;
//DEFINITION VARIABLE
let chiffre2 = 15;
console.log(chiffre2.__proto__);
chiffre2 = "Bonjour";
console.log(chiffre2.__proto__);
let nombre1 = 3.56; // FLOTTANT UTILISER LE .
let chaine1 = "         BONJOUR \"M2I\"     ";
console.log(chaine1);
let chaine2 = 'L\'histoire de la, programmation, test';
let boolean = true;

console.log(Number.isInteger(chiffre), Number.isInteger(chaine1));

//Test verification si entier
if(Number.isInteger(chiffre) == true){
    console.log('C\'est un entier');
} else {
    console.log('C\'est pas un entier');
}


//TESTER CHAINE DE CARACTERE
console.log("TAILLE DE LE CHAINE", chaine2.length);
console.log("Récupérer une lettre à un endroit précis", chaine2.charAt(0));
console.log("Majuscule", chaine2.toUpperCase());
console.log("Minuscule", chaine2.toLowerCase());
console.log("Scinder une chaine en 2", chaine2.split(","));
console.log("Supprimer les espaces", chaine1.trim());
let chaineSansEspace = chaine1.trim();
console.log(chaineSansEspace.concat(', ',chaine2));



//CONCATENATION SPECIFIQUE
var prenom = "Anthony";
var nom = "Paris";

var contact = prenom + " " + nom;

//alert(contact);
document.write(contact);



let prenom2 = "Julie";
let nom2 = "Durand";
document.write(`Vous vous appelez ${prenom2}  ${nom2}`);






