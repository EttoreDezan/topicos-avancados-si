import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroFilmeComponent } from './cadastro-filme/cadastro-filme.component';
import {FormsModule} from "@angular/forms";
import { ListarFilmeComponent } from './listar-filme/listar-filme.component';
import {HttpClientModule} from "@angular/common/http";
import { AtualizarFilmeComponent } from './atualizar-filme/atualizar-filme.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroFilmeComponent,
    ListarFilmeComponent,
    AtualizarFilmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
