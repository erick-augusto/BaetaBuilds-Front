import { Component, Input, OnInit } from '@angular/core';
import { TerritorioDTO } from '../territorioDTO';
import { TorreApartamentosDTO } from '../torreApartamentosDTO';
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
  torres: TorreApartamentosDTO[] = [];
  carregando: boolean = false;
  erro: string = '';

  constructor(private listarApartamentosService: ListarApartamentosService) { }

  ngOnInit(): void {
  }

  toggleExpanded(): void {
    this.expanded = !this.expanded;
    
    if (this.expanded && this.torres.length === 0) {
      this.carregarApartamentos();
    }
  }

  carregarApartamentos(): void {
    this.carregando = true;
    this.erro = '';
    
    this.listarApartamentosService.listarApartamentosPorTerritorio(this.territorioDTO.territorioID)
      .subscribe({
        next: (dados) => {
          this.torres = dados;
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
