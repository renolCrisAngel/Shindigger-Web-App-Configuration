import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-processor',
  templateUrl: './payment-processor.component.html',
  styleUrls: ['./payment-processor.component.css']
})
export class PaymentProcessorComponent implements OnInit {

  locationCode: string = '5';

  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log('this is save changes')
  }

}
