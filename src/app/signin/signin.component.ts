import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, Subscriber } from 'rxjs';
import { DataStorageService } from './data-storage.service';
import { ImageService } from './image.service';
import { ImageObject } from './imageObject';
import { UserObject } from './userObject';
// import { SigninService } from './sign.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  // countries = [
  //   { id: 1, name: "United States" },
  //   { id: 2, name: "India" }
  // ];     
  userObject:UserObject;
  imageObject:ImageObject;
  countryList = [];
  stateList = [];
  url: any;
  msg = "";
  selectedCountry = '';
  selectedState = '';
  countries: any;
  states : any;
  imageUrl:string="https://cdn-icons-png.flaticon.com/512/847/847969.png"
  fileToUpload:File=null;
  imageData:ImageObject
  
  // handleFileInput(file:FileList){
  //  this.fileToUpload=file.item(0)
  //  var reader=new FileReader();
  //  reader.onload=(event:any)=>{
  //    this.imageUrl=event.target.result;
  //  }
 
  //  reader.readAsDataURL(this.fileToUpload)
  // }
  // convertToBase64(){
  //   const observable =new Observable((subscriber:Subscriber<any>)=>{
  //     this.readFile(file,subscriber)
  //   })
  // }
  // readFile(file:File,subscriber:Subscriber<any>)

//   selectChangeHandler() {
// console.log();
// // this.userObject.country = event.target.value;
//   }
onChange($event:Event){
     const file=($event.target as HTMLInputElement).files[0];
     console.log(file);
     this.convertToBase64(file);
}

convertToBase64(file:File){
 const observable= new Observable((subscriber:Subscriber<any>)=>{
   this. readFile(file,subscriber);
 });
 observable.subscribe((d)=>{
   console.log(d);
   this.imageUrl=d;
   let img = JSON.stringify(d);

   this.imageData.imageData = img;

   this.imageData.extension = file.type
 }); 
}
readFile(file:File,subscriber:Subscriber<any>){
     const fileReader =new FileReader();
     fileReader.readAsDataURL(file);

     fileReader.onload=()=>{
       subscriber.next(fileReader.result);
       subscriber.complete();
     }
     fileReader.onerror=(error)=>{
       subscriber.error(error);
       subscriber.complete();
     }
                         
}

userActivated=false;
onCancel(){
this.router.navigate(['/user'],{relativeTo:this.route})
}
  constructor(private router:Router,private route:ActivatedRoute,private dataStorageService:DataStorageService, private imageService:ImageService) { }

  onCountires() {
    this.dataStorageService.getCountires().subscribe(
      (data) => {
        this.countries = Object.entries(data);
        console.log(this.countries);
        
        Object.values(data).forEach((country) => {
          this.countryList.push((country.name));
        });
      }
    );
  }
  onStates(countryId) {
    this.dataStorageService.getStates(countryId).subscribe(
      (data) => {
        this.states = Object.entries(data);
        
        Object.values(data).forEach((state) => {
          this.stateList.push((state.name));
        });
      }
    );
  }

  setCountry() {
    if (this.selectedCountry !== null) {
      this.countries.forEach((country)=> {
        if(country[1].name === this.selectedCountry) {
          this.userObject.country = country[1].id;
        }
      })
    }

  }
  setState() {
    if(this.selectedState !== null){
      this.states.forEach((state)=>{
        if(state[1].name=== this.selectedState){
          this.userObject.state = state[1].id;
        }
      })
    }
  }
  uploadImage(){
    this.imageService.saveImage(this.imageData).subscribe((data)=>{

    },
    (error)=>{},
    ()=>{});
    
  }

  ngOnInit(): void {
       this.userObject={
        
         userName:'',
         firstName:'',
         lastName:'',
         password:'',
         gender:'',
         dateOfBirth:null,
         emailId:'',
         mobileNumber:'',
         addressField1:'',
         addressField2:'',
         zipCode:'',
         timeZone:'',
         locale:'',
         imageLocation:'',
         country:0,
         state:0,
         roles: [],
         createdSource:'',
         modifiedSource:'',
         createdDateTime:null,
         modifiedDateTime:null
        },
        this.onCountires();
        this.onStates('countryId');
      
        this.inItImage();
      
  }
 onSubmit(userObject){
   console.log(userObject.userObject);
   this.userObject.password='userito';

    this.userObject.roles = [];

    this.userObject.roles.push(1);

    this.userObject.dateOfBirth = new Date(this.userObject.dateOfBirth);
    this.setCountry();
    this.setState();

  

   this.userObject.createdDateTime = new Date();
   this.dataStorageService.storeData(userObject).subscribe(
     (resData)=>{
  console.log(resData);

},
(error)=>{
  console.log(error);
  // this.router.navigate(['user'])

},
()=>{
this.uploadImage();
}
);
this.imageService.saveImage(this.imageObject).subscribe(
  (resData)=>{
    console.log(resData);
  }
  )
  localStorage.setItem('imagedata',JSON.stringify(this.imageObject))


 

roles:[

]
// fetchData(){
//   console.log(this.userObject);
//   let obs:Observable<any>;
//   // obs=this.dataStorage.fetchData(){
//   //   return
//   // }
// }

}

inItImage(){
  this.imageData={
    userId:this.imageData.userId,
    extension:'',
    imageData:''
  }
}
}
