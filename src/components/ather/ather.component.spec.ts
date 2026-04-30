/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AtherComponent } from './ather.component';

describe('AtherComponent', () => {
  let component: AtherComponent;
  let fixture: ComponentFixture<AtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
