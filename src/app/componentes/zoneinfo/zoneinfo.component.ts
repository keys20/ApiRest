import { ZonasProtegidaService } from './../../services/zonas-protegida.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoneinfo',
  templateUrl: './zoneinfo.component.html',
  styleUrls: ['./zoneinfo.component.scss'],
})
export class ZoneinfoComponent implements OnInit {
  public zonasP: any;

  constructor(private zonasProtegidaService: ZonasProtegidaService) {

   }
  ngOnInit() {
    this.zonasProtegidaService.arrayZonaProtegida.forEach((values, ) => {
      this.zonasP = values;

    });

  }

}

