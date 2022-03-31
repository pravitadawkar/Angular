import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  productaddForm!:FormGroup
  constructor(private fb:FormBuilder) {
    this.productaddForm=this.fb.group({
      supplierId:[''],
      productname:['',Validators.required],
        productid:['',Validators.required],
        unitprice:['',Validators.required]
      })
   }

  ngOnInit(): void {
  }
  onSubmitPro(){
    console.warn(this.productaddForm.value)
 }
 get productname(){
  return this.productaddForm.get('productname')
}
get productid(){
  return this.productaddForm.get('productid')
}
get unitprice(){
  return this.productaddForm.get('unitprice')
}

}
