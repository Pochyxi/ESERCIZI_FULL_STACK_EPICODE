interface tasse {
    codredd: number
    redditoannuolordo: number
    tasseinps: number
    tasseirpef: number

    getUtileTasse():number
    getTasseInps():number
    getTasseIrpef():number
    getRedditoAnnuoNetto():number
    getInfo():string
}

type codredd = 111 | 222 | 333;

class Lavoratore implements tasse {
    readonly codredd: codredd;
    readonly redditoannuolordo: number
    tasseinps: number
    tasseirpef: number
    constructor(redditoannuolordo: number, codredd:codredd){
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = 9 + this.getUtileTasse();
        this.tasseirpef = this.detTasseIrpef() 
        
        
    }
    detTasseIrpef(): number {
        if (this.redditoannuolordo < 15000){
            return 23
        } else if ( this.redditoannuolordo > 15000 && this.redditoannuolordo < 28000){
            return 25
        } else if ( this.redditoannuolordo > 28000 && this.redditoannuolordo < 50000) {
            return 35
        } else {
            return 43
        }
    }
    // DETERMINO LE DIVERSE TIPOLOGIE PER RICAVARE LA TASSAZIONE IRPEF
    getUtileTasse():number {
        if (this.codredd === 111) {
            return 5;
        } else if (this.codredd === 222) {
            return 10;
        } else {
            return 15;
        }
    }

    getType():string {
        if (this.codredd === 111) {
            return "Commerciante";
        } else if (this.codredd === 222) {
            return "Dipendente";
        } else {
            return "Libero professionista"
        }
    }
    getTasseInps():number {
        return this.redditoannuolordo * this.tasseinps / 100;
    }
    getTasseIrpef():number {
        return this.redditoannuolordo * this.tasseirpef / 100;
    }
    getRedditoAnnuoNetto(): number {
        return this.redditoannuolordo - this.getTasseInps() - this.getTasseIrpef();
    }
    getInfo():string {
        return "In base al seguente reddito annno di " + this.redditoannuolordo + " euro, abbiamo calcolato una tassazione INPS per un  " + this.getType() + " pari al 9% fisso + il " + this.getUtileTasse() + "%, calcolando un totale di " + this.getTasseInps() + " euro, inoltre abbiamo calcolato un IRPEF determinato dal vostro scaglione, pari al " + this.detTasseIrpef() + "% per un totale di " + this.getTasseIrpef() + " euro. Reddito netto = reddito lordo(" + this.redditoannuolordo + ") - tassa IPNS(" + this.getTasseInps() + ") - tassa IRPEF(" + this.getTasseIrpef() + ") = " + this.getRedditoAnnuoNetto(); // +
    }
}

class Commerciante extends Lavoratore implements tasse { 
    constructor(redditoannuolordo: number, codredd:codredd = 111){
        super(redditoannuolordo, codredd);
    }
}
class Dipendente extends Lavoratore implements tasse {
    constructor(redditoannuolordo: number, codredd:codredd = 222){
        super(redditoannuolordo, codredd);
    }
}
class LiberoProfessionista extends Lavoratore implements tasse {
    constructor(redditoannuolordo: number, codredd:codredd = 333){
        super(redditoannuolordo, codredd);
    }
};
// TEST
/*
let x = new Dipendente(25000);
let y = new Commerciante(35000);
let z = new LiberoProfessionista(140000);

console.log(x.getInfo());
console.log(y.getInfo());
console.log(z.getInfo());
*/

// AGGIUNTA DI FUNZIONALITA NELL'INDEX.HTML //

let form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let redditoAnnuo:any = document.querySelector("#redditoAnnuo");
        redditoAnnuo.required = true;

    let commerciante:any = document.querySelector("#commerciante");
    let dipendente:any = document.querySelector("#dipendente");
    let libero:any = document.querySelector("#libero");

    if (commerciante.checked == true && dipendente.checked == false && libero.checked == false) {
        let user = new Commerciante(parseInt(redditoAnnuo.value));
            displayInner(user.getInfo());

    }
    if ( dipendente.checked == true && libero.checked == false &&commerciante.checked == false) {
        let user = new Dipendente(parseInt(redditoAnnuo.value));
            displayInner(user.getInfo());
    }
    if (libero.checked == true && dipendente.checked == false && commerciante.checked == false) {
        let user = new LiberoProfessionista(parseInt(redditoAnnuo.value));
        displayInner(user.getInfo());
    }


    if (commerciante.checked == true && libero.checked == true){
        alert("Massimo una categoria per volta");
    }
    if (libero.checked == true && dipendente.checked == true){
        alert("Massimo una categoria per volta");
    }
    if (dipendente.checked == true && commerciante.checked == true) {
        alert("Massimo una categoria per volta");
    }
    if (commerciante.checked == false && dipendente.checked == false && libero.checked == false) {
        alert("seleziona la categoria");
    }
})

function displayInner(string:string) {
    let display = document.querySelector("#display");
    display.textContent = string;
    
}



