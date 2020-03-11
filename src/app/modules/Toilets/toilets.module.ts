import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PhotosComponent } from './details/page/photos/photos.component';
import { ReviewsComponent } from './details/page/reviews/reviews.component';
import { DirectionsComponent } from './details/page/directions/directions.component';
import {ToiletsRoutingModule} from './toilets.routing';






@NgModule({
  declarations: [
   PhotosComponent,
   ReviewsComponent,
   DirectionsComponent,
   
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    ToiletsRoutingModule
   
  ],

})
export class ToiletModule { }
