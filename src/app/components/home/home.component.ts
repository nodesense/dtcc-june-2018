import { DataService } from './../../shared/services/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // service instance per component instance
  providers: [
    DataService
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  likes: number = 1;
  // type inference
  price = 99.99

  productName = "Google Pixel"

  today: Date = new Date()

  // address // => any, bad practice


  // Injecting Dataservice into home component
  constructor(private dataService: DataService) {
     console.log("Home comp created")
   }

  ngOnInit() {
    console.log("Home comp ngOnInit")
    //FIXME
    // setTimeout( ()=> {
    //   console.trace()
    //   console.log("timeout called")
    //   this.likes += 100
    // }, 5000)
  }

  divClick() {
    alert('div click')
  }

  increment(e: Event) {

    console.trace()

    e.stopPropagation()
    
    console.log("Event ", e)
    this.likes++;

    alert('increment')
  }

  ngOnDestroy() {
    console.log("Home comp ngonDestroy")
  }

}
