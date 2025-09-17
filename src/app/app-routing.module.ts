import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/corpo/home/home.component';
import { CadastrarTerritorioComponent } from './componentes/corpo/territorio/cadastrar-territorio/cadastrar-territorio.component';
import { ListarTerritorioComponent } from './componentes/corpo/territorio/listar-territorio/listar-territorio.component';
import { EnviarAptosComponent } from './componentes/corpo/enviar/enviar-aptos/enviar-aptos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
