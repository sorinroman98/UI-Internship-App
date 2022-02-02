import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './list-order/order-list.component';
import { PayOrderComponent } from './pay-order/pay-order.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoggedInGuardGuard } from '../user/logged-in-guard.guard';
import { AdminGuard } from '../admin.guard';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { SharedModule } from '../shared/shared-module.model';



@NgModule({
  declarations: [
    OrderListComponent,
    PayOrderComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'payOrder/:id/:price', component: PayOrderComponent, canActivate: [LoggedInGuardGuard]},
      {path: 'orders', component: OrderListComponent, canActivate: [LoggedInGuardGuard,AdminGuard]},
      {path: 'orders/detail/:id', component: OrderDetailComponent, canActivate: [LoggedInGuardGuard,AdminGuard]}
    ])
  ]
})
export class OrderModule { }
