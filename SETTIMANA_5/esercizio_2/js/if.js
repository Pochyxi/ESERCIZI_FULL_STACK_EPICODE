var bilancio = 1000;

document.querySelector('.bilancio').innerHTML = '1000'


let meta = true;
let verde = true;
let zero = true;

function spendere () {
    let spesa = Math.floor(Math.random() * 100);

     bilancio = bilancio - spesa;

    console.log(bilancio)

    document.querySelector('.bilancio').innerHTML = bilancio;

    if (bilancio <= 500 && meta == true) {
        document.querySelector('#alert').innerHTML = 'Hey! sei a metà, vacci piano!'
        meta = false;
    

    } else if (bilancio <= 200 && verde == true) {
        document.querySelector('#alert').innerHTML = 'Hey! sei quasi al verde';
        verde = false;

    } else if (bilancio < 0 && zero == true) {
        zero = false;
        
        document.querySelector('#alert').innerHTML = `Hey! sei ufficialmente al verde! ed ora hai anche un debito di ${bilancio}`

        bilancio = document.querySelector('.bilancio').innerHTML = 'Sei al verde'
        
    } 
    
}




