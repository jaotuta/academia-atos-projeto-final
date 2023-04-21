import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recurso } from './models/recurso.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  dia: string;
  mes: string;
  registrosss: Array<Object> | undefined;
  apiUrl = 'http://projetospro-1682041513699.azurewebsites.net/rdo'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) {}

  public getRdaWithDiaMes(dia: string, mes: string):  Observable<Recurso> {
    return this.httpClient.get<Recurso>(this.apiUrl + '?dia=' + dia + '&mes=' + mes ) 
  };
  public getRda():  Observable<Recurso> {
    return this.httpClient.get<Recurso>(this.apiUrl) 
  };

  public postRecurso(recurso: any) : Observable<Recurso> {
    return this.httpClient.post<any>(this.apiUrl, recurso, this.httpOptions)
  }

  testeModArray(){
    this.registrosss?.push({id: 5, nome: "Adriana Silveira", func: "ADM" })
  }
  
  getListOfRegistros() {
    this.registrosss =  [{ id: 1, nome: "João Lucas Cruz", func: "Engenheiro" }, { id: 2, nome: "Maicon Roberto Soares", func: "Montador" }, { id: 3, nome: "Célio Roberto", func: "Eletricista" }]
    return this.registrosss;
  }

  getDia(): string {
    return this.dia
  }
}


