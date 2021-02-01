import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  li:any; 
  lis = [] as  any;
  category = "sports"
  
  base_url ="http://localhost:8080/api/tutorials";
  href: any;
  constructor(private http : HttpClient , private router: Router) { }
  
  ngOnInit(): void {
  
    this.href = this.router.url;
    let temp = this.href.split('/');
    this.category = temp[temp.length-1];
    if(this.category=="productList")
      this.category = "sports";
    this.http.get(this.base_url)
    .subscribe(Response => { 
  
      // If response comes hideloader() function is called 
      // to hide that loader  
      this.li=Response;
      for(var i in this.li)
      {
          if(this.li[i].category==this.category)
            this.lis.push(this.li[i]);
      } 
      // this.lis=this.li.list; 
      console.log(this.lis);
  }
  )
    
}

goToProcduct(id: any){
    console.log(id);
  }
}
