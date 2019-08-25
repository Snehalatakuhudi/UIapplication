import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DatePipe} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { RegisterComponent } from './user/register/register.component';

import { UpdateProfileComponent } from './User/update-profile/update-profile.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { ProfiledetailsComponent } from './User/profiledetails/profiledetails.component';
 
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ProfiledetailsComponent,
    UpdateProfileComponent,
    UserDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

