import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { NoAuthGuard } from './gaurd/no-auth.guard';
import { throwIfAlreadyLoaded } from './gaurd/module-import.guard';

import { TokenInterceptor } from './interceptor/token.interceptor';
import{ApiService} from './services/api.sevice';


@NgModule({
  imports: [
    HttpClientModule,
    
  ],
  providers: [
    
    NoAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    ApiService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
