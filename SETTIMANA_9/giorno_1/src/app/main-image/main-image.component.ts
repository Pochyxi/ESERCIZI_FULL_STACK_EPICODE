import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-image',
  templateUrl: './main-image.component.html',
  styleUrls: ['./main-image.component.scss']
})
export class MainImageComponent implements OnInit {

  constructor() { }
  arr:number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  x = 0;
  lotto = Math.floor(Math.random() * 98) + 1;

  ngOnInit(): void {
    console.log("welcome");
  }

  change() {
    let div:any = document.querySelector('#div');
    let number = Math.floor(Math.random() * 200);
    div.style.backgroundImage = "url('https://picsum.photos/id/"+ number + "/1000/1000')";
  }

  aumenta(){
    this.x++
    let button = document.querySelector("#button") as HTMLElement;
    button.innerHTML = this.x.toString();
  }
}
