function miaFunzione() {                    // dichiaro la mia funzione
    console.log('hello world')              // le parentesi graffe dichiarano il blocco di codice della funzione
}

miaFunzione();                              // richiamo la mia funzione ed eseguo il codice che ha allinterno

function pariODispari (pari, dispari) {      // dichiaro una funzione che accetta due parametri (pari, dispari)
    const carta = `La carta può essere ${pari} o ${dispari}`; // pari e dispari nel template literal verra sostituito dai parametri che gli passeremo quando
                                                              // richiameremo la funzione pariODispari()
    return carta;
}
console.log(pariODispari(5, 10));

/////////////////////// calcoliamo l'età di un cristiano
function calcolaAnni (annoDiNascita) {      // funzione che accetta un parametro
    let annoCorrente = 2022;                // dichiaro una variabile che esiste solo a livello locale (cioè se la richiamo in un console.log fuori dalla funzione
                                            // per esempio essa non esisterà per javascript) 
    return annoCorrente - annoDiNascita;    // qui verrà ritornato il valore di annoCorrente(variabile dentro la funzione) sottratto a quello di annoDiNascita
                                            // che è il parametro che andremo a riempire quando richiameremo la funzione 
}
console.log(calcolaAnni(1994));

const anni = calcolaAnni(1994); // ho assegnato ad una variabile il valore di una funzione!
console.log(anni);

///////////////////// metodo più veloce di scrivere la suddetta funzione con le arrow function
const calcolaAnniDue = annoDiNascita => 2022 - annoDiNascita; // arrow function uguale a: [var/let/const][nome funzione] = [parametro della funzione] => [blocco di codice]
console.log(`Albert Einstein avrebbe avuto ${calcolaAnniDue(1879)} oggi!`); // Oltre che genio anche longevo ;)


////////////////////calcoliamo il pensionamento
const pensionamento = (annoDiNascita, nome) => { // qui dato che dobbiamo scrivere una serie di righe di codice apriamo le parentesi graffe
    let annoCorrente = 2022;
    let eta = annoCorrente - annoDiNascita;  // la logica è : pensionamento accetta due parametri che gli passerò quando richiamerò la funzione
                                             //               per calcolarmi il pensionamento ho seguito la logica di un calcolo mentale, scrivere su di un foglio aiuta
    let etaPensionabile = 65;
    let anniAllaPensione = etaPensionabile - eta;
    return `Il signor ${nome} andrà in pensione tra ${anniAllaPensione} anni. In italia credici poco!` // Deprimente...
}
console.log(pensionamento(1994,'Adiener'));
console.log(pensionamento(1981, 'Federico De Ambrosis')); // il prof è vecchietto ;)

///////////////// richiamiamo una funzione dentro un'altra funzione (tipo matriosca)

const divisoreA3 = (oggetto) => { // stiamo dichiarando una funzione che attualmente ritornerà NaN dato che il parametro oggetto non e stato definito
    return oggetto / 3;
}
console.log(divisoreA3())

const scegliNumero = (numero, altroNumero) => {
    const numeroDiviso = divisoreA3(numero);            // in questo caso il parametro di divisoreA3 non sarà più oggetto ma il parametro della funzione 
                                                        //scegliNumero
                                                        // quando dichiareremo la funzione scegliNumero e gli passeremo dei numeri essi diventeranno il parametro(oggetto) di DivisoreA3 quindi saranno divisi per 3 
    const altroNumeroDiviso = divisoreA3(altroNumero);  // ciò significa che all'inteno di una funzione ho richiamato una funzione che esisteva prima
    const numeriDivisi = `Il divisore ha diviso il numero ${numero} in 3 parti diverse che sono: ${numeroDiviso}, inoltre ha diviso il numero ${altroNumero} in 3 parti diverse che sono: ${altroNumeroDiviso}`;
    return numeriDivisi;
}
console.log(scegliNumero(24, 76));

////////////////////// dichiariamo una variabile che ha come valore una funzione
var soldiPerUnDrink = function(costo) {
    return costo >= 5 && costo <= 15 ? `Un drink per ${costo}€ è un prezzo accettabile` : `Probabilmente se hai pagato ${costo}€ c'è qualcosa che non và!`;
}
console.log(soldiPerUnDrink(20));

//operatore ternario
// costo >= 5 e costo <= di 15 sono delle condizioni che possono rivelarsi vere(true) o false(false), l'operatore && dice che entrambi le condizioni devono rivelarsi vere (esegui il primo blocco di codice dopo il punto interrogativo) oppure se soltanto una delle due è falsa (esegui il secondo blocco di codice)




