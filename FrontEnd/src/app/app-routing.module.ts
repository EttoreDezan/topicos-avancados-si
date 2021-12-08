import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastroFilmeComponent} from "./cadastro-filme/cadastro-filme.component";
import {ListarFilmeComponent} from "./listar-filme/listar-filme.component";

const routes: Routes = [
  { path: '', redirectTo: 'cadastrarFilmes', pathMatch: 'full'},
  { path: 'cadastrarFilmes', component: CadastroFilmeComponent},
  { path: 'listarFilmes', component: ListarFilmeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
