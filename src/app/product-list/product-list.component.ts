import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  li:any; 
  lis = [] as  any;
  category = "sports"
  closeResult = '';
  hidden=true;
  base_url ="https://angular-assignment-inventory.herokuapp.com/api/tutorials";
  href: any;
  constructor(private http : HttpClient , private router: Router, private modalService: NgbModal) { }
  
  ngOnInit(): void {
  
    this.href = this.router.url;
    let temp = this.href.split('/');
    this.category = temp[temp.length-1];
    if(this.category=="productList")
      this.category = "sports";
    
    this.http.get(this.base_url)
    .subscribe(Response => { 
      this.hidden = true;
      this.li=Response;
      for(var i in this.li)
      {
          if(this.li[i].category==this.category)
            this.lis.push(this.li[i]);
      } 
      // this.lis=this.li.list; 
      console.log(this.lis);
      this.hidden = false;
    })
    
  }

  //modal  code
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
