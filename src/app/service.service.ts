import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiUrl = 'http://localhost:8080/rda'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) {}

  public getRdaWithFlag(flag: string):  Observable<string> {
    return this.httpClient.get<string>(this.apiUrl + '?flag=' + flag)
  };

  getListOfRegistros() {
    let registrosss =  [{ id: 1, nome: "João Pedro de Lima Cruz", func: "Engenheiro" }, { id: 2, nome: "Maicon Roberto Soares", func: "Montador" }, { id: 3, nome: "Célio Roberto", func: "Eletricista" }, { nome: "Maicon Roberto Soares", func: "Montador" }, { nome: "Maicon Roberto Soares", func: "Montador" }, { nome: "Maicon Roberto Soares", func: "Montador" }]
    return registrosss
  }

}


