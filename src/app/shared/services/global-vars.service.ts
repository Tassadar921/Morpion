import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarsService { //toutes les variables à transférer d'une page à une autre (c'était l'idée à la base mais je crois que j'ai débordé un peu et que j'ai mis des trucs qui devraient pas y être)

  public pic1='../../../assets/pics/sprites_choix/point_interrogation.png';
  public pic2='../../../assets/pics/sprites_choix/point_interrogation.png';
  public choix1='';
  public choix2='';
  public nick1='a';
  public nick2='b';
  public win=0;
  public score1=0;
  public score2=0;

  constructor() {} //getters et setters avec en plus quelques resets

  getPic1=()=>this.pic1;
  setPic1=(replace)=>this.pic1=replace;
  resetPic1=()=>{
    this.pic1='../../../assets/pics/sprites_choix/point_interrogation.png';
    this.choix1='';
  };

  getPic2=()=>this.pic2;
  setPic2=(replace)=>this.pic2=replace
  resetPic2=()=>{
    this.pic2='../../../assets/pics/sprites_choix/point_interrogation.png';
    this.choix2='';
  };

  getNick1=()=>this.nick1;
  setNick1=(replace)=>this.nick1=replace;

  getNick2=()=>this.nick2;
  setNick2=(replace)=>this.nick2=replace;

  getWin=()=>this.win;
  setWin=(replace)=>this.win=replace;

  getChoix1=()=>this.choix1;
  setChoix1=(replace)=>this.choix1=replace;
  resetChoix1=()=>this.choix1='';

  getChoix2=()=>this.choix2;
  setChoix2=(replace)=>this.choix2=replace;
  resetChoix2=()=>this.choix2='';

  getScore1=()=>this.score1;
  incrementScore1=()=>this.score1+=1;

  getScore2=()=>this.score2;
  incrementScore2=()=>this.score2+=1;

  reinit=()=>{
    this.pic1='../../../assets/pics/sprites_choix/point_interrogation.png';
    this.pic2='../../../assets/pics/sprites_choix/point_interrogation.png';
    this.choix1='';
    this.choix2='';
    this.nick1='';
    this.nick2='';
    this.win=0;
    this.score1=0;
    this.score2=0;
  }
}
