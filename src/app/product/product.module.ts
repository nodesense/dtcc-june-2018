import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductWidgetComponent } from './components/product-widget/product-widget.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductHomeComponent, ProductListComponent, ProductSearchComponent, ProductEditComponent, ProductWidgetComponent]
})
export class ProductModule { }
