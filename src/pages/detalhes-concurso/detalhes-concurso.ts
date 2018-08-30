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
    id: number,
    department: string,
    document_number: string,
    code: string,
    jobs: [string]
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.concurso = this.navParams.data;
  }
}
