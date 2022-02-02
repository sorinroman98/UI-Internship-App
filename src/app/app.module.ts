import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared-module.model';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './products/product.module';
import { ShoppingcartModule } from './shoppingcart/shoppingcart.module';
import { NavbarComponent } from './navbar/navbar.component';
import { TokenComponent } from './token_verification/token.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    TokenComponent,
      ],
  imports: [
    BrowserModule,
    SharedModule,
    ProductModule,
    OrderModule,
    UserModule,
    ReactiveFormsModule,
    HttpClientModule,
    ShoppingcartModule,
    RouterModule.forRoot([
      { path: 'welcome/:isLoggedIn', component: WelcomeComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'verify',component:TokenComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },

    ]),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
