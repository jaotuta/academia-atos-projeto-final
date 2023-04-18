import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  registrosss: Array<Object> | undefined;
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

  testeModArray(){
    this.registrosss?.push({id: 5, nome: "Adriana Silveira", func: "ADM" })
  }
  
  getListOfRegistros() {
    this.registrosss =  [{ id: 1, nome: "João Lucas Cruz", func: "Engenheiro" }, { id: 2, nome: "Maicon Roberto Soares", func: "Montador" }, { id: 3, nome: "Célio Roberto", func: "Eletricista" }]
    return this.registrosss;
  }

}


