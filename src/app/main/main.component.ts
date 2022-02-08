import { Component, OnInit } from '@angular/core';
import{ arr } from '../global-component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent{
  Submit(formdata:any){
    if(localStorage.getItem('key')){}
    else{
      while (arr.length) arr.pop();
    }
    arr.push(formdata.value);
    localStorage.setItem('key',JSON.stringify(arr));
  }
}