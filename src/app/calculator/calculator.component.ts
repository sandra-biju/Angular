import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  value1:string=""
  value2:string=""
  operator:string=""
  Result=0
  
  add(){
    console.log("function is called...") 
    this.Result=parseInt(this.value1)+parseInt(this.value2)
  }

  setValue(i){
    if(this.value1==''){
      this.value1=i
    }
    else{
      this.value2=i
      this.calculate(this.operator)
    }
  }
  setOperator(opr){
    this.operator=opr;
    
  }
  calculate(opr){
    if(opr=="+"){
      this.Result=parseInt(this.value1)+parseInt(this.value2)
    }
    else if(opr=="-"){
      this.Result=parseInt(this.value1)-parseInt(this.value2)
    }
    else if(opr=="*"){
      this.Result=parseInt(this.value1)*parseInt(this.value2)
    }
    else if(opr=="/"){
      this.Result=parseInt(this.value1)/parseInt(this.value2)
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }
  
}
