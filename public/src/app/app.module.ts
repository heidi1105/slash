import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SlashService } from './slash.service'
import { AdminService } from './admin.service'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { MediaComponent } from './media/media.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ShippingComponent } from './shipping/shipping.component';
import { AdminComponent } from './admin/admin.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    CartComponent,
    MediaComponent,
    ProductsComponent,
    HomeComponent,
    AboutusComponent,
    ShippingComponent,
    AdminComponent,
    ProductInfoComponent,
    CheckoutComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [SlashService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
