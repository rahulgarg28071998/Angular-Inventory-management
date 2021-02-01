import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: any;
  base_url ="http://localhost:8080/api/tutorials/";

  constructor(private http : HttpClient ,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    


    this.http.get(this.base_url+this.id)
    .subscribe(Response => { 
      console.log(Response);
    })
  }

}
