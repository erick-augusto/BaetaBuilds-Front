import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { HomeComponent } from './componentes/corpo/home/home.component';
import { CadastrarTerritorioComponent } from './componentes/corpo/territorio/cadastrar-territorio/cadastrar-territorio.component';
import { ListarTerritorioComponent } from './componentes/corpo/territorio/listar-territorio/listar-territorio.component';
import { TerritorioDTOComponent } from './componentes/corpo/territorio/modelos/territorio-dto/territorio-dto.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnviarAptosComponent } from './componentes/corpo/enviar/enviar-aptos/enviar-aptos.component';
import { EstatisticasComponent } from './componentes/corpo/estatisticas/estatisticas.component';
import { HistoricoComponent } from './componentes/corpo/historico/historico.component';
import { ResetarComponent } from './componentes/corpo/resetar/resetar.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    HomeComponent,
    CadastrarTerritorioComponent,
    ListarTerritorioComponent,
    TerritorioDTOComponent,
    EnviarAptosComponent,
    EstatisticasComponent,
    HistoricoComponent,
    ResetarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
