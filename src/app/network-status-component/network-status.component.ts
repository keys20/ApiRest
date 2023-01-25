import { CallApiServiceService } from './../services/call-api-service.service';
import { HomePage } from './../home/home.page';
import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-network-status',
  templateUrl: './network-status.component.html',
  styleUrls: ['./network-status.component.scss'],
})
export class NetworkStatusComponent implements OnInit {
  public netStatus: string;

  constructor( private callApiServiceService: CallApiServiceService ) {}
  ngOnInit() {
    fromEvent(window,'Offline')
    .pipe(debounceTime(100)) .subscribe((event: Event) => {
      console.log('are not internet conection',event);
      this.netStatus = event.type;
      // if (this.netStatus === 'false'){
      //   this.callApiServiceService.consulta();

      // }


    });

    fromEvent(window,'Online')
    .pipe(debounceTime(100)).subscribe((event: Event) => {
      console.log('internet conection is ready',event);
     this.netStatus = event.type;
    //   if (this.netStatus === 'true') {
    //     this.callApiServiceService.consulta();

    //   }
    });

  }
}

