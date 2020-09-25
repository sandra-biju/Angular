import { Component, OnInit } from '@angular/core';
import {DateService} from '../date.service';
import {UserService} from '../user.service'

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

  todolist:any=[]
  constructor(private dateobj:DateService, private userobj:UserService) { }
  ngOnInit(): void {
    console.log("inside the test component",this.dateobj.getcur_Date())

    this.userobj.getTodo().subscribe(data=>{
      this.todolist=data
      console.log(this.todolist)
    })
  }
}
