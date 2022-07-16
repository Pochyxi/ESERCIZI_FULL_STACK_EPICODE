"use strict";
function myFunc () {

const nome = 'Mirtilla';
console.log(nome);

var eta = 30;
const tipo = 'cliente';
console.log(tipo);

let ruolo = 'amministratore';
console.log(ruolo);

var cosaFa = 'io mi occupo di: developing e formazione';
console.log(cosaFa);
var js = true; 
console.log('Let JS: ' + js);

var boh;
console.log(boh);

function somma () {
    let x = 14;
    let y = 16;
    console.log(x+y)
}
somma();

console.log(`${nome} ha: ${eta} anni`);

const animal = 'lupo';
const animalColor = 'grey';

console.log(`l'animale scelto è ${animal}
                il suo colore è ${animalColor}`)

var numx = 2;

function doppio () {
    console.log(`Il numero selezionato è ${numx} il suo doppio è ${numx * 2}
                    grazie per aver giocato!`);
}

doppio();
}