// DEFINISCO UN NUOVO OGGETTO DI TIPO DATE
var dataOdierna = new Date();

// DEFINISCO LE VARIABILI CHE MI DARANNO DEI VALORI NUMERICI
giorniSettimana = dataOdierna.getDay();
giorno = dataOdierna.getDate();
mese = dataOdierna.getMonth();
anno = dataOdierna.getFullYear();
ora = dataOdierna.getHours();
minuti = dataOdierna.getMinutes();
secondi = dataOdierna.getSeconds();
console.log(mese)

// DEFINISCO GLI ARRAY CON I GIORNI DELLA SETTIMANA E DEI MESI DELL'ANNO IN ITALIANO
var arraySettimana = ['Domenica', 'Lunedi', 'Martedi', 'Mercoledi', 'Giovedi', 'Venerdi', 'Sabato'];


var arrayAnno = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

// STAMPO NEL PARAGRAFO CON TEMPLATE STRING 
document.querySelector('#para').innerHTML = `Ciao, oggi è ${arraySettimana[giorniSettimana]} ${giorno} ${arrayAnno[mese]} del ${anno} e sono le ore ${ora} e ${minuti} minuti e ${secondi} secondi`;



// FUNZIONE SIMPATICA CHE COLORA LO SFONDO IN BASE AI SECONDI PARI O DISPARI
var bling = document.querySelector('#bling');



    if (secondi % 2 == 0) {
   
    bling.style.backgroundColor = 'orangered';
    } else {
    bling.style.backgroundColor = 'purple';
}

document.write(dataOdierna.toLocaleDateString('it-IT') + '<br>')
document.write(dataOdierna.toISOString())









