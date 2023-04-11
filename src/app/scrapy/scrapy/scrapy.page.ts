/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import axios, { AxiosError } from 'axios';
import { JSDOM } from 'jsdom';
import  { scrapy } from 'scrapy';

@Component({
  selector: 'app-scrapy',
  templateUrl: './scrapy.page.html',
  styleUrls: ['./scrapy.page.scss'],
})
export class ScrapyPage implements OnInit {
  constructor() {}

  ngOnInit() {}


}
