import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component'
import {PostComponent} from  './post/post.component'
import {ProfileComponent} from  './profile/profile.component'
const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'post',component:PostComponent},
  {path:'profile',component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
