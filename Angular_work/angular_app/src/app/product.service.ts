import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products = [
    {
      id:1,
      name:'canapea',
      price:200
    },
    {
      id:2,
      name:'scaun',
      price:550
    },
    {
      id:3,
      name:'birou',
      price:900
    }
  ]

  getProducts(){
    return this.products;
  }
}
