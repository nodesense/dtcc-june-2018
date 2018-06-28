import { CanEditGuard } from './guards/can-edit.guard';
import { ProductService } from './services/product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductWidgetComponent } from './components/product-widget/product-widget.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';


// product.routing.ts
import {RouterModule, Routes} from '@angular/router';
import { SaveAlertGuard } from './guards/save-alert.guard';
const routes:Routes = [
  {
    //FIXME: Lazy loading
    path: 'products',
    //path: '', // lazy loading
    component: ProductHomeComponent,

    // nested navigation
    children: [
      {
        path: 'list', // products/list
        component: ProductListComponent
      },
      {
        path: 'create',
        component: ProductEditComponent
      }, 
      {
        path: 'edit/:id',  // products/edit/12
        component: ProductEditComponent, 
        canActivate: [CanEditGuard],
        canDeactivate: [SaveAlertGuard]
      },
      {
        path: 'search',
        component: ProductSearchComponent
      }
    ]
  }
]


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forChild(routes)
  ],
  declarations: [
    ProductHomeComponent, 
    ProductListComponent, 
    ProductSearchComponent, 
    ProductEditComponent, 
    ProductWidgetComponent
  ],

  providers: [
    ProductService,

    CanEditGuard,
    SaveAlertGuard
  ]
})
export class ProductModule { }
