function Persona(first, last, age) {
    this._first = first;
    this._last = last;
    this._age = age;

    this.getName = function() {
        return this._first;
    };
    this.getSurname = function() {
        return this._last;
    };
    this.getAge = function() {
        return this._age;
    };
}


let form = document.getElementById('form');
let numberList = 1;

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let newPersona = new Persona(document.getElementById('name').value, document.getElementById('surname').value, document.getElementById('age').value);


    // Prendo tutti i dati che mi servono
    let nome = newPersona.getName();
    let cognome = newPersona.getSurname();

    // questo procedimento per calcolare l'età giusta
    let eta = newPersona.getAge();
    let etaConvertita = new Date(eta)
    let annoUtente = etaConvertita.getFullYear();
    let toDay = new Date().getFullYear()
    let anniUtente = toDay - annoUtente;

    
    // creo le sezioni e gli setto un id
    let riga = document.createElement('tr');
    riga.setAttribute('id','riga');

    let rigaNumero = document.createElement('th');
    rigaNumero.setAttribute('id','rigaNumero');

    let rigaNome = document.createElement('td');
    rigaNome.setAttribute('id','rigaNome');

    let rigaCognome = document.createElement('td');
    rigaCognome.setAttribute('id','rigaCognome');

    let rigaAge = document.createElement('td'); 
    rigaAge.setAttribute('id','rigaAge');


    // qui a cascata inserisco tutti gli elementi 
    document.getElementsByClassName('table-body')[0].append(riga);
    riga.append(rigaNumero);
    riga.append(rigaNome);
    riga.append(rigaCognome);
    riga.append(rigaAge);

    //questo è il contatore nella lista
    rigaNumero.innerHTML = numberList;
    numberList++;

    // qui inserisco i dati delle varie righe
    rigaNome.innerHTML = nome;
    rigaCognome.innerHTML = cognome;
    rigaAge.innerHTML = anniUtente;

    // AGGIUNTA PERSONALE
    let righeColor = ['green', 'red', 'blue', 'black'];

    let righeColorIndexShuffle = Math.floor(Math.random() * righeColor.length);
    let righeColorElementSuffle = righeColor[righeColorIndexShuffle];

    riga.style.backgroundColor = righeColorElementSuffle;
    riga.style.color = 'white';


})

