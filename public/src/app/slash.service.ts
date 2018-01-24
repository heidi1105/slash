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
		return this._http.post('/createBrand', newBrand).map(Response=>Response.json()).toPromise()
	}

	createProduct(newProduct){
		console.log("in service/newProduct")
		return this._http.post('/createProduct', newProduct).map(Response=>Response.json()).toPromise()
	}



	getBrands(){
		console.log("service/getbrands")
		return this._http.get('/getBrands').map(Response=>Response.json()).toPromise()
	}



}
