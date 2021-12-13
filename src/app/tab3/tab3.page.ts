import { Component, OnInit} from '@angular/core';
import {Observable} from '../shared/classes/observable';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  redirect=()=>{
    window.open('../../assets/redirect/test.html');
  };

}
