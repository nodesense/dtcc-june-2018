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

// app.routing.ts
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component'
const routes:Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: '**', //not found
        component: NotFoundComponent
    }
]


@NgModule({
    // references to other modules
    imports: [
        BrowserModule,
        FormsModule,

        SharedModule,

        RouterModule.forRoot(routes)


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
        NotFoundComponent, 
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