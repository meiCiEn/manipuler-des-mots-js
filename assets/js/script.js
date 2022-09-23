//************ Trois façons d'inverser une chaine de caractères dans JavaScript

// 1. 1. Inverser une chaine de caractère avec les fonctions intégrées
/* ******************************************************* */

// La méthode split() scinde la chaine de caractères 
// en un tableau de caractères.

// La méthode reserve() inverse un tableau array de bout en bout, 
// le premier élément prend la dernière position, et le dernier 
// élément prend la première position.

// La méthode join() rassemble les éléments d'un tableau 
//en une chaine de caractères.

function reverseString(str) {
    // Etape 1. On Utilise la méthode split pour scinder la chaine de caractère
    let splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Etape 2. On utilise la méthode reverse() inverse les éléments d'un array
    let reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Etape 3. On utilise la méthode join() pour réunir les élements du tableau
    let joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Etape 4. Retourner la chaine de caractères obtenue
    return joinArray; // "olleh"
}

reverseString("hello");

// Enchainer les trois méthodes :

function reverseString1(str) {
    return str.split("").reverse().join("");
}
reverseString1("hello");

// 2. Inverser une chaine de caractère avec une boucle en décrémentation
/* ******************************************************* */

function reverseString2(str) {
    // Etape 1. Créer une chaine de caractère vide qui va supporter la chaine à venir
    let newString = "";

    // Etape 2. Créer la boucle FOR
    /* Le point de départ de la boucle sera (str.length - 1) qui correspond à l'index du dernier caractère de la chaine , "o". Tant que i est supérieur ou égal à 0, la boucle continue à s'exécuter et on décrémente i à chaque itération*/
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i]; // or newString = newString + str[i];
    }
    /* La longueur de "hello" est égale à 5
        Pour chaque itération: i = str.length - 1 and newString = newString + str[i]
        Première itération:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Deuxième itération:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Troisième itération:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Quatrième itération:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Cinquième itération:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    Fin de la boucle FOR*/

    // Etape 3. Retourner la chaine de caractère inversée
    return newString; // "olleh"
}

reverseString2('hello');

// 3. Inverser une chaine de caractères avec la méthode récursive
/* ******************************************************* */

// La méthode substring() retourne une sous-chaîne de la chaîne courante, 
// entre un indice de début et un indice de fin (non inclus).
// Si l'indice de fin est omis, cela veut dire que l'indice de fin 
// est le dernier indice de la chaine de caractères.

"hello".substring(1); // "ello"

// La méthode charAt() retourne le caractère d'une chaine de caractère spécifié en paramètre.

"hello".charAt(0); // "h"

// La profondeur de récursivité est égale à la longueur de la chaine de caractère.
// Pas une méthode ideale parce que trop lente si on a une longue chaine de charactère.

function reverseString3(str) {
    if (str === "") // Ceci est le dernier état de str qui va mettre fin à la récursivité
        return "";

    else
        return reverseString(str.substring(1)) + str.charAt(0);
}
reverseString3("hello");

// Explication :

/* 
  Première partie de la méthode récursive
  N'oubliez pas qu'on n'aura pas un seul appel, mais plusieurs appels imbriqués.
  
  Dernier appel: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
  1st call – reverseString("Hello")   renvoie  reverseString("ello")           + "h"
  2nd call – reverseString("ello")    renvoie   reverseString("llo")            + "e"
  3rd call – reverseString("llo")     renvoie   reverseString("lo")             + "l"
  4th call – reverseString("lo")      renvoie   reverseString("o")              + "l"
  5th call – reverseString("o")       renvoie   reverseString("")               + "o"
  
  Deuxième partie de la méthode récursive
  La méthode évalue la condition if et l'appel inbriqué est immédiatement retourné
  
  5th call will return reverseString("") + "o" = "o"
  4th call will return reverseString("o") + "l" = "o" + "l"
  3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
  2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
  1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
  */

// Et en opérateur ternaire conditionnel:
function reverseString4(str) {
    return (str === '') ? '' : reverseString(str.substring(1)) + str.charAt(0);
}
reverseString4("hello");

