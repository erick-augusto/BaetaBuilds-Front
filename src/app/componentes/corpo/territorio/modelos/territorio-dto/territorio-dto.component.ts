import { Component, Input, OnInit } from '@angular/core';
import { TerritorioDTO } from '../territorioDTO';
import { EnviarSaidaDTO } from '../enviarSaidaDTO';
import { ListarApartamentosService } from '../../services/listar-apartamentos.service';

@Component({
  selector: 'app-territorio-dto',
  templateUrl: './territorio-dto.component.html',
  styleUrls: ['./territorio-dto.component.css']
})
export class TerritorioDTOComponent implements OnInit {

  @Input() territorioDTO: TerritorioDTO = {
    territorioID: 1,
    dataInicio: new Date(),
    dataFim: new Date(),
    totalAptos: 10
  }

  expanded: boolean = false;
  apartamentos: EnviarSaidaDTO[] = [];
  carregando: boolean = false;
  erro: string = '';

  constructor(private listarApartamentosService: ListarApartamentosService) { }

  ngOnInit(): void {
  }

  toggleExpanded(): void {
    this.expanded = !this.expanded;
    
    if (this.expanded && this.apartamentos.length === 0) {
      this.carregarApartamentos();
    }
  }

  carregarApartamentos(): void {
    this.carregando = true;
    this.erro = '';
    
    this.listarApartamentosService.listarApartamentosPorTerritorio(this.territorioDTO.territorioID)
      .subscribe({
        next: (dados) => {
          this.apartamentos = dados;
          this.carregando = false;
        },
        error: (erro) => {
          console.error('Erro ao carregar apartamentos:', erro);
          this.erro = 'Erro ao carregar apartamentos';
          this.carregando = false;
        }
      });
  }

}
