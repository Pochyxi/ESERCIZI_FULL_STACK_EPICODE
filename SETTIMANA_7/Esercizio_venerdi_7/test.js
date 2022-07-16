let userObj = [];
let url = "./users.json"

class UserClass {
    constructor(a, b, c, d) {
        this._a = a;
        this._b = b;
        this._c = c;
        this._d = d;
    }
    get a() { return this._a; }
    get b() { return this._b; }
    get c() { return this._c; }
    get d() { return this._d; }

    set a(a) { this._a = a; }
    set b(b) { this._b = b; }
    set c(c) { this._c = c; }
    set d(d) { this._d = d; }

    putIntoView() { // METODO  PER VISUALIZZARE IL CONTENUTO
        let name = this._a;
        let surname = this._b;
        let email = this._c;
        let gender = this._d;

        let contenitore = document.getElementById("contenitore");// DIV PRINCIPALE
        
        let cardContenitore = document.createElement("div");// CONTENITORE INTERNO
        cardContenitore.className = "cardContenitore";
        
        let cardPhoto = document.createElement("div");// ELEMENTI DEL CONTENITORE INTERNO
        cardPhoto.className = "cardPhoto";

        let cardName = document.createElement('div')
        cardName.innerHTML ="<h2>name: " + name + "</h2>" ;

        let cardSurname = document.createElement('div')
        cardSurname.innerHTML ="<h2>surname: " + surname + "</h2>" ;

        let cardEmail = document.createElement('div')
        cardEmail.innerHTML ="<h2>email:</h2>" + "<a href='mailto:" + email + "'>" + email + "</a>" ;

        let cardGender = document.createElement('div')

        // creo una variabile che è uguale ad un numero casuale da 1 a 20 
        let numero = Math.floor(Math.random() * 200);
        cardPhoto.style.backgroundImage = "url(https://picsum.photos/id/" + numero + "/300/300)"

        //CAMBIAMENTI DI STATO IN BASE AL GENDER
        if(gender == "male") {
            cardGender.innerHTML = "<ion-icon name=\"man-outline\"></ion-icon>"
            cardGender.className = "cardGenderM";
            cardContenitore.style.backgroundImage = "linear-gradient(to top, black, rgb(0, 0, 128))"
        } else {
            cardGender.innerHTML = "<ion-icon name=\"woman-outline\"></ion-icon>";
            cardGender.className = "cardGenderF";
            cardContenitore.style.backgroundImage = "linear-gradient(to top, black, pink)"
        }
        

        contenitore.appendChild(cardContenitore);

        cardContenitore.appendChild(cardPhoto);
        cardContenitore.appendChild(cardName);
        cardContenitore.appendChild(cardSurname);
        cardContenitore.appendChild(cardEmail);
        cardContenitore.appendChild(cardGender);
        
    }
}

   
// RICHIESTA JSON 
async function getUsers() {
    await fetch(url).then(res=>res.json()).then((res)=>{
        res.users.forEach((user) => {
            let userPush = new UserClass(user.name, user.username, user.email, user.gender);
            userObj.push(userPush);
            userPush.putIntoView();
        } )
    })

}

// RICHIAMO LA FUNZIONE ASINCRONA 
getUsers(); 