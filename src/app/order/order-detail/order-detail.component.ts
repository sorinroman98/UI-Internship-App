import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/products/product';
import { ProductService } from 'src/app/products/product.service';
import { UserService } from 'src/app/user/user.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'pm-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

 
  pageTitle: string = 'Product Detail';
  order: any | undefined = [];
  productDisplay: any;
  onStock?: boolean;
  isAdmin?: boolean;
  orderPayed?: String;
  products?: IProduct[];

  constructor(private route: ActivatedRoute,
              private router: Router, private orderService: OrderService,
              userService: UserService) {  
                if(userService.getUserRole() == 'admin'){
                this.isAdmin = true;
              }else{
                this.isAdmin = false;
              }}

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.orderService.getOrderById(id).subscribe(
      data => {
      
        this.order = data;
        this.products = this.order['productDtoList'];
        console.log(this.order['orderId']);
       
      },
      err => console.log(err),
      () => console.log("Product loaded")
    );                                                                                
   
    this.pageTitle += `: ${id}`;

  }

  onBack(): void {
    this.router.navigate(['/productsSpring']);
  }

  onDelete(): void{
    const uuid = String (this.route.snapshot.paramMap.get('id'));
   this.orderService.deleteOrderByUuid(uuid).subscribe(
    data => {
    
      this.router.navigate(['/productsSpring']);

     
    },
    err => console.log(err)
    );
  }

}

