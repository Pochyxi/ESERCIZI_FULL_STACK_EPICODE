import { Component, OnInit } from '@angular/core';
import { Posts } from './posts';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  arrPosts: Posts [] = [];
  arrActivePosts: Posts[] = [];
  arrInactivePosts: Posts[] = [];

  constructor(readonly postSRV:PostsService) { }

  ngOnInit() {
    this.arrActivePosts = this.postSRV.getPosts();
    this.arrInactivePosts = this.postSRV.getInactivePosts();
    this.arrActivePosts = this.postSRV.getActivePosts();
  }
}
