/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MetalComponent } from './Metal.component';

describe('MetalComponent', () => {
  let component: MetalComponent;
  let fixture: ComponentFixture<MetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
