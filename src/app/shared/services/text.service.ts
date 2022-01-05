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
    ['Coup dur pour p2, p1 commencera'],
  ];

  public fin = [ //p1 winner
    ['p1 a été meilleur'],
    ['p2 a été sacrément mauvais'],
    ['R.I.P. p2'],
    ['p2 n\'est décidément pas très perspicace'],
    ['p2 comprend vite mais faut lui expliquer longtemps !'],
  ];

  public draw = [ //pas de winner
    ['p1 et p2 ont été aussi mauvais l\'un que l\'autre'],
    ['L\'équilibre des forces a été plus fort que nos 2 zouaves'],
    ['Une autre game ?'],
    ['Aucun des prétendants au titre ne l\'aura cette fois'],
  ];

  constructor(
    private glob: GlobalVarsService,
  ) { }

  replace=(str, winner, looser)=>{ //replace dans str p1 par winner et p2 par looser
    if(str.includes('p1')) {
      str = str.replace('p1', winner);
    }
    if(str.includes('p2')) {
      str = str.replace('p2', looser);
    }
    return str;
  };

  getRandomBegin=(winner, looser)=>{ //return random phrase depuis debut
    const tmp=this.debut[Math.floor(Math.random()*this.debut.length)][0];
    return(this.replace(tmp, winner, looser));
  };

  getRandomEnd=(winner, looser)=>{ //return random phrase depuis fin
    const tmp=this.fin[Math.floor(Math.random()*this.fin.length)][0];
    return(this.replace(tmp, winner, looser));
  };

  getRandomDraw=()=>{ //return random phrase depuis draw
    const tmp=this.draw[Math.floor(Math.random()*this.draw.length)][0];
    return(this.replace(tmp, this.glob.getNick1(), this.glob.getNick2()));
  };
}
