import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: any;
  base_url ="https://angular-assignment-inventory.herokuapp.com/api/tutorials/";
  product_details :any ={};
  closeResult = '';

  constructor(private http : HttpClient ,private _Activatedroute:ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    console.log(this.id);

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

  //modal  code
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }


  onSubmit1(value: any) {
    console.log("Form Value : ",value);

    this.http.put(this.base_url+this.id,{  "title" : value.name,
                                    "description" : value.description,
                                    "quantity": value.quantity,
                                    "sellingPrice": value.price,
                                    "published":value.publish,
                                    "category":this.product_details.category
                                    })
    .subscribe(Response => {
      console.log(Response);
    })
    window.location.reload();
 }
}
