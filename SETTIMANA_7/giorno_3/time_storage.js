// tenere conto del tempo che passa
//ogni secondo che passa impostare il tempo nel sessio storage e visualizzare nel dom 

// quando mi connetto riprende il conto del tempo
// A: il tempo riprende da dove si era fermato
// B: il tempo riprende tenendo conto del tempo passato


// A

// timer 

// il tempo deve partire da dove siamo rimasti (quando ricarichiamo)

// 
let minDisplay = document.querySelector('#minuti');
let secDisplay = document.querySelector('#secondi');


let s = 0;
if(sessionStorage.getItem("secondi")) {
   s = parseInt(sessionStorage.getItem("secondi"));
}

let m = 0;
if(sessionStorage.getItem("minuti")) {
    m = parseInt(sessionStorage.getItem("minuti"));
}

console.log(s)
console.log(m)

let timer = setInterval(() => {
    s++;
    if(s == 60) {
        m++
        s = 0;
    }
    secDisplay.innerHTML = s;
    minDisplay.innerHTML = m;

    sessionStorage.setItem("secondi", s);
    sessionStorage.setItem("minuti", m);

}, 1000);



