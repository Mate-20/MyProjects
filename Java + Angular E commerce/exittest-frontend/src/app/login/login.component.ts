import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users : any[] = []
  errorMssg = ""
  constructor(private http: HttpClient, private router : Router, private route : ActivatedRoute){}
  onSubmit(values:any){
    const username = values.name;
    const password = values.pass;
    const url = 'http://localhost:8888/login';
    this.http.get(url).subscribe((data:any)=> {
        this.users = data;
        let check = false;
        for(const user of this.users){
            if(user.name === username && user.password === password){
              check = true;
              break;
            }
        }
        if (check) {
          localStorage.setItem("name", username);
          
          // Redirect to the returnUrl if available, otherwise redirect to default page
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/product';
          this.router.navigateByUrl(returnUrl);
        } else {
          this.errorMssg = "Credentials provided are wrong";
        }
    })
  }
  register(){
    this.router.navigateByUrl('/register');
  }
}
