import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  fruits=[
    {
      name:'Apple',
      price:20,
      stock:200

    },
    {
      name:'Orrange',
      price:30,
      stock:400


    },
    {
      name:'Banana',
      price:70,
      stock:500


    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
