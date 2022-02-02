import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { ProductService } from '../product.service';


@Component({
  selector: 'pm-product-spring-details',
  templateUrl: './product-spring-details.component.html',
  styleUrls: ['./product-spring-details.component.css']
})
export class ProductSpringDetailsComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: any | undefined = [];
  productDisplay: any;
  onStock?: boolean;
  isAdmin?: boolean;
  constructor(private route: ActivatedRoute,
              private router: Router, private productService: ProductService,
             private userService: UserService) {  
                if(userService.getUserRole() == 'admin'){
                this.isAdmin = true;
              }else{
                this.isAdmin = false;
              }}

  addToTheCart() {
  
    var order = {
        "uuidProduct":this.route.snapshot.paramMap.get('id'),
        "email": this.userService.getUserEmail(),
        "name" : this.userService.getUserName()
    }
      console.log("trying");
    this.productService.addProductToShoppingCart(order).toPromise()
    .then(
      res => { 
        this.router.navigate(['/productsSpring']);
      },
      msg => { 
        console.log(msg);
        
      }
    );
  }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductByIdSpring(id).subscribe(
      data => {
        this.product = data;
        if(this.product.quantity > 0)
        this.onStock = true;
        else
        this.onStock = false;
      },
      err => console.log(err),
      () => console.log("Product loaded")
    );                                                                                
   
    this.pageTitle += `: ${id}`;

  }

  onBack(): void {
    this.router.navigate(['/productsSpring']);
  }

}
