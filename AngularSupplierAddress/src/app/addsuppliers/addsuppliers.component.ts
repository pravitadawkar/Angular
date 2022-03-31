import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup,FormControlName} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-addsuppliers',
  templateUrl: './addsuppliers.component.html',
  styleUrls: ['./addsuppliers.component.css']
})
export class AddsuppliersComponent implements OnInit {
  suppliesaddForm!:FormGroup
  //supplieraddress!:FormGroup
  constructor(private fb:FormBuilder) {
    this.suppliesaddForm=this.fb.group({
      supplierId:['',Validators.required],
      supplierName:['',Validators.required],
      //supplieraddress:this.fb.group({
        addressone:['',Validators.required],
        addresstwo:['',Validators.required],
        city:['',Validators.required],
        state:['',Validators.required],
        country:['',Validators.required]
      })
    //})
   }
  
  ngOnInit(): void {
  }
  onSubmit(){
     console.warn(this.suppliesaddForm.value)
  }
  get supplierId(){
    return this.suppliesaddForm.get('supplierId')
  }
  get supplierName(){
    return this.suppliesaddForm.get('supplierName')
  }
  get addressone(){
    return this.suppliesaddForm.get('addressone')
  }
  get addresstwo(){
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
