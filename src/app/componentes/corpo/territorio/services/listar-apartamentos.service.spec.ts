import { TestBed } from '@angular/core/testing';

import { ListarApartamentosService } from './listar-apartamentos.service';

describe('ListarApartamentosService', () => {
  let service: ListarApartamentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarApartamentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
