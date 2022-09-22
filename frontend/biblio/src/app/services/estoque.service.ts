import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TitleStrategy } from '@angular/router';
import { Estoque } from '../models/estoque.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }


  entradaEstoque(id: string, entradaEstoqueRequest: Estoque): Observable<Estoque>{
    return this.http.put<Estoque>(this.baseApiUrl + '/api/estoque/entrada/' + id, entradaEstoqueRequest );
  }

  saidaEstoque(id: string, saidaEstoqueRequest: Estoque): Observable<Estoque>{
    return this.http.put<Estoque>(this.baseApiUrl + '/api/estoque/saida/' + id, saidaEstoqueRequest );
  }
}
