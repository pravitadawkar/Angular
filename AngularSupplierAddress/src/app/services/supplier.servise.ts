import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient,HttpParams} from "@angular/common/http";
import{Models} from "../classes/models"

@Injectable()
export class supplierservice{
    constructor(private httpclient:HttpClient){}

    getAllSupplier():Observable<Models[]> {
        return this.httpclient.get<Models[]>("https://localhost:44338/api/Supplier/GetSuppliers");
    }
    
    postSupplier( model:Models):Observable<Models>{
        return this.httpclient.post<Models>("https://localhost:44338/api/Supplier/AddSupplier",model);
    }
    deleteSupplier(supplierId:number):Observable<Models>{
        return this.httpclient.post<Models>("https://localhost:44338/api/Supplier/DeleteSupplier?SupplierId="+supplierId,'')
    }

}