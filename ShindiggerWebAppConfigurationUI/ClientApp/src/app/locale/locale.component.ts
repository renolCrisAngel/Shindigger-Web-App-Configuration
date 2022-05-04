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

  localeTitles = ['sample1', 'sample2']

  constructor(private http: HttpClient,) { }

  ngOnInit() {
  }

  loadlocales() {
    console.log('this is load locales')

    const currentTitle = this.localeTitles[this.selectValIndex]
    console.log(currentTitle);

    const payload = {
      CorpId: parseInt(this.corpID),
      LocaleId: currentTitle
    };


    this.http.get<any>('https://localhost:44356/api/locale/getlocales').subscribe(result => {
      console.log(result);
      this.localeTitles = result
    }, error => console.error(error));

    const str = JSON.stringify(payload);
  }

  updatelocales() {
    console.log('this is update locales')

    const currentTitle = this.localeTitles[this.selectValIndex]
    console.log(currentTitle);

    const payload = {
      CorpId: parseInt(this.corpID),
      LocaleId: (this.selectValIndex),
      locale: currentTitle
    };


    const str = JSON.stringify(payload);

    console.log(str);


    this.http.post<any>('https://localhost:44356/api/locale', payload).subscribe(result => {
      console.log(result);
    }, error => console.error(error));

  }

  

}
