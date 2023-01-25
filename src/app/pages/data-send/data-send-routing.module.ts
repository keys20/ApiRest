import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataSendPage } from './data-send.page';

const routes: Routes = [
  {
    path: '',
    component: DataSendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataSendPageRoutingModule {}
