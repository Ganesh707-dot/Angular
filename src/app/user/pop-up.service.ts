import { EventEmitter, Injectable,  } from '@angular/core';
import { FormGroup,AbstractControl } from '@angular/forms';
import { HttpClient,HttpParams, HttpRequest,HttpErrorResponse } from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';
import { Params, Router } from '@angular/router';
import { UserObject } from '../signin/userObject';
@Injectable({
  providedIn: 'root'
})
export class PopUpService {
    error=''
    cancel(){
    
        this.router.navigate(['/home'])
      }
  constructor(private http:HttpClient,private router:Router) { }
  validateUserName(control:AbstractControl){
    return this.checkUserName(control.value).pipe(
      map(res=>{
        return res ? null : {userName:true};
      
      })
    )
   
  }
 checkUserName(userName):Observable<any>{
   let  params1= new HttpParams().set('userName',userName);

   return this.http.get("http://localhost:8080/user/exist",{params:params1});
 }

 adduserlist() {

  return this.http.get<UserObject[]>("http://localhost:8080/user/users",)

}
// baseUrl='http://localhost:8080/country/getAll'
//  getCountries(){
//    return this.http.get(`${this.baseUrl}api/countries`)
//  } 
//  getStates(countryId:number){
//    return this.http.get(`${this.baseUrl}api/states/${countryId}`)
//  }
}

