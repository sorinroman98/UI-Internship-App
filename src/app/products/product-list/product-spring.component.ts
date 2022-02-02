import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { ProductService } from '../product.service';


@Component({
  selector: 'pm-product-spring',
  templateUrl: './product-spring.component.html',
  styleUrls: ['./product-spring.component.css']
})
export class ProductSpringComponent implements OnInit,OnDestroy {
  public productsSpring: any;
  private _listFilter: string = '';
  private sub: any;
  pageTitle: string;
  filteredProducts: any = [];
  isAdmin!: boolean;

  constructor(private productService: ProductService, private userService: UserService) {
    this.pageTitle = "Product List";
    if(userService.getUserRole() == 'admin'){
      this.isAdmin = true;
    }else{
      this.isAdmin = false;
    }
   }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredProducts = this.performFilter(value);
  }

  performFilter(filterBy: string): any[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.productsSpring.filter((product: any) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  getProductsSpring(){
    this.sub = this.productService.getProductsSpring().subscribe(
      data => {
        this.productsSpring = data;
        this.filteredProducts = data;
      },
      err => console.log(err),
      () => console.log("Product loaded")
    );
  }

  ngOnInit(): void {
    this.getProductsSpring();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

 

}
