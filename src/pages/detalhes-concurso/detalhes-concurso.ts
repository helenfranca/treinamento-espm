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
  private orgao: string;
  private edital: string;
  private codigo: string;
  private vagas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams);
    this.orgao = this.navParams.get('orgao');
    this.edital = this.navParams.get('edital');
    this.codigo = this.navParams.get('codigo');
    this.vagas = this.navParams.get('vagas');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesConcursoPage');
  }
}
