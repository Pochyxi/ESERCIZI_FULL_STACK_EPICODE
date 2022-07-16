var bilancio = 1000;



var meta = true;
var verde = true;
var zero = true;

while (bilancio >= 99) {
    var spesa = Math.floor(Math.random() * 100)

    var acquisti = ['matita', 'cane', 'orologio', 'cellulare', 'gatto', 'cinghiale']
    var acquistiRandom = Math.floor(Math.random() * acquisti.length)
    var oggettiRandom = acquisti[acquistiRandom]

     bilancio -= spesa;

     document.write('<br> il tuo bilancio è di: ' + bilancio + '<br>')
     document.write(`la spesa è stata di ${spesa} euro ed hai comprato ${oggettiRandom}<br> `)

    if (bilancio <= 500 && meta == true) {
         document.write('<br><br>SEI A META SALDO<br><br>') 
        meta = false;

    } else if (bilancio <= 200 && verde == true) {
        document.write('<br><br>SEI AL VERDE</br><br>')
        verde = false;

    } else if (bilancio <= 100 && zero == true) {
        document.write('<br><br>HAI IL CONTO ORMAI QUASI A 0<br></br>')
        zero = false;
    }
}
document.write('<br>CONTO BLOCCATO<br>')