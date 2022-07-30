import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatabaseInterface } from '../database-interface';
import { DatabaseServiceService } from '../database-service.service';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.scss']
})
export class FiglioComponent implements OnInit {

@Input() elementoDelFiglio!:DatabaseInterface   // con il decorator @Input() dichiariamo che elementoDelFiglio sarà un valore che verra prelevato
                                                // dal genitore che glielo manderà, nell'html definiremo come visualizzare le proprietà di questo oggetto
                                                // dato che sappiamo che elementoDelFiglio sarà un oggetto ;)
                                                // ora spostiamoci nell'html del genitore per emettere il segnale
@Output() shotId = new EventEmitter(); // qui abbiamo due scelte, se inviare il singolo id o l'intero oggetto

  constructor(private databaseS:DatabaseServiceService) { }

  ngOnInit(): void {
  }
deleteUser(id:number) {
  fetch(this.databaseS.getUrl() + id, {
    method: 'DELETE',
    headers: {
      "accept": "application/json",
      'Content-Type': 'application/json'
    }
  }).then(() => {
    this.shotId.emit(id); // dopo aver fatto la fetch e controllato che sia andata a buon fine emetto il segnale al genitore
                          // a questo punto mi sposto nell'html del genitore per raccogliere il segnale inviato ------------>
  })
}
}
