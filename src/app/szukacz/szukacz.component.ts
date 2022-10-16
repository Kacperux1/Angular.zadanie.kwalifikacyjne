import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {map, Observable} from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';


export interface propozycja {
  name: STRING;
}
import fs from 'fs'
var dataArray = (fs.readFileSync('data,json'), 'utf-8')

@Component({
  selector: 'app-szukacz',
  templateUrl: './szukacz.component.html',
  styleUrls: ['./szukacz.component.css']
  
})
export  class SzukaczComponent implements OnInit{;

  myControl = new FormControl<string | propozycja>('');
  options: propozycja[] = [dataArray ];
  filteredOptions!: Observable<propozycja[]>;

  ngOnInit() {
    
    
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
    map((value: { name: string; }) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(search: ): string {
    return   search.name ? search.name : '';
  }

  private _filter(name: string): lupa[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }


  constructor() { }

  onSubmit(słowo:string): any{
   const googles ="https://www.google.com/search?q="
    var słowo = 'wyszukiwane';
    var url= googles + "+" + słowo.valueOf;
    goToLink(url, String)
    {

      window.open(url, "_blank");
  }

  }
    
    }
  
  
    
    

  




function goToLink(url: string, String: StringConstructor) {
}

function startWith(arg0: string): import("rxjs").OperatorFunction<string | lupa | null, unknown> {
  throw new Error('Function not implemented.');
}

