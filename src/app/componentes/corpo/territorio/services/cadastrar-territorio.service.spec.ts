import { TestBed } from '@angular/core/testing';

import { CadastrarTerritorioService } from './cadastrar-territorio.service';

describe('CadastrarTerritorioService', () => {
  let service: CadastrarTerritorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarTerritorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
