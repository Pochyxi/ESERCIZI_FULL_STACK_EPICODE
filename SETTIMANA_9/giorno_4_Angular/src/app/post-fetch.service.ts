import { Injectable } from '@angular/core';
import { Posts } from './posts';

@Injectable({
  providedIn: 'root'
})
export class PostFetchService {

  arrayPosts: Posts[] = [];

  constructor() {
    fetch('../assets/db.json').then(response => response.json()).then(res => {
      this.arrayPosts = res.posts;
    })
  }

  getPosts() { // CON QUESTO METODO MI PRENDO L'ARRAY
    return this.arrayPosts;
  }

  getPostsFetch() { // CON QUESTO METODO RICHIEDO DI FARE UNA FETCH E NEL THEN RICHIEDERO' GET POST
      return fetch('../assets/db.json').then(response => response.json()).then(res => {
        this.arrayPosts = res.posts;
    })
  }

}
