
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenComponent } from 'src/app/token_verification/token.component';
import { UserService } from '../user.service';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  errorMessage?: string;
  responseStatus!: number;
  private userDetails: any;


  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  login(){
   this.userService.loginCustomer(this.loginForm.value).subscribe(
    data => {
      console.log(data);

      this.userDetails = data;
       this.userService.setIsLoggedIn(true);
       this.userService.setUserRole(this.userDetails['role']);
       this.userService.setUserName(this.userDetails['name']);
       this.userService.setUserEmail(this.userDetails['email']);
       this.loginForm.reset();

       this.router.navigate(['/productsSpring'])
     
        return true;
     
    },
    error => {
      console.log(error.error); 
      this.errorMessage = error.error;
      if(error.error == "THIS ACCOUNT IT'S NOT ACTIVATED!"){
    //    tokenComponent.
      }

      this.loginForm.reset();
    }
  );
  }

}
