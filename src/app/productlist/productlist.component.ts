import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productlist:any
  constructor(private service:ProductService) {
  }

  ngOnInit(): void {
    this.service.getData().subscribe(list=>{
      this.productlist=list
      console.log(this.productlist)
    })
  }

}
