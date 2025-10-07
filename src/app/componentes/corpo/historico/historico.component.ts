import { Component, OnInit } from '@angular/core';
import { HistoricoDTO } from '../territorio/modelos/historicoDTO';
import { HistoricoService } from '../territorio/services/historico.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  historico: HistoricoDTO | null = null;

  constructor(private service: HistoricoService) { }

  ngOnInit(): void {
    this.service.buscarHistorico().subscribe((resposta) => {
      this.historico = resposta;
    });
  }

}
