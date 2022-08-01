import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  photos!:Photo | any

  photoRequest!:Subscription

  constructor(private photoSRV: PhotoService) { }

  ngOnInit(): void {

    let obs = this.photoSRV.getPhotos();
    this.photoRequest = obs.subscribe(photo => {

      this.photos = photo;
      console.log(photo);
    });

  }
  deletePhoto(obj:Photo) {
    this.photos = this.photos.filter((photos: { id: number; }) => photos.id != obj.id);
  }
}
