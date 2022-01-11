import { Component} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';

import { GlobalVarsService } from '../shared/services/global-vars.service';
import { MusicService} from '../shared/services/music.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{

  public tab=1;
  public music=this.sound.getSound();
  public volume;

  constructor(
    public glob: GlobalVarsService,
    public sound: MusicService,
    private actionSheetController: ActionSheetController,
  ){}

  switch=(val)=>{ //toggle pour les components
    this.tab=val;
  };

  async reinit(){
    const actionSheet = await this.actionSheetController.create({
      header: 'Sûr de changer de joueurs ?',
      buttons: [{
        text: 'Oui',
        role: 'destructive',
        icon: 'game-controller',
        handler: () => {
          this.tab=1;
          this.glob.reinit();
        }
      }, {
        text: 'Non',
        icon: 'close',
        role: 'cancel',
      }]
    });
    await actionSheet.present();
  };

}
