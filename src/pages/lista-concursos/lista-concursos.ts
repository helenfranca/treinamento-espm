import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { DetalhesConcursoPage } from "../../pages/detalhes-concurso/detalhes-concurso";
import { ConcursosProvider } from "../../providers/concursos/concursos";
import { LoadingController } from "ionic-angular/components/loading/loading-controller";
import { CandidatosProvider } from "../../providers/candidatos/candidatos";
import { ToastController } from "ionic-angular/components/toast/toast-controller";
import { InfiniteScroll } from "ionic-angular/components/infinite-scroll/infinite-scroll";

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
    occupations: [string]
  }];
  private page: number;
  private cpf: string;
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public concursosProvider: ConcursosProvider,
    public candidatosProvider: CandidatosProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) {
    this.concursos = this.navParams.data.concursos;
    this.cpf = this.navParams.data.cpf;
    this.page = 1;
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: "Todos os concursos exibidos",
      duration: 2000,
      position: "middle"
    });
    toast.present();
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
    await loader.dismiss();

    /* NAVEGAR ATÉ A TELA DE DETALHES DO CONCURSO */
    this.navCtrl.push(DetalhesConcursoPage, concurso);
  }

  async doInfinite(infiniteScroll): Promise<any> {

    /* Checar se ainda há concursos a verificar */
    if (this.page == 0) {
      infiniteScroll.complete();
      return;
    }

    /* Requisição à API */
    const res = await this.candidatosProvider.getCandidatePublicTenders(this.cpf, this.page+1);
    
    /* Checar se houve resposta, se não, finaliza o scroll */
    if (res.length == 0) {
      this.page = 0; // impede novos scrolls
      this.presentToast(); // informa o usuário
      infiniteScroll.complete();
      return;
    }

    /* Incrementa página, concatena respostas e finaliza o scroll */
    this.page++;
    res.map((concurso) => {
      this.concursos.push(concurso);
    });
    infiniteScroll.complete();
  }
}
