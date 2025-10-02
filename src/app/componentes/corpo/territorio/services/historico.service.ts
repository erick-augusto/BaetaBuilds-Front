import { HttpClient } from '@angular/common/http';
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
      return this.http.get<HistoricoDTO>(this.API);
    }
}
