import { Component, OnInit } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';

import { PersonnagesService} from '../../shared/services/personnages.service';
import { GlobalVarsService} from '../../shared/services/global-vars.service';

@Component({
  selector: 'app-choix',
  templateUrl: './choix.component.html',
  styleUrls: ['./choix.component.scss'],
})
export class ChoixComponent implements OnInit {

  public listPerso;
  public error = '';
  public glow;
  public input;

  constructor(
    private data: PersonnagesService,
    private glob: GlobalVarsService,
    private actionSheetController: ActionSheetController,
  ) {
  }

  ngOnInit() {
    this.listPerso = this.data.getData();
  }

  getPositionByName = (name) => {
    let ajustment = 0; //on incrémente quand l'image n'est pas affichée
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

  onKeypressEvent = (filter) => { //filtre de la searchbar
    for (const line of this.listPerso) {
      if (!line.name.toUpperCase().includes(filter.target.value.toUpperCase())) {
        line.show = false;
      } else {
        line.show = true;
      }
    }
  };

  displayReset = () => { // on réaffiche tout au clear de la searchbar
    for (const line of this.listPerso) {
      if (line.show === false) {
        line.show = true;
      }
    }
  };

  reinit = () => { //on supprime le choix des perso
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

  resetP1 = () => {
    this.glob.resetPic1();
    if (document.getElementById('glow_blue')) {
      document.getElementById('glow_blue').removeAttribute('id');
    }
  };

  resetP2 = () => {
    this.glob.resetPic2();
    if (document.getElementById('glow_red')) {
      document.getElementById('glow_red').removeAttribute('id');
    }
  };

  async select(url, name) {
    this.glow = this.getPositionByName(name);
    const player = '../' + url;
    let actionSheet;
    if (this.glob.getPic1() === '../../../assets/pics/sprites_choix/point_interrogation.png') //si pic1 est celle de base
    {
      actionSheet = await this.actionSheetController.create({
        header: 'Choisir ' + name + ' pour ' + this.glob.getNick1() + ' ?',
        cssClass: 'my-custom-class',
        buttons: [{
          text: 'Oui',
          role: 'destructive',
          icon: 'game-controller',
          handler: () => {
            this.glob.setPic1(player);
            document.getElementsByClassName('zoom')[this.glow].setAttribute('id', 'glow_blue');
          }
        }, {
          text: 'Non',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      await actionSheet.present();
    } else {
      if (player === this.glob.getPic1()) {
        this.error = 'Merci de choisir des perso. différents';
      }else {
      if (this.glob.getPic2() === '../../../assets/pics/sprites_choix/point_interrogation.png') {
        actionSheet = await this.actionSheetController.create({
          header: 'Choisir ' + name + ' pour ' + this.glob.getNick2() + ' ?',
          cssClass: 'my-custom-class',
          buttons: [{
            text: 'Oui',
            role: 'destructive',
            icon: 'game-controller',
            handler: () => {
              this.glob.setPic2(player);
              document.getElementsByClassName('zoom')[this.glow].setAttribute('id', 'glow_red');
              this.error = '';
            }
          }, {
            text: 'Non',
            icon: 'close',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }]
        });
        await actionSheet.present();
      } else {
          this.error = 'Vous avez déjà choisi 2 perso.';
        }

      }
    }
  }
}

