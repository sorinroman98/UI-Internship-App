import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  getAllOrders(){
    return this.http.get('server/order/getOrdersDba');
  }

  getOrderById(uuid: String){

    return this.http.get('server/order/getOrderById?uuid='+uuid);
  }

  deleteOrderByUuid(uuid: String){

    return this.http.get('server/order/deleteOrderByUuid?uuid='+uuid);
  }
}
