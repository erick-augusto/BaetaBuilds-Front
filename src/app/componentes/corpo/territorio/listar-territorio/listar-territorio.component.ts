import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-territorio',
  templateUrl: './listar-territorio.component.html',
  styleUrls: ['./listar-territorio.component.css']
})
export class ListarTerritorioComponent implements OnInit {
  listaTerritorios = [
    {
      id: 2,
      dataInicio: new Date(),
      dataFim: new Date(),
      totalAptos: 100
    },
    {
      id: 3,
      dataInicio: new Date(),
      dataFim: new Date(),
      totalAptos: 100
    },
    {
      id: 4,
      dataInicio: new Date(),
      dataFim: new Date(),
      totalAptos: 100
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
