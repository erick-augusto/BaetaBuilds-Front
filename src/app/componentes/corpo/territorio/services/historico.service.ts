import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HistoricoDTO } from '../modelos/historicoDTO';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  
  private readonly API = 'http://localhost:3000/historicoDTO';
  
    constructor(private http: HttpClient) { }
  
    buscarHistorico(): Observable<HistoricoDTO>{
      const token = localStorage.getItem('token');
      console.log('Token recuperado do localStorage:', token);
      const headers = token
      ? new HttpHeaders({ 'Content-Type': 'application/json', Authorization: `Bearer ${token}` })
      : new HttpHeaders({ 'Content-Type': 'application/json' });
      console.log('Usando token nos headers:', headers.get('Authorization'));
  
      return this.http.get<HistoricoDTO>(this.API, { headers });
    }
}
