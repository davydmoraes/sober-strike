import { Component } from '@angular/core';
import { RankingService } from '../services/ranking.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  ranking: Array<{ name: string; daysSober: number; positionOnRanking: number }> = [];

  constructor(private rankingService: RankingService) {}

  ngOnInit() {
    this.loadRanking();
  }

  loadRanking() {
    this.rankingService.getRanking().subscribe((data: any) => {
      this.ranking = data;
    });
  }

  updateSoberRanking(isSober: boolean) {
    this.rankingService.updateSoberRanking(isSober).subscribe(() => {
      // Optionally reload the ranking after updating
      this.loadRanking();
    });
  }

}
