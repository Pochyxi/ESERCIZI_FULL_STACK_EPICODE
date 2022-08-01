import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input () photo!:Photo

  likeRequest!:Subscription
  deleteRequest!:Subscription

 @Output () shotPhoto = new EventEmitter<Photo>();

  constructor(private photoSRV:PhotoService) { }

  ngOnInit(): void {
  }
  addLike (){
    this.photo.likes++;
    let obs = this.photoSRV.addLike(this.photo);
    this.likeRequest = obs.subscribe((response) => {
      console.log(response);
    })
  }
  deletePhoto (obj:Photo) {
    let obs = this.photoSRV.deletePhoto(this.photo);
    this.deleteRequest = obs.subscribe((response) => {
      console.log(response);
      this.shotPhoto.emit(this.photo)
    });

  }
  ngOnDestroy() {
    this.likeRequest.unsubscribe();
    this.deleteRequest.unsubscribe();
  }
}
