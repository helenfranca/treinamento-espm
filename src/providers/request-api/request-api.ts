// import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RequestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestApiProvider {
  private API_URL: string;

  constructor(private http: HTTP) {
    console.log('Hello RequestApiProvider Provider');
    this.API_URL = "https://treinamento-typeorm.herokuapp.com";
  }

  async buscarListaConcursosPeloCPF(cpf) {
    // await resposta = this.http.get(`${this.API_URL}/api/candidato/${cpf}/concursos`);
    let resposta = await this.http.get(`${this.API_URL}/candidatos/18284508434/page/1`, {}, {});
    console.log("request-api.ts buscarListaconcursosPeloCPF()", resposta);
    return resposta;
  }
}
