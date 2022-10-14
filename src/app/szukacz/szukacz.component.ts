import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {Observable} from 'rxjs';

export interface lupa {
  name: string;
}

@Component({
  selector: 'app-szukacz',
  templateUrl: './szukacz.component.html',
  styleUrls: ['./szukacz.component.css']
})
export  class SzukaczComponent implements OnInit{
  myControl = new FormControl<string | lupa>('');
  options: lupa[] = [{name: 'Mjeden'}, {name: 'dwa'}, {name: 'Itrzy'}];
  filteredOptions!: Observable<lupa[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: lupa): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): lupa[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }


  constructor() { }

  onSubmit(a: string): any{
   const googles ="https://www.google.com/search?q="
    var a = "wyszukiwane"
    var url= googles + "+" + a.valueOf;
    goToLink(url: String);{
      window.open(url, "_blank");
  }
  }
    
    }
  
  
    
    

  




function goToLink(url: string, String: StringConstructor) {
}

