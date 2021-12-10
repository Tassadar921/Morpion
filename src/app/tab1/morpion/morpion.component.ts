import { Component } from '@angular/core';
import {Player} from '../../shared/classes/player';

@Component({
  selector: 'app-morpion',
  templateUrl: './morpion.component.html',
  styleUrls: ['./morpion.component.scss'],
})
export class MorpionComponent {

  public currentPlayer=1;
  public p1;
  public p2;
  public end=0;
  public choice1='Bowser.png';
  public choice2='Kirby.png';
  public win=[];

  public matrix=
    [
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ];

  constructor() {
    this.p1=new Player('1','Paul', '../../assets/pics/sprites_choix/'+this.choice1);
    this.p2=new Player('2','Pierre', '../../assets/pics/sprites_choix/'+this.choice2);
  }

  click=(line, col)=>{
    if(this.win.length===0) {
      if (this.matrix[line][col] === 0) {
        this.matrix[line][col] = this.currentPlayer;
        this.endTurn();
      }
    }
  };

  endTurn=()=>{
    this.win=this.checking();
    if(this.currentPlayer===1){this.currentPlayer+=1;}
    else{this.currentPlayer=1;}
  };

  checking=()=>{
    const tmp=[];
    console.log(this.matrix);
    for(let i=0;i<3;i++) {
      if (this.matrix[i][0] !== 0 && this.matrix[i][1] !== 0 && this.matrix[i][2] !== 0 && this.matrix[i][0] === this.matrix[i][1] && this.matrix[i][0] === this.matrix[i][2]) {
        this.end = 1;
        tmp[0] = 'ligne';
        tmp[1] = i;
        console.log(tmp);
      } else {
        if (this.matrix[0][i] !== 0 && this.matrix[1][i] !== 0 && this.matrix[2][i] !== 0 && this.matrix[0][i] === this.matrix[1][i] && this.matrix[0][i] === this.matrix[2][i]) {
          this.end = 1;
          tmp[0] = 'colonne';
          tmp[1] = i;
          console.log(tmp);
        }
        }
      }
    if (this.matrix[0][0] !== 0 && this.matrix[1][1] !== 0 && this.matrix[2][2] !== 0 && this.matrix[0][0] === this.matrix[1][1] && this.matrix[0][0] === this.matrix[2][2]) {
      this.end = 1;
      tmp[0] = 'diagonale';
      tmp[1] = 'hautGauche';
      console.log(tmp);
    } else {
      if (this.matrix[0][2] !== 0 && this.matrix[1][1] !== 0 && this.matrix[2][0] !== 0 && this.matrix[0][2] === this.matrix[1][1] && this.matrix[0][2] === this.matrix[2][0]) {
        this.end = 1;
        tmp[0] = 'diagonale';
        tmp[1] = 'hautDroite';
        console.log(tmp);
      }
    }
    return tmp;
  };

  reset=()=>{
    this.win=[];
    this.currentPlayer=1;
    this.matrix=
      [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ];
  };

  resolution=()=>{
    if(screen.width>1010){return true;}
    else{return false;}
  };
}
