import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundEffectsService {

  public draw=[
    ['../../../assets/sounds/annonceur/draw/draw.wav'],
    ['../../../assets/sounds/annonceur/draw/match nul.wav']
  ];

  public félicitations=[
    ['../../../assets/sounds/annonceur/félicitations/bien joué.wav'],
    ['../../../assets/sounds/annonceur/félicitations/fantastique.wav'],
    ['../../../assets/sounds/annonceur/félicitations/félicitations.wav'],
    ['../../../assets/sounds/annonceur/félicitations/wow impressionnant.wav']
  ];

  public win='../../../assets/sounds/annonceur/win/victoire.wav';

  public audioDraw = new Audio();
  public audioFélicitations = new Audio();
  public audioWin = new Audio(this.win);

  constructor() { }

  getRandomDraw=()=>this.draw[Math.floor(Math.random()*this.draw.length)][0];

  getRandomFelicitation=()=>this.félicitations[Math.floor(Math.random()*this.félicitations.length)][0];

  getWin=()=>this.audioWin;
}
