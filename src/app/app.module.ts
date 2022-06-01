import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DialogModule } from 'primeng/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoadingspinnerComponent } from './loadingspinner/loadingspinner.component';
import { LoginComponent } from './login/login.component';
import {TableModule} from 'primeng/table';
import { RolesComponent } from './roles/roles.component';
import { SigninComponent } from './signin/signin.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';


import {SplitButtonModule} from 'primeng/splitbutton';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    
    LoginComponent,
    SigninComponent,
    HomeComponent,
    RolesComponent,
    LoadingspinnerComponent,
   UserComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule,
    AgGridModule,
    AlertModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    DialogModule,
    TableModule,
    BrowserAnimationsModule,
    ButtonModule,
    SplitButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
