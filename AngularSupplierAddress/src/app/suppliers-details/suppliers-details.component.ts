import { Component, OnInit } from '@angular/core';
import { Models } from '../classes/models';
import { supplierservice } from '../services/supplier.servise';

@Component({
  selector: 'app-suppliers-details',
  templateUrl: './suppliers-details.component.html',
  styleUrls: ['./suppliers-details.component.css']
})
export class SuppliersDetailsComponent implements OnInit {

  constructor( private _supplierservice:supplierservice) { }
 listAllSupplier!:Models[];
  ngOnInit(): void {
    this._supplierservice.getAllSupplier().subscribe
    ( data =>
      {
        this.listAllSupplier=data
      });
  }
  get_allsuppliers(){
  this._supplierservice.getAllSupplier().subscribe
  ( data =>
    {
      this.listAllSupplier=data
    });

}
delete_supplier(id:number){
  this._supplierservice.deleteSupplier(id).subscribe
  (data =>{
    this.get_allsuppliers();
    alert('delete successfully');
  })
}

}
