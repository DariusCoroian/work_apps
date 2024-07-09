import { Component, inject } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormControl, Validators } from '@angular/forms';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  orderService = inject(OrderService);
  orderForm = new FormGroup ({
  id: new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
})
  deleteOrder(){
   this.orderService.deleteOrder(this.orderForm.value.id ?? '');
   this.orderForm.reset()
  }
}
