import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProjetosService } from '../../providers/projetos-service';
import { ProjetoPage } from '../projeto/projeto';

@Component({
  selector: 'page-projetos',
  templateUrl: 'projetos.html'
})
export class ProjetosPage {

  projetos: any[];

  constructor( public navCtrl: NavController, 
               public navParams: NavParams,
               public projetosService: ProjetosService ) {
               this.projetos = projetosService.getProjetos();
               }

  selecionaProjeto(c) {
    let cn = parseInt(c);
    this.navCtrl.push(ProjetoPage, {codigo: cn, novo: false});
  }

  novoProjeto() {
    this.navCtrl.push(ProjetoPage, {codigo: 0, novo: true});
  }


  

  pesquisa(ev){

    this.projetos = this.projetosService.getProjetos();

    var val = ev.target.value;
    
  if (val && val.trim() != '') {
    this.projetos = this.projetos.filter((p) => {
      if(p.nome && val){
         if(p.nome.toLowerCase().indexOf(val.toLowerCase()) > -1) {
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


