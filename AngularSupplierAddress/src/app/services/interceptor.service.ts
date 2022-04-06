import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private injector:Injector,private authservice:AuthService) { }
 
   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
   const token=this.authservice.getToken();
   alert(token);
   if(token){
     const request = req.clone({headers:req.headers.set('Authorization',`Bearer ${token}`)});
     return next.handle(request);
     
   }
   return next.handle(req);
  }
}
   
 // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   let authservice=this.injector.get(AuthService)
  //   let token=req.clone({
  //     setHeaders:{
  //       Authorization:'Bearer ${authsevice.gettoken()}'
  //     }
  //   })
  //   return next.handle(token)
  // }

  // let tokenized=req.clone({setHeaders:{
  //   Authorization:'Bearer ${token}'
  // }
  //  })
  // return next.handle(tokenized)
//}

// if(this.authservice.getToken()){
//    req=this.addToken(req,this.authservice.getToken())
// }
// return next.handle(req).pipe(catchError(error =>{
//   if(error instanceof HttpErrorResponce && error.status ==401){
//     return this.handle401Error(req,next);
//   }else{
//     return throwError(error);
//   }
// })
// )

// }
// private addToken(req:HttpRequest<any>,token:string){
//   return req.clone({
//     setHeaders:{
//       'Authorization':'Bearer ${token}'
//     }
//   })
// }
// private handle401Error(req:HttpRequest<any>,next:HttpHandler){

// }
// }