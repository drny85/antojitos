import { environment } from './../environments/environment';
import { AppRoutesModule } from './routing/app-routes/app-routes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyordersComponent } from './components/myorders/myorders.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    LoginComponent,
    ProductsComponent,
    AdminProductsComponent,
    OrdersComponent,
    MyordersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'antojitos-chef'),
    AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
