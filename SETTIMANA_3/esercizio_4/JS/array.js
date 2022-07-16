var myArray = [
    'Marco',                  
    'Giulia',
    'Lorenzo',                
    'Adiener',
    'Francesco',
    'Luca',
    'Domenico', 
];
/////////////////// BOTTONE CONSOLE.LOG ARRAY
function logArray () {
    console.log(myArray);
    document.getElementById('paraconsole').innerHTML = '<p>Guarda in console! </p>';
}
/////////// BOTTONE EVOCA LORENZO
 var myArray3 = () => {
     console.log(myArray[2])
     document.getElementById('lorenzo').innerHTML = '<p>In console è comparso Lorenzo! </p>';
 }
//////// BOTTONE AGGIUNGI UN VALORE A MYARRAY
 function arrayPlus () {
    var newName = 'Franco';
    myArray.push(newName);
    console.log(myArray);
    document.getElementById('arrPlus').innerHTML = '<p>Non esagerare! I franchi potrebbero diventare tiratori </p>';
 }
////////// BOTTONE .MAP
 var arrayMath = [20, 500, 7, 50];

 function radiceQuadrata () {
     let arrayDiviso = arrayMath.map(Math.sqrt);
     console.log(arrayDiviso);
     document.getElementById('radiceQuadrata').innerHTML = '<p>Esatto! il risultato in console dovrebbe essere [4.47213595499958, 22.360679774997898, 2.6457513110645907, 7.0710678118654755] </p>';
 }

/////////////////// BOTTONE GENERA FRASE CORRETTA 
var wrongArray = ['sadaqqqwq', 'Aggiustato', 'zzxzssssss'];


function correctIt (array) { 
    array.pop();
    array.shift();
    document.getElementById('fixIt').innerHTML = '<p>Guarda nella console, con .pop e .shift abbiamo eliminato quelle orribili stringhe </p>';
    document.getElementById('arrayWrong').innerHTML = '<span>[\'Aggiustato\']</span>';
    return array;
}
function log () {
    console.log(correctIt(wrongArray));
}


///////////////// 

var wrongNum = [5, 4, 3, 2, 1];
var wrongAlpha = ['e', 'd', 'c', 'b', 'a'];






