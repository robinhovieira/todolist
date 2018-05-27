import { Component, Pipe, PipeTransform } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { TarefaPage } from '../tarefa/tarefa';
import { TarefasService } from '../../providers/tarefas-service';
import { ProjetosService } from '../../providers/projetos-service';
import { PesquisaPage } from '../../pages/pesquisa/pesquisa'
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html'
})
export class TarefasPage {
  
  tarefas: any[];
  projetos: any[];
  filtroTarefas = {};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public menuCtrl: MenuController,
              public tarefasService: TarefasService,
              public projetosService: ProjetosService) {
    this.projetos = projetosService.getProjetos();
    this.tarefas = tarefasService.getTarefas();
  }

  nomeProjeto(c):string {
    for(let i=0; i<this.projetos.length; i++)
      if(this.projetos[i].codigo == c)
        return this.projetos[i].nome;
    return "Projeto não encontrado";
  }

  selecionaTarefa(c) {
    let t:number = parseInt(c);
    this.navCtrl.push(TarefaPage, {codigo:t, novo:false});
  }

  novaTarefa() {
    this.navCtrl.push(TarefaPage, {codigo:0, novo:true});
  }

  limpaFiltros() {
    this.filtroTarefas = {};
    this.menuCtrl.close();
  }

  filtroProjeto(c) {
    this.filtroTarefas = { projeto: c };
    this.menuCtrl.close();
  }

  filtroDias(d) {
    this.filtroTarefas = { dias: d };
    this.menuCtrl.close();
  }

  pesquisa(ev){

    this.tarefas = this.tarefasService.getTarefas();
    
    var val = ev.target.value;

  if (val && val.trim() != '') {
    this.tarefas = this.tarefas.filter((t) => {
      if(t.descricao && val){
         if(t.descricao.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return true;
            }
          return false;
          }
    })
  }
  else
    return false;
  }
}

@Pipe({
  name: 'filtro'
})
export class Filtro implements PipeTransform {
  transform(itens:any[],filtro:any):any {
    itens.sort((a,b) => a.data-b.data);
    if(filtro.projeto>=0){
      return itens.filter(item => item.projeto == filtro.projeto);
    }
    else if(filtro.dias>=0) {
      let d = new Date((new Date()).getTime() + filtro.dias*24*60*60*1000) ;
      return itens.filter(
        item => item.data <= d
      );
    }
    else
      return itens;
  }
}