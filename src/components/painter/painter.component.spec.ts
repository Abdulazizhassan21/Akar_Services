/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PainterComponent } from './painter.component';

describe('PainterComponent', () => {
  let component: PainterComponent;
  let fixture: ComponentFixture<PainterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
