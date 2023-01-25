import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataSendPageRoutingModule } from './data-send-routing.module';

import { DataSendPage } from './data-send.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataSendPageRoutingModule
  ],
  declarations: [DataSendPage]
})
export class DataSendPageModule {}
