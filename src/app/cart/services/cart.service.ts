import { CartItem } from './../models/cart-item';
import { Injectable } from '@angular/core';

import {Subject} from 'rxjs/Subject';

@Injectable()
export class CartService {

  items: CartItem[] = [];
  amount: number = 0;

  amount$:Subject<number> = new Subject();

  constructor() { }

  addItem(item: CartItem) {
     this.items.push(item)

     this.amount += item.price * item.qty;

     console.log("Amount ", this.amount)
     console.log(`item ${item.id} added`)

     //publish the amount
     this.amount$.next(this.amount)

  }

  removeItem(id: number) {


     //publish the amount
     this.amount$.next(this.amount)
  }

  empty() {
    this.items = []
    this.amount = 0;


     //publish the amount
     this.amount$.next(this.amount)
  }

}
