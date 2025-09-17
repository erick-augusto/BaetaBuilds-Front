import { EnviarSaidaDTO } from './../../territorio/modelos/enviarSaidaDTO';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnviarAptosService } from '../../territorio/services/enviar-aptos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enviar-aptos',
  templateUrl: './enviar-aptos.component.html',
  styleUrls: ['./enviar-aptos.component.css']
})
export class EnviarAptosComponent implements OnInit {

  formulario!: FormGroup;
  saida: EnviarSaidaDTO[] = [];
  filtrado: boolean = false;

  constructor(private service: EnviarAptosService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
      totalAptos: ['', [Validators.required, Validators.pattern(/^\d+$/)]]
    });
  }

  //TODO - Trocar o método para posta na API para gerar os aptos aleatórios
  //TODO - Criar endpoints para buscar a lista de torres e aptos

  enviarAptosAleatorios() {
    if(this.formulario.valid) {
      this.service.enviarAptosAleatorios(this.formulario.value).subscribe((resposta) => {
        //resposta é do tipo EnviarSaidaDTO
        console.log(resposta); // ou faça o que quiser com o objeto
        this.saida.push(resposta);
        this.filtrado = true;
        this.router.navigate(['/aptosAleatorios']);
      });
    }
  }

  habilitarBotao(): string {
    if(this.formulario.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }

}
