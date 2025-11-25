import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnviarSaidaDTO } from '../modelos/enviarSaidaDTO';
import { EnviarEntradaDTO } from '../modelos/enviarEntradaDTO';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EnviarAptosService {

  private readonly API = 'http://localhost:3000/enviarSaidaDTO';

  constructor(private http: HttpClient) { }

  enviarAptosAleatorios(enviarEntrada: EnviarEntradaDTO): Observable<EnviarSaidaDTO[]> {
    const token = localStorage.getItem('token');
    console.log('Token recuperado do localStorage:', token);
    const headers = token
    ? new HttpHeaders({ 'Content-Type': 'application/json', Authorization: `Bearer ${token}` })
    : new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('Usando token nos headers:', headers.get('Authorization'));

    return this.http.get<Array<EnviarSaidaDTO>>(this.API, { headers, params: { nome: enviarEntrada.nome, totalAptos: enviarEntrada.totalAptos.toString() } });
  }
}
