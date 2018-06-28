import { TestBed, async, inject } from '@angular/core/testing';

import { NoReloginGuard } from './no-relogin.guard';

describe('NoReloginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoReloginGuard]
    });
  });

  it('should ...', inject([NoReloginGuard], (guard: NoReloginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
