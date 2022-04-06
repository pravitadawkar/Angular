import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient,HttpParams} from "@angular/common/http";


@Injectable()
export class AuthService{
    constructor(private httpclient:HttpClient){}
    registerForm(data:any):Observable<any> {
        return this.httpclient.post<any>("https://localhost:44338/api/Authenticate/register",data);
    }
    loginForm(data:any):Observable<any>{
        return this.httpclient.post<any>('https://localhost:44338/api/Authenticate/login',data);
    }
     getToken(){
         return localStorage.getItem('token');
     }
    
     
}