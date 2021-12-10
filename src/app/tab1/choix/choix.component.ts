import { Component, OnInit } from '@angular/core';
import { PersonnagesService} from '../../shared/services/personnages.service';

@Component({
  selector: 'app-choix',
  templateUrl: './choix.component.html',
  styleUrls: ['./choix.component.scss'],
})
export class ChoixComponent implements OnInit {

  public search='';
  public listPerso;

  constructor(
    private data: PersonnagesService,
  ) {}

  ngOnInit() {
    this.listPerso=this.data.getData();
  }

  select=(choix)=>{
    console.log(choix);
  };

  onKeypressEvent=(filter: any)=>{
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

  trigger=()=>{

  };

}
