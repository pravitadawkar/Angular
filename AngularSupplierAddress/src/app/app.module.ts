import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { SuppliersDetailsComponent } from './suppliers-details/suppliers-details.component';
import { SupplierComponent } from './supplier/supplier.component';
import{ProductsComponent}from './products/products.component';
import{AddsuppliersComponent}from './addsuppliers/addsuppliers.component';
import{ReactiveFormsModule} from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    SuppliersDetailsComponent,
    SupplierComponent,
    ProductsComponent,
    AddsuppliersComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
