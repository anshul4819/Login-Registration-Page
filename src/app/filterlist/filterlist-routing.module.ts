import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterlistComponent } from './filterlist.component';

const routes: Routes = [{ path: '', component: FilterlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterlistRoutingModule { }
