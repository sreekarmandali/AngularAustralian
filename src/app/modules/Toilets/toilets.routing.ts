import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { DirectionsComponent } from './details/page/directions/directions.component';
import { PhotosComponent } from './details/page/photos/photos.component';
import { ReviewsComponent } from './details/page/reviews/reviews.component';


const routes: Routes = [
 
  {
    path: 'directions',
    component: DirectionsComponent,
    
  },
  {
  path: 'photos',
  component: PhotosComponent
  
  },
  {
    path: 'reviews',
    component: ReviewsComponent
    
}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToiletsRoutingModule { }
