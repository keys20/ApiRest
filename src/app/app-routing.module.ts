import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full'
  },
<<<<<<< Updated upstream
=======
  {
    path: 'data-send',
    loadChildren: () => import('./pages/data-send/data-send.module').then( m => m.DataSendPageModule)
  },
  {
    path: 'scrapy',
    loadChildren: () => import('./scrapy/scrapy/scrapy.module').then( m => m.ScrapyPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },
>>>>>>> Stashed changes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
