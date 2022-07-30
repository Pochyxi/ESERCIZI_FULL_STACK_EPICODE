import { Component, OnInit } from '@angular/core';
import { DatabaseInterface } from '../database-interface';
import { DatabaseServiceService } from '../database-service.service';

@Component({
  selector: 'app-genitore',
  templateUrl: './genitore.component.html',
  styleUrls: ['./genitore.component.scss']
})
export class GenitoreComponent implements OnInit {

  arrayDelGenitore:DatabaseInterface [] = [];// questo è il nostro array che dovremmo riempire con quello che ci arriverà dal service

  //two way binding
  nomeVal:string = 'x';
  cognomeVal:string = 'y';
  etaVal:number = 0;
  messaggioVal:string = 's';



  constructor(private databaseS:DatabaseServiceService) { } // nel costruttore ci dichiariamo il nostro service, così da poterlo utilizzare all'interno di questa classe

  ngOnInit(): void {                              // come abbiamo precedentemente detto, dobbiamo richiedere il metodo fetchDalDatabase() e lavorare nel then
    this.databaseS.fetchDalDatabase().then(()=> { // ricordiamoci che il then accetta una funzione, che in questo caso sarà vuota perche non utilizzeremo nulla che ci
                                                  //arriva dalla promise bensì servirà solo ad accettarci che la promise sia andata a buon fine
      this.arrayDelGenitore = this.databaseS.getArrayDalDatabase();
      console.log("Questo è l'array del genitore settato uguale a quello del service: ")
      console.log(this.arrayDelGenitore)
    });
  }
  addNewUser(nome:string, cognome:string, eta:number, messaggio:string) { //dato che dobbiamo fare una fetch, abbiamo preso questi valori per eseguire
                                                                          // un POST per aggiungere un nuovo utente
    fetch(this.databaseS.getUrl(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        nome: nome,
        cognome: cognome,
        età: eta,
        messaggio: messaggio
      }),
    }).then(()=> {
      let newUser = {
        id: this.arrayDelGenitore.length == 0? 1 : this.arrayDelGenitore[this.arrayDelGenitore.length - 1].id + 1,
        nome: nome,
        cognome: cognome,
        età: eta,
        messaggio: messaggio
      }
      this.arrayDelGenitore.push(newUser); // questa modifica sarà immediata cioè solo grafica ma la vera modifica avviene nel fetch in cui andiamo ad aggiungere
                                            // effettivamente un nuovo utente
    })

  }

  deleteFromArray(id:number) { // questa funzione che effettivamente sarà richiamata dal figlio attraverso l'eventEmitter non farà altro che rimuovere l'elemento dall'array
    this.arrayDelGenitore = this.arrayDelGenitore.filter( element => element.id != id );
  }
}
