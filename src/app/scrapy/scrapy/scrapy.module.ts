import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScrapyPageRoutingModule } from './scrapy-routing.module';

import { ScrapyPage } from './scrapy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrapyPageRoutingModule
  ],
  declarations: [ScrapyPage]
})
export class ScrapyPageModule {}
