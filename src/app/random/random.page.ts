import { Component, OnInit, DoCheck } from '@angular/core';
import { GlobalVarsService} from '../shared/services/global-vars.service';
import { PersonnagesService} from '../shared/services/personnages.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {

  public outputName;
  public outputURL;
  public listPerso;

  constructor(
    private glob: GlobalVarsService,
    private listData: PersonnagesService,
  ) { }

  ngOnInit(){
    this.listPerso=this.listData.getData();
  }

  sleep=(delay)=>{
    const start = new Date().getTime();
    while (new Date().getTime() < start + delay){}
  };

}
