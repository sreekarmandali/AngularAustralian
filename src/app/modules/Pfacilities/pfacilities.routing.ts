import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PfacilitiesComponent } from './page/pfacilities/pfacilities.component';
import { ToiletsComponent } from './page/toilets/toilets.component';
import {NoAuthGuard} from '../../core/gaurd/no-auth.guard';
import { DirectionsComponent } from '@modules/Toilets/details/page/directions/directions.component';
import { PhotosComponent } from '@modules/Toilets/details/page/photos/photos.component';
import { ReviewsComponent } from '@modules/Toilets/details/page/reviews/reviews.component';
import { ToiletGuideComponent } from './page/toilet-guide/toilet-guide.component';


const routes: Routes = [
  {
    path: '',
    component: PfacilitiesComponent,
    pathMatch:'full'
  },
  {
  path:'toiletGuide',
  component:ToiletGuideComponent
  },
  {
  path: 'toilets',
  component: ToiletsComponent,
  canActivate: [NoAuthGuard],
  children: [
    {
      path: 'directions',
      component:DirectionsComponent
    },
    {
      path: 'photos',
      component:PhotosComponent
    },
    {
    path: 'reviews',
    loadChildren: () =>
    import('@modules/reviews/reviews.module').then(m => m.ReviewsModule)
    }
  ]

  },
  


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PfacilitiesRoutingModule { }
