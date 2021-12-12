import {Component, OnInit} from '@angular/core';
import {CadastroService} from "../../services/cadastro.service";
import {CadastroModel} from "../model/cadastro.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-atualizar-filme',
  templateUrl: './atualizar-filme.component.html',
  styleUrls: ['./atualizar-filme.component.scss']
})
export class AtualizarFilmeComponent implements OnInit {
  filmeAlterar = JSON.parse(localStorage.getItem('userList') || '{}')
  id: number = this.filmeAlterar[0].id;
  titulo: string = this.filmeAlterar[0].titulo;
  diretor: string = this.filmeAlterar[0].diretor;
  genero: string = this.filmeAlterar[0].genero;
  duracao: number = this.filmeAlterar[0].duracao;

  constructor(private service: CadastroService, private router: Router) {
  }

  atualizarFilme() {
    this.service.atualizarFilme(this.id, {
      titulo: this.titulo,
      diretor: this.diretor,
      genero: this.genero,
      duracao: this.duracao
    }).subscribe(
      result => {
        console.log(result)
        alert("Dados atualizados!")
        this.router.navigate(['/listarFilmes']);
      },
      error => {
        console.error(error)
      })
  }

  ngOnInit(): void {
  }
}
