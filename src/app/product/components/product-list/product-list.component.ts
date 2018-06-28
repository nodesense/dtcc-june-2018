import { CartItem } from './../../../cart/models/cart-item';
import { CartService } from './../../../cart/services/cart.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../models/product';


import {Subscription} from 'rxjs/Subscription'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit  {
   products$: Observable<Product[]>; 
   amount$: Observable<number>;
 
  constructor(private productService: ProductService, 
              private cartService: CartService) {

          this.amount$ = cartService.amount$;
   }

  ngOnInit() {
        this.products$ = this.productService.getProducts()
  }

  addToCart(product: Product) {
      let cartItem = new CartItem()
      cartItem.id = product.id;
      cartItem.price = product.price;
      cartItem.name = product.name;
      cartItem.qty = 1;

      this.cartService.addItem(cartItem);
  }

  deleteProduct(id: number) {
    
  }
}