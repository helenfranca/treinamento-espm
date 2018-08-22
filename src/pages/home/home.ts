import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaConcursosPage } from '../lista-concursos/lista-concursos';
import { RequestApiProvider } from '../../providers/request-api/request-api';

import concursos from "../../data/concursos";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController, private requestApiProvider: RequestApiProvider) {
    
  }

  async buscarConcursos() {
    let resposta = await this.requestApiProvider.buscarListaConcursosPeloCPF('319.655.881-15');
    console.log("home.ts buscarConcursos()", resposta);
    // this.navCtrl.push(ListaConcursosPage, concursos);
  }
}
