import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaConcursosPage } from '../lista-concursos/lista-concursos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController) {

  }

  teste(){
    this.navCtrl.push(ListaConcursosPage);
  }

}
