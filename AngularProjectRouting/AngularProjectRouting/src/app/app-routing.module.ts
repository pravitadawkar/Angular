import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  //{path:'',redirectTo:'/home',pathMatch:'prifix'}, // if we try to type any path it will redirect to home page not anywere
  {path:'',component:HomeComponent},//defoult path is home component
  {path:'home',component:HomeComponent},
  {path:'user',component:UsersComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
