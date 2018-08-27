import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaConcursosPage } from '../lista-concursos/lista-concursos';

import { CandidatosProvider } from '../../providers/candidatos/candidatos';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController, private candidatosProvider: CandidatosProvider) {
    
  }

  async buscarConcursos(cpf: string) {
    console.log(cpf);
    let concursos = await this.candidatosProvider.getCandidatePublicTenders(cpf);
    // console.log("home.ts buscarConcursos()", resposta);
    this.navCtrl.push(ListaConcursosPage, concursos);
  }
}
