import { TestBed } from '@angular/core/testing';

import { EnviarAptosService } from './enviar-aptos.service';

describe('EnviarAptosService', () => {
  let service: EnviarAptosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviarAptosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
