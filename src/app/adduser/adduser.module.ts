import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AdduserRoutingModule } from './adduser-routing.module';
import { AdduserComponent } from './adduser.component';
import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
  declarations: [
    AdduserComponent
  ],
  imports: [NavbarComponent,
    FormsModule,
    BrowserModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    CommonModule,
    AdduserRoutingModule
  ]
})
export class AdduserModule { }
