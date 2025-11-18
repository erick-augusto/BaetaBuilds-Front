import { Router } from '@angular/router';
import { CadastroDTO } from '../modelos/cadastroDTO';
import { CadastrarTerritorioService } from './../services/cadastrar-territorio.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      endereco: ['', Validators.compose([Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
      cep: ['', Validators.compose([Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)])],
      totalAptosTorre: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      primAndIni: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      primAndFim: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      nomeTorre: [''],
      ultAndIni: ['', Validators.pattern(/^\d+$/)],
      ultAndFim: ['', Validators.pattern(/^\d+$/)]
    });
  }

  cadastrarTeritorio() {
    // Lógica para cadastrar o território
    console.log(this.formulario.errors);
    console.log(this.formulario.get('cep')?.errors);
    console.log('Formulário válido:', this.formulario.valid);
    if(this.formulario.valid) {
      this.service.cadastrarTerritorio(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarTerritorio'])
      });
    }
  }

  cancelar() {
    // Lógica para cancelar o cadastro
    this.router.navigate(['/listarTerritorio']);
  }

  habilitarBotao(): string {
    if(this.formulario.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }
  
}
