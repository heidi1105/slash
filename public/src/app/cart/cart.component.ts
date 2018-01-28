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
	order:object[];
	product: Product = new Product();

  constructor(private _slashService: SlashService, private _router: Router,
	private _route: ActivatedRoute) { }

  ngOnInit() {
  	this.getCart();
  }

	getCart(){
		this._slashService.getCart()
		.then((data)=>{
			console.log("component/getting the cart items")
			console.log(data)
			this.order=data;
		})
			.catch((err)=>{
				console.log(err)
			})		
	}

	





}
