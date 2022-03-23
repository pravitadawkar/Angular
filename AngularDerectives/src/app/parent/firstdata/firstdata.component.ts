import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstdata',
  templateUrl: './firstdata.component.html',
  styleUrls: ['./firstdata.component.css']
})
export class FirstdataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public data=new Array();
 onclick(Input:any){
   this.data.push(Input.value);
   Input.value="";
 }
}
