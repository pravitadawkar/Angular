import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersDetailsRoutingModule } from './suppliers-details-routing.module';
import{ProductsComponent}from '../products/products.component';
import{AddsuppliersComponent}from '../addsuppliers/addsuppliers.component'



@NgModule({
  declarations: [
    ProductsComponent,
    AddsuppliersComponent
  ],
  imports: [
    CommonModule,
    SuppliersDetailsRoutingModule,
    
  ]
})
export class SuppliersDetailsModule { }
