import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, observable } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-add-product-spring',
  templateUrl: './add-product-spring.component.html',
  styleUrls: ['./add-product-spring.component.css']
})
export class AddProductSpringComponent implements OnInit {
  productForm!: FormGroup;
  errorMessage?: string;

  constructor(private productService: ProductService) { }

  submitProduct(){
    if(this.productForm.valid){
      this.productService.createProductSpring(this.productForm.value).subscribe(
        data => {
          this.productForm.reset();
          return true;
        },
        error => {
          this.errorMessage = error.error;
          return Observable.throw(error);
        }
      )
    }else{
      this.errorMessage = "Some fields are empty!";
    }
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      category: new FormControl('',Validators.required),
      productName: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required),
      issues: new FormControl('',Validators.required),
      quantity: new FormControl('',Validators.required)
    });
  }

}
