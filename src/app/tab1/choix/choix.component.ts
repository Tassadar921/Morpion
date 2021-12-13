import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonnagesService} from '../../shared/services/personnages.service';
import { GlobalVarsService} from '../../shared/services/global-vars.service';

@Component({
  selector: 'app-choix',
  templateUrl: './choix.component.html',
  styleUrls: ['./choix.component.scss'],
})
export class ChoixComponent{

  public listPerso;
  public error='';

  constructor(
    private data: PersonnagesService,
    private glob: GlobalVarsService,
    private router: Router,
  ) {}

  ngOnInit(){
    this.listPerso=this.data.getData();
  }

  select=(url, name)=>{
    const player='../'+url;
    if(this.glob.getPic1()==='../../../assets/pics/sprites_choix/point_interrogation.png') //si pic1 est celle de base
    {
      if(window.confirm('Choisir ' + name + ' pour ' + this.glob.getNick1() + ' ?')) {
        this.glob.setPic1(player);
      }
    }
    else {
      if(this.glob.getPic2()==='../../../assets/pics/sprites_choix/point_interrogation.png')
      {
        if(window.confirm('Choisir ' + name + ' pour ' + this.glob.getNick2() + ' ?') && player!==this.glob.getPic1()) {
          this.glob.setPic2(player);
          this.error='';
        }else{
          if(player===this.glob.getPic1()){
            this.error='Merci de choisir des perso. différents';
          }
        }
      }else{this.error='Vous avez déjà choisi 2 perso.';}
    }
  };

  random=()=>{
    this.router.navigateByUrl('/random');
  };

  onKeypressEvent=(filter)=>{
    for(const line of this.listPerso){
      if(!line.name.toUpperCase().includes(filter.target.value.toUpperCase())){
        line.show=false;
      }
      else{line.show=true;}
    }
  };

  displayReset=()=>{
    for(const line of this.listPerso){
      if(line.show===false){
        line.show=true;
      }
    }
  };

  reinit=()=>{
    if(window.confirm('Voulez-vous vraiment reset les choix de perso. ?')) {
      this.glob.setPic1('../../../assets/pics/sprites_choix/point_interrogation.png');
      this.glob.setPic2('../../../assets/pics/sprites_choix/point_interrogation.png');
      this.error='';
      for(const line of this.listPerso){
        if(line.show===false){line.show=true;}
      }
    }
  };
}
