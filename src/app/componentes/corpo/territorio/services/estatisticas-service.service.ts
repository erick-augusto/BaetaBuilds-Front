import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstatisticasDTO } from '../modelos/estatisticasDTO';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EstatisticasService {

  private readonly API = 'http://localhost:3000/estatisticasDTO';

  constructor(private http: HttpClient) { }

  gerarEstatisticas(): Observable<EstatisticasDTO>{
    const token = localStorage.getItem('token');
    console.log('Token recuperado do localStorage:', token);
    const headers = token
    ? new HttpHeaders({ 'Content-Type': 'application/json', Authorization: `Bearer ${token}` })
    : new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('Usando token nos headers:', headers.get('Authorization'));
    
    return this.http.get<EstatisticasDTO>(this.API, { headers });
  }
}
