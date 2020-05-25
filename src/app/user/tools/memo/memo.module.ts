import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SaveComponent } from './save/save.component';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MemoPage } from './memo.page';

const routes: Routes = [
  {
    path: '',
    component: MemoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SaveComponent, MemoPage],
  entryComponents: [SaveComponent],
})
export class MemoPageModule { }
