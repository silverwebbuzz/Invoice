import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ListingComponent } from './listing.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [ListingComponent],
    exports: [ListingComponent]
})
export class ListingModule {}
