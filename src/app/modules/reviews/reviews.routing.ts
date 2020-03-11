import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NoAuthGuard} from '../../core/gaurd/no-auth.guard';
import { ProblemReviewComponent } from './page/problem-review/problem-review.component';
import { RewardPointsComponent } from './page/reward-points/reward-points.component';
import { ReviewsComponent } from '@modules/Toilets/details/page/reviews/reviews.component';
const routes: Routes = [
  {
    path: '',
    component: ReviewsComponent,
    pathMatch:'full'
  },
  {
  path: 'ProblemReview',
  component: ProblemReviewComponent,
  canActivate: [NoAuthGuard]
  },
  {
    path: 'RewardPoints',
    component: RewardPointsComponent,
    canActivate: [NoAuthGuard]
}
  


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewRoutingModule { }
