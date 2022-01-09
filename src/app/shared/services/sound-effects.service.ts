import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundEffectsService {

  public félicitations=[ //c'est prêt à être implémenté mais faut se remettre du nouvel an du coup dodo>code
    ['../../../assets/sounds/annonceur/félicitations/bien joué.wav'],
    ['../../../assets/sounds/annonceur/félicitations/fantastique.wav'],
    ['../../../assets/sounds/annonceur/félicitations/félicitations.wav'],
    ['../../../assets/sounds/annonceur/félicitations/wow impressionnant.wav']
  ];

  public audioFélicitations = new Audio();
  public audioDraw = new Audio('../../../assets/sounds/annonceur/draw/match nul.wav');
  public audioWin = new Audio('../../../assets/sounds/annonceur/win/victoire.wav');

  constructor() { }

  getDraw=()=>this.audioDraw;

  getRandomFelicitation=()=>this.félicitations[Math.floor(Math.random()*this.félicitations.length)][0]; //on return le son avec sa source, qui est choisie aléatoirement mais du coup c'est pas implémenté

  getWin=()=>this.audioWin;
}
