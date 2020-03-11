import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HeaderComponent} from '@shared/component/header/header.component';


import { ControlMessagesComponent } from './component/control-messages/control-messages.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule

   
  ],
  declarations: [ControlMessagesComponent,HeaderComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ControlMessagesComponent,
    HeaderComponent
    
    

   ]
})
export class SharedModule {}
