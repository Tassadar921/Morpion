import { Component, OnInit, AfterViewInit } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';

import { PersonnagesService} from '../../shared/services/personnages.service';
import { GlobalVarsService} from '../../shared/services/global-vars.service';

@Component({
  selector: 'app-choix',
  templateUrl: './choix.component.html',
  styleUrls: ['./choix.component.scss'],
})
export class ChoixComponent implements OnInit, AfterViewInit {

  public listPerso;
  public error = '';
  public glow;
  public count=0;
  public input='';
  public sonChargement = new Audio('../../assets/sounds/annonceur/choisir.wav');
  public red=false;
  public blue=false;

  constructor(
    private data: PersonnagesService,
    private glob: GlobalVarsService,
    private actionSheetController: ActionSheetController,
  ) {}

  ngOnInit() {
    this.sonChargement.play();
    this.listPerso = this.data.getData();
  }

  ngAfterViewInit() {//une fois que tout est affiché on setglow (inutile au 1er chargement mais c'est en cas de changement de perso entre plusieurs games, on a une save des perso si l'un veut garder le sien
    this.setGlow();
  }

  setGlow = () => { //c'est dégueu mais impossible de trouver une autre façon de faire
    //du coup c'est pour set la glow en fonction des choix1 et choix2 de glob

    if(this.blue===false && document.getElementsByClassName('glow_blue')[0]){
      document.getElementsByClassName('glow_blue')[0].removeAttribute('class');
    }

    if(this.red===false && document.getElementsByClassName('glow_red')[0]){
      document.getElementsByClassName('glow_red')[0].removeAttribute('class');
    }

    if(this.glob.getChoix1() && document.getElementById(this.glob.getChoix1())){
      if(!document.getElementById(this.glob.getChoix1()).className.includes('glow_blue')) {
        document.getElementById(this.glob.getChoix1()).className += 'glow_blue';
      }
    }

    if (this.glob.getChoix2() && document.getElementById(this.glob.getChoix2())) {
      if(!document.getElementById(this.glob.getChoix2()).className.includes('glow_red')) {
        document.getElementById(this.glob.getChoix2()).className += 'glow_red';
      }
    }
  };

  random = () => { //sélection aléatoire de perso
    this.displayReset();
    this.input='';
    this.glow = Math.floor(Math.random() * this.listPerso.length);
    this.select(this.listPerso[this.glow].pic, this.listPerso[this.glow].name);
  };

  onKeypressEvent = (filter) => { //filtre de la searchbar (j'en ai chié) reste des bugs de glow mais aucune idée de comment les régler
    for (const line of this.listPerso) {
      line.show = line.name.toUpperCase().includes(filter.target.value.toUpperCase());
    }
    //this.setGlow();
  };

  async displayReset(){ // on réaffiche tout au clear de la searchbar
    for (const line of this.listPerso) {
      if (line.show === false) {
        line.show = true;
      }
    }
    await this.setGlow();
  }

  reinit = () => { //on supprime le choix des perso
    this.glob.setPic1('../../../assets/pics/sprites_choix/point_interrogation.png');
    this.glob.setPic2('../../../assets/pics/sprites_choix/point_interrogation.png');
    this.glob.resetChoix1();
    this.glob.resetChoix2();
    this.blue=false;
    this.red=false;
    this.setGlow();
    this.error = '';
  };

  resetP1 = () => { //le nom parle de lui-même
    this.glob.resetPic1();
    this.glob.resetChoix1();
    this.blue=false;
    this.setGlow();
  };

  resetP2 = () => { //idem ici
    this.glob.resetPic2();
    this.glob.resetChoix2();
    this.red=false;
    this.setGlow();
  };

  async action(turn, player, name, end, audio){
    const actionSheet = await this.actionSheetController.create({
      header: 'Choisir ' + name + ' pour ' + this.glob.getNick2() + end,
      buttons: [{
        text: 'Oui',
        role: 'destructive',
        icon: 'game-controller',
        handler: () => {
          if(turn===1){
            audio.play();
            this.glob.setPic1(player);
            this.glob.setChoix1(name);
            this.setGlow();
            this.blue = true;
          }else{
            audio.play();
            this.glob.setPic2(player);
            this.glob.setChoix2(name);
            this.setGlow();
            this.red = true;
            this.error = '';
          }
        }
      }, {
        text: 'Non',
        icon: 'close',
        role: 'cancel',
      }]
    });
    await actionSheet.present();
  };

  async select(url, name) { //trigger sur clic et gestion de tous les cas particuliers
    const audio = new Audio('../../assets/sounds/persos/' + name + '.wav');
    const player = '../' + url;
    let end;
    if (name === 'Valentin') {
      end = ' ? Attention il s\'agit du pire perso du jeu';
    } else {
      end = ' ?';
    }

    if (this.glob.getPic1() === '../../../assets/pics/sprites_choix/point_interrogation.png') //si pic1 est indéfinie
    {
      this.action(1, player, name, end, audio);
    } else {
      if (player === this.glob.getPic1()) {//sinon si pic1 = sélection
        this.error = 'Merci de choisir des perso. différents';
      } else {
        if (this.glob.getPic2() === '../../../assets/pics/sprites_choix/point_interrogation.png') { //sinon si pic2 inféfinie
          this.action(2, player, name, end, audio);
        } else { //dernière possibilité : si les 2 sont déjà sélectionnés et qu'on en resélectionne un
          this.error = 'Vous avez déjà choisi 2 perso.';
        }
      }
    }
  }
}

