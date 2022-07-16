

function benvenuto() {
    document.getElementById('messaggio').innerHTML = 
    '<h1>Ciaooo!</h1><p>benvenuti nell\'esercizio<p><p>premi 1 per calcolare l\'età di marta che è nata nel 1985 </p><p>premi 2 per richiamare una funzione con freccia</p><p>premi 3 per dichiarare una funzione in una funzione e richiamarla!</p><p>premi 4 per utilizzare gli operatori di comparazione!</p><h2>4 esercizi 8 bottoni, che spreco di tempo!</h2>';
    
}
/////////////////PRIMO BOTTONE CON FUNZIONE
 bottone1 = () => {
     document.getElementById('messaggio').innerHTML = '<p>Nella console c\'è l\'età di Marta <p>'
     console.log(calcolo())
    
}
function calcolo() {
    var annoCorrente = 2022;
    var annoDiNascita = 1985;
    var etaMarta = annoCorrente - annoDiNascita;
    return etaMarta;

}


 ///////////////////SECONDO BOTTONE
 bottone2 = () => {
    document.getElementById('messaggio').innerHTML = '<p>funzione = () => { <br> sono una funzioneeeeee frecciosa <br>}<p>'
    console.log('bravo hai richiamato una funzione')
}
///////////// TERZO BOTTONE
bottone3 = () => {
    document.getElementById('messaggio').innerHTML = '<p>Guarda la console! <br> <p>';
    function textConsole () {
        console.log( 'ho richiamato una funzione in una funzione');
    }
    textConsole();
}
//////////// BOTTONE 4 
bottone4 = () => {
    document.getElementById('messaggio').innerHTML = '<p>Sono comparsi 3 booleani in console!<p>';
    function notEqual () {
       let x = 5 != 4+1;
       console.log(x)
    }
    function equal() {
        let x = 5 == '5';
        console.log(x);
    }
    function equalissimo () {
        let x = 10 === 10;
        console.log(x);
    }
    notEqual();
    equal();
    equalissimo();
}
///////////////
bottone5 = () => {
    document.getElementById('messaggio').innerHTML = '<p>NON TOCCARE!!!<p>';
    console.log('la console si è rotta tztztzttztztzttztztztzttztz \n ttztztzttztztztztztztztztztztzttztzttztzttztzttztztztz')
}
bottone6 = () => {
    document.getElementById('messaggio').innerHTML = '<p>NON TOCCARE!!!<p>';
    console.log('la console si è rotta tztztzttztztzttztztztzttztz \n ttztztzttztztztztztztztztztztzttztzttztzttztzttztztztz')
}
bottone7 = () => {
    document.getElementById('messaggio').innerHTML = '<p>NON TOCCARE!!!<p>';
    console.log('la console si è rotta tztztzttztztzttztztztzttztz \n ttztztzttztztztztztztztztztztzttztzttztzttztzttztztztz')
}
bottone8 = () => {
    document.getElementById('messaggio').innerHTML = '<p>NON TOCCARE!!!<p>';
    console.log('la console si è rotta tztztzttztztzttztztztzttztz \n ttztztzttztztztztztztztztztztzttztzttztzttztzttztztztz')
}