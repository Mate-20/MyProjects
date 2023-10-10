import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  products: any[] = [];
  filter : any[] = [];
  displayName:any
  product:any={}
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.displayName= localStorage.getItem("name")  
    this.fetchProducts();
  }

  fetchProducts(): void {
    const url = 'http://localhost:8888/product';
    this.http.get(url).subscribe((data:any)=>{
      this.products = data;
    })
    this.filter = [];
  }
  getByName(name:String){
    const url = `http://localhost:8888/product/name/${name}`
    this.http.get(url).subscribe((data:any)=>{
      this.products = data;
    })
    this.filter = [];
  }
  getByBrand(brand:String){
    const url = `http://localhost:8888/product/brand/${brand}`
    this.http.get(url).subscribe((data:any)=>{
      this.products = data;
    })
    this.filter = [];
  }
  clearSearch(nameInput: HTMLInputElement, brandInput: HTMLInputElement, priceInput : HTMLInputElement) {
    nameInput.value = ''; // Clear name input field
    brandInput.value = ''; // Clear brand input field
    priceInput.value = ''; // Clear price input field
    this.filter = [];
  }

  details(productId: number) {
    this.router.navigate(['/details'], { queryParams: { productId: productId } });
  }
  onPriceRangeChange(selectedRange:String) {
    // Convert the selected range to integers
    const [minPrice, maxPrice] = selectedRange.split('-').map(Number);
    this.filter = this.products.filter(product => {
      const price = Number(product.price);
      return price >= minPrice && price <= maxPrice;
    });
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/login')
  }


}
