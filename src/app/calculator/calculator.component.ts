import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  value1:string
  value2:string
  Result=0
  
  add(){
    console.log("function is called...")
    this.Result=parseInt(this.value1)+parseInt(this.value2)
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
