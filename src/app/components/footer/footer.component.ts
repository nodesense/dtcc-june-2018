import { Address } from './../../shared/models/address';
import { Component, OnInit, 
        Input,

        Output, EventEmitter
      } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // property data binding

  //x-company=""

  @Input("x-company")
  company: string

  @Input()
  year: number

  @Input()
  address: Address //object type

  //  (contactEvent)

  // child to parent
  @Output()
  contactEvent: EventEmitter<string> = new EventEmitter()


  constructor() { }

  ngOnInit() {
    console.log("typeof ", typeof this.year, typeof this.address)
 
  }

  contact() {
    //TODO: call parent component
    // publish event
    this.contactEvent.emit(this.address)
  }

}
