import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  public victoire=[ //c'est prêt à être implémenté mais faut se remettre du nouvel an du coup dodo>code
    ['../../../assets/gif/victoire 2.gif'],
    ['../../../assets/gif/victoire 1.gif']
  ];

  public defaite='../../../assets/gif/défaite 1.gif';

  constructor() { }

  getVictoire=()=>this.victoire[Math.floor(Math.random()*this.victoire.length)][0];
  getDefaite=()=>this.defaite;
}
