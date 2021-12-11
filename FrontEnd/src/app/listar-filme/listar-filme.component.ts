import { Component, OnInit } from '@angular/core';
import {CadastroService} from "../../services/cadastro.service";
import {CadastroModel} from "../model/cadastro.model";

@Component({
  selector: 'app-listar-filme',
  templateUrl: './listar-filme.component.html',
  styleUrls: ['./listar-filme.component.scss']
})
export class ListarFilmeComponent implements OnInit {
  filmes: any[] = [];
  constructor(private service: CadastroService) { }

  editarFilme(id: number) {
    if (this.filmes !== null || this.filmes !== []) {
      localStorage.setItem('userList', JSON.stringify(this.filmes.filter(x=> x.id === id)))
    }
  }

  deletarFilme(id: number) {
    this.service.deletarFilme(id).subscribe(
      res => {console.log(res)
        this.service.listarFilmes().subscribe((filmes: CadastroModel[]) => {
          console.table(filmes)
          this.filmes = filmes;
        })
      },
      error => {
        console.error(error)
      }
    )
  }
  ngOnInit(): void {
    this.service.listarFilmes().subscribe((filmes: CadastroModel[]) => {
      this.filmes = filmes;
    })
  }
}
