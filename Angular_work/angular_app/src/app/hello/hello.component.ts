import { Component, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { OrderService } from '../order.service';
import { Order } from '../../order';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [NgFor,CommonModule,RouterLink],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
  private orderService:OrderService = inject(OrderService);
  orders:Order[] = []
  constructor(){
    this.orders = this.orderService.getOrders();
  }
}
