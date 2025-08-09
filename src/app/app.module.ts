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

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    HomeComponent,
    CadastrarTerritorioComponent,
    ListarTerritorioComponent,
    TerritorioDTOComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
