import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SzukaczComponent} from './szukacz.component';

const routes: Routes = [{ path: '', component: SzukaczComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SzukaczRoutingModule { }
