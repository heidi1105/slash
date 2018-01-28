import { Component, DoCheck, OnInit } from '@angular/core';
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

    getBrands(){
      this._slashService.getBrands()
      .then((data)=>{       
      this.brands=data;
    })
    .catch((err)=>{
      console.log("catch err")

    })
  }


	ngDoCheck(){
		this.session = sessionStorage.getItem('session');
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
}
