import { Component, OnInit } from '@angular/core';
import {usersService}  from '../sevices/usersApi.service';
//import{Comments} from '../classes/coments';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listData!: any[];
 
  constructor(private user:usersService) { 
  }
 getdata(){
  this.user.getData().subscribe(data=>{
    console.warn(data);
    this.listData=data
  })
}
databyid!:any[];
getdatabiid(id:any): void{
  this.user.getDataById(id).subscribe(item=>{
    console.warn(item);
    this.databyid=item
  })
}
   ngOnInit(): void {
     
   }
 }
  

