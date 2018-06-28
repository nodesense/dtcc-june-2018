import { CartItem } from './../../../cart/models/cart-item';
import { CartService } from './../../../cart/services/cart.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../models/product';


import {Subscription} from 'rxjs/Subscription'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products:Product[] = []; 
  amount:number;
  productsSubscription: Subscription;
  amountSubscription: Subscription;


  constructor(private productService: ProductService, 
              private cartService: CartService) {

          this.amount = cartService.amount;
   }

  ngOnInit() {

    this.amountSubscription = this.cartService.amount$
        .subscribe (amount => {
           console.log("Product List sub ", amount);
           this.amount = amount
        })

    this.productsSubscription = this.productService.getProducts()
        .subscribe( products => {
            this.products = products;
            console.log("Got products ", this.products);
        })
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

  ngOnDestroy() {
    this.amountSubscription.unsubscribe()
    this.productsSubscription.unsubscribe()
  }

}
