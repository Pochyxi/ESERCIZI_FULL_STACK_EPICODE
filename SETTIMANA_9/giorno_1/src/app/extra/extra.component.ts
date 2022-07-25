import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent implements OnInit {

  constructor() { }
  users:any[] = [];

  ngOnInit(): void {
    fetch("http://jsonplaceholder.typicode.com/users").then(response => response.json()).then(res => this.users = res)
  }

}
