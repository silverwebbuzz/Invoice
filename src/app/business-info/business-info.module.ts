import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessInfoPageRoutingModule } from './business-info-routing.module';

import { BusinessInfoPage } from './business-info.page';
import { ListingModule } from '../component/listing/listing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingModule,
    BusinessInfoPageRoutingModule
  ],
  declarations: [BusinessInfoPage]
})
export class BusinessInfoPageModule {}
