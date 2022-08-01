import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor( private http: HttpClient) {
    this.getPhotos();
  }
  getPhotos(){
    return this.http.get<Photo>('http://localhost:3000/photos')
  }
  addLike(obj: Photo){
      return this.http.patch<Photo>('http://localhost:3000/photos/' + obj.id, {
      "albumId": obj.albumId,
      "id": obj.id,
      "title": obj.title,
      "url": obj.url,
      "thumbnailUrl": obj.thumbnailUrl,
      "likes": obj.likes
    })
  }
  deletePhoto(obj:Photo) {
    return this.http.delete<Photo>('http://localhost:3000/photos/' + obj.id);
  }
}
