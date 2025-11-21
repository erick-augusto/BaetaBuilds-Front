import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../corpo/territorio/services/auth.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  menuAberto = false;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  /*logout(): void {
    // remove apenas o token (ajuste a chave se diferente)
    localStorage.removeItem('token');
    // opcional: fechar menu
    this.menuAberto = false;
    // redireciona para a tela de login
    this.router.navigate(['/login']);
  }*/

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
