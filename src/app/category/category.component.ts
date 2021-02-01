import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private router: Router,
  private route:ActivatedRoute) 
  {}

  ngOnInit(): void {
  }

  ViewProductList(category : any){
    this.router.navigate(['/productList', category]);
  }
}
