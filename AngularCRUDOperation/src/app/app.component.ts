import { Component } from '@angular/core';
import { usersService } from './sevice/user.sevice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCRUDOperation';
  constructor(private user:usersService) { 
  }
  listuser!: any[];
  Getuser(){
    this.listuser=this.user.getusers();
  }
  Adduser(user:any){
    this.user.Addusers(user);
  }
  Deleteuser(Id:any){
    this.user.Deleteusers(Id);
    this.listuser=this.user.getusers();
  }
  ngOnInit(): void {
     
  }
}
