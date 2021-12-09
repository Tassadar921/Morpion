import { Component } from '@angular/core';
import {Player} from '../shared/classes/player';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public currentPlayer=1;
  public turn=1;
  public p1;
  public p2;
  public end=0;

  public matrix=
    [
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ];

  constructor() {
    this.p1=new Player('1','joueur1', '../../assets/pics/1.jpg');
    this.p2=new Player('2','joueur2', '../../assets/pics/2.jpg');
  }

  click=(line, col)=>{
    this.matrix[line][col]=this.currentPlayer;
    this.endTurn();
  };

  endTurn=()=>{
    this.checking();
    if(this.currentPlayer===1){this.currentPlayer+=1;}
    else{this.currentPlayer=1;}
  };

  checking=()=>{

    for(let i=0;i<3;i++){
      if(this.matrix[i][0]!==0 && this.matrix[i][1]!==0 && this.matrix[i][2]!==0 && this.matrix[i][0]===this.matrix[i][1] && this.matrix[i][0]===this.matrix[i][2])
      {
        this.end=1;
      }
    }

    for(let i=0;i<3;i++){
      if(this.matrix[0][i]!==0 && this.matrix[1][i]!==0 && this.matrix[2][i]!==0 && this.matrix[0][i]===this.matrix[1][i] && this.matrix[0][i]===this.matrix[2][i])
      {
        this.end=1;
      }
    }
  };
}
