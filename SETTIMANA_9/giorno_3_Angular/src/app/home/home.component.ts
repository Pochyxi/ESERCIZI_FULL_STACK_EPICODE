import { Component, OnInit } from '@angular/core';
import { Posts } from '../posts';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  arrPosts: Posts [] = [];

  constructor(private postSRV:PostsService) { }

  ngOnInit():void {
    this.postSRV.getHome().then(()=> {
      this.arrPosts = this.postSRV.getPosts();
    })
  }
}
