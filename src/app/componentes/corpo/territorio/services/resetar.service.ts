import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResetarService {

  private readonly API = 'http://localhost:3000/resetarDTO';

  constructor(private http: HttpClient) { }

  resetarTerritorio(): Observable<Object> {
    const token = localStorage.getItem('token');
    console.log('Token recuperado do localStorage:', token);
    const headers = token
    ? new HttpHeaders({ 'Content-Type': 'application/json', Authorization: `Bearer ${token}` })
    : new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('Usando token nos headers:', headers.get('Authorization'));
    
    return this.http.put(this.API, {headers});
  }
}
