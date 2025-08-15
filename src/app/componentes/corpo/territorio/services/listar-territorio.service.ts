import { HttpClient } from '@angular/common/http';
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
    return this.http.get<TerritorioDTO[]>(this.API);
  }
}
