import { Component, OnInit } from '@angular/core';
import { LoginService } from '../corpo/territorio/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenDTO } from '../corpo/territorio/modelos/TokenDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup;
  showResetModal = false;

  constructor(private service: LoginService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      login: ['',Validators.compose([Validators.required, Validators.minLength(3)])],
      senha: ['',Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  login(){
    console.log(this.formulario.value);
    if(this.formulario.valid) {
      this.service.login(this.formulario.value).subscribe((token: TokenDTO) =>{
        console.log('Token recebido:', token);
        token.token = 'abc123xyz';
        if(token && token.token){
          localStorage.setItem('token', token.token);
          console.log('Token armazenado com sucesso!');
          this.router.navigate(['/home'])
        } else {
          console.error('Token inválido recebido');
        }
      });
    }
  }

  openResetModal(): void {
    this.showResetModal = true;
  }

  closeResetModal(): void {
    this.showResetModal = false;
  }

}
