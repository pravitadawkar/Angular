import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seconddata',
  templateUrl: './seconddata.component.html',
  styleUrls: ['./seconddata.component.css']
})
export class SeconddataComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  public data=new Array();
  onclick(Input:any){
    this.data.push(Input.value);
    Input.value="";
  }
}
