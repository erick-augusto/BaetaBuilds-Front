import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadastroDTO } from '../modelos/cadastroDTO';

@Injectable({
  providedIn: 'root'
})
export class CadastrarTerritorioService {

  private readonly API = 'http://localhost:3000/cadastroDTO';

  constructor(private http: HttpClient) { }

  cadastrarTerritorio(cadastro: CadastroDTO): Observable<CadastroDTO> {
    const token = localStorage.getItem('token'); // ajuste a chave conforme onde guarda o token
    console.log('Token recuperado do localStorage:', token);
    const headers = token
    ? new HttpHeaders({ 'Content-Type': 'application/json', Authorization: `Bearer ${token}` })
    : new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('Usando token nos headers:', headers.get('Authorization'));

    return this.http.post<CadastroDTO>(this.API, cadastro, { headers });
  }
}
