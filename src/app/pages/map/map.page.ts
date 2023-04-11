import { JSDOM } from 'jsdom';
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable guard-for-in */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleMap, MapType, Marker } from '@capacitor/google-maps';
import { ZonasProtegidaService } from 'src/app/services/zonas-protegida.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  //my-map'
  @ViewChild('map') mapRef: ElementRef;
  //mapa location
  mapType: MapType;
  map: GoogleMap;
  lat: any;
  lng: any;
  city: any;
  desc: string;
  img: string;
  snippet: any;
  filtered: any;

  public DatoLocation = [];
  public DatDownload = [];

  public markerId: string;
  public markers = [];
  public sniPpet: any;

  constructor(
    private zonasProtegidas: ZonasProtegidaService,
    private router: Router
  ) {}
  ngOnInit() {
    this.zonasProtegidas.consulta();
  }

  async ionViewDidEnter() {
    await this.createMap();
    this.DatoLocation = await this.zonasProtegidas.locaTionsZones;

    for (const locations of this.DatoLocation) {
      this.lat = locations.lat;
      this.lng = locations.lng;
      this.city = locations.city;
      this.snippet = locations.desc;
      this.img = locations.img;
      console.log(
        'LOCACIONES',
        this.city,
        this.lat,
        this.lng,
        this.img,
        this.desc
      );
      // console.log(this.snp);
      this.addMarkers();
    }
    this.addListeners();
  }

  async createMap() {
    this.map = await GoogleMap.create({
      id: 'my-map',
      apiKey: environment.apiKey,
      element: this.mapRef.nativeElement,

      config: {
        center: {
          lat: this.lat,
          lng: this.lng,
        },

        zoom: 5,

        // androidLiteMode: false,
      },
    });
    //await this.map.enableTrafficLayer(true);
    await this.map.enableCurrentLocation(true);
    // await this.map.enableAccessibilityElements(true);
    //await this.mapType.setMapType()
    //this.map.setMapType(map.);

    // Move the map programmatically
    /*await this.map.setCamera({
     coordinate: {
      lat: this.lat,
      lng: this.lng,
     },
     animate: true,
    });*/
  }
  async addMarkers() {
    this.markers = [
      {
        coordinate: {
          lat: this.lat,
          lng: this.lng,
        },
        title: this.city,
        snippet: this.snippet,
        iconUrl: this.img,
        iconSize: {
          width: 50,
          height: 40,
        },
      },
    ];
    console.log(this.sniPpet);
    await this.map.addMarkers(this.markers);
  }
  async addListeners() {
    // Handle marker click
    await this.map.setOnMarkerClickListener((event) => {
      /* for (let i=0; i<=this.markers.length; i++) {

      } */

      //HACIENDO UN FILTRO PARA CONSEGUIR LOS VALORES
      //console.log('VIENDO  EL FILTRO',this.DatoLocation.filter((value) => value ===event.markerId));
      this.filtered = this.DatoLocation.filter((obj) => {
        return obj.city === event.title;
      });
      //recorriendo el obj
      this.filtered.forEach((value) => {
        const valoles = value;

        //IMPRIMIENEO EL RESULTADO POR CONSOLA
        console.log('VIENDO  EL FILTRO', valoles);
        //LLENANDO EL ARREGLOS CON LOS DATOS
        console.log('marcadores', this.markers);
        console.log('VERIFICANDO ', this.DatDownload.push(valoles));
        console.log('VIENDO VALORES ', this.DatDownload);
      });

      // event.snippet = this.img;
      //console.log('setOnMarkerClickListener', event);
    });
  }
}
