import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CadastroModel} from "../app/model/cadastro.model";

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private listaFilmes: any[];

  private url = 'http://localhost:5000/filme/';

  constructor(private httpClient: HttpClient) {
    this.listaFilmes = [];
  }
  adicionarFilme(filme: CadastroModel): Observable<CadastroModel[]> {
    return this.httpClient.post<CadastroModel[]>(this.url, filme);
  }

  listarFilmes(): Observable<CadastroModel[]>{
    return this.httpClient.get<CadastroModel[]>(this.url);
  }

  deletarFilme(id: number): Observable<CadastroModel[]> {
    return this.httpClient.delete<CadastroModel[]>(this.url + id.toString());
  }
}
