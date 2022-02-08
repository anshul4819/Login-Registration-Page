import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  Submit(formdata:any){
    localStorage.setItem('present',JSON.stringify(formdata.value));
  }
}
