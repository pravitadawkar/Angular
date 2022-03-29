import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ProductsComponent}from '../products/products.component';
import{AddsuppliersComponent}from '../addsuppliers/addsuppliers.component'


const routes: Routes = [
  {path:'addsuppliers',component:AddsuppliersComponent},
  {path:'products',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersDetailsRoutingModule { }
