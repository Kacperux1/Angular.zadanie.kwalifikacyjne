import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { SzukaczRoutingModule } from './szukacz-routing.module';
import { SzukaczComponent } from './szukacz.component';


@NgModule({
  declarations: [
    SzukaczComponent
  ],
  imports: [
    CommonModule,
    SzukaczRoutingModule,
    MatAutocompleteModule,
  ]
})
export class SzukaczModule{ }
