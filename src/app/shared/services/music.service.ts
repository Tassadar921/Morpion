import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  public sound = new Audio('../../assets/music/Lifelight ( English Ver.) - Super Smash Bros. Ultimate Main Theme.mp3');

  constructor() {
    this.sound.volume = 0.125;
  }

  setVolume=(val)=>{
    this.sound.volume=val;
  };

  getSound=()=>{
    return this.sound;
  };

  play=()=>{
    this.sound.play();
  };

  mute=(bool)=>{
    this.sound.muted=bool;
  };

  stop=()=>{
    this.sound.pause();
    this.sound.currentTime=0;
  };

  pause=()=>{
    this.sound.pause();
  };

  paused=()=>{
    if(this.sound.paused){return true;}
    else{return false;}
  };
}
