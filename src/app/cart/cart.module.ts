import { CartService } from './services/cart.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      CartComponent, 
      CheckoutComponent
  ],

  providers: [
    CartService
  ]
})
export class CartModule { }
