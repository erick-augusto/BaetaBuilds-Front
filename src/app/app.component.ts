import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from './componentes/corpo/territorio/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BaetaBuilds-Front';
  isLoggedIn$: Observable<boolean>;

  constructor(private auth: AuthService) {
    this.isLoggedIn$ = this.auth.isLoggedIn$;
  }
}
