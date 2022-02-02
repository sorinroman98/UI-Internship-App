import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import { IProduct } from "./product";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'api/products/products.json';

 

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
 
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  removeProductFromOrder(uUidProduct: String, uUidOrder: String, name: String){
    return this.http.get('/server/order/removeProductFromOrder?uuidProduct='+uUidProduct+'&uuidOrder='+uUidOrder+'&name='+name);
  }

  getShoppingCardOrderId(name: String, email: String){
    return this.http.get('/server/order/getShoppingCartOrderId?name='+name+'&email='+email);
  }


  getProductsShoppingCart(name: String, email: String){
    return this.http.get('/server/order/getShoppingCartProducts?name='+name+'&email='+email);
  }

  addProductToShoppingCart(order: any){
    return this.http.post('server/order/addProductToOrder',order, httpOptions);

  }

  getProductsSpring(){
    return this.http.get('/server/products/getProductsDb');
  }

  getProductByIdSpring(uuid: string){
    return this.http.get('/server/products/getProductDb?uuid='+uuid);
  }

  createProductSpring(product: any){
    let body = JSON.stringify(product);
    return this.http.post('server/products/addProductDb',body, httpOptions);
  }
  
   createOrderSpring(order: any){
    return this.http.post('server/order/processOrderDBA',order, httpOptions);
  }

   payOrderSpring(order: any){
    return this.http.post('server/order/payOrderDBA',order, httpOptions);
  }

  editProduct(product: any){
    return this.http.post('server/products/editProduct',product, httpOptions);
  }

  saveCustomer(customer: any){
    return this.http.post('server/customers/saveCustomer',customer,httpOptions);
  }

  loginCustomer(customer: any){ 
    return this.http.post('server/customers/verifyCustomer', customer,{responseType:'text', observe: 'response'});
  }
}
