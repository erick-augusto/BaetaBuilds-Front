import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = 'http://localhost:3000/loginDTO';

  constructor(private http: HttpClient) { }

  login(): Observable<String> {
    return this.http.post<String>(this.API, {});
  }
}
