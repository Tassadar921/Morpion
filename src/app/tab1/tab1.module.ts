import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import {NicknamesComponent} from './nicknames/nicknames.component';
import {ChoixComponent} from './choix/choix.component';
import {MorpionComponent} from './morpion/morpion.component';

import{NgParticlesModule} from 'ng-particles';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    NgParticlesModule
  ],
  declarations: [Tab1Page, NicknamesComponent, ChoixComponent, MorpionComponent]
})
export class Tab1PageModule {}
