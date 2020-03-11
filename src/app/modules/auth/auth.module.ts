import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './page/login/login.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth.routing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    LoginComponent
    
   ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    
    AuthRoutingModule,
  ],
  
})
export class AuthModule { }
