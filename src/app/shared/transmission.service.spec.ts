/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TransmissionService } from './transmission.service';

describe('Service: Transmission', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransmissionService]
    });
  });

  it('should ...', inject([TransmissionService], (service: TransmissionService) => {
    expect(service).toBeTruthy();
  }));
});
