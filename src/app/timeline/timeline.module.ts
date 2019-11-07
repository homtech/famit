import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TimelinePage } from './timeline.page';
import {TimelineResolver} from './timeline.resolver'

const routes: Routes = [
  {
    path: '',
    component: TimelinePage,
    resolve: {
      data: TimelineResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TimelinePage],
  providers: [
    TimelineResolver
  ]
})
export class TimelinePageModule {}
