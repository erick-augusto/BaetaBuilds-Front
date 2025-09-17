import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnviarSaidaDTO } from '../modelos/enviarSaidaDTO';
import { EnviarEntradaDTO } from '../modelos/enviarEntradaDTO';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EnviarAptosService {

  private readonly API = 'http://localhost:3000/enviarEntradaDTO';

  constructor(private http: HttpClient) { }

  enviarAptosAleatorios(enviarEntrada: EnviarEntradaDTO): Observable<EnviarSaidaDTO> {
    return this.http.post<EnviarSaidaDTO>(this.API, enviarEntrada);
  }
}
