import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilteredComponent } from './filtered/filtered.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'add-user',component:MainComponent},
  {path:'user-list',component:UserListComponent},
  {path:'filter',component:FilteredComponent},
  { path: 'adduser', loadChildren: () => import('./adduser/adduser.module').then(m => m.AdduserModule) },
  { path: 'userlist', loadChildren: () => import('./userlist/userlist.module').then(m => m.UserlistModule) },
  { path: 'filterlist', loadChildren: () => import('./filterlist/filterlist.module').then(m => m.FilterlistModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }