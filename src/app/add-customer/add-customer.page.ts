import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.page.html',
  styleUrls: ['./add-customer.page.scss'],
})
export class AddCustomerPage implements OnInit {

  constructor(private navCtrl: NavController,
    private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.pop();
  }

  address(){
    this.router.navigate(['/address']);
  }

  shipping(){
    this.router.navigate(['/shipping-details'])
  }

}
