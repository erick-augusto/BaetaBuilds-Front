import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResetarService {

  private readonly API = 'http://localhost:3000/resetarDTO';

  constructor(private http: HttpClient) { }

  resetarTerritorio(): Observable<Object> {
    return this.http.put(this.API, {});
  }
}
