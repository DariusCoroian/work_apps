import { Component , inject} from '@angular/core';
import { OrderService } from '../order.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  orderService = inject(OrderService);
  orderForm = new FormGroup ({
  id: new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
  name: new FormControl('', [Validators.minLength(4),Validators.required])
})
  updateOrder(){
    this.orderService.updateOrder(this.orderForm.value.id ?? '' , this.orderForm.value.name ?? '');
    this.orderForm.reset()
  }
}
