import { Injectable } from '@angular/core';
import { Posts } from './posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  arrPosts:Posts [] = [];
  arrPostsActive:Posts[] = [];
  arrPostsInactive:Posts[] = [];

  constructor() {
    fetch('../assets/db.json').then(response => response.json()).then(res => {
      this.arrPosts = res.posts;
      this.arrPostsActive = res.posts.filter((e:Posts)=>{
        return e.active
      });
      this.arrPostsInactive = res.posts.filter((e:Posts)=>{
        return !e.active
      });
    })
  }
  getHome(){
    return fetch('../assets/db.json').then(response => response.json()).then(res => {
      this.arrPosts = res.posts;
    });
  }
  getPosts() {
    return this.arrPosts;
  }
  getActivePosts() { return this.arrPostsActive; }
  getInactivePosts() { return this.arrPostsInactive; }
}
