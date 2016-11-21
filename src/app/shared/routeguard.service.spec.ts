/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RouteguardService } from './routeguard.service';

describe('Service: Routeguard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteguardService]
    });
  });

  it('should ...', inject([RouteguardService], (service: RouteguardService) => {
    expect(service).toBeTruthy();
  }));
});
