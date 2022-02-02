import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';
import { UserService } from 'src/app/user/user.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'pm-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

  public orders: any;
  private _listFilter: string = '';
  public filteredOrders: any = [];
  private sub: any;
  errorMessage?: string;

  constructor(private orderService: OrderService, private userService: UserService) {
   }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredOrders = this.performFilter(value);
  }

  performFilter(filterBy: string): any[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.orders.filter((order: any) =>
    order.customerName.toLocaleLowerCase().includes(filterBy));
  }

  getOrdersSpring(){
    this.sub = this.orderService.getAllOrders().subscribe(
      data => {
        this.orders = data;
        this.filteredOrders = data;
      },
      error =>{
        console.log(error.error); 
      this.errorMessage = error.error;
      
      },
      () => console.log("Orders loaded")
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.getOrdersSpring();
  }

  
}
