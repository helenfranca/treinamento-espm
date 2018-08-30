import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { DetalhesConcursoPage } from "../../pages/detalhes-concurso/detalhes-concurso";
import { ConcursosProvider } from "../../providers/concursos/concursos";
import { LoadingController } from "ionic-angular/components/loading/loading-controller";

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
  private concursos: [{
    id: number,
    department: string,
    document_number: string,
    code: string,
    jobs: [string]
  }];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public concursosProvider: ConcursosProvider,
    public loadingCtrl: LoadingController
  ) {
    this.concursos = this.navParams.data;
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: 'Carregando'
    });
    loader.present();
    return loader;
  }

  async verDetalhes(codigo) {
    /* FAZER REQUISIÇÃO À API */
    const loader = this.presentLoading();
    const concurso = await this.concursosProvider.getPublicTender(codigo);
    loader.dismiss();

    /* NAVEGAR ATÉ A TELA DE DETALHES DO CONCURSO */
    this.navCtrl.push(DetalhesConcursoPage, concurso);
  }
}
