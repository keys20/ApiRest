
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable id-blacklist */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { CallApiServiceService } from '../services/call-api-service.service';

// type Lottery = {
//   name: string;
//   date: string;
//   results: string;
// };

// type GetLotteryResponse = {
//   data: Lottery[];
// };
// type loterias = {
//   logo: string;
//   name: string;
//   country: string;
//   result: string;
// };
// type GetLotteryResponse = {
//   data: loterias[];
// };

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public DatDownload = [];
  url = 'http';
  text = 'paramete' + '\n';

  constructor(private socialSharing: SocialSharing,private callApiServiceService: CallApiServiceService,
   ) {}
   ngOnInit() {
    this.callApiServiceService.consulta();

  this.DatDownload = this.callApiServiceService.DatDownload;
  console.log(''+this.DatDownload.toString());
    //localStorage.removeItem('DATALOCAL');


  }

/*  async consulta() {
    try {
      //'https://reqres.in/api/users'
      // 👇️ const data: GetUsersResponse
      const { data, status } = await axios.get<GetLotteryResponse>(
        'https://visitrd.000webhostapp.com/users.json',
        {

          headers: {
            Accept: 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            // 'Access-Control-Allow-Origin':'*',
          },


        }
      );
      */
      /*
      data.data.forEach((values, index, arreglo) => {
      console.log(data.data);



      });
      */
      // 👇️ "response status is: 200"


/*
      data.data.forEach((values, index, arreglo) => {
        //this.Dat= [];
        this.DatDownload.push(values);
        console.log('MAS', this.DatDownload);

        localStorage.setItem('DATALOCAL', JSON.stringify(this.DatDownload));
        console.log('FFFA', this.DatDownload);
        // console.log('DATOS',data.data);
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
  share() {
    // Check if sharing via email is supported
    this.socialSharing
      .canShareViaEmail()
      .then(() => {
        // Sharing via email is possible
      })
      .catch(() => {
        // Sharing via email is not possible
      });
  }
  */
}
