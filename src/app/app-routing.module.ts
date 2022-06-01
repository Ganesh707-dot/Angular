import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RolesComponent } from './roles/roles.component';
import { SigninComponent } from './signin/signin.component';

import { UserComponent } from './user/user.component';
// import { AuthGuard } from './login/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signin',component:SigninComponent},
  {path:'user',component:UserComponent, children:[
    {path:'',component:HeaderComponent},]},
  {path:'roles',component:RolesComponent,children:[
    {path:'',component:HeaderComponent},
    
   
  ]},
  {path:'home',component:HomeComponent,children:[
    {path:'',component:HeaderComponent}
  ]},


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
