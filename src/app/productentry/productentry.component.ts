import { Component, OnInit } from '@angular/core';
import {Product} from '../product'
@Component({
  selector: 'app-productentry',
  templateUrl: './productentry.component.html',
  styleUrls: ['./productentry.component.css']
})
export class ProductentryComponent implements OnInit {

  model=new Product()

  saveProduct(){
    console.log(this.model)
    this.model= new Product()
  }

  constructor() { }
  ngOnInit(): void {
  }
}
