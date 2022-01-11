import { Component } from '@angular/core';
import {Observable} from '../shared/classes/observable';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  function() {

    const observableObject = new Observable();

    const winCallback = function(player) {
      console.log('Player', player, 'win !');
    }

    observableObject.on('win', winCallback);
    observableObject.on('move', function(player, x, y) {
      console.log('Player', player, 'is moving on ('+x+','+y+')');
    });

    console.log(observableObject);
    observableObject.off('win', winCallback);
    console.log(observableObject);
    observableObject.on('win', winCallback);
    console.log(observableObject);


    observableObject.trigger('win', 'Bob');
    observableObject.trigger('move', 'Alice', 2, 1);

    observableObject.off('win', winCallback);
    observableObject.trigger('win', 'Alice');
    observableObject.trigger('move', 'Bob', 1, 1);

  };
}
