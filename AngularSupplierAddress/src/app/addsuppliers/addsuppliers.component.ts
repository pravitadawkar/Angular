import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup,FormControlName} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Models } from '../classes/models';
import { supplierservice } from '../services/supplier.servise';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addsuppliers',
  templateUrl: './addsuppliers.component.html',
  styleUrls: ['./addsuppliers.component.css']
})
export class AddsuppliersComponent implements OnInit {
  
  suppliesaddForm!:FormGroup
  //supplieraddress!:FormGroup
  constructor(private fb:FormBuilder,private _supplierservice:supplierservice,private router:Router) {
    this.suppliesaddForm=this.fb.group({
     // supplierId:[''],
      supplierName:['',Validators.required],
      //supplieraddress:this.fb.group({
        address1:['',Validators.required],
        address2:['',Validators.required],
        city:['',Validators.required],
        state:['',Validators.required],
        country:['',Validators.required]
      })
    //})
   }
  
  ngOnInit(): void {
  }
  AddSupplier!:Models;
  onSubmit(){
     console.warn(this.suppliesaddForm.value);
     this._supplierservice.postSupplier(this.suppliesaddForm.value).subscribe
    ( data =>
      {
        alert("Supplier Added Successfully.")
        this.router.navigate(['/supplierdetail'])
      });
  }
  get supplierId(){
    return this.suppliesaddForm.get('supplierId')
  }
  get supplierName(){
    return this.suppliesaddForm.get('supplierName')
  }
  get address1(){
    return this.suppliesaddForm.get('addressone')
  }
  get address2(){
    return this.suppliesaddForm.get('addresstwo')
  }
  get city(){
    return this.suppliesaddForm.get('city')
  }
  get state(){
    return this.suppliesaddForm.get('state')
  }
  get country(){
    return this.suppliesaddForm.get('country')
  }
  
 

}
