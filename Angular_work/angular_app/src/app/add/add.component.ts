import { Component, inject } from '@angular/core';
import { OrderService } from '../order.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  orderService = inject(OrderService);
  orderForm = new FormGroup ({
id: new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
name: new FormControl('', [Validators.minLength(4),Validators.required])
})
  addOrder(){
   this.orderService.addOrder(this.orderForm.value.id ?? '' , this.orderForm.value.name ?? '');
   this.orderForm.reset()
  }
}
