import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Array<EnviarSaidaDTO>>(this.API, { params: { nome: enviarEntrada.nome, totalAptos: enviarEntrada.totalAptos.toString() } });
  }
}
