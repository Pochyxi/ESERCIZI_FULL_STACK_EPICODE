var giocatore1 = document.querySelector('#giocatore1'), giocatore2 = document.querySelector('#giocatore2'), numeroEstratto = document.querySelector('#numero-estratto'), risultato = document.querySelector('#risultato'), estrai = document.querySelector('#estrai');
estrai.addEventListener('click', estraiNumero);
function estraiNumero() {
    var resultG1 = Math.floor(Math.random() * 100 + 1), resultG2 = Math.floor(Math.random() * 100 + 1);
    giocatore1.innerHTML = resultG1.toString();
    giocatore2.innerHTML = resultG2.toString();
    var numero = Math.floor(Math.random() * 100 + 1);
    numeroEstratto.innerHTML = numero.toString();
    if (resultG1 == numero) {
        risultato.innerHTML = "Il giocatore 1 ha vinto il montepremi!";
    }
    else if (resultG2 == numero) {
        risultato.innerHTML = "Il giocatore 2 ha vinto il montepremi!";
    }
    else {
        risultato.innerHTML = determina(resultG1, resultG2, numero);
    }
    if (resultG1 == numero && resultG2 == numero) {
        risultato.innerHTML = "HANNO VINTO ENTRAMBI // MONTEPREMI DIVISO 2";
    }
}
function determina(primoNumero, secondoNumero, numeroTarget) {
    var giocatore1Result = Math.abs(numeroTarget - primoNumero);
    var giocatore2Result = Math.abs(numeroTarget - secondoNumero);
    if (giocatore1Result == giocatore2Result) {
        return "Nessuno ha vinto, c'è un pareggio!!!";
    }
    if (giocatore1Result < giocatore2Result) {
        return "Nessuno ha vinto, ma...Il giocatore 1 si è avvicinato di più al numero!";
    }
    else {
        return "Nessuna ha vinto, ma...Il giocatore 2 si è avvicinato di più al numero!";
    }
}
