import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../../product.service';

@Component({
  selector: 'pm-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id: any;
  uuid?: string;
  productName?: any;
  category?: any;
  price?: any;
  issues?: any;
  quantity?: any;
  product: any;

  productForm!: FormGroup;
  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  submitProduct(){
    if(this.productForm.valid){
      this.uuid = String(this.route.snapshot.paramMap.get('uuid'));
      this.id = Number(this.route.snapshot.paramMap.get('id'));

      var updatedProduct={
        "id": this.id,
        "uuid": this.uuid,
        "productName": this.productForm.get('productName')?.value,
        "category": this.productForm.get('category')?.value,
        "price": this.productForm.get('price')?.value,
        "issues": this.productForm.get('issues')?.value,
        "quantity": this.productForm.get('quantity')?.value
      }

      this.productService.editProduct(updatedProduct).subscribe(
        data => {
          this.productForm.reset();
          this.router.navigate(['/productsSpring'])

          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
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


this.productService.getProductByIdSpring(this.uuid = String(this.route.snapshot.paramMap.get('uuid'))).subscribe(
    (response) => {
         this.product = response;
         console.log(this.product['productName'])
         this.productForm.get('category')?.setValue(this.product['category']);
         this.productForm.get('productName')?.setValue(this.product['productName']);
         this.productForm.get('price')?.setValue(this.product['price']);
         this.productForm.get('issues')?.setValue(this.product['issues']);
         this.productForm.get('quantity')?.setValue(this.product['quantity']);
      }
  );

  
    
  }
}
