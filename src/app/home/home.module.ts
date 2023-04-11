import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { CallApiServiceService } from '../services/call-api-service.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [SocialSharing,CallApiServiceService],

  declarations: [HomePage]
})
export class HomePageModule {}
