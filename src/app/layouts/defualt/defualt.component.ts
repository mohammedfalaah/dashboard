import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defualt',
  templateUrl: './defualt.component.html',
  styleUrls: ['./defualt.component.css']
})
export class DefualtComponent implements OnInit {

  sidebar:boolean =true;
  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    this.sidebar = !this.sidebar
  }
}
