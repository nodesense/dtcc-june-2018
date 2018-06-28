import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';

//import { ProductModule } from './product/product.module';

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

// NG 4.3 onwards
import {HttpClientModule} from '@angular/common/http';

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
 
    // lazy loading product
    {
        path: 'products',
        loadChildren: 'app/product/product.module#ProductModule'
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
        HttpClientModule,

        SharedModule,

        RouterModule.forRoot(routes),
      //  ProductModule,
        CartModule,
        AuthModule,


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