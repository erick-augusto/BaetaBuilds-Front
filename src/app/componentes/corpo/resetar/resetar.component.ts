import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetar',
  templateUrl: './resetar.component.html',
  styleUrls: ['./resetar.component.css']
})
export class ResetarComponent implements OnInit {

  reset = '';

  constructor() { }

  ngOnInit(): void {
  }

  resetar(){
    console.log("Resetar território de apartamentos");
    this.reset = 'Todos os territórios foram resetados com sucesso!';
  }

  habilitarBotao(): string {
    if(this.reset == '') {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }
}
