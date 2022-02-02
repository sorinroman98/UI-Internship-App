import { CommonModule } from '@angular/common';
import { Injectable, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminGuard } from '../admin.guard';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared-module.model';
import { LoggedInGuardGuard } from '../user/logged-in-guard.guard';
import { AddProductSpringComponent } from './add-product/add-product-spring.component';
import { EditProductComponent } from './product-detail/edit-product/edit-product.component';
import { ProductSpringDetailsComponent } from './product-detail/product-spring-details.component';
import { ProductSpringComponent } from './product-list/product-spring.component';

@NgModule({
  declarations: [
    ProductSpringComponent,
    ProductSpringDetailsComponent,
    EditProductComponent,
    AddProductSpringComponent
      ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,   
    AppRoutingModule ,
    RouterModule.forChild([ 
        {path: 'productsSpring', component: ProductSpringComponent,canActivate: [LoggedInGuardGuard]},
        {path: 'productsSpring/addProduct', component: AddProductSpringComponent, canActivate: [LoggedInGuardGuard,AdminGuard]},
        {path: 'productsSpring/:id', component: ProductSpringDetailsComponent, canActivate: [LoggedInGuardGuard]},     
        {path: 'productsSpring/editProduct/:uuid/:id', component: EditProductComponent, canActivate: [LoggedInGuardGuard,AdminGuard]},
])
],
})

export class ProductModule {


 }