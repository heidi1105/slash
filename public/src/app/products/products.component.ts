import { Component, OnInit } from '@angular/core';
import { SlashService } from '../slash.service';
import {ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery/dist/jquery.min.js';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
	allProducts: object[] = [];
	currentUser:string;
  constructor(private _slashService: SlashService, private _router: Router,
	private _route: ActivatedRoute) {}

  ngOnInit() {
		this.getProducts();
		this.getCurrentUser();
	}
	getProducts(){
		console.log("all the products in the world");
		this._slashService.getProducts()
		.then((products)=>{
			this.allProducts = products;
		})
		.catch((err)=>{
			console.log(err)
		})
	}
	toCart(idx){
		console.log("add to cart")
		this._slashService.toCart(this.allProducts[idx])
		.then(()=>{
			this.getProducts();
		})
		.catch((err)=>{
			console.log(err);
		})
	}
	getCurrentUser() {
		console.log('getCurrentUser()');
		this._slashService.getCurrentUser()
		.then((data)=> {
			this.currentUser = data._id
			console.log("currentuser",data._id)
		})
	}
	onShow(pID) {
    console.log('onShow()', pID);
    this._router.navigate(['product   ', pID])
  }
}
