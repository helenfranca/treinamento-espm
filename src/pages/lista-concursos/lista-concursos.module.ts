import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaConcursosPage } from './lista-concursos';

@NgModule({
  declarations: [
    ListaConcursosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaConcursosPage),
  ],
})
export class ListaConcursosPageModule {}
