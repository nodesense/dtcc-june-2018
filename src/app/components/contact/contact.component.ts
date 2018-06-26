import { Address } from './../../shared/models/address';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // addres is undefined
  address:Address

  constructor() { }

  ngOnInit() {
    setTimeout( ()=> {
      this.address = {city: 'Chennai', state:'TN'}
    }, 3000)
 
  }

}
