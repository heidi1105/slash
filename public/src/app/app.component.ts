import { Component, DoCheck, OnInit} from '@angular/core';
import { SlashService } from './slash.service';
import {ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery/dist/jquery.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
	session: any;
	brands: object[]=[];
	orders:object[];
	//need to fix this totalItem part.. I think i have to make the cart an observable but Idk there should be an easier way
	totalItem: number = 0;

	constructor(private _slashService: SlashService, private _router: Router,
	private _route: ActivatedRoute){
		this.session = sessionStorage.getItem('session');
	}

	ngOnInit(){
		this.getBrands();
		$(".icon").on("click", function() {
			if($(this).text()==="\u2715"){
				$(this).text("\u2630")
			}else{
				$(this).text("\u2715");
			}});
	}

	ngDoCheck(){
		this.session = sessionStorage.getItem('session');
	}

  getBrands(){
    this._slashService.getBrands()
    .then((data)=>{
    this.brands=data;
  })
  .catch((err)=>{
    console.log("catch err")

  })

  }


	dropDown() {
		var x = document.getElementById("myTopnav");
		if (x.className === "nav") {
			x.className += " responsive";
		} else {
			x.className = "nav";
		}
	}
	logout() {
	console.log('logoff()');
	this._slashService.logout()
		.then((data) => {
			sessionStorage.removeItem('session');
			this.session = "";
			this._router.navigate(['']);
		})
		.catch((err)=> console.log("logout", err))
	}

	getCart(){
		this._slashService.getCartDetails()
		.then((data)=>{
			console.log("cart number")
			console.log(data)
			this.orders=data;
			for (var i=0; i<data.length; i++){
				this.totalItem+=data[i].quantity;
			}
		})
			.catch((err)=>{
				console.log(err)
		})
	}
}
