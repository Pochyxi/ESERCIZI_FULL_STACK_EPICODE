import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit {
  url:string = '../../assets/db.json';
  arrOfPosts:Post [] = [];
  arrOfInactivePosts:Post[] = [];
  constructor() { }

  ngOnInit(): void {
    this.fetch();
  }
  fetch(){
    fetch(this.url).then(response => response.json()).then((res)=>{
      this.arrOfPosts = res.posts;

      this.arrOfInactivePosts = this.arrOfPosts.filter((post:Post) => {
      return post.active === false;
     })
    })
  }
  change(id:number, index:number){
    console.log(this.arrOfInactivePosts[index].active)
    console.log(id)
    let url = "http://localhost:3000/posts/";

    let data:Post = {
      id:id,
      title: this.arrOfInactivePosts[index].title,
      body: this.arrOfInactivePosts[index].body,
      active: true,
    }
    fetch(url + id, {
      method: "PUT",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(()=> {
      this.arrOfInactivePosts[index].active = true;
      this.arrOfInactivePosts = this.arrOfPosts.filter((post:Post) => {
        return post.active === false
      })
      console.log(this.arrOfInactivePosts[index].active)
    })

  }

}
