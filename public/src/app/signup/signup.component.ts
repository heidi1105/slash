import { Component, OnInit } from '@angular/core';
import { SlashService } from '../slash.service'
import { Router } from '@angular/router'
import { User } from './../user';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	newUser: User = new User();
	loggedUser: User = new User();
	errors: Array<string> = [];

  constructor(private _slashService:SlashService, private _router:Router) { }

  ngOnInit() {
  }

	regEvent(){
		this._slashService.register(this.newUser)
		.then((data)=>{
			data.errors ? (
				console.log(data.errors)
			) : (
				console.log("great success!", data),
				sessionStorage.setItem('session', data._id),
				console.log("sessionStorage", sessionStorage.getItem('session')),
				this._router.navigate(["home"])
			)
		})
		.catch((err)=>{
			console.log(err)
		})
	}
	loginEvent(){
		this._slashService.login(this.loggedUser)
		.then((data)=>{
			data.errors ? (
				this.errors = [],
				console.log(data.errors),
				this.errors.push(data.errors)
			) : (
				console.log('successfully logged in', data),
				sessionStorage.setItem('session', data._id),
				console.log("sessionStorage", sessionStorage.getItem('session')),
				this._router.navigate(["home"])
			)
		})
		.catch((err)=>{
			console.log(err, "catch in login")
		})
	}
}
