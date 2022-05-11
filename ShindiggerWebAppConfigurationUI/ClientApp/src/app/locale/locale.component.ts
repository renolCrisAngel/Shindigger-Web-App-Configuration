import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html',
  styleUrls: ['./locale.component.css']
})
export class LocaleComponent implements OnInit {

  corpID: string = '6000';
  selectValIndex = 0;

  localeTitles = []

  constructor(private http: HttpClient,) { }

  ngOnInit() {
  }

  loadlocales() {
    const currentTitle = this.localeTitles[this.selectValIndex]
    console.log(currentTitle);

    const payload = {
      CorpId: parseInt(this.corpID),
      LocaleId: currentTitle
    };


    this.http.get<any>('https://localhost:44356/api/locale/getlocales').subscribe(result => {
      console.log(result);
      this.localeTitles = result.map( item => item.lcidDecimal.toString() + "-" + item.name.toString() );
    }, error => console.error(error));

    const str = JSON.stringify(payload);
  }

  updatelocales() {
    const currentTitle = this.localeTitles[this.selectValIndex]
    console.log('current title', currentTitle); 

 
    const currentLCID = currentTitle.split("-")[0];
    const name = currentTitle.split("-")[1];

    const payload = {
      CorpId: parseInt(this.corpID),
      LCIDDecimal: currentLCID,
      name: name
    };


    const str = JSON.stringify(payload);    

    console.log(str);


    this.http.post<any>('https://localhost:44356/api/locale', payload).subscribe(result => {
      console.log(result);
    }, error => console.error(error));

  }

  

}
  