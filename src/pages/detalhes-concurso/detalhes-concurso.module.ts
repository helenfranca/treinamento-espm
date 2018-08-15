import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesConcursoPage } from './detalhes-concurso';

@NgModule({
  declarations: [
    DetalhesConcursoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesConcursoPage),
  ],
})
export class DetalhesConcursoPageModule {}
