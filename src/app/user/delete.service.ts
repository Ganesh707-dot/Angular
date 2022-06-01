import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { HttpParams } from "@angular/common/http";
@Injectable ({providedIn:'root'})
export class DeleteService{
 constructor( private http:HttpClient){}

 deletePost(userId){
    
        let params=new HttpParams().set('id',userId);
        return this.http.delete('http://localhost:8080/user/delete',{params:params});
 }
}