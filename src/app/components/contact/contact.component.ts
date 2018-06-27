import { DataService } from './../../shared/services/data.service';
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

  // no component provider,
  // takes from module provider, singleton
  constructor(private dataService:DataService) { }

  ngOnInit() {
    setTimeout( ()=> {
      this.address = {city: 'Chennai', state:'TN'}
    }, 3000)
 
  }

}
