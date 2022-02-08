import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterlistRoutingModule } from './filterlist-routing.module';
import { FilterlistComponent } from './filterlist.component';


@NgModule({
  declarations: [
    FilterlistComponent
  ],
  imports: [
    CommonModule,
    FilterlistRoutingModule
  ]
})
export class FilterlistModule { }
