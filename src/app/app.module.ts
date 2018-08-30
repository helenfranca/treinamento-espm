import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetalhesConcursoPage } from '../pages/detalhes-concurso/detalhes-concurso';
import { ListaConcursosPage } from '../pages/lista-concursos/lista-concursos';
import { HttpClientModule } from "@angular/common/http";
import { ConcursosProvider } from '../providers/concursos/concursos';
import { CandidatosProvider } from '../providers/candidatos/candidatos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaConcursosPage,
    DetalhesConcursoPage    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaConcursosPage,
    DetalhesConcursoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConcursosProvider,
    CandidatosProvider
  ]
})
export class AppModule {}
