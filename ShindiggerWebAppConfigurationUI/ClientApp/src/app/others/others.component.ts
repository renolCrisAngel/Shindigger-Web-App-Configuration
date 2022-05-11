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

  enable(odd) {
    const currentLocationid = this.locationID;
    console.log(currentLocationid);

    const payload = {
      LocationId: parseInt(this.locationID),
      EnableCard: odd
    };


    const str = JSON.stringify(payload);

    console.log(str);


    this.http.post<any>('https://localhost:44356/api/others/cardfee', payload).subscribe(result => {
      console.log(result);
    }, error => console.error(error));

  }
 
  taxOn(oddeven) {
    

    const currentLocationid = this.locationID;
    console.log(currentLocationid);

    const payload = {
      LocationId: parseInt(this.locationID),
      Taxon: oddeven
    };


    const str = JSON.stringify(payload);

    console.log(str);


    this.http.post<any>('https://localhost:44356/api/others/taxmethod', payload).subscribe(result => {
      console.log(result);
    }, error => console.error(error));
  }

}
