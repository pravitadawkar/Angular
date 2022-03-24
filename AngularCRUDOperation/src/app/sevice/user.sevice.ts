//import { Injectable } from "@angular/core";
//import { HttpClient } from "@angular/common/http";
//import { Observable } from "rxjs";
//import { stringify } from "querystring";


export class usersService{
    constructor(){}
   public users=[

        {"Id":1,"Name":'pravita',"Age":20},
        {"Id":2,"Name":'rutuja',"Age":21},
        {"Id":3,"Name":'harshada',"Age":22},
        {"Id":4,"Name":'radha',"Age":23},
        {"Id":5,"Name":'rita',"Age":24}
        

    ]
    public getusers(){
        return this.users
    }
    public Addusers(user:any){
        return this.users.push({"Id":6,"Name":'shruti',"Age":23})
    }
    public Deleteusers(Id:any){
        debugger
        this.users=this.users.filter(u=>u.Id!=Id);
        return true;
    }
}