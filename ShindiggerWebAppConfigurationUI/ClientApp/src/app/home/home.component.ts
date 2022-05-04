import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  corpID: string = '6000';
  selectValIndex = 0;
  

  httpTitles = ['http://10.1.50.175/', 'http://localhost/', 'http://localhost:32843/', 'https://localhost:44382/', 'http://192.168.0.16/',
    'http://192.168.0.250/', 'http://192.168.0.10', 'https://phqatesting.intercardinc.com/', /*'http://'*/ ]

  
  constructor(private http: HttpClient,) { }

  ngOnInit() {
  }

  


  save() {
    console.log(this.selectValIndex);

    const currentTitle = this.httpTitles[this.selectValIndex]
    console.log(currentTitle);

    const payload = {
      CorpId: parseInt(this.corpID),
      Datacenter: currentTitle
    };

  
    //this.http.get<any>('https://localhost:44356/api/datacenter/getlocales').subscribe(result => {
    //  console.log(result);
    //}, error => console.error(error));
    

    const str = JSON.stringify(payload);

    console.log(str);

    
    this.http.post<any>('https://localhost:44356/api/datacenter', payload).subscribe(result => {
      console.log(result);
    }, error => console.error(error));
  }


}
