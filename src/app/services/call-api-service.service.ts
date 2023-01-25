/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/contextual-lifecycle */
import { Injectable, OnInit } from '@angular/core';
import axios from 'axios';
type usuarios = {
  id: any;
  email: string;
  first_name: string;
  last_name: string;
  avatar: any;
};
type GetLotteryResponse = {
  data: usuarios[];
};
@Injectable({
  providedIn: 'root'
})

export class CallApiServiceService implements OnInit {
  public DatDownload = [];
  url = 'http';
  text = 'paramete' + '\n';

  ngOnInit() {

   localStorage.removeItem('DATALOCAL');
   this.consulta();
 }

 async consulta() {
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
     /*
     data.data.forEach((values, index, arreglo) => {
     console.log(data.data);

     });
     */
     // 👇️ "response status is: 200"
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
}
