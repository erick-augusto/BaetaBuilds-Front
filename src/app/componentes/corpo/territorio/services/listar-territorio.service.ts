import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TerritorioDTO } from '../modelos/territorioDTO';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ListarTerritorioService {

  private readonly API = 'http://localhost:3000/territorioDTO';

  constructor(private http: HttpClient) { }

  listarTerritorios(): Observable<TerritorioDTO[]>{
    const token = localStorage.getItem('token');
    console.log('Token recuperado do localStorage:', token);
    const headers = token
    ? new HttpHeaders({ 'Content-Type': 'application/json', Authorization: `Bearer ${token}` })
    : new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('Usando token nos headers:', headers.get('Authorization'));

    return this.http.get<TerritorioDTO[]>(this.API, { headers });
  }
}
