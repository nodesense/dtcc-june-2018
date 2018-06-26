import { Address } from './shared/models/address';
import {Component, OnInit} from '@angular/core'

@Component({
    // 1
    selector: 'app-root', //html tag name <app-root></app-root>
     // 2
    // view
    // template: '<h1>Hello</h1>'  // inline html
    templateUrl: 'app.component.html', // refers a file

     // 3
    // scopped style, only for this component
    styleUrls: [
        'app.component.css'
    ]
})
export class AppComponent implements OnInit {  // 4 TypeScript class, code
    // Model data
    appTitle: string = "Product App"
    year = 2018
    address:Address = { city: 'Chennai', 
                        state: 'TN', 
                        pincode: 600001
                    }


    pageName: string = 'home'

    // before creating/initializing view
    constructor() {
        console.log("App comp created")
    }

    // called by Angular after view initialized
    ngOnInit() {
        console.log("App comp ngInit")
    }

    // handler
    onContact(city: string) {
        alert(city)
    }


}