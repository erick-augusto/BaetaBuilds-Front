import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetar',
  templateUrl: './resetar.component.html',
  styleUrls: ['./resetar.component.css']
})
export class ResetarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  resetar(){
    console.log("Resetar território de apartamentos");
  }
}
