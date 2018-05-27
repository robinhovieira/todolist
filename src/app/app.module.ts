import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProjetosPage } from '../pages/projetos/projetos';
import { ProjetoPage } from '../pages/projeto/projeto';
import { TabsPage } from '../pages/tabs/tabs';
import { TarefasPage, Filtro } from '../pages/tarefas/tarefas';
import { TarefaPage } from '../pages/tarefa/tarefa';
import { BrowserModule } from '@angular/platform-browser';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';

import { ProjetosService } from '../providers/projetos-service';
import { TarefasService } from '../providers/tarefas-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { Platform } from 'ionic-angular';
import {Vibration} from '@ionic-native/vibration';
//funcionalidade nativa vibrar

import {NavigationBar} from '@ionic-native/navigation-bar';
//NavigationBar permite ocultar e ocultar automaticamente a barra de navegação do Android


@NgModule({
  declarations: [
    MyApp,
    ProjetosPage,
    ProjetoPage,
    TabsPage,
    TarefasPage,
    TarefaPage,
    Filtro,
    ConfiguracaoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProjetosPage,
    ProjetoPage,
    TabsPage,
    TarefasPage,
    TarefaPage,
    ConfiguracaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProjetosService,
    TarefasService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Vibration,
    NavigationBar
  ]
})
export class AppModule {}
