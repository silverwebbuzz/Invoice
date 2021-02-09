import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.page.html',
  styleUrls: ['./shipping-details.page.scss'],
})
export class ShippingDetailsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.pop();
  }

}
