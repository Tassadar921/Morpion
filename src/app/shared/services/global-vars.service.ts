import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarsService {

  public test='';
  public pic1='../../../assets/pics/sprites_choix/point_interrogation.png';
  public pic2='../../../assets/pics/sprites_choix/point_interrogation.png';
  public nick1='a';
  public nick2='b';

  constructor() { }

  getPic1=()=>this.pic1;
  setPic1=(replace)=>this.pic1=replace;

  getPic2=()=>this.pic2;
  setPic2=(replace)=>this.pic2=replace;

  getNick1=()=>this.nick1;
  setNick1=(replace)=>this.nick1=replace;

  getNick2=()=>this.nick2;
  setNick2=(replace)=>this.nick2=replace;


}
