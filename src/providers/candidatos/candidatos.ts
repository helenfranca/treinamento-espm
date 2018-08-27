import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the CandidatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class CandidatosProvider {
  private API_URL: string;

  constructor(public http: HttpClient) {
    this.API_URL = 'https://api-empregabilidade.herokuapp.com/candidates';
  }

  async getAll(): Promise<any> {
    // GET /candidates RETORNA todos os candidatos
    return await this.http.get(this.API_URL).toPromise();
  }

  async getCandidate(cpf: string): Promise<any> {
    // GET /candidates/13509754786 RETORNA o candidato indicado
    return await this.http.get(`${this.API_URL}/${cpf}`).toPromise();
  }

  async getCandidatePublicTenders(cpf: string): Promise<any> {
    // GET /candidates/13509754786/public_tenders RETORNA os concursos de um candidato
    return await this.http.get(`${this.API_URL}/${cpf}/public_tenders`).toPromise();
  }
}
