import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import{AboutUsComponent}from './about-us/about-us.component';
import{ContactComponent}from './contact/contact.component';
import{SuppliersDetailsComponent}from './suppliers-details/suppliers-details.component'
import { SupplierComponent } from './supplier/supplier.component';
import { AddsuppliersComponent } from './addsuppliers/addsuppliers.component';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import{UpdatesupplierComponent} from './updatesupplier/updatesupplier.component'

const routes: Routes = [
  //{path:'**',redirectTo:'supplierdetail'},
  {path:'home',component:HomeComponent},
  {path:'supplierdetail',component:SuppliersDetailsComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'contact',component:ContactComponent},
  {path:'supplier/:id',component:SupplierComponent},
  {path:'supplierdetail/addsupplier',component:AddsuppliersComponent},
  {path:'updatesupplier/:id',component:UpdatesupplierComponent},
  {path:'supplierdetail/products',component:ProductsComponent},
  {path:'supplierdetail/products/addproduct',component:AddproductComponent}
  //{path:'supplierdetail',component:SuppliersDetailsComponent,loadChildren:()=>import('./suppliers-details/suppliers-details.module').then(mod=>mod.SuppliersDetailsModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
