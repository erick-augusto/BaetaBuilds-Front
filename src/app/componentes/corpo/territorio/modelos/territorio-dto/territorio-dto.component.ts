import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-territorio-dto',
  templateUrl: './territorio-dto.component.html',
  styleUrls: ['./territorio-dto.component.css']
})
export class TerritorioDTOComponent implements OnInit {

  @Input() territorioDTO = {
    id: 1,
    dataInicio: new Date(),
    dataFim: new Date(),
    totalAptos: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

}
