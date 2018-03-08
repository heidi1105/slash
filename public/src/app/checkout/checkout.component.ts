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
	cardNumber: string;
  	expiryMonth: string;
  	expiryYear: string;
  	cvc: string;

  	message: string;

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


	getToken() {
    this.message = 'Loading...';

    (<any>window).Stripe.card.createToken({
      number: this.cardNumber,
      exp_month: this.expiryMonth,
      exp_year: this.expiryYear,
      cvc: this.cvc
    }, (status: number, response: any) => {
      if (status === 200) {
        this.message = `Success! Card token ${response.card.id}.`;
      } else {
        this.message = response.error.message;
      }
    });
  }
}



