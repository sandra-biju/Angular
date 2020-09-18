import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  colors:string[]=["Red","Blue","Green","Yellow"]
  choice:string
  test(){
    console.log(this.choice)
  }

  disabled='false'




  constructor() { }
  ngOnInit(): void {
  }
}
