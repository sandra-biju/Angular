import { Component, OnInit } from '@angular/core';
import {trigger,style,state,animate,transition} from '@angular/animations'

@Component({
  selector: 'app-imageanimation',
  templateUrl: './imageanimation.component.html',
  styleUrls: ['./imageanimation.component.css'],
  animations: [
    trigger("image",[
      state("zoomin",style({
        transform:'scale(1.5s)'
      })),
      state("zoomout",style({
        transform:'scale(0.5)'
      })),

      state("move",style({
        transform:'translateX(100%)'
      })),

     state("spin",style({
       transform:'rotateY(180deg) rotateZ(90deg)'
     })),

    

      transition("*<=>*",animate(1500))
    ])
      
  ]
})
export class ImageanimationComponent implements OnInit {

  state="zoomout"
  
  

  scale(){
    this.state="zoomin"
  }
  move(){
    this.state="move"
  }

  rotate(){
    this.state="spin"
  }


  constructor() { }
  ngOnInit(): void {
  } 

}
