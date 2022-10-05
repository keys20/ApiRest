import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule

  ],
  providers: [SocialSharing],

  declarations: [HomePage]
})
export class HomePageModule {}
