import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { MediaComponent } from './media/media.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ShippingComponent } from './shipping/shipping.component';



const routes: Routes = [
{
	path: '',
	component: HomeComponent
},
{
	path: 'login',
	component: SignupComponent
},
{
	path: 'cart',
	component: CartComponent
},
{
	path: 'media',
	component: MediaComponent
},
{
	path: 'products',
	component: ProductsComponent
},
{
	path: 'aboutus',
	component: AboutusComponent
},
{
	path: 'shipping',
	component: ShippingComponent
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
