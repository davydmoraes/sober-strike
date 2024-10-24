import { Component } from '@angular/core';
import { RankingService } from '../services/ranking.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private rankingService: RankingService
  ) {}

  sober(){
    this.rankingService.incrementDays().subscribe(result => {
      console.log("sóbrio!", result);
    });
  }

  hangover(){

  }

}
