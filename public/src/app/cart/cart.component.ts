import { Component, OnInit } from '@angular/core';
import { SlashService } from '../slash.service';
import {ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery/dist/jquery.min.js';
import { Product } from './../product'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	orders:object[];
	totalItem:number=0;
	totalPrice:number=0;
	product: Product = new Product();
	item:object={productId:"", quantity:0};

  constructor(private _slashService: SlashService, private _router: Router,
	private _route: ActivatedRoute) { }

  ngOnInit() {
  	this.getCart();
  }

	getCart(){
		this._slashService.getCartDetails()
		.then((data)=>{
			console.log("component/getting the cart items")
			console.log(data)
			this.orders=data;
			for (var i=0; i<data.length; i++){
				this.totalItem+=data[i].quantity;
				this.totalPrice+=data[i].price*data[i].quantity;
			}


		})
			.catch((err)=>{
				console.log(err)
			})
	}

	updateItem(idx){
		this._slashService.updateItem(this.orders[idx])
		.then((data)=>{
			console.log("updating item")
			this.totalItem=0;
			this.totalPrice=0;
			this.getCart();
		})
			.catch((err)=>{
				console.log(err)
			})
	}





}
