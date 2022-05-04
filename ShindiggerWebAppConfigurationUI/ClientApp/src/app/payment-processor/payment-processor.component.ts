import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-payment-processor',
  templateUrl: './payment-processor.component.html',
  styleUrls: ['./payment-processor.component.css']
})
export class PaymentProcessorComponent implements OnInit {

  locationCode: string = '5';
  selectValIndex = 0;

  processorTitles = ['AuthorizeNet', 'Ingenico', 'Payfort(Egypt)', 'Payfort(UAE)', 'Payfort(KSA)',
    'PayU', 'Stripe']


  constructor(private http: HttpClient,) { }

  ngOnInit() {
  }

  save() {
    console.log(this.selectValIndex);

    const currentTitle = this.processorTitles[this.selectValIndex]
    console.log(currentTitle);


    const payload = {
      LocationCode: parseInt(this.locationCode),
      Paymentprocessor: currentTitle
    };

    const str = JSON.stringify(payload);

    console.log(str);


    this.http.post<any>('https://localhost:44356/api/paymentprocessor', payload).subscribe(result => {
      console.log(result);
    }, error => console.error(error));

  }

}
