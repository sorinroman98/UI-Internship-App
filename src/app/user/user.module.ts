import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoginRegisterGuard } from './login-register.guard';



@NgModule({
  declarations: [  
    LoginComponent,
    SignupComponent,],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: 'login', component: LoginComponent, canActivate:[LoginRegisterGuard]},
      {path: 'signup', component: SignupComponent, canActivate:[LoginRegisterGuard]}
    ])
  ]
})
export class UserModule { }
