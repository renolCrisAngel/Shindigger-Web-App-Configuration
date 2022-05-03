import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html',
  styleUrls: ['./locale.component.css']
})
export class LocaleComponent implements OnInit {

  corpID: string = '6000';

  constructor() { }

  ngOnInit() {
  }

  loadlocales() {
    console.log ('this is load locales')
  }

  updatelocales() {
    console.log('this is update locales')
  }

  test() {
    console.log('this is test')
  }

}
