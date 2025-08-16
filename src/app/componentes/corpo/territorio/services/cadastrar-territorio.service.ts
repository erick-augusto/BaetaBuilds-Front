import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadastroDTO } from '../modelos/cadastroDTO';

@Injectable({
  providedIn: 'root'
})
export class CadastrarTerritorioService {

  private readonly API = 'http://localhost:3000/cadastroDTO';

  constructor(private http: HttpClient) { }

  cadastrarTerritorio(cadastro: CadastroDTO): Observable<CadastroDTO> {
    return this.http.post<CadastroDTO>(this.API, cadastro);
  }
}
