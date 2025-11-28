import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AutenticacaoDTO } from '../modelos/AutenticacaoDTO';
import { TokenDTO } from '../modelos/TokenDTO';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn$ = new BehaviorSubject<boolean>(false);
  readonly isLoggedIn$ = this.loggedIn$.asObservable();

  constructor(private loginService: LoginService) {
    const token = localStorage.getItem('token');
    if (token) {
      this.loggedIn$.next(true);
    }
  }

  login(cred: AutenticacaoDTO): Observable<TokenDTO> {
    return this.loginService.login(cred).pipe(
      tap(tokenDto => {
        const tokenValue = (tokenDto as any).token || JSON.stringify(tokenDto);
        localStorage.setItem('token', tokenValue);
        this.loggedIn$.next(true);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn$.next(false);
  }
}
