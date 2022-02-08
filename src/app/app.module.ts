import { LoginComponent } from './login/login.component';
import { FilteredComponent } from './filtered/filtered.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';

import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon"
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    FilteredComponent,
  ],
  imports: [
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,MatTableModule,MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
