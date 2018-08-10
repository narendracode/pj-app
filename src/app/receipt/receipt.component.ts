import { Component, OnInit } from '@angular/core';
import printJS from 'print-js'
import { Location } from '@angular/common';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {
  today =  new Date();
  
  constructor(
  	private location: Location
  ) { }

  ngOnInit() {
  }

  print(){
    printJS({ 
              type: 'html', 
              printable : 'receipt-container',
              documentTitle: 'Receipt',
              scanStyles: true,
              style : '#receipt-container{border-color:#000}.jewellery-thumbnail{height:70px;margin-top:34px;border:none}.invoice,.invoice-header{margin-top:5px;text-align:center}.jewellery-thumbnail.jewellery-thumbnail-left{margin-left:30px}.jewellery-thumbnail.jewellery-thumbnail-right{//margin-left:30px}.invoice-header{font-family:American Typewriter,serif}.address,.buyer,.date,.invoiceId,.shop-address{font-family:monospace}.invoice-header .header1{font-size:3em}.invoice,.invoice-header .header2{font-size:1.5em}.invoice{text-color:#fff;background-color:grey;float:right}.address{font-size:1em}.buyer .buyer-header,.shop-address{font-size:1.5em}.buyer .buyer-name,.date,.invoiceId{font-size:1em}.table-header{font-family:Helvetica,sans-serif;font-size:.8em;text-align:center}.table-content{font-family:monospace;font-size:1em}.invoice-item-title{font-family:Helvetica,sans-serif;font-size:1.2em}.invoice-item-desc{font-family:monospace;font-size:1em}.signature-left{float:left}.signature-right{float:right}.signature-text{float:clear}.signature-text.signature-text-left{float:left}.signature-text.signature-text-right{float:right}.table td,.table th{text-align:left}' 
            });
  }


  goBack(): void {
    this.location.back();
  }

}
