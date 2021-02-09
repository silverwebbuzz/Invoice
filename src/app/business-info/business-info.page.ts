import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ListingComponent } from '../component/listing/listing.component';

@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.page.html',
  styleUrls: ['./business-info.page.scss'],
})
export class BusinessInfoPage implements OnInit {

  constructor(private navCtrl: NavController,
    private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.pop();
  }

  async modal(){
    const modal = await this.modalCtrl.create({
      component: ListingComponent
    });
    return await modal.present();
  }

}