import { Injectable } from '@angular/core';
import { Perso } from '../classes/perso';

@Injectable({
  providedIn: 'root'
})
export class PersonnagesService {

  public names=
    [
      'Bayonetta',
      'Bowser',
      'Bowser Jr.',
      'Captain Falcon',
      'Chrom',
      'Cloud',
      'Corrin',
      'Dadidou',
      'Daisy',
      'Daraen',
      'Dark Pit',
      'Dark Samus',
      'Diddy Kong',
      'Donkey Kong',
      'Dr. Mario',
      'Duck Hunt',
      'Falco',
      'Felinferno',
      'Fox',
      'Mr. Game Watch',
      'Ganondorf',
      'Harmonie',
      'Ice Climbers',
      'Ike',
      'Inkling',
      'Ken',
      'Kirby',
      'King K. Rool',
      'Link',
      'Link Cartoon',
      'Link Child',
      'Little Mac',
      'Lucario',
      'Lucas',
      'Lucina',
      'Luigi',
      'Marie',
      'Mario',
      'Marth',
      'MegaMan',
      'Meta Knight',
      'Mewtwo',
      'Mii Fighters',
      'Ness',
      'Olimar',
      'Pac-Man',
      'Palutena',
      'Peach',
      'Pichu',
      'Pikachu',
      'Pit',
      'Pokemon Trainer',
      'Richter',
      'Ridley',
      'ROB',
      'Rondoudou',
      'Roy',
      'Ryu',
      'Samus',
      'Sheik',
      'Shulk',
      'Simon',
      'Snake',
      'Sonic',
      'Villager',
      'Wario',
      'Wii Fit',
      'Wolf',
      'Yoshi',
      'Zelda',
      'Samus Without Suit',
      'Greninja',
      'Valentin',
      'Paul',
      'Vianney',
      'Nathan'
    ];

  public data=[];

  constructor() {}

  getData=()=>{
    if(this.data.length===0) {
      this.names.sort();
      for (const name of this.names) {
        this.data.push(new Perso(name, './assets/pics/sprites_choix/' + name + '.png'));
      }
    }
    return this.data;
  };
}
