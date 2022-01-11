import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService { //on gère ici tout ce qui est audio de la bande originale

  public sound = new Audio('./assets/sounds/music/Lifelight ( English Ver.) - Super Smash Bros. Ultimate Main Theme.mp3');

  constructor() {
    this.sound.volume = 0.125;
  }

  setVolume=(val)=>this.sound.volume=val;

  getSound=()=>this.sound;

  play=()=>this.sound.play();

  mute=(bool)=>this.sound.muted=bool;

  stop=()=>{
    this.sound.pause();
    this.sound.currentTime=0;
  };

  pause=()=>this.sound.pause();

  paused=()=>{
    if(this.sound.paused){return true;}
    else{return false;}
  };
}
