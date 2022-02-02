import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../user.service";



@Component({
  selector: 'pm-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  errorMessage?: string;
  isSuccessful = false;

  constructor(private formBuilder: FormBuilder, 
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:[''],
      email:[''],
      password:['']
    })
  }

  signup(){
    this.userService.saveCustomer(this.signupForm.value).subscribe(
      data => {
        console.log(data);
        this.signupForm.reset();
        this.isSuccessful = true;
        return true;
      },
      error => {
      this.errorMessage = error.error;
      this.signupForm.reset();
        
      }
    );
  }

}
