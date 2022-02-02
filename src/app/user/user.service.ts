import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserService implements OnInit{

  private isLoggedIn!: boolean; 
  private userRole: String = "guest";
  private userName: String = "default";
  private userEmail: String ="default";

  constructor( private http: HttpClient) {
    console.log(JSON.parse(localStorage.getItem('userRole')!))
  }
  ngOnInit(): void {

  }

  public getIsLoggedIn(){
 const a = JSON.parse(localStorage.getItem('isLoggedIn')!);
    if(a == "adevarat"){
      this.isLoggedIn = true;
    }else if(a == "fals"){
      this.isLoggedIn = false;
    }
    
    return this.isLoggedIn;
  }

  public setIsLoggedIn(state: boolean){
    if(state == true){
    localStorage.setItem('isLoggedIn', JSON.stringify("adevarat"));
    }else{
    localStorage.setItem('isLoggedIn', JSON.stringify("fals"));
  }

      this.isLoggedIn = state;
  }

  public getUserRole(){
    this.userRole = JSON.parse(localStorage.getItem('userRole')!);
       
      return this.userRole;
     }
   
     public setUserRole(userRole: String){
      localStorage.setItem('userRole', JSON.stringify(userRole));

         this.userRole = userRole;
     }

     public getUserName(){
      this.userName = JSON.parse(localStorage.getItem('userName')!);
         
        return this.userName;
       }
     
       public setUserName(userName: String){
        localStorage.setItem('userName', JSON.stringify(userName));
  
           this.userName = userName;
       }

       public getUserEmail(){
        this.userEmail = JSON.parse(localStorage.getItem('userEmail')!);
           
          return this.userEmail;
         }
       
         public setUserEmail(userEmail: String){
          localStorage.setItem('userEmail', JSON.stringify(userEmail));
    
             this.userEmail = userEmail;
         }



  saveCustomer(customer: any){
    return this.http.post('server/customers/saveCustomer',customer,httpOptions);
  }

  loginCustomer(customer: any){ 
    return this.http.post('server/customers/verifyCustomer', customer,httpOptions);
  }
}
