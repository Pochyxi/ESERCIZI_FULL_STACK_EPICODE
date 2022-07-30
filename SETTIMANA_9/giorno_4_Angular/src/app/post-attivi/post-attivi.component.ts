import { Component, OnInit } from '@angular/core';
import { PostFetchService } from '../post-fetch.service';
import { Posts } from '../posts';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {
  posts:Posts[] = [];
  postsAttivi:Posts [] = [];
  dettagliPost!:Posts
  control = false;

  constructor(private servicePosts:PostFetchService) { }

  ngOnInit(): void {
      this.servicePosts.getPostsFetch().then(()=>{
      this.posts = this.servicePosts.getPosts();
      this.postsAttivi = this.posts.filter(post => post.active == true);
    })
  }

  dettagli(p:Posts) {
    this.control = !this.control;
    this.dettagliPost = p;
  }
  change(id:number) {
    this.postsAttivi = this.postsAttivi.filter(post => post.id != id);
    console.log(id)
  }
}
