import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import { DateService } from '../date.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  submitted=false  
  constructor(private fb:FormBuilder, private dateobj:DateService) { 
  }
  
  storeForm= this.fb.group({
    storeid:['',[Validators.required,Validators.maxLength(4)]],
    name:['',[Validators.required,Validators.pattern("^[a-z]{3}")]],
    gstno:[''],
    address:this.fb.group({
      city:[''],
      street:[''],
      pincode:['']
    })
  })

  register(){
    this.submitted=true
    if(this.storeForm.invalid){
      return  
    } 
    else{
      console.log(this.storeForm.value)
    }
  }
  

  reset(){
    this.submitted=false
    this.storeForm.reset()
  }

  get f(){
    console.log(this.storeForm.controls)
    return this.storeForm.controls
  }


  ngOnInit(): void {
    console.log("inside the store component",this.dateobj.getcur_Date())
  }
}
