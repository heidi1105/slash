import { Component, OnInit } from '@angular/core';
import { SlashService } from '../slash.service';
import {ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery/dist/jquery.min.js';
import { Product } from './../product'

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
	order:object[];
	product: Product = new Product();
	newItem:object={productId:0, quantity:0};
  constructor(private _slashService: SlashService, private _router: Router,
	private _route: ActivatedRoute) {
   	      this._route.paramMap.subscribe( params => {
   	      		this.getOneProduct(params.get('id'));
   	      		this.newItem['productId']=Number(params.get('id'));
   	      })

  }

	getCart(){
		console.log("getting cart")
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

  ngOnInit() {
  		this.getCart();
		$('#thumbs').delegate('img','click', function(){
  		$('#largeImage').attr('src',$(this).attr('src'));
		});
		// $('#next').click(function(){
    //   $(this).prev().find('.thumbnail').trigger('click')
		// console.log($(this).prev().find('.thumbnail').trigger('delegate'));
		// });


  }

  getOneProduct(id){
  	this._slashService.getOneProduct(id)
		.then((product)=>{
			console.log("component/getting product")
			this.product = product;
		})
		.catch((err)=>{
			console.log("err")
			console.log(err)
		})
	}

	addItem(){
		this._slashService.addItem(this.newItem)
		.then((data)=>{
			console.log("component/adding new item")
			console.log(data)
			this.newItem["quantity"]=0;
		})
			.catch((err)=>{
				console.log(err)
			})
	}


  	// this._slashService.getOneProduct()
		// .then((product)=>{
		// 	this.product = product;
		// })
		// .catch((err)=>{
		// 	console.log(err)
		// })
}
