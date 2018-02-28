import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class SlashService {

  constructor(private _http:Http) { }

		// AppComponent
	logout(){
		console.log('logout service');
		return this._http.get('/api/logout').map(res=>res.json()).toPromise();
	}

		// Login
	register(user){
		return this._http.post('/api/register', user).map(res=>res.json()).toPromise();
	}
	login(user){
		console.log("in service's login method", user);
		return this._http.post('/api/login', user).map(res=>res.json()).toPromise();
	}

	createBrand(newBrand){
		console.log("in service")
		return this._http.post('/api/createBrand', newBrand).map(Response=>Response.json()).toPromise()
	}

	// createProduct(newProduct){
	// 	console.log("in service/newProduct")
	// 	return this._http.post('/createProduct', newProduct).map(Response=>Response.json()).toPromise()
	// }



	getBrands(){
		console.log("service/getbrands")
		return this._http.get('/api/getBrands').map(Response=>Response.json()).toPromise()
	}


	createProduct(newProduct){
		console.log("in service/newProduct")
		return this._http.post('/api/createProduct', newProduct).map(Response=>Response.json()).toPromise()
	}

	getProducts(){
		console.log("in service/getProducts")
		return this._http.get('/api/getProducts').map(Response=>Response.json()).toPromise();
	}

	getOneProduct(id){
		console.log("in service/getOneProduct")
		return this._http.get('/api/getProduct/'+id).map(Response=>Response.json()).toPromise();
	}

	toCart(product){
		console.log("added to cart");
		return this._http.post('/api/addItem/',product).map(Response=>Response.json()).toPromise();
	}

	getCurrentUser(){
		console.log("current user")
		return this._http.get('/api/currentuser').map(Response=>Response.json()).toPromise();
	}

	addItem(newItem){
		console.log("in service/newItem")
		return this._http.post('/api/addItem', newItem).map(Response=>Response.json()).toPromise()
	}

	updateItem(item){
		console.log("in service/updated item")
		return this._http.post('/api/updateItem', item).map(res=>res.json()).toPromise();
	}

	getCart(){
		console.log("service/current cart")
		return this._http.get('/api/getCart').map(Response=>Response.json()).toPromise();

	}

	getCartDetails(){
		console.log("service/cart details")
		return this._http.get('/api/getCartDetails').map(Response=>Response.json()).toPromise();
	}


}
