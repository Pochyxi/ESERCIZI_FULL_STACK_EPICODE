let url = "./Abbigliamento.json";

class Stock{
            capo:string;
   readonly codprod:number;
            collezione:string;
            colore:string;
            disponibile:string;
   readonly id:number;
   readonly modello:number;
            prezzoivainclusa:number;
            prezzoivaesclusa:number;
            quantita:number;
            saldo:number;

    constructor(capo:string, codprod:number, collezione:string, colore:string, disponibile:string, id:number, modello:number, prezzoivainclusa:number, prezzoivaesclusa:number, quantita:number, saldo:number){
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
    
    getSaldoCapo():number { return this.saldo; }
    getAcquistoCapo():number {
        return this.prezzoivainclusa - (this.prezzoivainclusa * (this.getSaldoCapo() / 100) );
    }



}


async function createClass(){
   let res = await fetch(url).then(response => response.json())

   const arrayOfCapi:Stock[] = []
   
   res.forEach((item:Stock) => {
       
    let capo = new Stock(item.capo, item.codprod, item.collezione, item.colore, item.disponibile, item.id, item.modello, item.prezzoivainclusa, item.prezzoivaesclusa, item.quantita, item.saldo);
    arrayOfCapi.push(capo); 
   })
   
   arrayOfCapi.forEach((item) => { console.log(`Il prodotto: ${item.capo} della collezione ${item.collezione} costa ${item.prezzoivainclusa} euro, ma con uno sconto applicato del ${item.getSaldoCapo()}%, il capo costa SOLO ${item.getAcquistoCapo()} euro`); });
}


createClass()

