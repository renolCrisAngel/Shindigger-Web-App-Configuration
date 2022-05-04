import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {

  locationID: string = '5';
  selectValIndex = 0;

  constructor(private http: HttpClient,) { }

  ngOnInit() {
  }

  update() {
    console.log ('this is update')
  }

  enable() {
    console.log('this is enable card fee')

    const currentLocationid = this.locationID[this.selectValIndex]
    console.log(currentLocationid);

    const payload = {
      LocationId: parseInt(this.locationID),
      Enable: true
    };


    const str = JSON.stringify(payload);

    console.log(str);


    this.http.post<any>('https://localhost:44356/api/others/cardfee', payload).subscribe(result => {
      console.log(result);
    }, error => console.error(error));

  }

  disable() {
    console.log('this is disable card fee')

    const currentLocationid = this.locationID[this.selectValIndex]
    console.log(currentLocationid);

    const payload = {
      LocationId: parseInt(this.locationID),
      Enable: false
    };


    const str = JSON.stringify(payload);

    console.log(str);


    this.http.post<any>('https://localhost:44356/api/others/cardfee', payload).subscribe(result => {
      console.log(result);
    }, error => console.error(error));
  }

  taxOn() {
    console.log('this is tax On price')

    const currentLocationid = this.locationID[this.selectValIndex]
    console.log(currentLocationid);

    const payload = {
      LocationId: parseInt(this.locationID),
      Taxon: 1
    };


    const str = JSON.stringify(payload);

    console.log(str);


    this.http.post<any>('https://localhost:44356/api/others/taxmethod', payload).subscribe(result => {
      console.log(result);
    }, error => console.error(error));
  }

  taxIn() {
    console.log('this is tax In price')

    const currentLocationid = this.locationID[this.selectValIndex]
    console.log(currentLocationid);

    const payload = {
      LocationId: parseInt(this.locationID),
      Taxin: 2
    };


    const str = JSON.stringify(payload);

    console.log(str);


    this.http.post<any>('https://localhost:44356/api/others/taxmethod', payload).subscribe(result => {
      console.log(result);
    }, error => console.error(error));

  }

}
