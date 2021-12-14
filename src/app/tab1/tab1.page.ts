import { Component, OnInit} from '@angular/core';
import { GlobalVarsService } from '../shared/services/global-vars.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  public tab=1;

  public sound=new Audio('../../assets/music/Lifelight ( English Ver.) - Super Smash Bros. Ultimate Main Theme.mp3');

  constructor(
    private glob: GlobalVarsService,
  ){}

  ngOnInit() {
    this.sound.volume=0.1;
    this.sound.play();
  }

  switch=(val)=>{
    this.tab=val;
  };
}
