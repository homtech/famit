import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FamilytreePage } from './familytree.page';
import {Chart} from '../utils/chart/chart';
import { ChartProps } from '../utils/chart/chart.model';
import { FirebaseService} from '../firebase/firebase-integration.service';
import { ComponentsModule } from '../components/components.module';
import {FamilytreeResolver} from './familytree.resolver';

const routes: Routes = [
  {
    path: '',
    component: FamilytreePage,
    resolve: {
      data: FamilytreeResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FamilytreePage],
  providers: [
    Chart,
    ChartProps,
    FirebaseService,
    FamilytreeResolver
  ]
})
export class FamilytreePageModule {}
