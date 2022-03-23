import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstdataComponent } from '../parent/firstdata/firstdata.component';
import { FirstlistComponent } from '../parent/firstlist/firstlist.component';
import { SeconddataComponent } from '../parent/seconddata/seconddata.component';
import { SecondlistComponent } from '../parent/secondlist/secondlist.component';

const routes: Routes = [
  {path:'firstdata',component:FirstdataComponent},
  {path:'firstlist',component:FirstlistComponent},
  {path:'seconddata',component:SeconddataComponent},
  {path:'secondlist',component:SecondlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
