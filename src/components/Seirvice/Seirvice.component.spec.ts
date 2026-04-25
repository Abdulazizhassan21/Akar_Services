/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeirviceComponent } from './Seirvice.component';

describe('SeirviceComponent', () => {
  let component: SeirviceComponent;
  let fixture: ComponentFixture<SeirviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeirviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeirviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
