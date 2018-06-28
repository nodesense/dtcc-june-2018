import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, FormBuilder} from '@angular/forms';

import "rxjs/Rx"; // FIXME: import a lot of operators, but import only on need basis
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';


@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  searchControl: FormControl;
  form: FormGroup;

  searchText: string;

  products$: Observable<Product[]>;

  constructor(private builder: FormBuilder, 
              private productService: ProductService) { 

    this.searchControl = new FormControl("")

    this.form = builder.group({
      "searchBox": this.searchControl
    })

  }



  ngOnInit() {
    this.searchControl.valueChanges
        .map ( text => text.trim())
        .filter(text => !!text)
        .filter (text => text.length >= 2)
        .debounceTime(400)
        .subscribe ( text => {
          this.searchText = text;
          console.log(`***${text}***`)
          this.products$ = this.productService.searchProducts(text)
        })
  }

}
