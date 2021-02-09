import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.page.html',
  styleUrls: ['./new-invoice.page.scss'],
})
export class NewInvoicePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.pop();
  }

}
