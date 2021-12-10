import { Component, OnInit } from '@angular/core';
import {Perso} from '../../shared/classes/perso';

@Component({
  selector: 'app-choix',
  templateUrl: './choix.component.html',
  styleUrls: ['./choix.component.scss'],
})
export class ChoixComponent implements OnInit {

  public search='';
  public paul=new Perso('paul','../../assets/pics/1.jpg');
  public nathan1=new Perso('nathan','../../assets/pics/2.jpg');
  public nathan2=new Perso('nathan','../../assets/pics/2.jpg');
  public nathan3=new Perso('nathan','../../assets/pics/2.jpg');
  public nathan4=new Perso('nathan','../../assets/pics/2.jpg');
  public nathan5=new Perso('nathan','../../assets/pics/2.jpg');
  public nathan6=new Perso('nathan','../../assets/pics/2.jpg');
  public nathan7=new Perso('nathan','../../assets/pics/2.jpg');
  public data=
    [
      this.paul,
      this.nathan1,
      this.nathan2,
      this.nathan3,
      this.nathan4,
      this.nathan5,
      this.nathan6,
      this.nathan6,
      this.nathan6,
      this.nathan6,
      this.nathan7,
      this.paul,
      this.nathan1,
      this.nathan2,
      this.nathan3,
      this.nathan4,
      this.nathan5,
      this.nathan6,
      this.nathan6,
      this.nathan6,
      this.nathan6,
      this.nathan7
    ];
  public listPerso
  constructor() {}

  ngOnInit() {
  }

}
