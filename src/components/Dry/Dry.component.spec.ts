/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DryComponent } from './Dry.component';

describe('DryComponent', () => {
  let component: DryComponent;
  let fixture: ComponentFixture<DryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
