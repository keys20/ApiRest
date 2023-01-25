import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { NetworkStatusComponent } from './network-status-component/network-status.component';

@NgModule({
    declarations: [AppComponent,NetworkStatusComponent],
    providers: [HTTP, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },NetworkStatusComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent],
    imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule]
})
export class AppModule {}
