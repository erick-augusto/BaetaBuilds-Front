import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-territorio',
  templateUrl: './cadastrar-territorio.component.html',
  styleUrls: ['./cadastrar-territorio.component.css']
})
export class CadastrarTerritorioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cadastrarTeritorio() {
    // Lógica para cadastrar o território
    console.log('Território cadastrado!');
  }

  cancelar() {
    // Lógica para cancelar o cadastro
    console.log('Cadastro cancelado!');
  }
  
}
