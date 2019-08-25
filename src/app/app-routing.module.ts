import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfiledetailsComponent } from './User/profiledetails/profiledetails.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { UpdateProfileComponent } from './User/update-profile/update-profile.component'; 
const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfiledetailsComponent },
  { path: 'userList', component: UserDetailsComponent },
  { path: 'updateProfile', component: UpdateProfileComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
