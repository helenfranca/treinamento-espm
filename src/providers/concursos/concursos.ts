import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConcursosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ConcursosProvider {
  private API_URL: string;

  constructor(public http: HttpClient) {
    this.API_URL = "https://api-empregabilidade.herokuapp.com/public_tenders";
  }

  async getAll(): Promise<any> {
    // GET /public_tenders RETORNA todos os concursos
    return await this.http.get(`${this.API_URL}`).toPromise();
  }

  async getPublicTender(cod: string): Promise<any> {
    // GET /public_tenders/001-2018 RETORNA o concurso indicado
    return await this.http.get(`${this.API_URL}/${cod}`).toPromise();
  }

  async getPublicTenderCandidates(cod: string): Promise<any> {
    // GET /public_tenders/001-2018/candidates RETORNA os candidatos compatíveis com o concurso indicado
    return await this.http.get(`${this.API_URL}/${cod}/candidates`).toPromise();
  }
}
