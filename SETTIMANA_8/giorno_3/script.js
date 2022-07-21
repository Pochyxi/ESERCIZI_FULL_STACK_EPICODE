var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratore = /** @class */ (function () {
    function Lavoratore(redditoannuolordo, codredd) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = 9 + this.getUtileTasse();
        this.tasseirpef = this.detTasseIrpef();
    }
    Lavoratore.prototype.detTasseIrpef = function () {
        if (this.redditoannuolordo < 15000) {
            return 23;
        }
        else if (this.redditoannuolordo > 15000 && this.redditoannuolordo < 28000) {
            return 25;
        }
        else if (this.redditoannuolordo > 28000 && this.redditoannuolordo < 50000) {
            return 35;
        }
        else {
            return 43;
        }
    };
    // DETERMINO LE DIVERSE TIPOLOGIE PER RICAVARE LA TASSAZIONE IRPEF
    Lavoratore.prototype.getUtileTasse = function () {
        if (this.codredd === 111) {
            return 5;
        }
        else if (this.codredd === 222) {
            return 10;
        }
        else {
            return 15;
        }
    };
    Lavoratore.prototype.getType = function () {
        if (this.codredd === 111) {
            return "Commerciante";
        }
        else if (this.codredd === 222) {
            return "Dipendente";
        }
        else {
            return "Libero professionista";
        }
    };
    Lavoratore.prototype.getTasseInps = function () {
        return this.redditoannuolordo * this.tasseinps / 100;
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        return this.redditoannuolordo * this.tasseirpef / 100;
    };
    Lavoratore.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - this.getTasseInps() - this.getTasseIrpef();
    };
    Lavoratore.prototype.getInfo = function () {
        return "In base al seguente reddito annno di " + this.redditoannuolordo + " euro, abbiamo calcolato una tassazione INPS per un  " + this.getType() + " pari al 9% fisso + il " + this.getUtileTasse() + "%, calcolando un totale di " + this.getTasseInps() + " euro, inoltre abbiamo calcolato un IRPEF determinato dal vostro scaglione, pari al " + this.detTasseIrpef() + "% per un totale di " + this.getTasseIrpef() + " euro. Reddito netto = reddito lordo(" + this.redditoannuolordo + ") - tassa IPNS(" + this.getTasseInps() + ") - tassa IRPEF(" + this.getTasseIrpef() + ") = " + this.getRedditoAnnuoNetto(); // +
    };
    return Lavoratore;
}());
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante(redditoannuolordo, codredd) {
        if (codredd === void 0) { codredd = 111; }
        return _super.call(this, redditoannuolordo, codredd) || this;
    }
    return Commerciante;
}(Lavoratore));
var Dipendente = /** @class */ (function (_super) {
    __extends(Dipendente, _super);
    function Dipendente(redditoannuolordo, codredd) {
        if (codredd === void 0) { codredd = 222; }
        return _super.call(this, redditoannuolordo, codredd) || this;
    }
    return Dipendente;
}(Lavoratore));
var LiberoProfessionista = /** @class */ (function (_super) {
    __extends(LiberoProfessionista, _super);
    function LiberoProfessionista(redditoannuolordo, codredd) {
        if (codredd === void 0) { codredd = 333; }
        return _super.call(this, redditoannuolordo, codredd) || this;
    }
    return LiberoProfessionista;
}(Lavoratore));
;
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
var form = document.querySelector("#form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var redditoAnnuo = document.querySelector("#redditoAnnuo");
    redditoAnnuo.required = true;
    var commerciante = document.querySelector("#commerciante");
    var dipendente = document.querySelector("#dipendente");
    var libero = document.querySelector("#libero");
    if (commerciante.checked == true && dipendente.checked == false && libero.checked == false) {
        var user = new Commerciante(parseInt(redditoAnnuo.value));
        displayInner(user.getInfo());
    }
    if (dipendente.checked == true && libero.checked == false && commerciante.checked == false) {
        var user = new Dipendente(parseInt(redditoAnnuo.value));
        displayInner(user.getInfo());
    }
    if (libero.checked == true && dipendente.checked == false && commerciante.checked == false) {
        var user = new LiberoProfessionista(parseInt(redditoAnnuo.value));
        displayInner(user.getInfo());
    }
    if (commerciante.checked == true && libero.checked == true) {
        alert("Massimo una categoria per volta");
    }
    if (libero.checked == true && dipendente.checked == true) {
        alert("Massimo una categoria per volta");
    }
    if (dipendente.checked == true && commerciante.checked == true) {
        alert("Massimo una categoria per volta");
    }
    if (commerciante.checked == false && dipendente.checked == false && libero.checked == false) {
        alert("seleziona la categoria");
    }
});
function displayInner(string) {
    var display = document.querySelector("#display");
    display.textContent = string;
}
