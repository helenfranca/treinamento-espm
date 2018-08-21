import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { DetalhesConcursoPage } from "../../pages/detalhes-concurso/detalhes-concurso";

/**
 * Generated class for the ListaConcursosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-lista-concursos",
  templateUrl: "lista-concursos.html"
})
export class ListaConcursosPage {
  private candidato: any;
  private concursos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.candidato = navParams.get("candidato");
    /* this.concursos = [
      { orgao: "SEDU", edital: "09/2015" },
      { orgao: "PRODEST", edital: "01/2018" }
    ]; */
    this.concursos = this.navParams.data;
    // this.candidato = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ListaConcursosPage");
  }

  verDetalhes(concurso) {
    this.navCtrl.push(DetalhesConcursoPage, concurso);
  }
}
