import { Component } from '@angular/core';
import{ arr } from '../global-component';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent{
  Submit(formdata:any){
    if(localStorage.getItem('key')){}
    else{
      while (arr.length) arr.pop();
    }
    arr.push(formdata.value);
    localStorage.setItem('key',JSON.stringify(arr));
  }
}
