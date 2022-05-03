import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {

  locationID: string = '5';

  constructor() { }

  ngOnInit() {
  }

  update() {
    console.log ('this is update')
  }

  enable() {
    console.log ('this is enable card fee')

  }

  disable() {
    console.log('this is disable card fee')

  }

  taxOn() {
    console.log('this is tax On price')

  }

  taxIn() {
    console.log('this is tax In price')

  }

}
