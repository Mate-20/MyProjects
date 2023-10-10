import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  productId:number=0;
  product:any={};
  pincodes:any={};
  message : String = ""
  constructor(private route: ActivatedRoute, private http : HttpClient) {}
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.productId = +params['productId'];
      console.log(this.productId);
    });
    
    const url = `http://localhost:8888/product/${this.productId}`;
    this.http.get(url).subscribe((data:any)=>{
      this.product = data;
      console.log(this.product)
    })
  }
  checkAvail(pincode :String){
    this.pincodes = this.product.princodes;
    for (let key in this.pincodes) {
      if (this.pincodes.hasOwnProperty(key)) {
        let value = this.pincodes[key];
        if (value === pincode) {
          this.message = "Product is Available for your Area"
        }else{
          this.message = "Product is NOT Available for your Area"
        }
      }
    }
  }
}
