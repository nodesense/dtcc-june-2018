import { Brand } from './../../models/brand';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,  // read url data like :id
        Router // navigate one page to another page
       } from '@angular/router'
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product(); //for create page
  brands$:Observable<Brand[]>;

  constructor(private route: ActivatedRoute,
               private router: Router, 
              private productService: ProductService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id']; 
    console.log("ID ", id)

    if (id) {
      this.productService.getProduct(id)
          .subscribe( product => {
            this.product = product;
          })
    }


    this.brands$ = this.productService.getBrands()

  }

}
