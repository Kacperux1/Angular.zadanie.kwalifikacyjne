import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SzukaczRoutingModule } from './szukacz-routing.module';
import SzukaczComponent from './szukacz.component';


@NgModule({
  declarations: [
    SzukaczComponent
  ],
  imports: [
    CommonModule,
    SzukaczRoutingModule
  ]
})
export class SzukaczModule { }
