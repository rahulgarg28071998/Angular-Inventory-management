import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: any;
  base_url ="https://angular-assignment-inventory.herokuapp.com/api/tutorials/";
  product_details :any ={};
  constructor(private http : HttpClient ,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    console.log(this.id+"kkkkkkkk");

    if(this.id==null)
    {
      this.id = "60127f6ea5bf0a7c2026dc09";
    }
      this.http.get(this.base_url+this.id)
      .subscribe(Response => {
        this.product_details  = Response; 
        console.log(Response);
      })
    
  }

}
