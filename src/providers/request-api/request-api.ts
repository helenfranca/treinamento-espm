import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RequestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestApiProvider {

  private API_URL = "https://es-palma-mao-teste-gary.herokuapp.com/api";

  constructor(public http: HttpClient) {
    console.log('Hello RequestApiProvider Provider');
  }
  async buscarConcursos(cpfCandidato) {
    return new Promise(resolve => {
      this.http.get(this.API_URL + "/concursos/" + cpfCandidato).subscribe(
        data => {
          resolve(data);
        },
        err => {
          console.log("ERRO!", err);
          resolve({ message: "erro" });
        }
      );
    });
  }

}
