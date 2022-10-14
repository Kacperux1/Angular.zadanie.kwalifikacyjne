import { ComponentFixture, TestBed } from '@angular/core/testing';

import SzukaczComponent from './szukacz.component';

describe('SzukaczComponent', () => {
  let component: SzukaczComponent;
  let fixture: ComponentFixture<SzukaczComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzukaczComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SzukaczComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
