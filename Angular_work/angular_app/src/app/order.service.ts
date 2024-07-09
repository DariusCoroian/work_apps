import { Injectable } from '@angular/core';
import { Order } from '../order';
import { parse } from 'path';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

    orders:Order[] = [
      {
        id:1,
        name:'order1'
      },
      {
        id:2,
        name:'order2'
      },
      {
        id:3,
        name:'order3'
      }
  ];
  
  getOrders() {
    return this.orders;
  }
  addOrder(id:string, name:string){
    const orderId:number = parseInt(id,10);
    this.orders.push({
      id:orderId,
      name:name
    })
  }

  updateOrder(id:string, name:string){
    const orderId = parseInt(id,10);
    const orderIndex = this.orders.findIndex(order => order.id ==orderId);
    const order:Order = {
      id:orderId,
      name:name
    }
    this.orders[orderIndex] = order
    console.log('order updated');
  }
  deleteOrder(id:string){
    const orderId = parseInt(id,10);
    const orderIndex = this.orders.findIndex(order => order.id ==orderId);
    this.orders.splice(orderIndex,1);
    console.log('order deleted');
  }
}
