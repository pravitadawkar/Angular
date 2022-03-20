import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class usersService{
    constructor(private http:HttpClient){
        
    }
   public getData():Observable<any>{
         let url="https://jsonplaceholder.typicode.com/comments";
         return this.http.get(url);
        
    }
    public getDataById(id:any):Observable<any>{
        return this.http.get('https://jsonplaceholder.typicode.com/comments?id='+id);
    }
}
