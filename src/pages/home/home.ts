import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaConcursosPage } from '../lista-concursos/lista-concursos';

import { CandidatosProvider } from '../../providers/candidatos/candidatos';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public candidatosProvider: CandidatosProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
    //
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: 'Buscando...'
    });
    loader.present();
    return loader;
  }

  showInvalidCpfAlert() {
    const alert = this.alertCtrl.create({
      title: 'CPF inválido',
      subTitle: 'Informe um CPF válido',
      buttons: ['OK']
    });
    alert.present();
  }

  showNotFoundAlert() {
    const alert = this.alertCtrl.create({
      title: 'Nenhum concurso encontrado',
      subTitle: 'Tente outro CPF',
      buttons: ['OK']
    });
    alert.present();
  }

  validarCpf(cpf: string): boolean {
    if (cpf && cpf.length <= 11) {
      const match = cpf.match(/\d{11}/);
      // console.log('match', match);
      return match && match[0].length == 11 ? true : false;
    }
    return false;
  }

  async buscarConcursos(cpf: string) {
    /* VALIDAR CPF */
    if (!this.validarCpf(cpf)) {
      this.showInvalidCpfAlert();
      return;
    }

    /* FAZER REQUISIÇÃO À API */
    const loader = this.presentLoading();
    let concursos: [{}] = await this.candidatosProvider.getCandidatePublicTenders(cpf, 1);
    await loader.dismiss();

    /* VALIDAR RESPOSTA DA API */
    if (concursos == null || concursos.length == 0) {
      this.showNotFoundAlert();
      return;
    }

    /* NAVEGAR PARA A LISTA DE CONCURSOS */
    this.navCtrl.push(ListaConcursosPage, {
      concursos: concursos,
      cpf: cpf
    });
  }
}
