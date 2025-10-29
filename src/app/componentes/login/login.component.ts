import { Component, OnInit } from '@angular/core';
import { LoginService } from '../corpo/territorio/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }

  login(){
    this.service.login().subscribe(retorno =>{
      console.log(retorno);
    });
  }

}
