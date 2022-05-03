import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  corpID: string = '6000';

  //currentLink: number = 0;

  //httpTitles = ['http://10.1.50.175/', 'http://localhost/', 'http://localhost:32843/', 'https://localhost:44382/', 'http://192.168.0.16/',
  //  'http://192.168.0.250/', 'http://192.168.0.10', 'https://phqatesting.intercardinc.com/' ]

  //setLink(page: number): void {
  //  this.currentLink = page;
  //}


  constructor() { }

  ngOnInit() {
  }

  


  save() {
    console.log('save changes')
  }

}
