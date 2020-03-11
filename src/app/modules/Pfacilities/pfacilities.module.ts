import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PfacilitiesComponent } from './page/pfacilities/pfacilities.component';
import { SharedModule } from '@shared/shared.module';

import { PfacilitiesRoutingModule } from './pfacilities.routing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToiletsComponent } from './page/toilets/toilets.component';
import{ToiletGuideComponent} from './page/toilet-guide/toilet-guide.component';






@NgModule({
  declarations: [
    PfacilitiesComponent,
    ToiletsComponent,
    ToiletGuideComponent
    
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    PfacilitiesRoutingModule,
  ],

})
export class PfacilitiesModule { }
