import { TestBed } from '@angular/core/testing';

import { ResetarService } from './resetar.service';

describe('ResetarService', () => {
  let service: ResetarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResetarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
