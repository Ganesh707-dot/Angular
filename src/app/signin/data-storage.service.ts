import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Subject, BehaviorSubject } from "rxjs";
import { UserObject } from "./userObject";
// export interface ResponseData {
//     id: number;
//     userName: string,
//     firstName: string,
//     lastName: string,
//     gender: string,
//     dateOfBirth: Date,
//     emailId: string,
//     mobileNumber: number,
//     addressField1: string,
//     addressField2: string,
//     zipCode: number,
//     timeZone: string,
//     country: number
//     state: number,
//     password: string,
//     roles:number [],
//     locale: string,
//     imageLocation: string,
//     createdSource: string,
//     modifiedSource: string,
//     createdDateTime: Date,
//     modifiedDateTime: Date
// }
@Injectable({ providedIn: 'root' })
export class DataStorageService {
    // UserObject = new BehaviorSubject<ResponseData>(null)
    constructor(private http: HttpClient) { }

    storeData(userObject:UserObject) {
        const body = JSON.stringify(userObject) ;
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            // 'Authorization': 'Bearer my-token'
          });
       
        return this.http.post('http://localhost:8080/user/register',
            body,{headers}
        )
    }
    getCountires(){

        return this.http.get('http://localhost:8080/country/getAll');

    }
    getStates(countryId){
        let requestParams=new HttpParams().set("id",countryId)
        return this.http.get('http://localhost:8080/state/getAll',{params:requestParams});
    }



}