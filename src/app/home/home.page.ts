


/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable id-blacklist */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/naming-convention */
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { CallApiServiceService } from '../services/call-api-service.service';
import { LoadingController } from '@ionic/angular';

// type Lottery = {
//   name: string;
//   date: string;
//   results: string;
// };

// type GetLotteryResponse = {
//   data: Lottery[];
// };
type User = {
  id: number;
  email: string;
  first_name: string;
};

/*
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

   public Dat= [];
    url = 'http';
    text = 'paramete'+'\n';

  public DatDownload = [];
  url = 'http';
  text = 'paramete' + '\n';

  constructor( private callApiServiceService: CallApiServiceService) {}
  ngOnInit() {
    this.callApiServiceService.consulta();
    //this.callApiServiceService.autoLoader();
    this.DatDownload = this.callApiServiceService.DatDownload;
    console.log('hhh' + this.DatDownload.toString());
    //localStorage.removeItem('DATALOCAL');
  }


  // // async showLoading() {
  // //   const loading = await this.loadingCtrl.create({
  // //     message: 'Loading...',
  // //     duration: this.DatDownload.length,
  // //     spinner: 'circles',
  // //   });


  constructor() {}
  ngOnInit() {
    this.consulta();
  }

  async consulta() {

  // //   loading.present();
  // // }

  /*  async consulta() {

    try {
      // 👇️ const data: GetUsersResponse
      const { data, status } = await axios.get<GetLotteryResponse>(
        'https://reqres.in/api/users',
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );

      // // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
      // data.data.forEach((function callback(Value) => {

      */
  /*
      data.data.forEach((values, index, arreglo) => {
      console.log(data.data);


      //     this.Datos= localStorage.setItem('datos',);
      //          // this.first_name Value.first_name;
      //     // this.email = Value.email;
      //     localStorage.getItem('datos');
      //     console.log('Valores:', this.Datos);



      // });



      });
      */
  // 👇️ "response status is: 200"

  /*

      data.data.forEach((values, index, arreglo) => {
        //this.Dat= [];
        //this.Dat.push(numero.email);
        this.Dat.push(values);
        console.log(this.Dat);


    });

      // 👇️ "response status is: 200"
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
  share(){

    this.socialSharing.shareViaWhatsApp(this.text,null,this.url);
   }

  }
*/
