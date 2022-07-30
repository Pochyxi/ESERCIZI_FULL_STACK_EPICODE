import { Injectable } from '@angular/core';
import { DatabaseInterface } from './database-interface';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {
  url:string = "http://localhost:3000/db/";

  arrayDalDatabase:DatabaseInterface [] = []; // array inizialmente vuoto che dovrà essere popolato nel costructor del service

  constructor() {
    fetch(this.url).then((response) => response.json()).then (res => { // questa fetch viene eseguita non appena "nasce" il DatabaseServiceService
      this.arrayDalDatabase = res.db; // qui riempiamo il nostro arrayDalDatabase dichiarato precedentemente come un array vuoto di tipo DatabaseInterface
    })
  }

  fetchDalDatabase() {  // perchè creare un metodo che ritorna una promise? Nel momento in cui viene inizializzato un componente,
                        // gli viene chiesto sull'onInit di ricevere dal service il metodo getArrayDalDatabase che ritornera l'array, se questa cosa viene fatta
                        // su un elemento che viene inizializzato insieme alla home, delle volte può capitare che l'array arrivi vuoto e dopo la fetch si completi, quindi
                        // nell'onInit dell componente inseriremo inizialmente il metodo preso dal service fetchDalDatabase() e nel then di questa promise (cioè dopo che
                        // siamo sicuri che la fetch sia stata completata e nel service l'array non sia vuoto) popoleremo il nostro array con l'array del service SICURAMENTE popolato
    return fetch(this.url).then((response) => response.json())
  }
  getArrayDalDatabase() {
    return this.arrayDalDatabase;
  }
  getUrl() {
    return this.url;
  }
}

//FATTA L'INTERFACE E IL SERVICE POSSIAMO FINALMENTE GESTIRE NEL MODO PIU' OTTIMALE IL GENITORE ED IL FIGLIO, MA PRIMA DOBBIAMO DARE DELLE ROTTE A QUESTI ELEMENTI
// DATO CHE SOLO IL GENITORE SARA' QUELLO CHE VERRA VISUALIZZATO (CON IL FIGLIO ALL'INTERNO) CI SERVIRA' SOLTANTO DARE UNA ROTTA AL GENITORE
// ANDIAMO NEL FILE APP-ROUTING.MODULE ---------------------------------------------------------------->
