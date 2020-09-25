import { Component, OnInit } from '@angular/core';
import {trigger,style,state,animate,transition} from '@angular/animations'

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger("openclose",[
      state("open",style({
        height:"200px",
        opacity:1,
        backgroundColor:"grey"
      })),
      state("closed",style({
        height:"200px",
        opacity:0.5,
        backgroundColor:"pink"
      })),
      transition('open=>closed',animate(1000)),
      transition('closed=>open',animate(1500))


    ])


  ]
})
export class AnimationComponent implements OnInit {

  state="open"

  toggle(){
    this.state=this.state=="open"?"closed":"open"
  }


  constructor() { }
  ngOnInit(): void {
  }
}
