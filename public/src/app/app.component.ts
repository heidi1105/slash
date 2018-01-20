import { Component, DoCheck } from '@angular/core';
import { SlashService } from './slash.service';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
	session: any;

	constructor(private _slashService: SlashService, private _router: Router,
	private _route: ActivatedRoute){
		this.session = sessionStorage.getItem('session');
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
