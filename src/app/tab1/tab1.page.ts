import { Component } from '@angular/core';
import { RankingService } from '../services/ranking.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  days_without_drinking: number = 0;

  constructor(
    private rankingService: RankingService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getUserRanking().subscribe((result: any) => {
        this.days_without_drinking = result.days_without_drinking;
      });
      }

  sober(){
    this.rankingService.updateSoberRanking(false).subscribe((result: any) => {
      this.days_without_drinking = result.days_without_drinking;
    });
  }

  hangover(){
    this.rankingService.updateSoberRanking(true).subscribe((result: any) => {
      this.days_without_drinking = result.days_without_drinking;
    });
  }
}
