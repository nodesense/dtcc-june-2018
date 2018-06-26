import { SharedModule } from './shared/shared.module';
import {NgModule} from '@angular/core'

import {BrowserModule} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

import {FormsModule} from '@angular/forms';

@NgModule({
    // references to other modules
    imports: [
        BrowserModule,
        FormsModule,

        SharedModule


        // NgGridModule, 

        //SharedModule,
        //AuthModule
        //CartModule, ....
    ],

    // logical collection of components, pipes, directives
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent, 
        //HeaderComponent,
        //FooterComponent,
        //HomeComponent,
        //AboutComponent
    ],

    bootstrap: [
        // main component
        AppComponent
    ]
})
export class AppModule {

}