import { Component, OnInit } from '@angular/core';
import{ supplierservice} from '../services/supplier.servise';
import{Router,ActivatedRoute}from '@angular/router';
import{FormBuilder, FormGroup,FormControlName, FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-updatesupplier',
  templateUrl: './updatesupplier.component.html',
  styleUrls: ['./updatesupplier.component.css']
})
export class UpdatesupplierComponent implements OnInit {
  suppliesaddForm=new FormGroup({
       supplierId:new FormControl(''),
     supplierName:new FormControl(''),
     //supplieraddress:this.fb.group({
      addressId:new FormControl(''),
       address1:new FormControl(''),
       address2:new FormControl(''),
       city:new FormControl(''),
       state:new FormControl(''),
       country:new FormControl('')
     })
  
constructor(private router:ActivatedRoute,private _supplierservice:supplierservice,private route:Router){
  
}
ngOnInit(): void {
 let Id=this.router.snapshot.params['id'];
  this._supplierservice.getSupplierById(this.router.snapshot.params['id']).
  subscribe((data)=>{
    this.suppliesaddForm=new FormGroup({
      supplierId:new FormControl(data['supplierId']),
      supplierName:new FormControl(data['supplierName']),
      addressId:new FormControl(data['addressId']),
      address1:new FormControl(data['address1']),
       address2:new FormControl(data['address2']),
       city:new FormControl(data['city']),
       state:new FormControl(data['state']),
       country:new FormControl(data['country'])
    })
  })
}
onSubmit(){
  console.warn(this.suppliesaddForm.value);
  debugger
  this._supplierservice.updateSupplier(this.suppliesaddForm.value).
  subscribe(data =>{
    alert("Supplier Added Successfully.")
    this.route.navigate(['/supplierdetail'])
    console.warn(data);
  })
}

}
