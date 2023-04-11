/* eslint-disable @angular-eslint/contextual-lifecycle */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/semi */
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ZonasProtegidaService implements OnInit {
  public locaTionsZones = [];
  public arrayZonaProtegida = [];
  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    this.consulta();
  }

  async consulta() {
    this.httpClient.get('assets/locaciones.json').subscribe((data) => {
      //console.log('llenando arreglo',data);
      this.arrayZonaProtegida.push(data);
      for (const loca of this.arrayZonaProtegida) {
        this.locaTionsZones = loca;
      }
    });
    console.log('llenando arreglo', this.locaTionsZones);
  }
}
