import { Component} from '@angular/core';
import { GlobalVarsService } from '../shared/services/global-vars.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public tab=1;
  public p1;
  public p2;
  public error;

  constructor(
    private glob: GlobalVarsService,
  ){}

  switch=(val)=>{
    this.tab=val;
  };

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
