import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { DetalhesConcursoPage } from "./../detalhes-concurso/detalhes-concurso";

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
  concursos: Array<{ orgao: string; edital: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.concursos = [
      { orgao: "SEDU", edital: "09/2015" },
      { orgao: "PRODEST", edital: "01/2018" }
    ];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ListaConcursosPage");
  }

  verDetalhes(event, conc) {
    this.navCtrl.push(DetalhesConcursoPage, { conc: conc });
  }
}
