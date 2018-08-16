import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListaConcursosPage } from "./../pages/lista-concursos/lista-concursos";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetalhesConcursoPage } from '../pages/detalhes-concurso/detalhes-concurso';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetalhesConcursoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetalhesConcursoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
