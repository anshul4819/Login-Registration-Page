import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  email: string;
  password: string;
  role: string;
}
@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.css']
})
export class FilteredComponent implements OnInit{
  
  newarr:any[]=[];
  ngOnInit(): void {
    var search=localStorage.getItem('search');
    var abc=localStorage.getItem('key');
    var arr=JSON.parse(abc || "");
    for(let i=0;i<arr.length;i++){
      if(arr[i].email==search){
        this.newarr.push(arr[i]);
      }
    }
    console.log(this.newarr);
  }
  ELEMENT_DATA: PeriodicElement[]=this.newarr;
  dataSource=this.ELEMENT_DATA;
  displayedColumns: string[] = ['email', 'password', 'role'];

}
