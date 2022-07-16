// CONVERTIRE UN NUMERO IN UNA STRINGA

var numberx = 4321; 

function reverse_a_number (n) {     // Dichiaro una funzione che accetta un parametro (che sarà il numero)
    n = n + "";                     // metodo per convertire un numero in una stringa
    
    return n.split('').reverse().join('');  // Il metodo .split("") converte un oggetto stringa in un array, separando la stringa in sotto-stringhe 
                                            // quindi la stringa precedentemente creata "4321" diventerà un array contenente [4, 3, 2, 1] 
                                            // Il metodo .reverse() è usato per invertire i valori in un array così che il primo elemento diventi l'ultimo
                                            // e l'ultimo diventi il primo, in questo caso otterremo un array contenente [1, 2, 3, 4]
                                            // Il metodo .join('') converte i valori di un array in una stringa 

}

console.log(Number(reverse_a_number(numberx))); // il costructo Number() contiene costati e metodi per lavorare con i numeri. 
                                                // i valori di altri tipi possono essere convertiti in numeri utilizzando la suddetta funzione
                                
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

// CONTROLLARE SE UNA STRINGA E' UN PALINDROMO O NON
var palindro = 'marram' 

function is_palindrome (string) {
    var cstr = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');  // qui tranformiamo la stringa in caratteri minuscoli e rimuoviamo tutti i caratteri non-alfanumerici
                                                                    // toLowerCase() trasforma tutti i caratteri di una stringa in minuscolo
                                                                    // replace() rimpiazza i caratteri in una stringa, accetta due valori
                                                                    // 1. i caratteri da trovare, 2. i valori con cui rimpiazzarli

    var ccount = 0;     
    
    if(cstr==='') {                     // controlla se la stringa è vuota oppure no
        console.log('Nothing found!')
        return false
    } 

    if((cstr.length) % 2 === 0) {       // controlla se la lunghezza della stringa è dispari o pari, se è pari la variabile ccount sarà uguale
                                        // alla lunghezza della stringa diviso per 2
        ccount = (cstr.length) / 2;
    } else {
        if (cstr.length ===  1) {       // se la lunghezza della stringa è uguale a 1, sarà per forza un palindromo
            console.log('String is a palindrome');
            return true;
        } else {
            ccount = (cstr.length - 1) / 2; // se nessuna delle condizioni sopra viene eseguita ccount sara uguale alla lunghezza della stringa - 1 diviso 2
                                            // quindi diventerà un numero pari
        }
    }
    
    for (var x = 0; x < ccount; x++) { 
        if(cstr[x] != cstr.slice(-1-x)[0]) {
            console.log('String is not a palindrome.')
            return false;
        }
    }
    console.log('The entry is a palindrome.');
    return true;
}

is_palindrome(palindro);


    

