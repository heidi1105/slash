import { Component, OnInit } from '@angular/core';
import { SlashService } from '../slash.service';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
	orders:object[];
	totalItem:number=0;
	totalPrice:number=0;


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
	dropDown() {
		var x = document.getElementById("responsiveCheckout");
		if (x.className === "responsiveCheckout") {
			x.className = "dropDown";
		} else {
			x.className = "responsiveCheckout";
		}
	}


}
