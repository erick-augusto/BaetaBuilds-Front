import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacaoDTO } from '../modelos/AutenticacaoDTO';
import { TokenDTO } from '../modelos/TokenDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = 'http://localhost:3000/autenticacaoDTO';

  constructor(private http: HttpClient) { }

  login(autenticacao: AutenticacaoDTO): Observable<TokenDTO> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<TokenDTO>(this.API, autenticacao, { headers });
  }
}