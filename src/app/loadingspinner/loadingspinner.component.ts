import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loadingspinner',
  template:'<div class="lds-heart"><div></div></div>',
  styleUrls: ['./loadingspinner.component.css']
})
export class LoadingspinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
