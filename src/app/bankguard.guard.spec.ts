import { TestBed } from '@angular/core/testing';

import { BankguardGuard } from './bankguard.guard';

describe('BankguardGuard', () => {
  let guard: BankguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BankguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
