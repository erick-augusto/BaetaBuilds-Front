import { HttpClient } from '@angular/common/http';
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
    return this.http.get<EstatisticasDTO>(this.API);
  }
}
