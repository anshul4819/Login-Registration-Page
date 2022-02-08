import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { arr } from '../global-component';

export interface PeriodicElement {
  email: string;
  password: string;
  role: string;
  butt: MatButton
}
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent{
  arrar=localStorage.getItem('key');
  arr=JSON.parse(this.arrar || "");
  ELEMENT_DATA: PeriodicElement[]=this.arr;
  dataSource=this.ELEMENT_DATA;
  displayedColumns: string[] = ['email', 'password', 'role' , 'actions'];
  fun(search:any){
    localStorage.setItem('search',search.value);
  }
  edit(row:any){
    var k:string = row.email;  
    let newarr = arr;   //this equal to is like referencing and newarr is not a new object
    for(let i=0;i<arr.length;i++){
      if(arr[i].email==k){newarr.splice(i,1);}
    }
    console.log(arr)
    localStorage.setItem('key',JSON.stringify(newarr));
  }
}