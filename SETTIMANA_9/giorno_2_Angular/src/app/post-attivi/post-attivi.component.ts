import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {
  url:string = '../../assets/db.json';
  arrOfPosts:Post [] = [];
  arrOfActivePosts:Post[] = [];
  constructor() { }

  ngOnInit(): void {
    this.fetch();
  }
  fetch(){
    fetch(this.url).then(response => response.json()).then((res)=>{
      this.arrOfPosts = res.posts;

      this.arrOfActivePosts = this.arrOfPosts.filter((post:Post) => {
      return post.active === true;
    })
  })
  }
  change(id:number, index:number){
    console.log(this.arrOfActivePosts[index].active)
    console.log(id);
    let url = "http://localhost:3000/posts/";

    let data:Post = {
      id:id,
      title: this.arrOfActivePosts[index].title,
      body: this.arrOfActivePosts[index].body,
      active: false,
    }
    fetch(url + id, {
      method: "PUT",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(()=> {
      this.arrOfActivePosts[index].active = false;
      this.arrOfActivePosts = this.arrOfPosts.filter((post:Post) => {
        return post.active === true
      })
      console.log(this.arrOfActivePosts[index].active)
    })

  }

}
