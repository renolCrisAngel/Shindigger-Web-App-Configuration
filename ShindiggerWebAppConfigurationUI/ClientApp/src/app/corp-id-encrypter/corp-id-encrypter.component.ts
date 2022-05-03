import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corp-id-encrypter',
  templateUrl: './corp-id-encrypter.component.html',
  styleUrls: ['./corp-id-encrypter.component.css']
})
export class CorpIdEncrypterComponent implements OnInit {

  corpID: string = '6000';
  displayVal: string = '';
  encryptedID: string = '';


  constructor() { }

  ngOnInit() {
  }

 
  getValue(val:string) {
    this.displayVal = val
  }

  encrypt() {
    this.encryptedID = window.btoa(this.corpID)
  }

  copy(encrypteddata) {
    encrypteddata.select();
    document.execCommand('copy');
    encrypteddata.setSelectionRange(0, 0);
  }

}
