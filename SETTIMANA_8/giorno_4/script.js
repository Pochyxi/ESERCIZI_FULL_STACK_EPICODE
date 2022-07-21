"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let url = "./Abbigliamento.json";
class Stock {
    constructor(capo, codprod, collezione, colore, disponibile, id, modello, prezzoivainclusa, prezzoivaesclusa, quantita, saldo) {
        this.capo = capo;
        this.codprod = codprod;
        this.collezione = collezione;
        this.colore = colore;
        this.disponibile = disponibile;
        this.id = id;
        this.modello = modello;
        this.prezzoivainclusa = prezzoivainclusa;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.quantita = quantita;
        this.saldo = saldo;
    }
    getSaldoCapo() { return this.saldo; }
    getAcquistoCapo() {
        return this.prezzoivainclusa - (this.prezzoivainclusa * (this.getSaldoCapo() / 100));
    }
}
function createClass() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield fetch(url).then(response => response.json());
        const arrayOfCapi = [];
        res.forEach((item) => {
            let capo = new Stock(item.capo, item.codprod, item.collezione, item.colore, item.disponibile, item.id, item.modello, item.prezzoivainclusa, item.prezzoivaesclusa, item.quantita, item.saldo);
            arrayOfCapi.push(capo);
        });
        arrayOfCapi.forEach((item) => { console.log(`Il prodotto: ${item.capo} della collezione ${item.collezione} costa ${item.prezzoivainclusa} euro, ma con uno sconto applicato del ${item.getSaldoCapo()}%, il capo costa SOLO ${item.getAcquistoCapo()} euro`); });
    });
}
createClass();
