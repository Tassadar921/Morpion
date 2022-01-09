import { Component} from '@angular/core';

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
  ){}

  switch=(val)=>{ //toggle pour les components
    this.tab=val;
  };

  reinit=()=>{
    this.tab=1;
    this.glob.reinit();
  };

}
