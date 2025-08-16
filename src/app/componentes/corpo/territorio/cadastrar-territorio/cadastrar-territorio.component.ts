import { CadastroDTO } from '../modelos/cadastroDTO';
import { CadastrarTerritorioService } from './../services/cadastrar-territorio.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-territorio',
  templateUrl: './cadastrar-territorio.component.html',
  styleUrls: ['./cadastrar-territorio.component.css']
})
export class CadastrarTerritorioComponent implements OnInit {

  @Input() cadastro: CadastroDTO = {
    endereco: "",
    cep: "",
    totalAptosTorre: 0,
    primAndIni: 0,
    primAndFim: 0
  }

  constructor(private service: CadastrarTerritorioService) { }

  ngOnInit(): void {
  }

  cadastrarTeritorio() {
    // Lógica para cadastrar o território
    this.service.cadastrarTerritorio(this.cadastro).subscribe();
    console.log('Território cadastrado!');
  }

  cancelar() {
    // Lógica para cancelar o cadastro
    console.log('Cadastro cancelado!');
  }
  
}
