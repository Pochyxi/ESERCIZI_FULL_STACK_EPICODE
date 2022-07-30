import { Component, OnInit } from '@angular/core';
import { PostFetchService } from '../post-fetch.service';
import { Posts } from '../posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts:Posts [] = [];

  constructor(private postService:PostFetchService) { }

  ngOnInit(): void {
    this.postService.getPostsFetch().then(()=>{
      this.posts = this.postService.getPosts();
    })

  }

}
