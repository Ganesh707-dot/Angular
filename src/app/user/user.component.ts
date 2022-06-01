
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { PopUpService } from './pop-up.service';

import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { UserObject } from '../signin/userObject';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeleteService } from './delete.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  deleteData(userId) {
    this.deleteService.deletePost(userId).subscribe(
      (data)=>{
        Object.keys(data).forEach((userId)=>{
          this.usersLists.pop(userId);
          
        })
      
    })
  }
  userName: string = '';
  columnDefs: ColDef[] = [
    { field: 'Username', filter: 'agColumnFilter' },
    { field: 'Firstname', },
    { field: 'Lastname' },
    { field: 'CreatedDate' },
    {
      field: 'Status', cellStyle: params => {
        if (params.value === 'active') {

          return { color: 'white', backgroundColor: 'green' };
        }
        else if (params.value === 'busy') {
          return { color: 'white', backgroundColor: 'red' }
        };
      }
    }
  ];


  // { Username: 'Amith_001', Firstname: 'Amith', Lastname: 'Kuniyil', CreatedDate: 29 / 7 / 2020, Status: 'active', },
  // { Username: 'Priyanka_das', Firstname: 'Priyanka', Lastname: 'Das', CreatedDate: 29 / 7 / 2020, Status: 'busy', },
  // { Username: 'Sudhakar_sekar', Firstname: 'Sudhakar', Lastname: 'Shekar', CreatedDate: 29 / 7 / 2020, Status: 'active', },
  // { Username: 'Ayan_005', Firstname: 'Ayan', Lastname: 'Chatterjee', CreatedDate: 29 / 7 / 2020, Status: 'busy' },
  // { Username: 'Neha_006', Firstname: 'Neha', Lastname: 'Komatla', CreatedDate: 29 / 7 / 2020, Status: 'active' },
  // { Username: 'Sunny_123', Firstname: 'Sunny', Lastname: 'Shaw', CreatedDate: 29 / 7 / 2020, Status: 'busy' },
  // { Username: 'Deepika_das', Firstname: 'Deepka', Lastname: 'Das', CreatedDate: 29 / 7 / 2020, Status: 'active' },
  // { Username: 'Pranitha_mithra', Firstname: 'Pranitha', Lastname: 'Mithra', CreatedDate: 29 / 7 / 2020, Status: 'active' },
  // { Username: 'Roopika_padkon', Firstname: 'Roopika', Lastname: 'Padkon', CreatedDate: 29 / 7 / 2020, Status: 'busy' },
  // { Username: 'Ganesh_007', Firstname: 'Ganesh', Lastname: 'Singaravelu', CreatedDate: 29 / 7 / 2020, Status: 'busy' },
  // { Username: 'Neelamma_patil', Firstname: 'Neelamma', Lastname: 'Patil', CreatedDate: 29 / 7 / 2020, Status: 'active' },
  // { Username: 'Srinivas_356', Firstname: 'Srinivas', Lastname: 'Das', CreatedDate: 29 / 7 / 2020, Status: 'busy' },
  // { Username: 'Punitha_krishna', Firstname: 'Punitha', Lastname: 'Krishna', CreatedDate: 29 / 7 / 2020, Status: 'active' },
  // { Username: 'Vishnu_priya', Firstname: 'Vishnu', Lastname: 'Priya', CreatedDate: 29 / 7 / 2020, Status: 'busy' },
  // { Username: 'Manoj_234', Firstname: 'manoj', Lastname: 'Mutukundu', CreatedDate: 29 / 7 / 2020, Status: 'active' },
  // { Username: 'Jai_Prakash', Firstname: 'Jai', Lastname: 'Prakash', CreatedDate: 29 / 7 / 2020, Status: 'busy' },
  // { Username: 'Avinash_Mahadeva', Firstname: 'Avinash', Lastname: 'MAhadeva', CreatedDate: 29 / 7 / 2020, Status: 'active' }

  display = false;
  public usersLists: any = [];
  first = 0;

  rows = 10;
  onGridReady() {
    this.popUpService.adduserlist()

      .subscribe(

        (data) => {
          console.log(data);
          Object.values(data).forEach(

            (user: any) => {

              this.usersLists.push({

                userName: user.userName,

                firstName: user.firstName,

                lastName: user.lastName,

                createdDateTime: user.createdDateTime,
                
                id: user.id

              });

            }

          )

          console.log(this.usersLists);


        }
      )

  }
  table: UserObject[]


  userForm = this.fb.group({
    userName: ["", [Validators.required, Validators.minLength(3)]],


  })
  onAdd() {

  }

  onSubmit(userName) {
    this.validateCheckUserName(userName);



    // this.popUpService.checkUserName()
  }





  constructor(private popUpService: PopUpService, private router: Router, private fb: FormBuilder, private deleteService: DeleteService, private http: HttpClient) { }

  ngOnInit() {

      //  this.deleteData(userId)
    this.onGridReady();

  }
  onCancel(): void {
    this.popUpService.cancel()
  }
  validateCheckUserName(userName) {
    this.popUpService.checkUserName(userName).subscribe(
      (data) => {
        if (data) {
          alert('userName taken');

        }
        else {
          this.router.navigate(['signin'])
        }
      }
    );
  
  }
  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

isLastPage(): boolean {
    return this.usersLists ? this.first === (this.usersLists.length - this.rows): true;
}

isFirstPage(): boolean {
    return this.usersLists ? this.first === 0 : true;
}
  
}


// function userId(userId: any) {
//   throw new Error('Function not implemented.');
// }
// function userId(userId: any) {
//   throw new Error('Function not implemented.');
// }
