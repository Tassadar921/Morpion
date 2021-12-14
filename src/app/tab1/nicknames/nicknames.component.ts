import { Component, OnInit } from '@angular/core';
import {GlobalVarsService} from '../../shared/services/global-vars.service';

@Component({
  selector: 'app-nicknames',
  templateUrl: './nicknames.component.html',
  styleUrls: ['./nicknames.component.scss'],
})
export class NicknamesComponent implements OnInit {

  constructor(
    private glob: GlobalVarsService,
  ) {}

  public p1;
  public p2;
  public error;

  ngOnInit() {}

  submit=()=>{
    if(this.p1!==this.p2 && this.p1 && this.p2) {
      this.glob.setNick1(this.p1);
      this.glob.setNick2(this.p2);
    }else{
      if(this.p1===this.p2 && this.p1 && this.p2){
        this.error='Veuillez choisir 2 pseudos différents';
      }else{
        if((this.p1&&!this.p2)||(!this.p1&&this.p2)){
          this.error='Veuillez remplir les deux pseudos';
          if(this.p1&&!this.p2){
            document.getElementById('input2').style.backgroundColor='#BC4747';
            document.getElementById('input1').style.backgroundColor='#B49A9A';
          } else{
            document.getElementById('input1').style.backgroundColor='#BC4747';
            document.getElementById('input2').style.backgroundColor='#B49A9A';
          }
        }
      }
    }
  };

}
