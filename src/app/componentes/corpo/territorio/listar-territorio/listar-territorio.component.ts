import { Component, OnInit } from '@angular/core';
import { TerritorioDTO } from '../modelos/territorioDTO';
import { ListarTerritorioService } from '../services/listar-territorio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-territorio',
  templateUrl: './listar-territorio.component.html',
  styleUrls: ['./listar-territorio.component.css']
})
export class ListarTerritorioComponent implements OnInit {
  listaTerritorios: TerritorioDTO[] = [];

  constructor(private service: ListarTerritorioService) { }

  ngOnInit(): void {
    this.service.listarTerritorios().subscribe(territorios => this.listaTerritorios = territorios);
  }

}
