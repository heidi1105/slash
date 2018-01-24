import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AdminService {

  constructor(private _http:Http) { }

	createBrand(newBrand){
		console.log("in service")
		return this._http.post('/createBrand', newBrand).map(Response=>Response.json()).toPromise()
	}

	getBrands(){
		console.log("service/getbrands")
		return this._http.get('/getBrands').map(Response=>Response.json()).toPromise()
	}


	createCategory(newCategory){
		console.log("in service")
		return this._http.post('/createCategory', newCategory).map(Response=>Response.json()).toPromise()
	}

	getCategories(){
		console.log("service/getCategories")
		return this._http.get('/getCategories').map(Response=>Response.json()).toPromise()
	}



	createProduct(newProduct){
		console.log("in service/newProduct")
		return this._http.post('/createProduct', newProduct).map(Response=>Response.json()).toPromise()
	}

	uploadPicUrl(newPicUrl){
		console.log("in service/newProduct")
		return this._http.post('/uploadPicUrl', newPicUrl).map(Response=>Response.json()).toPromise()
	}


}
