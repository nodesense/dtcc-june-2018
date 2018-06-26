import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeComponent } from './components/like/like.component';
import { AddressComponent } from './components/address/address.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      LikeComponent, 
      AddressComponent
    
      //PrivateComponent

    ],

  // any component, pipe, directive that can be reused in
  // other module, must be exported
  exports: [
    LikeComponent,
    AddressComponent
  ],

  providers: [
    //DataService
  ]
})
export class SharedModule { }
