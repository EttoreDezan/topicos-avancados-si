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

  deletarFilme(id: number) {
    this.service.deletarFilme(id).subscribe(
      res => {console.log(res)
        location.reload();
      },
      error => {
        console.error(error)
      }
    )
  }
  ngOnInit(): void {
    this.service.listarFilmes().subscribe((filmes: CadastroModel[]) => {
      console.table(filmes)
      this.filmes = filmes;
    })
  }
}
