import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaConcursosPage } from '../lista-concursos/lista-concursos';

import concursos from "../../data/concursos";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController) {
    
  }

  async buscarConcursos() {
    //let resposta = await this.api.buscarConcursos('458.162.182-99');
    //console.log(resposta);
    this.navCtrl.push(ListaConcursosPage, concursos);
  }
}
