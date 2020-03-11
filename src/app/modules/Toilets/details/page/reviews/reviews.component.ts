import { Component, OnInit } from '@angular/core';
import{ApiService} from '../../../../../core/services/api.sevice'
import {GET_REVIEWS_URL_PATH,POST_REVIEWS_URL_PATH,SET_REVIEWS} from '../../../../../core/constants/constants'
import { Observable ,  throwError } from 'rxjs';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  


  constructor() {
    

   }

  ngOnInit(): void {
    
   
  }
  

}
