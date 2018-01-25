import { Component, OnInit } from '@angular/core';
import { SlashService } from '../slash.service';
import {ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery/dist/jquery.min.js';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
	product:object;
  constructor(private _slashService: SlashService, private _router: Router,
	private _route: ActivatedRoute) {
   	      this._route.paramMap.subscribe( params => {
   	      		this.getOneProduct(params.get('id'));
       	       console.log(params.get('id'));
   	      })

  }

  ngOnInit() {
			$('#thumbs').delegate('img','click', function(){
    	$('#largeImage').attr('src',$(this).attr('src'));
		});

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

  	// this._slashService.getOneProduct()
		// .then((product)=>{
		// 	this.product = product;
		// })
		// .catch((err)=>{
		// 	console.log(err)
		// })
	}

}



