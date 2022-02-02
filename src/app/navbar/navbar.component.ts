import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'pm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  role?: any;

  ngOnInit(): void {
  }
  
  constructor(private userService: UserService,
    private router: Router){
  }

  get userRole(){
    return this.userService.getUserRole();
  }

  get isAdmin(){
    if(this.userRole == "admin"){
      this.role = "Admin";
      return true;
    }else{
      this.role = "User";
      return false;
    }
  }

  get isAuthenticated(){
    return this.userService.getIsLoggedIn();
  }
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  pageTitle: string = 'Garage Sale';
  onLogout(){
    this.userService.setIsLoggedIn(false);
    this.userService.setUserRole("guest");
    this.router.navigate(['/welcome']);
    
  }

}
