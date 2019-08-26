import { TestBed } from '@angular/core/testing';

import { ChequeService } from './cheque.service';

describe('ChequeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChequeService = TestBed.get(ChequeService);
    expect(service).toBeTruthy();
  });
});
