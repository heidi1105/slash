import { Component, OnInit } from '@angular/core';
import { AdminService} from './../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	newBrand: object={name:"", desc:"", region:"", pic_url:""}
  brands: object[]=[]
  newProduct: object={name:"", desc:"", price:0, brandId:1, categoryId:1, thumbnail:""}
  newCategory: object={name:""}
  categories:object[]=[]
  newPicUrl:object={productId:1, pic_url:""; pic_alt:"slash"}


  constructor(private _adminService:AdminService, private _router:Router) { }
    
    getBrands(){
      console.log("component/getBrands")
      this._adminService.getBrands()
      .then((data)=>{
      this.brands=data;
    })
    .catch((err)=>{
      console.log("catch err")
    })
  }

    getCategories(){
      console.log("component/getCategories")
      this._adminService.getCategories()
      .then((data)=>{
      this.categories=data;
    })
    .catch((err)=>{
      console.log("catch err")
    })
  }



  ngOnInit() { 
    this.getBrands();
    this.getCategories();
  }

  createBrand(){
  	this._adminService.createBrand(this.newBrand)
  	.then((data)=>{
  		this.newBrand={name:""}
  	})
  	  	.catch((err)=>{
  		console.log("catch err")
  		console.log(err)
  	})
  }

  createCategory(){
    this._adminService.createCategory(this.newCategory)
    .then((data)=>{
      this.newCategory={name:""}
    })
        .catch((err)=>{
      console.log(err)
    })
  }


  createProduct(){
    console.log("in component/createProduct");
    this._adminService.createProduct(this.newProduct)
    .then((data)=>{
      this.newProduct={name:"", desc:"", price:0, brandId:1, categoryId:1, thumbnail:""};
    })
        .catch((err)=>{
      console.log("catch err")
      console.log(err)
    })
  }

  uploadPicUrl(){
    console.log("in component/createProduct");
    this._adminService.uploadPicUrl(this.newPicUrl)
    .then((data)=>{
      this.newPicUrl={pic_url:"", pic_alt:""};
    })
        .catch((err)=>{
      console.log("catch err")
      console.log(err)
    })
  }

  // uploadPic(){
  //    this._adminService.uploadPic(this.)
  //   .then((data)=>{
  //     this.newProduct={name:"", desc:"", price:0};
  //   })
  //       .catch((err)=>{
  //     console.log("catch err")
  //     console.log(err)
  //   })
  // } 
  // }


}
