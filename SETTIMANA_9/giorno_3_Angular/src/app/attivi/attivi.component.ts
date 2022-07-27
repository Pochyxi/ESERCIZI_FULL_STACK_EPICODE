import { Component, OnInit } from '@angular/core';
import { Posts } from '../posts';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-attivi',
  templateUrl: './attivi.component.html',
  styleUrls: ['./attivi.component.scss']
})
export class AttiviComponent implements OnInit {
  arrAttivi:Posts [] = [];
  arrOfNews:Posts[] = [];
  arrOfPolitics:Posts[] = [];

  constructor(readonly postSRV:PostsService) { }

  ngOnInit(): void {
    this.arrAttivi = this.postSRV.getActivePosts();
    this.arrOfNews = this.arrAttivi.filter(post => post.type === 'news');
    this.arrOfPolitics = this.arrAttivi.filter(post => post.type === 'politics');
  }

}
