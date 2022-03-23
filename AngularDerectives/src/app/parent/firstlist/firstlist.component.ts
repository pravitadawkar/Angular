import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-firstlist',
  templateUrl: './firstlist.component.html',
  styleUrls: ['./firstlist.component.css']
})
export class FirstlistComponent implements OnInit {
 @Input() setdata:any;
  constructor() { }

  ngOnInit(): void {
  }

}
