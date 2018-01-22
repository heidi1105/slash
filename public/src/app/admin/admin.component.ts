import { Component, OnInit } from '@angular/core';
import { SlashService } from './../slash.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	newBrand: object={name:"", desc:"", region:"", pic_url:""}
  brands: object[]=[{id:1, name:"brand1"}, {id:2, name:"brand2"}]
  newProduct: object={name:"", desc:"", price:0, brandId:1}


  constructor(private _slashService:SlashService, private _router:Router) { }
    
    getBrands(){
      console.log("component/getBrands")
      this._slashService.getBrands()
      .then((data)=>{
      console.log("here")
      this.brands=data;
    })
    .catch((err)=>{
      console.log("catch err")
    })
  }

  ngOnInit() { 
    this.getBrands();

  }

  createBrand(){
    console.log("in component");
  	this._slashService.createBrand(this.newBrand)
  	.then((data)=>{
  		console.log("createBrand:then")
  		console.log(data)
  		this.newBrand={name:""}
  	})
  	  	.catch((err)=>{
  		console.log("catch err")
  		console.log(err)
  	})
  }

  createProduct(){
    console.log("in component/createProduct");
    this._slashService.createProduct(this.newProduct)
    .then((data)=>{
      console.log("createBrand:then")
      console.log(data);
      this.newProduct={name:"", desc:"", price:0};
    })
        .catch((err)=>{
      console.log("catch err")
      console.log(err)
    })
  }



}
