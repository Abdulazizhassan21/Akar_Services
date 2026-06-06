/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthentcationService } from './Authentcation.service';

describe('Service: Authentcation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthentcationService]
    });
  });

  it('should ...', inject([AuthentcationService], (service: AuthentcationService) => {
    expect(service).toBeTruthy();
  }));
});
