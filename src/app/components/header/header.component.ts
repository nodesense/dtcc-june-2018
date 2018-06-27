import { CartService } from './../../cart/services/cart.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;

  amount: number;

 
  constructor(private cartService: CartService) {
       this.amount = this.cartService.amount
   }

  ngOnInit() {
    this.cartService.amount$
        .subscribe ( amount => {
           console.log("New amount ", amount);
           this.amount = amount;
        })
  }

  login() {
     this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false
  }

}
