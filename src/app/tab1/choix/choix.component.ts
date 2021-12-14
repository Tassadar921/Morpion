import { Component, OnInit } from '@angular/core';

import { PersonnagesService} from '../../shared/services/personnages.service';
import { GlobalVarsService} from '../../shared/services/global-vars.service';

@Component({
  selector: 'app-choix',
  templateUrl: './choix.component.html',
  styleUrls: ['./choix.component.scss'],
})
export class ChoixComponent implements OnInit{

  public listPerso;
  public error='';
  public glow;
  public input;

  constructor(
    private data: PersonnagesService,
    private glob: GlobalVarsService,
  ) {}

  ngOnInit(){
    this.listPerso=this.data.getData();
  }

  getPositionByName=(name)=>{
    let ajustment=0; //on incrémente quand l'image n'est pas affichée
    for(let i=0;i<this.listPerso.length;i++){
      if(this.listPerso[i].show===false){ajustment++;}
      if(this.listPerso[i].name===name){
        return i-ajustment;
      }
    }
  };

  select=(url, name)=>{ //on récupère l'image cliquée par son url et son nom, on l'assigne aux joueurs en commençant par le 1 puis par le 2 et on gère les erreurs
    this.glow=this.getPositionByName(name);
    const player='../'+url;
    if(this.glob.getPic1()==='../../../assets/pics/sprites_choix/point_interrogation.png') //si pic1 est celle de base
    {
      if(window.confirm('Choisir ' + name + ' pour ' + this.glob.getNick1() + ' ?')) {
        this.glob.setPic1(player);
        document.getElementsByClassName('zoom')[this.glow].setAttribute('id', 'glow_blue');
      }
    }
    else {
      if(this.glob.getPic2()==='../../../assets/pics/sprites_choix/point_interrogation.png')
      {
        if(window.confirm('Choisir ' + name + ' pour ' + this.glob.getNick2() + ' ?') && player!==this.glob.getPic1()) {
          this.glob.setPic2(player);
          document.getElementsByClassName('zoom')[this.glow].setAttribute('id', 'glow_red');
          this.error='';
        }else{
          if(player===this.glob.getPic1()){
            this.error='Merci de choisir des perso. différents';
          }
        }
      }else{this.error='Vous avez déjà choisi 2 perso.';}
    }
  };

  random=()=>{ //sélection aléatoire de perso
    this.displayReset();
    this.input='';
    this.glow = Math.floor(Math.random()*this.listPerso.length);
    this.select(this.listPerso[this.glow].pic,this.listPerso[this.glow].name);
  };

  onKeypressEvent=(filter)=>{ //filtre de la searchbar
    for(const line of this.listPerso){
      if(!line.name.toUpperCase().includes(filter.target.value.toUpperCase())){
        line.show=false;
      }
      else{line.show=true;}
    }
  };

  displayReset=()=>{ // on réaffiche tout au clear de la searchbar
    for(const line of this.listPerso){
      if(line.show===false){
        line.show=true;
      }
    }
  };

  reinit=()=>{ //on supprime le choix des perso
    this.glob.setPic1('../../../assets/pics/sprites_choix/point_interrogation.png');
    this.glob.setPic2('../../../assets/pics/sprites_choix/point_interrogation.png');
    this.error = '';

    if (document.getElementById('glow_blue')) {
      document.getElementById('glow_blue').removeAttribute('id');
    }
    if (document.getElementById('glow_red')) {
      document.getElementById('glow_red').removeAttribute('id');
    }
  };
}
