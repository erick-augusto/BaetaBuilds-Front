import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TorreApartamentosDTO } from '../modelos/torreApartamentosDTO';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ListarApartamentosService {

  private readonly API = 'http://localhost:3000/torreApartamentosDTO';

  constructor(private http: HttpClient) { }

  listarApartamentosPorTerritorio(territorioID: number): Observable<TorreApartamentosDTO[]> {
    const token = localStorage.getItem('token');
    console.log('Token recuperado do localStorage:', token);
    const headers = token
      ? new HttpHeaders({ 'Content-Type': 'application/json', Authorization: `Bearer ${token}` })
      : new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('Usando token nos headers:', headers.get('Authorization'));

    return this.http.get<TorreApartamentosDTO[]>(this.API, { 
      headers,
      params: { territorioID: territorioID.toString() } 
    });
  }
}
