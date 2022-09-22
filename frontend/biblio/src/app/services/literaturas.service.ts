import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Literatura } from '../models/literatura.model';


@Injectable({
  providedIn: 'root'
})
export class LiteraturasService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllLiteraturas(): Observable<Literatura[]> {
    return this.http.get<Literatura[]>(this.baseApiUrl + "/api/literaturas");
  }

  incluirLiteratura(inclusaoLiteraturaRequest: Literatura): Observable<Literatura>{
    return this.http.post<Literatura>(this.baseApiUrl + "/api/literaturas", inclusaoLiteraturaRequest);
  }

  getLiteratura(id: string): Observable<Literatura>{
    return this.http.get<Literatura>(this.baseApiUrl + '/api/literaturas/' + id );
  }

  alteracaoLiteratura(id: string, alteracaoLiteraturaRequest: Literatura): Observable<Literatura>{
    return this.http.put<Literatura>(this.baseApiUrl + '/api/literaturas/' + id, alteracaoLiteraturaRequest );
  }

  exclusaoLiteratura(id: string): Observable<Literatura>{
    return this.http.delete<Literatura>(this.baseApiUrl + '/api/literaturas/' + id);
  }
}
