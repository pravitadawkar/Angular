import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from '../parent/master/master.component';
import { FirstdataComponent } from '../parent/firstdata/firstdata.component';
import { SeconddataComponent } from '../parent/seconddata/seconddata.component';
import { FirstlistComponent } from '../parent/firstlist/firstlist.component';
import { SecondlistComponent } from '../parent/secondlist/secondlist.component';



@NgModule({
  declarations: [
    MasterComponent,
    FirstdataComponent,
    SeconddataComponent,
    FirstlistComponent,
    SecondlistComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }
