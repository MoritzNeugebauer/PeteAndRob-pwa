import { Component, OnInit } from '@angular/core';
import { InstaService } from '../service/insta.service';
import { InstaFeedData } from '../../../shared/models/instaFeedData';
import { DataService } from '../../../shared/data-service/data.service';
import { HeaderService } from '../../modules/header/service/header.service';

@Component({
  selector: 'par-insta-feed',
  templateUrl: './insta-feed.component.html',
  styleUrls: ['./insta-feed.component.scss']
})
export class InstaFeedComponent implements OnInit {
  public instaFeed: InstaFeedData[];
  public isLoading: boolean;
  public errorLoading: boolean;
  public instaItem: InstaFeedData;

  constructor(private headerService:HeaderService, private instaService: InstaService, private data: DataService) { }

  ngOnInit() {
    this.headerService.setTitle('Instagram');

    if(typeof this.instaFeed === 'undefined') {
      this.isLoading = true;
      this.errorLoading = false;
      this.instaService.getInstaFeed()
        .subscribe(data => {
          this.isLoading = false;
          this.errorLoading = false;
          this.instaFeed = data.data;
          this.data.changeInstaFeed(this.instaFeed);
        }, error => {
          this.isLoading = false;
          this.errorLoading = true;
        });
      
      // listens to changes in instaItem
      this.data.currentInstaItemMessage.subscribe(instaItem => this.instaItem = instaItem);
    }
  }

  goToInsta() {
    window.location.href='https://instagram.com/peteandrob/';
  }

}
