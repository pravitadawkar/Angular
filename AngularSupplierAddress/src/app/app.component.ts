import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularSupplierAddress';
  constructor(private router:Router){}
  logOut(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login')
  }
}
