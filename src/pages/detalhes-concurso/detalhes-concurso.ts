import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the DetalhesConcursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-detalhes-concurso",
  templateUrl: "detalhes-concurso.html"
})
export class DetalhesConcursoPage {
  private orgao: string;
  private edital: string;
  private codigo: string;
  private vagas: any;
  private concurso: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.inicializa();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DetalhesConcursoPage");
  }
  async inicializa() {
    this.concurso = await this.navParams.data;
    console.log("teste", this.concurso);
  }
}
