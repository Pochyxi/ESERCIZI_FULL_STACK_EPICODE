import { Component, OnInit } from '@angular/core';
import { PostFetchService } from '../post-fetch.service';
import { Posts } from '../posts';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit {

  posts:Posts [] = [];
  postsInattivi:Posts [] = [];
  dettagliPost!:Posts
  control = false;

  constructor(private servicePosts:PostFetchService) { }

  ngOnInit(): void {
      this.servicePosts.getPostsFetch().then(()=>{
      this.posts = this.servicePosts.getPosts();
      this.postsInattivi = this.posts.filter(post => post.active == false);
    })

  }
  dettagli(p:Posts){
    this.control = true;
    this.dettagliPost = p;
    console.log(this.dettagliPost);
  }
  change(id:number) {
    this.postsInattivi = this.postsInattivi.filter(post => post.id != id);
  }
}
