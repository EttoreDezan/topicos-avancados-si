import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CadastroService} from "../../services/cadastro.service";

@Component({
  selector: 'app-cadastro-filme',
  templateUrl: './cadastro-filme.component.html',
  styleUrls: ['./cadastro-filme.component.scss']
})
export class CadastroFilmeComponent implements OnInit {
  @Output() aoCadastrar = new EventEmitter<any>();

  titulo: string = '';
  diretor: string = '';
  genero: string = '';
  duracao: number = 0;
  constructor(private service: CadastroService) { }

  cadastrarFilme() {
    console.log("filme cadastrado!")
    this.service.adicionarFilme({titulo: this.titulo, diretor: this.diretor, genero: this.genero, duracao: this.duracao}).subscribe(
      result => {console.log(result)
      this.limparCampos()
      },
      error => {
        console.error(error)
      })
  }
  limparCampos() {
    this.titulo = '';
    this.diretor = '';
    this.genero = '';
    this.duracao = 0
  }
  ngOnInit(): void {
  }

}
