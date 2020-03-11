import { Component, OnInit } from '@angular/core';
import{ApiService} from '../../../../core/services/api.sevice';
import {GET_REVIEWS_URL_PATH,POST_REVIEWS_URL_PATH,SET_REVIEWS,ADD_REVIEWS, LOAD_REVIEWS,RESET_REVIEWS} from '../../../../core/constants/constants'
import { Observable ,  throwError } from 'rxjs';

@Component({
  selector: 'app-reward-points',
  templateUrl: './reward-points.component.html',
  styleUrls: ['./reward-points.component.css']
})
export class RewardPointsComponent implements OnInit {

  review= {
    userName:"sreekar",
    rating: '',
    reviewComment:''
};
reviews:[];

  constructor(private apiService:ApiService) {
    

   }

  ngOnInit(): void {
    this[LOAD_REVIEWS]();
  }
  [LOAD_REVIEWS](){
    this.apiService.get(GET_REVIEWS_URL_PATH).subscribe(data=>this[SET_REVIEWS](data),err => throwError(err));
   
  }
  [SET_REVIEWS](data):void{
this.reviews=data;
  }
  [ADD_REVIEWS](data):void{
    this.apiService.post(POST_REVIEWS_URL_PATH,data).subscribe((data) => {
      if (data.message == 'Successfully added the review.'){
        this[RESET_REVIEWS]();
      this[LOAD_REVIEWS]();
      
    }

    },err => throwError(err));
   

  }
  arrayOne(n: number): any[] {
    return Array(n);
  }
  [RESET_REVIEWS]():void{
    this.review= {
      userName:"sreekar",
      rating: '',
      reviewComment:''
  };

  }
}
