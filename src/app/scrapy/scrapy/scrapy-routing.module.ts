import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScrapyPage } from './scrapy.page';

const routes: Routes = [
  {
    path: '',
    component: ScrapyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScrapyPageRoutingModule {}
