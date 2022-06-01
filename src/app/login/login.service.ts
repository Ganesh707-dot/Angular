import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import{User} from './user.model'
import { BehaviorSubject } from "rxjs";
export interface AuthResponseData{
    userName:string,
    password:string,
    modifiedSource:string,
    modifiedDateTime:Date
}
@Injectable({ providedIn: 'root' })
export class LoginService{
   User=new BehaviorSubject<AuthResponseData>(null)
    user=new Subject<User>()
    constructor(private http:HttpClient,private router:Router){}
login(userName:string,password:string){
   return this.http.post<AuthResponseData>('http://localhost:8080/user/login',{
        userName:userName,
        password:password
    }
    )
    .pipe(catchError(this.handleError));
}
private handleError(errorRes:HttpErrorResponse){
    let errorMessage='Incorect Credentials!';
    if(!errorRes.error||!errorRes.error.error){
        return throwError(errorMessage);
    }
    // switch (errorRes.error.error.message){
    //  case 'USERNAME_EXISTS':
    //  errorMessage='This username exists already';
    //  break;
    //  case 'USERNAME_NOT_FOUND':
    //      errorMessage='This Username Not Exist.'
    //      break;
    //      case   'Incorrect Credentials':
    //          errorMessage='Incorrect Credentials';
    // }
    return throwError(errorMessage);
}
logout(){
  this.user.next(null);
  this.router.navigate(['/login'])
}

}

