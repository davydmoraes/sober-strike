import { Component } from '@angular/core';
import { RankingService } from '../services/ranking.service';
import { ModalComponent } from '../shared/modal/modal.component';
import { ModalController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
closeModal() {
  this.modalOpen = false;
  this.loadRanking();
}
  constructor(private rankingService: RankingService,
    private userService: UserService
  ) {}

  ranking: any[] = [];
  orderedRankingList: any[] = [];

  ngOnInit() {
    this.loadRanking();
  }

  
  modalOpen: boolean = false;

  openModal() {
    this.modalOpen = true;
  }
  
  loadRanking() {
    this.userService.getUserFriends().subscribe((data: any) => {
      this.ranking = data;
      this.orderedRankingList = this.ranking.sort((a, b) => b.days_without_drinking - a.days_without_drinking);
    });
  }

  updateSoberRanking(isSober: boolean) {
    this.rankingService.updateSoberRanking(isSober).subscribe(() => {
      // Optionally reload the ranking after updating
      this.loadRanking();
    });
  }

}
