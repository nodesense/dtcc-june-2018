import { Brand } from './../../models/brand';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import {ActivatedRoute,  // read url data like :id
        Router // navigate one page to another page
       } from '@angular/router'
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

import {NgForm, NgModel} from "@angular/forms";

// service/model.ts
export interface IEditable {
  isSaved(): boolean
}

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, IEditable {

  //Get DOM reference
  @ViewChild("productNameInput")
  productNameInput: ElementRef;

  @ViewChild("productForm")
  productForm: NgForm;

  product: Product = new Product(); //for create page

  brands$:Observable<Brand[]>;

  message: any;
  errors: any;

  constructor(private route: ActivatedRoute,
               private router: Router, 
              private productService: ProductService) { }

  ngOnInit() {

    this.productForm.valueChanges
        .subscribe ( values => {
          console.log("VAlues ", values)
        })

    this.productNameInput.nativeElement.focus();

    const id = this.route.snapshot.params['id']; 
    console.log("ID ", id)

    if (id) {
      this.productService.getProduct(id)
          .subscribe( product => {
            this.product = product;
          }, error => {
            console.error("ERROR ", error)

            if ("status" in error && error.status >=400 && error.status <500) {
              this.message = "Client Error " + error.status + " " + error.statusText
            }

            if ("status" in error && error.status == 0 ) {
              this.message = "Server not reachable"
            }
            

          })
    }

    this.brands$ = this.productService.getBrands()
  }

  saveProduct() {

    // if form is invalid, don't submit

    if (this.productForm.invalid) {
      alert("Invalid Form");
      return;
    }


     this.productService.saveProduct(this.product)
                        .subscribe ( savedProduct => {
                          console.log("Product saved ", savedProduct)

                          this.productForm.reset(savedProduct)

                          // Option 1: go to another page
                          //this.router.navigateByUrl("/products/list")

                          

                          // Option 2: continue on same page
                          this.product = savedProduct


                        })
  }



  isSaved() {
    //FIXME: add your logic to decide if form is saved/or busy in other task
    return this.productForm.pristine
  }

}
