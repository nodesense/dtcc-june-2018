import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[] = []; 

  constructor(private productService: ProductService) {

   }

  ngOnInit() {
    this.productService.getProducts()
        .subscribe( products => {
            this.products = products;
            console.log("Got products ", this.products);
        })
  }

}
