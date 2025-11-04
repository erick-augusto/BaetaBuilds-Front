import { Component, OnInit } from '@angular/core';
import { LoginService } from '../corpo/territorio/services/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenDTO } from '../corpo/territorio/modelos/TokenDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup;
  showResetModal = false;

  constructor(private service: LoginService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      login: [''],
      senha: ['']
    });
  }

  login(){
    console.log(this.formulario.value);
    this.service.login(this.formulario.value).subscribe((token: TokenDTO) =>{
      console.log('Token recebido:', token);
      if(token && token.token){
        localStorage.setItem('token', token.token);
        console.log('Token armazenado com sucesso!');
      } else {
        console.error('Token inválido recebido');
      }
    });
  }

  openResetModal(): void {
    this.showResetModal = true;
  }

  closeResetModal(): void {
    this.showResetModal = false;
  }

}
