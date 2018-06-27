import { CartItem } from './../models/cart-item';
import { Injectable } from '@angular/core';

import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CartService {

  items: CartItem[] = [];
  amount: number = 0;

  // Subject shall call subscribe only on next method call
  // amount$:Subject<number> = new Subject();
  amount$:BehaviorSubject<number>; 

  constructor() { 
    this.amount$ = new BehaviorSubject(this.amount)
  }

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
