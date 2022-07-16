let bottoneMenu = document.querySelector('#menuButton');
bottoneCheck = true;
let tendina = document.querySelector('#tendina');

bottoneMenu.addEventListener('click',()=>{
    if (bottoneCheck == true) {
        tendina.style.height = 300 + 'px';
        bottoneCheck = false;
        bottoneMenu.innerHTML = 'CHIUDI MENU';
    } else {
        tendina.style.height = 0 + 'px';
        bottoneCheck = true;
        bottoneMenu.innerHTML = 'APRI MENU';

    }
    console.log(bottoneCheck)
    
})
////////////////////////////////////////////////////////////////////////
let h1 = document.querySelector('#h1');
let rosso = document.querySelector('#rosso');
let grande = document.querySelector('#grande');
let scompare = document.querySelector('#scompare');
let appare = document.querySelector('#appare')

rosso.addEventListener('click', ()=>{
    h1.style.color = 'red';
})

grande.addEventListener('click', ()=>{
    h1.style.fontSize = 5 + 'rem';
})

scompare.addEventListener('click', ()=>{
    h1.style.display = 'none';
})

appare.addEventListener('click', ()=>{
    h1.style.display = 'block';
})

///////////////////////////////

// let primo = document.getElementById('primo');
// let secondo = document.getElementById('secondo');
// let terzo = document.getElementById('terzo');
// let texts = document.querySelectorAll('.sottolinea');
// let primoText = texts[0];
// let secondoText = texts[1];
// let terzoText = texts[2];

// primo.addEventListener('click', () => {
//     if (primo.checked == true) {
//         primoText.classList.add('sottolineatura');
//     } else {
//         primoText.classList.remove('sottolineatura');
//     }
// })
// secondo.addEventListener('click', () => {
//     if (secondo.checked == true) {
//         secondoText.classList.add('sottolineatura');
//     } else {
//         secondoText.classList.remove('sottolineatura');
//     }
// })
// terzo.addEventListener('click', () => {
//     if (terzo.checked == true) {
//         terzoText.classList.add('sottolineatura');
//     } else {
//         terzoText.classList.remove('sottolineatura');
//     }
// })

let input = document.querySelectorAll('.sottolinea')
let primo = document.querySelector('#primo')
let secondo = document.querySelector('#secondo')
let terzo = document.querySelector('#terzo')

primo.addEventListener('click', () => {
    if (primo.checked == true) {
        input[0].classList.add('sottolineatura')
    } else {
        input[0].classList.remove('sottolineatura')
    }
})

secondo.addEventListener('click', () => {
    if (secondo.checked == true) {
        input[1].classList.add('sottolineatura')
    } else {
        input[1].classList.remove('sottolineatura')
    }
})

terzo.addEventListener('click', () => {
    if (terzo.checked == true) {
        input[2].classList.add('sottolineatura')
    } else {
        input[2].classList.remove('sottolineatura')
    }
})


