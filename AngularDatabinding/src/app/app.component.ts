import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDatabinding';
  color="red";
  Display=true;
  Name="pravita dawkar"
  TodayDate=Date.now();
  str="hi pravita"
  money=100;
  Changecolor(){
    this.color="Green"
  }
  Togglecolor(){
    this.Display=!this.Display
  }
}
