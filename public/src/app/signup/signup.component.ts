import { Component, OnInit } from '@angular/core';
import { SlashService } from '../slash.service'
import { Router } from '@angular/router'



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _slashService:SlashService, private _router:Router) { }

  ngOnInit() {
  }

}
