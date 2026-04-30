/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CridetComponent } from './cridet.component';

describe('CridetComponent', () => {
  let component: CridetComponent;
  let fixture: ComponentFixture<CridetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CridetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CridetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
