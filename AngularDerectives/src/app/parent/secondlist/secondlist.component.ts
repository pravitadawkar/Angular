import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-secondlist',
  templateUrl: './secondlist.component.html',
  styleUrls: ['./secondlist.component.css']
})
export class SecondlistComponent implements OnInit {
 @Input()setdata:any 
  constructor() { }

  ngOnInit(): void {
  }

}
