import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MediaComponent } from './media/media.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ShippingComponent } from './shipping/shipping.component';
import { AdminComponent } from './admin/admin.component';
import { ProductInfoComponent } from './product-info/product-info.component';

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
	path: 'checkout',
	component: CheckoutComponent
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
{
	path: 'admin',
	component: AdminComponent
},
{
	path: 'products/:id',
	component: ProductInfoComponent
},
{
	path: '**',
	redirectTo: 'home'
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