// Le formulaire: récupération de données
/* ******************************************************* */
const btnReverse = document.getElementById("btn-reverse");
const btnDelete1 = document.getElementById("cancel-1");
const btnDelete2 = document.getElementById("cancel-2");
console.log(btnReverse);

function reverseWord() {
    let word = document.getElementById("input-word").value;
    console.log(word);
    let reverseWord = word.split("").reverse().join("");
    document.getElementById("reverse-word").innerHTML = reverseWord;
    document.getElementById("reverse-word").classList.remove("hidden");
}

btnReverse.addEventListener('click', () => {
    reverseWord();
})

const inputWord = document.getElementById("input-word");
let reverseWord1 = document.getElementById("reverse-word");


btnDelete1.addEventListener('click', () => {
    inputWord.value="";
    reverseWord1.classList.add("hidden");
});




// function deleteContents() {
// response.classList.add("hidden");
// };

// btnDelete1.addEventListener('click', () => {
// deleteContents();
// })

// btnDelete2.addEventListener('click', () => {
//     deleteContents();
//     })

// Prévoir un input avec bouton pour remplir un tableau. 
// Au moment ou vous rentrez deux-trois éléments, 
// avoir un deuxième bouton qui cherche le premier mot ayant un “a” 
// et un dernier bouton qui renvoie sur l’HTML 
// une chaîne de caractère du tableau

// Le formulaire: récupération de données
/* ******************************************************* */
const btnWord = document.getElementById("btn-word");
console.log(btnWord);
const aWord = document.getElementById("a-word");

const inputWord1 = document.getElementById("input-word-1");
const inputWord2 = document.getElementById("input-word-2");
const inputWord3 = document.getElementById("input-word-3");


let word1 = "I"
// let word1 = inputWord1.value;
let word2 = "adore"
// let word2 = inputWord2.value;
let word3 = "apples"
// let word3 = inputWord3.value;


// Créer un tableau vide
// Le tableau doit être declaré en dehors de la fonction 
// pour y accéder plus tard
let wordArray = []; 
// insertion des mots dans un tableau 
function generateArray() {

    // trouver les valeurs 
    let word1 = inputWord1.value;
    let word2 = inputWord2.value;
    let word3 = inputWord3.value;
    // ajouter les valeurs au tableau
    wordArray.push(word1, word2, word3);
    console.table(wordArray);
}

console.log(wordArray);

function findFirstWordContainingLetterA() {
    // parcourir le tableau
for (let index = 0; index < wordArray.length; index++) {
    console.log(wordArray[index]);
        // includes() renvoie 'true' si une chaîne de caractères 
        // contient une chaîne de caractères spécifiée.
    // si le mot ne contient pas de a...
    if (!(wordArray[0].includes("a", "A"))) {
        // petite vérification
        console.log(`${wordArray[0]} does not include a`);
        // alors supprimer ce mot du début du tableau
        wordArray.shift();
        console.table(wordArray);
    } else {
        // sinon afficher le premier élément du tableau
        console.log(`${wordArray[0]} est le premier mot qui contient la lettre "a".`);
        aWord.innerText = `${wordArray[0]} est le premier mot qui contient la lettre "a".`;
        aWord.classList.remove('hidden');
    }
}
}

btnWord.addEventListener('click', () => {
    generateArray();
    findFirstWordContainingLetterA();
})

btnDelete2.addEventListener('click', () => {
    inputWord1.value="";
    inputWord2.value="";
    inputWord3.value="";
    aWord.innerText = "";
    aWord.classList.add("hidden");
    wordArray = [];

});

// let entiers = [];
// btnAjout.addEventListener('click', () => {
//     entiers.push(parseInt(inputEntier.value));
//     console.table(entiers); //to confirm it has been added to the array 
//     affichageValeurs.innerHTML = (generateListItems(entiers));
// });

// btnEffacer.addEventListener('click', () => {
//     entiers.length = 0;
//     console.table(entiers);
//     affichageValeurs.innerHTML = "";
// });

// affichageValeurs.innerHTML =
//     `${generateListItems(entiers)}`;

// let randomArray = [1,2,3,4,5,5,2,6];

console.log(inputWord1, inputWord2, inputWord3);
console.log(word1, word2, word3);

// 