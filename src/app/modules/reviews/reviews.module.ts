import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ProblemReviewComponent} from '@modules/reviews/page/problem-review/problem-review.component';
import{RewardPointsComponent} from '@modules/reviews/page/reward-points/reward-points.component';
import{ReviewRoutingModule} from './reviews.routing'






@NgModule({
  declarations: [
    RewardPointsComponent,
    ProblemReviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    ReviewRoutingModule
   
  ],

})
export class ReviewsModule { }
