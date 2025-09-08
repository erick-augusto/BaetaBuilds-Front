import { Router } from '@angular/router';
import { CadastroDTO } from '../modelos/cadastroDTO';
import { CadastrarTerritorioService } from './../services/cadastrar-territorio.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-territorio',
  templateUrl: './cadastrar-territorio.component.html',
  styleUrls: ['./cadastrar-territorio.component.css']
})
export class CadastrarTerritorioComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private service: CadastrarTerritorioService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      endereco: [''],
      cep: [''],
      totalAptosTorre: [''],
      primAndIni: [''],
      primAndFim: [''],
      nomeTorre: [''],
      ultAndIni: [''],
      ultAndFim: ['']
    });
  }

  cadastrarTeritorio() {
    // Lógica para cadastrar o território
    this.service.cadastrarTerritorio(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarTerritorio'])
    });
  }

  cancelar() {
    // Lógica para cancelar o cadastro
    this.router.navigate(['/listarTerritorio']);
  }
  
}
