import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  likes: number = 1000;
  // type inference
  price = 99.99

  productName = "Google Pixel"

  // address // => any, bad practice


  constructor() { }

  ngOnInit() {
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

}
