/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/contextual-lifecycle */
import { Injectable, OnInit } from '@angular/core';
import axios from 'axios';
import { LoadingController } from '@ionic/angular';
import { GetLotteryResponse } from '../interfaces/data_interface';

@Injectable({
  providedIn: 'root',
})
export class CallApiServiceService implements OnInit {
  public resPuestas;
  public contador: any;
  public DatDownload = [];
  url = 'http';
  text = 'paramete' + '\n';
  constructor(public loadingController: LoadingController) {}
   ngOnInit() {
    /// localStorage.removeItem('DATALOCAL');
    this.consulta();

  }


  async consulta() {
    /*  fetch('https://simplescraper.io/api/Fw4liQGL88mxtJje16td?apikey=ljsJmJZkhyxB9tHKe9dNRtrJXWYYkCLz&run_now=true&limit=100')
      .then((response) => response.json())
      .then((data) => {
        console.log(element);
        data.lottery?.forEach((element) => {
          this.DatDownload.push(element);
          console.log(element);
          console.log('Proban2', this.DatDownload);
          this.contador +=1;
        });
        // Aquí puedes acceder a los datos del arreglo "lottery"
      })
      .catch((error) => {
        console.error('Error al consumir la API: ', error);
      });
    } */

    // Auto hide show loader
    /*  autoLoader() {
  this.loadingController.create({
    message: 'Loader hides after 4 seconds',
    duration: this.contador,
  }).then((response) => {
    response.present();
    response.onDidDismiss().then((response) => {
      console.log('Loader dismissed', response);
    });
  });
} */

    try {
      //'https://reqres.in/api/users'
      // 👇️ const data: GetUsersResponse
      const { data, status } = await axios.get<GetLotteryResponse>(
        'https://simplescraper.io/api/Fw4liQGL88mxtJje16td?apikey=ljsJmJZkhyxB9tHKe9dNRtrJXWYYkCLz&run_now=true&limit=100',
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );
      console.log('MAS', data.toString());
      // 👇️ "response status is: 200"
      data.data.forEach((values, index, arreglo) => {
        //this.Dat= [];
        this.DatDownload.push(values);
        console.log('MAS', this.DatDownload);
        localStorage.setItem('DATALOCAL', JSON.stringify(this.DatDownload));

        console.log('FFFA', this.DatDownload);
        console.log('DATOS', data.data);
        console.log('LOCAL', localStorage.getItem('DATALOCAL'));
      });
      console.log('response status is: ', status);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }
}
