import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostFetchService } from '../post-fetch.service';
import { Posts } from '../posts';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

 @Input() attivi!:Posts; // SEGNALE IN ENTRATA

 @Output() getPostDettagli = new EventEmitter<Posts>(); // EMIT
 @Output() getPostMod = new EventEmitter<number>(); // EMIT

  constructor(private postDettagli:PostFetchService) { }

  ngOnInit(): void {

  }

  mostraDettagli(object:Posts) { //SEGNALE IN USCITA
    this.getPostDettagli.emit(object);
  }

  shotNumber(number: number) { // SEGNALE IN USCITA
    this.getPostMod.emit(number);
  }

  changeStatus(id:number, status:boolean) {
    fetch('http://localhost:3000/posts/' + id, {
      method: "PATCH",
      headers: {
        "accept": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({active: !status})
    }).then(()=> {
      this.attivi.active = !status;
      this.shotNumber(this.attivi.id)
    })
  }

}
