import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl('',[Validators.email]),
    name: new FormControl(''),
    pass1: new FormControl(''),
    pass2: new FormControl('')
  });
  
  message = "";
  constructor(private http: HttpClient) { }
  
  register() {
    const { email, name, pass1, pass2 } = this.registerForm.value;
    if (!email || !name || !pass1 || !pass2) {
      this.message = 'Please fill in all the fields';
      return;
    }
    if (pass1 !== pass2) {
      this.message = 'Passwords do not match';
      return;
    }  
    const data = { name, password: pass1, email };
    const url = 'http://localhost:8888/register';
    this.http.post(url, data)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.message = "Email already Registered";
        }else if(error.status === 409){
          this.message = "Username Already Exsists"
        }else if(error.status === 0){
          this.message = "Server Problem. Try again later"
        }
         else {
          this.message = "Registration Successful";
        }
        return of(null);
      })
    )
    .subscribe((response) => {
      if (response) {
        this.message = "Registration Successful";
      }
    });
  }

}

