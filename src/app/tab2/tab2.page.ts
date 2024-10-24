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
  ranking: Array<{ name: string; daysSober: number; positionOnRanking: number }> = [];
  orderedRankingList: any[] = [];
  rankingList: any[] = [
    {
      picture: "assets/default_profile_pic.png",
      name: "Tom Costa",
      daysSober: 45,
      positionOnRanking: 5
    },
    {
      picture: "assets/default_profile_pic.png",
      name: "Tom Costa",
      daysSober: 45,
      positionOnRanking: 7
    },
    {
      picture: "assets/default_profile_pic.png",
      name: "Tom Costa",
      daysSober: 45,
      positionOnRanking: 4
    },
    {
      picture: "assets/default_profile_pic.png",
      name: "Tom Costa",
      daysSober: 45,
      positionOnRanking: 1
    },
    {
      picture: "assets/default_profile_pic.png",
      name: "Tom Costa",
      daysSober: 45,
      positionOnRanking: 5
    },
    {
      picture: "assets/default_profile_pic.png",
      name: "Tom Costa",
      daysSober: 45,
      positionOnRanking: 7
    },
    {
      picture: "assets/default_profile_pic.png",
      name: "Tom Costa",
      daysSober: 45,
      positionOnRanking: 4
    },
    {
      picture: "assets/default_profile_pic.png",
      name: "Tom Costa",
      daysSober: 45,
      positionOnRanking: 1
    },
    {
      picture: "assets/default_profile_pic.png",
      name: "Tom Costa",
      daysSober: 45,
      positionOnRanking: 2
    }
  ];

  constructor(private rankingService: RankingService,
    private modalController: ModalController,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loadRanking();
    this.orderedRankingList = this.rankingList.sort((a, b) => a.positionOnRanking - b.positionOnRanking);
  }

  
  modalOpen: boolean = false;

  openModal() {
    this.modalOpen = true;
  }
  
  loadRanking() {
    this.userService.getUserRanking().subscribe((data: any) => {
      this.ranking = data;
      this.orderedRankingList = this.rankingList.sort((a, b) => a.positionOnRanking - b.positionOnRanking);
    });
  }

  updateSoberRanking(isSober: boolean) {
    this.rankingService.updateSoberRanking(isSober).subscribe(() => {
      // Optionally reload the ranking after updating
      this.loadRanking();
    });
  }

}
