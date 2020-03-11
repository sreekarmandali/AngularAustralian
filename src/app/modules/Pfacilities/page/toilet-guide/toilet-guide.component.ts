import { Component, OnInit } from '@angular/core';
import{FETCH_TOILETS,SET_TOILETS,GET_TOILETS_URL_PATH} from '../../../../core/constants/constants';
import{ApiService} from '../../../../core/services/api.sevice';
import { Observable ,  throwError } from 'rxjs';

@Component({
  selector: 'app-toilet-guide',
  templateUrl: './toilet-guide.component.html',
  styleUrls: ['./toilet-guide.component.css']
})
export class ToiletGuideComponent implements OnInit {
  toilets=[];
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this[FETCH_TOILETS]();
  }
  [FETCH_TOILETS](){
    this.apiService.get(GET_TOILETS_URL_PATH).subscribe(data=>this[SET_TOILETS](data),err => throwError(err));
   
  }
  [SET_TOILETS](data){
    this.toilets=data;
  }
}
