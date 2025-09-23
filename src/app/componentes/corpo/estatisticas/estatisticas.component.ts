import { isThisTypeNode } from 'typescript';
import { EstatisticasService } from '../territorio/services/estatisticas-service.service';
import { EstatisticasDTO } from './../territorio/modelos/estatisticasDTO';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {

  estatisticas!: EstatisticasDTO;

  constructor(private service: EstatisticasService) { }

  ngOnInit(): void {
    this.service.gerarEstatisticas().subscribe((resposta) => {
      this.estatisticas = resposta;
    });
  }

}
