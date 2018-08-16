import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhesConcursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-concurso',
  templateUrl: 'detalhes-concurso.html',
})
export class DetalhesConcursoPage {
  
  private concurso: {
    orgao: string,
    edital: string,
    codigo: string,
    vagas: [string]
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams);
    this.concurso = this.navParams.get('concurso');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesConcursoPage');
  }
}
