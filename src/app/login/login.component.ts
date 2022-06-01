import { Component, OnInit } from '@angular/core';
// import { LoginService } from './login.service'
import { Observable, throwError } from 'rxjs'
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService,AuthResponseData } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error = '';
    isLoading=false;
  constructor(private router:Router,private loginService:LoginService ) { }


  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const userName = form.value.userName;
    const password = form.value.password;

     this.isLoading=true;
    let authObs: Observable<AuthResponseData>
    authObs=this.loginService.login(userName,password);
        authObs.subscribe(
          resData=>{
            console.log(resData);
            this.isLoading=false;
             this.router.navigate(['/user']);
          },
          errorMessage=>{
            console.log(errorMessage);
            this.error=errorMessage;
            this.isLoading=false; 
          }
        ) ;   

     
    



    form.reset();
  }

}
 










