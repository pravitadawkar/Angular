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
import { AddproductComponent } from './addproduct/addproduct.component';
import{HttpClientModule} from '@angular/common/http';
import{supplierservice} from './services/supplier.servise';
import{Models} from './classes/models';
import { RouterModule } from '@angular/router';
import { UpdatesupplierComponent } from './updatesupplier/updatesupplier.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import{AuthService} from './services/auth-service.service'

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
    AddproductComponent,
    UpdatesupplierComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [supplierservice,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
