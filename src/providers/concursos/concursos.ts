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
    this.API_URL = (process.env.URL || "http://localhost:3000/concursos");
  }

  async getAll(): Promise<any> {
    // RETORNA todos os concursos
    try {
      const res = await this.http.get(`${this.API_URL}`).toPromise();
      return res;
    } catch (error) {
      return([]);
    }
  }

  async getPublicTender(cod: string): Promise<any> {
    // RETORNA o concurso indicado
    try {
      const res = await this.http.get(`${this.API_URL}/${cod}`).toPromise();
      return res;
    } catch (error) {
      return([]);
    }
  }

  async getPublicTenderCandidates(cod: string): Promise<any> {
    // RETORNA os candidatos compatíveis com o concurso indicado
    try {
      const res = await this.http.get(`${this.API_URL}/${cod}/candidates`).toPromise();
      return res;
    } catch (error) {
      return([]);
    }
  }
}
