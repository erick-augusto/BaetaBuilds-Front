import { ResetarService } from './../territorio/services/resetar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetar',
  templateUrl: './resetar.component.html',
  styleUrls: ['./resetar.component.css']
})
export class ResetarComponent implements OnInit {

  reset = '';

  constructor(private service: ResetarService) { }

  ngOnInit(): void {
  }

  resetar(){
    console.log("Resetar território de apartamentos");
    this.service.resetarTerritorio().subscribe(retorno =>{
      console.log(retorno);
      if(retorno){
        this.reset = 'Todos os territórios foram resetados com sucesso!';
      } else {
        this.reset = 'Não foi possível fazer o reset dos territórios.';
      }
    });
  }

  habilitarBotao(): string {
    if(this.reset == '') {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }
}
