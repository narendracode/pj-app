import { Component, OnInit } from '@angular/core';
import printJS from 'print-js'


@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  print(){
  	console.log('print button is pressed..');

    printJS({ 
              type: 'html', 
              printable : 'receipt-container',
              documentTitle: 'Receipt'
            });
  }

}
