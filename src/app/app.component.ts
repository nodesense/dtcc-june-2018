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
    appTitle: string = "Product App 4"

    // before creating/initializing view
    constructor() {
        console.log("App comp created")
    }

    // called by Angular after view initialized
    ngOnInit() {
        console.log("App comp ngInit")
    }
}