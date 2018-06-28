import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product';

import "rxjs/add/operator/map";
import { Brand } from '../models/brand';

@Injectable()
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<Product[]> {
    return this.httpClient
          .get<Product[]> (`${environment.apiEndPoint}/api/products`)
          .map ( products => {
             return products.map (product => {
               let newProduct = new Product();
               Object.assign(newProduct, product)
               return newProduct;
             })
          })
  }


  // GET /api/products
  searchProducts(q: string): Observable<Product[]> {
    return this.httpClient
               .get<Product[]>(`${environment.apiEndPoint}/api/products?q=${q}`);
  }

  // GET /api/products/100
  getProduct(id: any): Observable<Product> {
    return this.httpClient
          .get<Product>(`${environment.apiEndPoint}/api/products/${id}`);
  }

  // DELETE /api/products/100
  deleteProduct(id: any): Observable<any> {
    return this.httpClient
          .delete<any>(`${environment.apiEndPoint}/api/products/${id}`);
  }

  // Cache
  // Option 1. In memory JS [on refresh, removed] 
  // Option 2: browser storage: sessionStorage, per tab based, works on refresh
               // closing tab, remove the sessionStorage
  // Option 3: browser storage: localStorage: persistent,
               // remains active on closing browser, shutdown system
  storage: Storage = window.localStorage;

  // GET /api/brands
  getBrands(): Observable<Brand[]> {
    console.log("Serving from server");
    return this.httpClient
                .get<Brand[]>(`${environment.apiEndPoint}/api/brands`)
                .map ( brands => {
                    return brands;
                })
  }

  // update existing product
  // PUT /api/products/12345
  // {{product json data}}
  // response
  // updated product data 

  // to create new  product
  // POST /api/products
  // {{product json data without id}}
  // response
  // updated product data with id 
  saveProduct(product: Product):Observable<Product> {
    if (product.id) { // update
      return this.httpClient
            .put<Product>(`${environment.apiEndPoint}/api/products/${product.id}`,
                          product);
    } else { //create
      return this.httpClient
      .post<Product>(`${environment.apiEndPoint}/api/products`,
                    product);
    }
  }

}
