import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@app/core.module';
import { SharedModule } from '@shared/shared.module';
import { AuthModule } from '@modules/auth/auth.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeLayoutComponent} from './layout/home-layout/home-layout.component';

import {PfacilitiesModule} from '@modules/Pfacilities/pfacilities.module';
import {ToiletModule} from '@modules/Toilets/toilets.module' ;



@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent
    
    
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    SharedModule,
    PfacilitiesModule,
    ToiletModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
