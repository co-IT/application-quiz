/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InputvalidationService } from './inputvalidation.service';

describe('Service: Inputvalidation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputvalidationService]
    });
  });

  it('should ...', inject([InputvalidationService], (service: InputvalidationService) => {
    expect(service).toBeTruthy();
  }));
});
