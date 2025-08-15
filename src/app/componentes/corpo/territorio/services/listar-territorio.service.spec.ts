import { TestBed } from '@angular/core/testing';

import { ListarTerritorioService } from './listar-territorio.service';

describe('ListarTerritorioService', () => {
  let service: ListarTerritorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarTerritorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
