import { Component, OnInit } from '@angular/core';
import { SlashService } from '../slash.service';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _slashService: SlashService, private _router: Router,
	private _route: ActivatedRoute) { }

  ngOnInit() {
  }
}
