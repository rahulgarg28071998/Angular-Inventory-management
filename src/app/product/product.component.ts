import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: any;
  base_url ="http://localhost:8080/api/tutorials/";
  closeResult = '';

  constructor(private http : HttpClient ,private _Activatedroute:ActivatedRoute, private modalService: NgbModal ) { }

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    


    this.http.get(this.base_url+this.id)
    .subscribe(Response => { 
      console.log(Response);
    })
  }

    //modal  code
    open(content: any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      });
    }
}
