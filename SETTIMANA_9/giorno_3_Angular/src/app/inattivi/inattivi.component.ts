import { Component, OnInit } from '@angular/core';
import { Posts } from '../posts';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-inattivi',
  templateUrl: './inattivi.component.html',
  styleUrls: ['./inattivi.component.scss']
})
export class InattiviComponent implements OnInit {

  arrInattivi:Posts [] = [];
  arrOfNews:Posts[] = [];
  arrOfPolitics:Posts[] = [];

  constructor(readonly postSRV:PostsService) { }

  ngOnInit(): void {
    this.arrInattivi = this.postSRV.getInactivePosts();
    this.arrOfNews = this.arrInattivi.filter(post => post.type === 'news');
    this.arrOfPolitics = this.arrInattivi.filter(post => post.type === 'politics');
  }


}
