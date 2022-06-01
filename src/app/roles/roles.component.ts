import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  columnDefs: ColDef[] = [
    { field: 'Role' },
    { field: 'Description' },
  
];

rowData = [
    { Role:'Admin',Description:'Admin'},
    { Role:'ItoUser',Description:'User'},

];
  constructor() { }

  ngOnInit(): void {
  }

}
