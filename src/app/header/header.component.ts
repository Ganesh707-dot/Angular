import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  onLogOut(){
    this.LoginService.logout();
  }
  isAuthenticate=false;
  constructor(private LoginService:LoginService) { }

  ngOnInit(): void {
  }

}
