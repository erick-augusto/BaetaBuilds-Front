import { HistoricoComponent } from './componentes/corpo/historico/historico.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/corpo/home/home.component';
import { CadastrarTerritorioComponent } from './componentes/corpo/territorio/cadastrar-territorio/cadastrar-territorio.component';
import { ListarTerritorioComponent } from './componentes/corpo/territorio/listar-territorio/listar-territorio.component';
import { EnviarAptosComponent } from './componentes/corpo/enviar/enviar-aptos/enviar-aptos.component';
import { EstatisticasComponent } from './componentes/corpo/estatisticas/estatisticas.component';
import { ResetarComponent } from './componentes/corpo/resetar/resetar.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },  
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'listarTerritorio',
    component: ListarTerritorioComponent
  },  
  {
    path: 'cadastrarTerritorio',
    component: CadastrarTerritorioComponent
  },
  {
    path: 'enviarAptos',
    component: EnviarAptosComponent
  },
  {
    path: 'estatisticas',
    component: EstatisticasComponent
  },
  {
    path: 'historico',
    component: HistoricoComponent
  },
  {
    path: 'resetar',
    component: ResetarComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
