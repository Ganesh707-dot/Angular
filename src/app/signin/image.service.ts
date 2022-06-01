import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";     
import { ImageObject } from "./imageObject";
import { UserObject } from "./userObject";
@Injectable({providedIn:'root'})
export class ImageService{

    constructor(private http:HttpClient){}
         saveImage(imageObject:ImageObject){
             return this.http.post('http://localhost:8080/user/uploadUserImage',{
                imageObject
             })
             
         }
         getImage(){
             let params=new HttpParams().set('id',4)
              this.http.get('http://localhost:8080/user/getUserImage',{params:params});
         }
         
}
        