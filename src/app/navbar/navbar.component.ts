import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  myJSON = localStorage.getItem('present');
  myObj = JSON.parse(this.myJSON || "");
  x = this.myObj.email;
}