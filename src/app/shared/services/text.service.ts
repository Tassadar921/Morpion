import { Injectable } from '@angular/core';
import { GlobalVarsService} from './global-vars.service';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  public debut = [ //p1 commence
    ['Le marteau du destin a encore frappé : ce sera p1 qui commencera'],
    ['Malheureusement pour p2 ce sera p1 qui commencera'],
    ['Plus de doute, p1 défie les lois des probabilités'],
    ['On espère pour p1 qu\'il est célibataire au vu de sa chance'],
    ['p1 est passé sous le bureau, c\'est officiel'],
    ['Malheureux en amour, chanceux aux jeux ... p1 et p2 se reconnaîtront chacun avant ou après la virgule'],
    ['Il n\'y a décidément aucune justice sur Terre pour p2'],
    ['Pour dur pour p2, p1 commencera'],
  ];

  public fin = [ //p1 winner
    ['p1 a été meilleur'],
    ['p2 a été sacrément mauvais'],
    ['R.I.P. p2'],
    ['p2 n\'est décidément pas très perspicace'],
    ['p2 comprend vite mais faut lui expliquer longtemps !'],
  ];

  public draw = [
    ['p1 et p2 ont été aussi mauvais l\'un que l\'autre'],
    [''],
    [''],
    [''],
    [''],
  ];

  constructor() { }

  getRandomBegin=()=>{

  };

  getRandomEnd=()=>{

  };

  getRandomDraw=()=>{

  };

}
