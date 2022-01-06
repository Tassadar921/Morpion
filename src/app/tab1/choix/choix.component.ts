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
  public input;
  public count=0;
  public sonChargement = new Audio('../../assets/sounds/annonceur/choisir.wav');
  public red=false;
  public blue=false;

  constructor(
    private data: PersonnagesService,
    private glob: GlobalVarsService,
    private actionSheetController: ActionSheetController,
  ) {
  }

  ngOnInit() {
    this.sonChargement.play();
    this.listPerso = this.data.getData();
  }

  ngAfterViewInit() {
    //if(document.getElementsByClassName('random')[0]){console.log(true);}else{console.log(false);}
    this.setGlow();
  }

  setGlow = () => {

    if(this.blue===false && document.getElementsByClassName('glow_blue')[0]){
      document.getElementsByClassName('glow_blue')[0].removeAttribute('class');
    }

    if(this.red===false && document.getElementsByClassName('glow_red')[0]){
      document.getElementsByClassName('glow_red')[0].removeAttribute('class');
    }

    if(this.glob.getChoix1()){
      if(!document.getElementById(this.glob.getChoix1()).className.includes('glow_blue')) {
        document.getElementById(this.glob.getChoix1()).className += 'glow_blue';
      }
    }

    if (this.glob.getChoix2()) {
      if(!document.getElementById(this.glob.getChoix2()).className.includes('glow_red')) {
        document.getElementById(this.glob.getChoix2()).className += 'glow_red';
      }
    }
  };

  getPositionByName = (name) => {
    let ajustment = 0; //on incrémente quand l'image n'est pas affichée (c'est pour la gestion de l'effet de glow quand on a un filtre actif)
    for (let i = 0; i < this.listPerso.length; i++) {
      if (this.listPerso[i].show === false) {
        ajustment++;
      }
      if (this.listPerso[i].name === name) {
        return i - ajustment;
      }
    }
  };

  random = () => { //sélection aléatoire de perso
    this.displayReset();
    this.input = '';
    this.glow = Math.floor(Math.random() * this.listPerso.length);
    this.select(this.listPerso[this.glow].pic, this.listPerso[this.glow].name);
  };

  onKeypressEvent = (filter) => { //filtre de la searchbar (j'en ai chié)
    for (const line of this.listPerso) {
      if (!line.name.toUpperCase().includes(filter.target.value.toUpperCase())) {
        line.show = false;
      } else {
        line.show = true;
      }
    }
    this.setGlow();
  };

  displayReset(){ // on réaffiche tout au clear de la searchbar
    for (const line of this.listPerso) {
      if (line.show === false) {
        line.show = true;
      }
    }
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

  async select(url, name) { //trigger sur clic et gestion de tous les cas particuliers
    const audio=new Audio('../../assets/sounds/persos/' + name + '.wav');
    this.glow = this.getPositionByName(name);
    const player = '../' + url;
    let actionSheet;
    if (this.glob.getPic1() === '../../../assets/pics/sprites_choix/point_interrogation.png') //si pic1 est indéfinie
    {
      if(name==='Valentin'){
        actionSheet = await this.actionSheetController.create({
          header: 'Choisir ' + name + ' pour ' + this.glob.getNick1() + ' ? Attention il s\'agit du pire perso du jeu',
          buttons: [{
            text: 'Oui',
            role: 'destructive',
            icon: 'game-controller',
            handler: () => {
              audio.play();
              this.glob.setPic1(player);
              this.glob.setChoix1(name);
              this.setGlow();
              this.blue=true;
            }
          }, {
            text: 'Non',
            icon: 'close',
            role: 'cancel',
          }]
        });
      }
      else {
        actionSheet = await this.actionSheetController.create({
          header: 'Choisir ' + name + ' pour ' + this.glob.getNick1() + ' ?',
          buttons: [{
            text: 'Oui',
            role: 'destructive',
            icon: 'game-controller',
            handler: () => {
              audio.play();
              this.glob.setPic1(player);
              this.glob.setChoix1(name);
              this.setGlow();
              this.blue=true;
            }
          }, {
            text: 'Non',
            icon: 'close',
            role: 'cancel',
          }]
        });
      }
      await actionSheet.present();
    } else {
      if (player === this.glob.getPic1()) {
        this.error = 'Merci de choisir des perso. différents';
      }else {
      if (this.glob.getPic2() === '../../../assets/pics/sprites_choix/point_interrogation.png') {
        if(name==='Valentin'){
          actionSheet = await this.actionSheetController.create({
            header: 'Choisir ' + name + ' pour ' + this.glob.getNick2() + ' ? Attention il s\'agit du pire perso du jeu',
            buttons: [{
              text: 'Oui',
              role: 'destructive',
              icon: 'game-controller',
              handler: () => {
                audio.play();
                this.glob.setPic2(player);
                this.glob.setChoix2(name);
                this.setGlow();
                this.red=true;
                this.error = '';
              }
            }, {
              text: 'Non',
              icon: 'close',
              role: 'cancel',
            }]
          });
        }
        else{
        actionSheet = await this.actionSheetController.create({
          header: 'Choisir ' + name + ' pour ' + this.glob.getNick2() + ' ?',
          buttons: [{
            text: 'Oui',
            role: 'destructive',
            icon: 'game-controller',
            handler: () => {
              audio.play();
              this.glob.setPic2(player);
              this.glob.setChoix2(name);
              this.setGlow();
              this.red=true;
              this.error = '';
            }
          }, {
            text: 'Non',
            icon: 'close',
            role: 'cancel',
          }]
        });
        }
        await actionSheet.present();
      } else {
          this.error = 'Vous avez déjà choisi 2 perso.';
        }
      }
    }
  }
}

